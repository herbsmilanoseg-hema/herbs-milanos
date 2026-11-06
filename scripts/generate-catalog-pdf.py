#!/usr/bin/env python3
"""
Herbs Milanos — Wholesale Product Catalog PDF Generator (English only)

Generates a professional B2B catalog PDF with:
  • Cover page (logo + tagline + contact info)
  • Table of contents
  • 9 product family sections
  • 89 product entries (2-column layout, brief + key specs)
  • Company info + contact page

Output: download/herbs-milanos-catalog-english.pdf
"""

import re
import sys
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm, cm
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    PageBreak,
    Table,
    TableStyle,
    Image as RLImage,
    KeepTogether,
    NextPageTemplate,
    PageTemplate,
    Frame,
    BaseDocTemplate,
    Flowable,
)
from reportlab.pdfgen import canvas

# ─── Brand palette ─────────────────────────────────────────────────────────
GREEN_DARK = colors.HexColor("#174c35")  # primary brand green
GREEN_LIME = colors.HexColor("#95b858")  # accent
CREAM = colors.HexColor("#f8f7ef")        # background
GOLD = colors.HexColor("#c29a59")         # accent for headings
INK = colors.HexColor("#253328")         # body text
MUTED = colors.HexColor("#7a857c")        # secondary text

# ─── Paths ──────────────────────────────────────────────────────────────────
PROJECT_ROOT = Path("/home/z/my-project")
CATALOG_TS = PROJECT_ROOT / "src" / "data" / "catalog.ts"
PRODUCTS_TS = PROJECT_ROOT / "src" / "data" / "products.ts"
SITE_TS = PROJECT_ROOT / "src" / "data" / "site.ts"
LOGO_SVG = PROJECT_ROOT / "public" / "logo.svg"
HERO_IMG = PROJECT_ROOT / "public" / "hero-welcome.jpg"
OUTPUT_PDF = PROJECT_ROOT / "download" / "herbs-milanos-catalog-english.pdf"

# Page geometry
PAGE_W, PAGE_H = A4
MARGIN = 18 * mm

# ─── Parse catalog.ts (TypeScript → Python dict) ───────────────────────────
def parse_catalog():
    """Extract products from catalog.ts using a simpler, more reliable approach.

    Strategy: find each top-level object that has an `id:` field, then
    extract fields by name (each field is `key: value` on its own line or
    inline). Arrays use `key: [...,...]`.
    """
    src = CATALOG_TS.read_text(encoding="utf-8")
    # Strip block comments
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.DOTALL)
    src = re.sub(r"//.*", "", src)

    # Find all top-level product objects: { id: "..." ... },
    # Match from one `{ id:` to the matching `}` at the same depth.
    products = []
    i = 0
    while True:
        # Find next `{ id:`
        m = re.search(r'\{\s*id:\s*"([^"]+)"', src[i:])
        if not m:
            break
        start = i + m.start()
        product_id = m.group(1)
        # Find matching close brace (track depth)
        depth = 1
        j = start + 1
        while j < len(src) and depth > 0:
            if src[j] == "{":
                depth += 1
            elif src[j] == "}":
                depth -= 1
            j += 1
        body = src[start:j]

        # Extract fields
        def get_str(key):
            m = re.search(rf'{key}:\s*"((?:[^"\\]|\\.)*)"', body)
            return m.group(1).replace('\\"', '"').replace("\\'", "'") if m else ""

        def get_arr(key):
            m = re.search(rf'{key}:\s*\[([^\]]*)\]', body)
            if not m:
                return []
            return [s.strip().strip('"') for s in m.group(1).split(",") if s.strip()]

        products.append({
            "id": product_id,
            "name": get_str("name"),
            "latinName": get_str("latinName"),
            "family": get_str("family"),
            "brief": get_str("brief"),
            "image": get_str("image"),
            "forms": get_arr("forms"),
            "grades": get_arr("grades"),
            "origin": get_str("origin"),
            "harvestMethod": get_str("harvestMethod"),
            "season": get_str("season"),
            "moq": get_str("moq"),
            "packing": get_str("packing"),
            "purity": get_str("purity"),
            "moisture": get_str("moisture"),
            "volatileOil": get_str("volatileOil"),
            "foreignOrganic": get_str("foreignOrganic"),
            "foreignInorganic": get_str("foreignInorganic"),
            "appearance": get_str("appearance"),
            "color": get_str("color"),
            "shelfLife": get_str("shelfLife"),
        })
        i = j

    return products


def parse_families():
    """Extract family id → display name from products.ts"""
    src = PRODUCTS_TS.read_text(encoding="utf-8")
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.DOTALL)
    # Match: id: "xxx", name: "yyy"
    pairs = re.findall(r'id:\s*"([a-z-]+)"\s*,\s*name:\s*"([^"]+)"', src)
    return {fid: name for fid, name in pairs}


def parse_site_contact():
    """Extract contact info from site.ts"""
    src = SITE_TS.read_text(encoding="utf-8")
    contact = {}
    for key in ["email", "phone", "whatsapp", "whatsappLink", "address"]:
        m = re.search(rf'{key}:\s*"([^"]+)"', src)
        if m:
            contact[key] = m.group(1)
    return contact


# ─── Custom Flowables ───────────────────────────────────────────────────────
class HorizontalLine(Flowable):
    """Thin horizontal line."""
    def __init__(self, width, thickness=0.5, color=GREEN_LIME):
        super().__init__()
        self.width = width
        self.thickness = thickness
        self.color = color

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.thickness)
        self.canv.line(0, 0, self.width, 0)


# ─── Page templates ─────────────────────────────────────────────────────────
def cover_page(canvas_obj, doc):
    """Cover page background."""
    canvas_obj.saveState()
    # Cream background
    canvas_obj.setFillColor(CREAM)
    canvas_obj.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # Dark green band on top
    canvas_obj.setFillColor(GREEN_DARK)
    canvas_obj.rect(0, PAGE_H - 80*mm, PAGE_W, 80*mm, fill=1, stroke=0)
    # Gold accent line
    canvas_obj.setFillColor(GOLD)
    canvas_obj.rect(0, PAGE_H - 82*mm, PAGE_W, 2*mm, fill=1, stroke=0)
    canvas_obj.restoreState()


def content_page(canvas_obj, doc):
    """Content page: header + footer on every page."""
    canvas_obj.saveState()
    # Header line
    canvas_obj.setStrokeColor(GREEN_LIME)
    canvas_obj.setLineWidth(0.5)
    canvas_obj.line(MARGIN, PAGE_H - 12*mm, PAGE_W - MARGIN, PAGE_H - 12*mm)
    # Header text (left = brand, right = section)
    canvas_obj.setFont("Helvetica-Bold", 8)
    canvas_obj.setFillColor(GREEN_DARK)
    canvas_obj.drawString(MARGIN, PAGE_H - 9*mm, "HERBS MILANOS")
    canvas_obj.setFont("Helvetica", 8)
    canvas_obj.setFillColor(MUTED)
    canvas_obj.drawRightString(PAGE_W - MARGIN, PAGE_H - 9*mm,
                                "Wholesale Catalog 2026")
    # Footer line
    canvas_obj.setStrokeColor(GREEN_LIME)
    canvas_obj.line(MARGIN, 14*mm, PAGE_W - MARGIN, 14*mm)
    # Footer text
    canvas_obj.setFont("Helvetica", 8)
    canvas_obj.setFillColor(MUTED)
    canvas_obj.drawString(MARGIN, 9*mm, "herbs.milanos.eg@gmail.com  ·  +20 122 621 1624")
    canvas_obj.drawRightString(PAGE_W - MARGIN, 9*mm, f"Page {doc.page}")
    canvas_obj.restoreState()


# ─── Build PDF ──────────────────────────────────────────────────────────────
def build_pdf():
    products = parse_catalog()
    families = parse_families()
    contact = parse_site_contact()

    print(f"✓ Parsed {len(products)} products from catalog.ts")
    print(f"✓ Parsed {len(families)} families from products.ts")
    print(f"✓ Contact info: {contact.get('email', 'N/A')}")
    print()

    # Group products by family
    by_family = {}
    for p in products:
        by_family.setdefault(p["family"], []).append(p)

    # Order families as in products.ts
    family_order = [
        "culinary-herbs",
        "tea-herbs",
        "medicinal-herbs",
        "flowers",
        "aromatic-seeds",
        "functional-seeds",
        "vegetables-others",
        "essential-oils",
        "vegetable-oils",
    ]

    # ─── Document setup ──────────────────────────────────────────────────
    doc = BaseDocTemplate(
        str(OUTPUT_PDF),
        pagesize=A4,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=20*mm,
        bottomMargin=20*mm,
        title="Herbs Milanos — Wholesale Catalog",
        author="Herbs Milanos",
        subject="Egyptian botanicals wholesale catalog",
    )

    cover_frame = Frame(0, 0, PAGE_W, PAGE_H, id="cover")
    content_frame = Frame(
        MARGIN, 18*mm,
        PAGE_W - 2*MARGIN, PAGE_H - 40*mm,
        id="content"
    )

    doc.addPageTemplates([
        PageTemplate(id="cover", frames=[cover_frame], onPage=cover_page),
        PageTemplate(id="content", frames=[content_frame], onPage=content_page),
    ])

    # ─── Styles ──────────────────────────────────────────────────────────
    styles = getSampleStyleSheet()
    style_cover_title = ParagraphStyle(
        "CoverTitle", parent=styles["Title"],
        fontName="Helvetica-Bold", fontSize=36, textColor=colors.white,
        alignment=TA_CENTER, leading=42, spaceAfter=12,
    )
    style_cover_sub = ParagraphStyle(
        "CoverSub", parent=styles["Normal"],
        fontName="Helvetica", fontSize=14, textColor=colors.white,
        alignment=TA_CENTER, leading=18, spaceAfter=6,
    )
    style_cover_caption = ParagraphStyle(
        "CoverCap", parent=styles["Normal"],
        fontName="Helvetica-Oblique", fontSize=10, textColor=colors.white,
        alignment=TA_CENTER, leading=14,
    )
    style_section_h1 = ParagraphStyle(
        "SectionH1", parent=styles["Heading1"],
        fontName="Helvetica-Bold", fontSize=22, textColor=GREEN_DARK,
        alignment=TA_LEFT, leading=26, spaceBefore=8, spaceAfter=4,
    )
    style_section_intro = ParagraphStyle(
        "SectionIntro", parent=styles["Normal"],
        fontName="Helvetica-Oblique", fontSize=10, textColor=MUTED,
        alignment=TA_LEFT, leading=14, spaceAfter=10,
    )
    style_product_name = ParagraphStyle(
        "ProductName", parent=styles["Heading3"],
        fontName="Helvetica-Bold", fontSize=11, textColor=GREEN_DARK,
        alignment=TA_LEFT, leading=13, spaceBefore=4, spaceAfter=1,
    )
    style_latin = ParagraphStyle(
        "Latin", parent=styles["Normal"],
        fontName="Helvetica-Oblique", fontSize=8.5, textColor=MUTED,
        alignment=TA_LEFT, leading=11, spaceAfter=2,
    )
    style_brief = ParagraphStyle(
        "Brief", parent=styles["Normal"],
        fontName="Helvetica", fontSize=8.5, textColor=INK,
        alignment=TA_LEFT, leading=11, spaceAfter=4,
    )
    style_spec_label = ParagraphStyle(
        "SpecLabel", parent=styles["Normal"],
        fontName="Helvetica-Bold", fontSize=7, textColor=MUTED,
        alignment=TA_LEFT, leading=9,
    )
    style_spec_value = ParagraphStyle(
        "SpecValue", parent=styles["Normal"],
        fontName="Helvetica", fontSize=7.5, textColor=INK,
        alignment=TA_LEFT, leading=9,
    )
    style_toc_item = ParagraphStyle(
        "TOC", parent=styles["Normal"],
        fontName="Helvetica", fontSize=10, textColor=INK,
        alignment=TA_LEFT, leading=14, leftIndent=12,
    )
    style_toc_family = ParagraphStyle(
        "TOCFamily", parent=styles["Normal"],
        fontName="Helvetica-Bold", fontSize=11, textColor=GREEN_DARK,
        alignment=TA_LEFT, leading=14, spaceAfter=2,
    )
    style_contact = ParagraphStyle(
        "Contact", parent=styles["Normal"],
        fontName="Helvetica", fontSize=11, textColor=INK,
        alignment=TA_CENTER, leading=15, spaceAfter=4,
    )

    # ─── Cover page ──────────────────────────────────────────────────────
    story = []
    story.append(Spacer(1, 60*mm))
    story.append(Paragraph("HERBS MILANOS", style_cover_title))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph("Wholesale Catalog", style_cover_sub))
    story.append(Paragraph(f"{len(products)} Egyptian Botanicals · 9 Product Families",
                            style_cover_caption))
    story.append(Spacer(1, 8*mm))
    # Gold divider
    story.append(HorizontalLine(40*mm, 1.5, GOLD))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph(
        "Premium Egyptian herbs, spices, seeds, flowers &amp; botanicals — "
        "factory-direct to your container.",
        style_cover_caption
    ))
    story.append(Spacer(1, 70*mm))
    # Contact on cover (bottom)
    cover_contact_style = ParagraphStyle(
        "CoverContact", parent=styles["Normal"],
        fontName="Helvetica", fontSize=9, textColor=colors.white,
        alignment=TA_CENTER, leading=12,
    )
    story.append(Paragraph("Beni Suef, Egypt  ·  herbs.milanos.eg@gmail.com  ·  +20 122 621 1624",
                            cover_contact_style))
    story.append(Paragraph("ISO 9001:2015 · ISO 22000:2018 · HACCP",
                            cover_contact_style))

    story.append(NextPageTemplate("content"))
    story.append(PageBreak())

    # ─── Table of contents ──────────────────────────────────────────────
    story.append(Paragraph("Table of Contents", style_section_h1))
    story.append(HorizontalLine(PAGE_W - 2*MARGIN, 1, GREEN_LIME))
    story.append(Spacer(1, 6*mm))
    story.append(Paragraph(
        "Herbs Milanos is an Egyptian manufacturer and bulk exporter of aromatic plants, "
        "herbs, flowers, seeds, spices, essential oils and vegetable oils. Founded in 2000, "
        "we own our farms in Beni Suef and operate under ISO 22000:2018, ISO 9001:2015 and "
        "HACCP — supplying B2B buyers in 30+ countries.",
        style_section_intro
    ))
    story.append(Spacer(1, 4*mm))

    # Family counts
    for fid in family_order:
        if fid in by_family:
            name = families.get(fid, fid)
            count = len(by_family[fid])
            story.append(Paragraph(f"{name}  ({count} products)", style_toc_family))

    story.append(Spacer(1, 8*mm))
    story.append(HorizontalLine(PAGE_W - 2*MARGIN, 0.5, GREEN_LIME))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph(
        "<b>How to use this catalog:</b> Each product entry includes a one-line brief, "
        "available forms (whole / cut / TBC / powder / etc.), grades, country of origin, "
        "harvest season, MOQ, packing, purity, moisture, volatile oil content and shelf life. "
        "For COA (Certificate of Analysis) per lot, please request via the contact form on "
        "our website or by email.",
        style_brief
    ))
    story.append(PageBreak())

    # ─── Products by family ─────────────────────────────────────────────
    for fid in family_order:
        if fid not in by_family:
            continue
        family_name = families.get(fid, fid)
        family_products = by_family[fid]

        # Section header
        story.append(Paragraph(family_name, style_section_h1))
        story.append(HorizontalLine(PAGE_W - 2*MARGIN, 1, GREEN_LIME))
        story.append(Paragraph(
            f"{len(family_products)} products in this family.",
            style_section_intro
        ))

        # Build 2-column table of products
        # Each cell: name, latin, brief, key specs (origin, MOQ, purity, forms)
        col_w = (PAGE_W - 2*MARGIN - 6*mm) / 2  # 2 cols with 6mm gutter

        # Render products one per row in 2-column layout, but allow page breaks
        # Use a list of [left_cell_flows, right_cell_flows] rows.
        rows = []
        current_row = []
        for p in family_products:
            cell_flows = [
                Paragraph(p["name"], style_product_name),
                Paragraph(f"<i>{p['latinName']}</i>", style_latin),
                Paragraph(p["brief"], style_brief),
            ]

            # Specs table (compact 2-col)
            spec_rows = []
            spec_data = [
                ("Origin", p["origin"] or "Egypt"),
                ("MOQ", p["moq"]),
                ("Purity", p["purity"]),
                ("Forms", ", ".join(p["forms"])),
                ("Season", p["season"]),
                ("Shelf life", p["shelfLife"]),
            ]
            for label, value in spec_data:
                if value and value != "—":
                    spec_rows.append([
                        Paragraph(label, style_spec_label),
                        Paragraph(value, style_spec_value),
                    ])
            if spec_rows:
                spec_table = Table(
                    spec_rows,
                    colWidths=[18*mm, col_w - 22*mm],
                    hAlign="LEFT",
                )
                spec_table.setStyle(TableStyle([
                    ("VALIGN", (0,0), (-1,-1), "TOP"),
                    ("LEFTPADDING", (0,0), (-1,-1), 0),
                    ("RIGHTPADDING", (0,0), (-1,-1), 2),
                    ("TOPPADDING", (0,0), (-1,-1), 1),
                    ("BOTTOMPADDING", (0,0), (-1,-1), 1),
                    ("LINEBELOW", (0,0), (-1,-1), 0.25, colors.HexColor("#e2e2d5")),
                ]))
                cell_flows.append(spec_table)

            cell_flows.append(Spacer(1, 4*mm))
            current_row.append(cell_flows)
            if len(current_row) == 2:
                rows.append(current_row)
                current_row = []

        # Trailing single cell
        if current_row:
            current_row.append("")
            rows.append(current_row)

        # Render as a list of 2-col tables (one per row), so each row can break
        # across pages independently.
        for row in rows:
            outer = Table(
                [row],
                colWidths=[col_w, col_w],
                hAlign="CENTER",
            )
            outer.setStyle(TableStyle([
                ("VALIGN", (0,0), (-1,-1), "TOP"),
                ("LEFTPADDING", (0,0), (0,-1), 0),
                ("RIGHTPADDING", (0,0), (0,-1), 3*mm),
                ("LEFTPADDING", (1,0), (1,-1), 3*mm),
                ("RIGHTPADDING", (1,0), (1,-1), 0),
                ("TOPPADDING", (0,0), (-1,-1), 0),
                ("BOTTOMPADDING", (0,0), (-1,-1), 0),
            ]))
            # Split cell_flows across multiple flowables to allow page breaks
            # Use KeepTogether only if the cell is small; otherwise let it flow.
            # Since each row has at most 2 product cells, and each product fits
            # in ~6cm of vertical space, this should page-break cleanly.
            try:
                story.append(outer)
            except Exception:
                # Fallback: append each cell's flowables individually
                for cell in row:
                    if isinstance(cell, list):
                        for f in cell:
                            story.append(f)
            # Page break between families (handled by PageBreak at end of family loop)
        story.append(PageBreak())

    # ─── Company info + contact page ────────────────────────────────────
    story.append(Paragraph("About Herbs Milanos", style_section_h1))
    story.append(HorizontalLine(PAGE_W - 2*MARGIN, 1, GREEN_LIME))
    story.append(Spacer(1, 6*mm))
    story.append(Paragraph(
        "Herbs Milanos is an Egyptian botanical ingredients manufacturer and exporter "
        "established in 2000. We supply herbs, flowers, seeds, spices, essential oils and "
        "vegetable oils to customers in 30+ countries.",
        style_brief
    ))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph(
        "Our commercial office is in Cairo, with processing facilities close to the farms "
        "in Beni Suef, Fayoum, Minya and Assiut governorates — the heart of Egypt's "
        "medicinal and aromatic plant production.",
        style_brief
    ))
    story.append(Spacer(1, 8*mm))

    # Certifications
    story.append(Paragraph("Certifications", style_product_name))
    certs = [
        ("ISO 9001:2015", "Quality Management System"),
        ("ISO 22000:2018", "Food Safety Management System"),
        ("HACCP", "Hazard Analysis and Critical Control Points"),
    ]
    cert_data = [[
        Paragraph(f"<b>{name}</b>", style_spec_value),
        Paragraph(desc, style_spec_value),
    ] for name, desc in certs]
    cert_table = Table(cert_data, colWidths=[40*mm, PAGE_W - 2*MARGIN - 40*mm])
    cert_table.setStyle(TableStyle([
        ("VALIGN", (0,0), (-1,-1), "TOP"),
        ("LEFTPADDING", (0,0), (-1,-1), 0),
        ("TOPPADDING", (0,0), (-1,-1), 2),
        ("BOTTOMPADDING", (0,0), (-1,-1), 2),
        ("LINEBELOW", (0,0), (-1,-1), 0.25, colors.HexColor("#e2e2d5")),
    ]))
    story.append(cert_table)
    story.append(Spacer(1, 10*mm))

    # Trade terms
    story.append(Paragraph("Trade Terms", style_product_name))
    trade_data = [
        ["MOQ", "1 metric ton (MT) per item — mixed 20ft container accepted"],
        ["Incoterms", "FOB, CIF, CFR, EXW"],
        ["Ports", "Alexandria, Port Said, Damietta"],
        ["Payment", "30% advance (T/T), 70% against shipping documents"],
        ["Packing", "25 kg multi-wall paper bags + inner PE liner, cartons, or private label"],
        ["Lead time", "7–15 days from order confirmation"],
        ["Documentation", "COA, Phytosanitary, Certificate of Origin — included with every shipment"],
    ]
    trade_rows = [[
        Paragraph(f"<b>{k}</b>", style_spec_value),
        Paragraph(v, style_spec_value),
    ] for k, v in trade_data]
    trade_table = Table(trade_rows, colWidths=[35*mm, PAGE_W - 2*MARGIN - 35*mm])
    trade_table.setStyle(TableStyle([
        ("VALIGN", (0,0), (-1,-1), "TOP"),
        ("LEFTPADDING", (0,0), (-1,-1), 0),
        ("TOPPADDING", (0,0), (-1,-1), 3),
        ("BOTTOMPADDING", (0,0), (-1,-1), 3),
        ("LINEBELOW", (0,0), (-1,-1), 0.25, colors.HexColor("#e2e2d5")),
    ]))
    story.append(trade_table)
    story.append(Spacer(1, 12*mm))

    # Contact
    story.append(HorizontalLine(PAGE_W - 2*MARGIN, 1.5, GOLD))
    story.append(Spacer(1, 6*mm))
    story.append(Paragraph("<b>Get a Quote in 24 Hours</b>", style_contact))
    story.append(Spacer(1, 3*mm))
    story.append(Paragraph("Herbs Milanos — Egyptian Botanicals Exporter", style_contact))
    story.append(Paragraph(f"Email: {contact.get('email', 'herbs.milanos.eg@gmail.com')}", style_contact))
    story.append(Paragraph(f"Phone / WhatsApp: {contact.get('phone', '+20 122 621 1624')}", style_contact))
    story.append(Paragraph(f"Address: {contact.get('address', 'Beni Suef, Egypt')}", style_contact))
    story.append(Paragraph("Hours: Mon–Sat, 9:00 – 17:00 (EET)", style_contact))
    story.append(Spacer(1, 6*mm))
    story.append(Paragraph(
        "<i>This catalog is for B2B wholesale enquiries only. "
        "Specifications subject to change without notice.</i>",
        ParagraphStyle("foot", parent=style_brief, fontSize=8,
                        textColor=MUTED, alignment=TA_CENTER)
    ))

    # ─── Build ──────────────────────────────────────────────────────────
    doc.build(story)
    print(f"✓ PDF generated: {OUTPUT_PDF}")
    print(f"  Size: {OUTPUT_PDF.stat().st_size / 1024:.1f} KB")


if __name__ == "__main__":
    build_pdf()
