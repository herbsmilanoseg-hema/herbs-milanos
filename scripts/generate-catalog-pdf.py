#!/usr/bin/env python3
"""
Herbs Milanos — Wholesale Product Catalog (ONIC-style, enhanced)
English only.

Style:
  • Ivory background (#F7F5F0)
  • Company logo in header on every page
  • White rounded-corner product cards
  • Photo on top of each card (or company logo for oils)
  • Bold dark green product names
  • Italic latin names
  • Spec rows (Origin, Harvest, Forms, MOQ, Purity, Shelf life)
  • Green accents (#4a8b3f)
  • Footer band with page numbers + contact info
  • Last page: company info + certifications + trade terms
"""

import re
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer,
    PageBreak, Table, TableStyle, Image as RLImage, NextPageTemplate,
    HRFlowable, Flowable,
)

# ─── Brand palette ──────────────────────────────────────────────────────
BG_IVORY = colors.HexColor("#F7F5F0")
CARD_BG = colors.white
BORDER = colors.HexColor("#DDE5DA")
GREEN = colors.HexColor("#4a8b3f")
GREEN_DARK = colors.HexColor("#1E3A2A")
INK = colors.HexColor("#2B2B2B")
MUTED = colors.HexColor("#6B6B6B")
ICON_BG = colors.HexColor("#E4F0E0")
FOOTER_BG = colors.HexColor("#E8F1E0")
GOLD = colors.HexColor("#c29a59")

# ─── Paths ───────────────────────────────────────────────────────────────
PROJECT_ROOT = Path("/home/z/my-project")
CATALOG_TS = PROJECT_ROOT / "src" / "data" / "catalog.ts"
PRODUCTS_TS = PROJECT_ROOT / "src" / "data" / "products.ts"
LOGO_PATH = PROJECT_ROOT / "public" / "logo" / "header.png"
OUTPUT_PDF = PROJECT_ROOT / "download" / "herbs-milanos-catalog-english.pdf"

PAGE_W, PAGE_H = A4
MARGIN = 14 * mm

# ─── Parse catalog.ts ────────────────────────────────────────────────────
def parse_catalog():
    src = CATALOG_TS.read_text(encoding="utf-8")
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.DOTALL)
    src = re.sub(r"//.*", "", src)
    products = []
    i = 0
    while True:
        m = re.search(r'\{\s*id:\s*"([^"]+)"', src[i:])
        if not m: break
        start = i + m.start()
        product_id = m.group(1)
        depth = 1
        j = start + 1
        while j < len(src) and depth > 0:
            if src[j] == "{": depth += 1
            elif src[j] == "}": depth -= 1
            j += 1
        body = src[start:j]
        def get_str(key):
            m = re.search(rf'{key}:\s*"((?:[^"\\]|\\.)*)"', body)
            return m.group(1).replace('\\"', '"').replace("\\'", "'") if m else ""
        def get_arr(key):
            m = re.search(rf'{key}:\s*\[([^\]]*)\]', body)
            if not m: return []
            return [s.strip().strip('"') for s in m.group(1).split(",") if s.strip()]
        products.append({
            "id": product_id, "name": get_str("name"),
            "latinName": get_str("latinName"), "family": get_str("family"),
            "brief": get_str("brief"), "image": get_str("image"),
            "forms": get_arr("forms"), "origin": get_str("origin"),
            "season": get_str("season"), "moq": get_str("moq"),
            "purity": get_str("purity"), "shelfLife": get_str("shelfLife"),
        })
        i = j
    return products

def parse_families():
    src = PRODUCTS_TS.read_text(encoding="utf-8")
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.DOTALL)
    return dict(re.findall(r'id:\s*"([a-z-]+)"\s*,\s*name:\s*"([^"]+)"', src))

# ─── Prepare logo image for PDF ────────────────────────────────────────
def prepare_logo():
    """Return path to a logo image suitable for PDF embedding."""
    if LOGO_PATH.exists():
        try:
            from PIL import Image as PILImage
            pil = PILImage.open(LOGO_PATH)
            if pil.mode != "RGB":
                pil = pil.convert("RGB")
            tmp = Path("/tmp") / "catalog_logo.png"
            pil.save(tmp, "PNG")
            return str(tmp)
        except Exception:
            pass
    return None

LOGO_PDF_PATH = prepare_logo()

# ─── Page background with logo header ───────────────────────────────────
def page_bg(canvas_obj, doc):
    canvas_obj.saveState()
    # Ivory background
    canvas_obj.setFillColor(BG_IVORY)
    canvas_obj.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Header: logo (top-left) + company name (top-center/right)
    if LOGO_PDF_PATH:
        try:
            canvas_obj.drawImage(LOGO_PDF_PATH, MARGIN, PAGE_H - 18 * mm,
                                width=22 * mm, height=15 * mm,
                                preserveAspectRatio=True, mask='auto')
        except Exception:
            pass

    # Header text (right of logo)
    canvas_obj.setFillColor(GREEN_DARK)
    canvas_obj.setFont("Helvetica-Bold", 9)
    canvas_obj.drawString(MARGIN + 25 * mm, PAGE_H - 12 * mm, "HERBS MILANOS")
    canvas_obj.setFillColor(MUTED)
    canvas_obj.setFont("Helvetica", 7)
    canvas_obj.drawString(MARGIN + 25 * mm, PAGE_H - 16 * mm,
                         "Egyptian Botanicals Exporter  ·  Wholesale Catalog")

    # Header divider line
    canvas_obj.setStrokeColor(GREEN)
    canvas_obj.setLineWidth(0.5)
    canvas_obj.line(MARGIN, PAGE_H - 20 * mm, PAGE_W - MARGIN, PAGE_H - 20 * mm)

    # Footer band
    footer_h = 8 * mm
    canvas_obj.setFillColor(FOOTER_BG)
    canvas_obj.rect(0, 0, PAGE_W, footer_h, fill=1, stroke=0)
    canvas_obj.setFillColor(GREEN_DARK)
    canvas_obj.setFont("Helvetica", 7.5)
    canvas_obj.drawCentredString(PAGE_W / 2, 3 * mm,
        f"Herbs Milanos  ·  herbs.milanos.eg@gmail.com  ·  +20 122 621 1624  ·  Page {doc.page}")
    canvas_obj.restoreState()

# ─── Product Card ────────────────────────────────────────────────────────
class ProductCard(Flowable):
    def __init__(self, product, width, height=None):
        super().__init__()
        self.product = product
        self.width = width
        self.height = height or 64 * mm
        self._img_path = None
        self._is_oil = (product.get("image") == "/products/oil-symbolic.jpg")
        self._setup_image()

    def _setup_image(self):
        # For oils, use the company logo instead of placeholder
        if self._is_oil:
            if LOGO_PATH.exists():
                try:
                    from PIL import Image as PILImage
                    pil = PILImage.open(LOGO_PATH)
                    if pil.mode != "RGB":
                        pil = pil.convert("RGB")
                    tmp = Path("/tmp") / f"catcard_logo.png"
                    pil.thumbnail((200, 200), PILImage.LANCZOS)
                    pil.save(tmp, "PNG")
                    self._img_path = str(tmp)
                except Exception:
                    self._img_path = None
            return

        img_path = PROJECT_ROOT / "public" / self.product["image"].lstrip("/")
        if img_path.exists():
            try:
                from PIL import Image as PILImage
                pil = PILImage.open(img_path)
                if pil.mode != "RGB":
                    pil = pil.convert("RGB")
                pil.thumbnail((240, 240), PILImage.LANCZOS)
                tmp = Path("/tmp") / f"catcard_{self.product['id']}.jpg"
                pil.save(tmp, "JPEG", quality=85)
                self._img_path = str(tmp)
            except Exception:
                self._img_path = None

    def wrap(self, availWidth, availHeight):
        return self.width, self.height

    def draw(self):
        c = self.canv
        w, h = self.width, self.height
        # Card background
        c.setFillColor(CARD_BG)
        c.setStrokeColor(BORDER)
        c.setLineWidth(0.6)
        c.roundRect(0, 0, w, h, 3 * mm, fill=1, stroke=1)

        # Image area
        img_h = 26 * mm
        img_pad = 1.5 * mm
        img_w = w - 2 * img_pad
        if self._img_path:
            try:
                c.drawImage(self._img_path, img_pad, h - img_h - img_pad,
                            width=img_w, height=img_h,
                            preserveAspectRatio=True, mask='auto')
            except Exception:
                c.setFillColor(ICON_BG)
                c.rect(img_pad, h - img_h - img_pad, img_w, img_h, fill=1, stroke=0)
        else:
            c.setFillColor(ICON_BG)
            c.rect(img_pad, h - img_h - img_pad, img_w, img_h, fill=1, stroke=0)
            c.setFillColor(GREEN)
            c.setFont("Helvetica", 14)
            c.drawCentredString(w / 2, h - img_h / 2, "🌿")

        # Text area
        text_top = h - img_h - 2 * img_pad

        # Product name
        c.setFillColor(GREEN_DARK)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(3 * mm, text_top - 4 * mm, self.product["name"][:28])

        # Latin name
        c.setFillColor(MUTED)
        c.setFont("Helvetica-Oblique", 7)
        c.drawString(3 * mm, text_top - 7.5 * mm, self.product["latinName"][:35])

        # Spec rows
        specs = [
            ("Origin", self.product.get("origin") or "Egypt"),
            ("Harvest", self.product.get("season") or "—"),
            ("Forms", ", ".join(self.product.get("forms", [])) or "—"),
            ("MOQ", self.product.get("moq") or "—"),
            ("Purity", self.product.get("purity") or "—"),
            ("Shelf life", self.product.get("shelfLife") or "—"),
        ]
        row_y = text_top - 11 * mm
        for label, value in specs:
            if not value or value == "—": continue
            c.setFillColor(MUTED)
            c.setFont("Helvetica-Bold", 6)
            c.drawString(3 * mm, row_y, label)
            c.setFillColor(INK)
            c.setFont("Helvetica", 6)
            val_text = value[:28] + ("…" if len(value) > 28 else "")
            c.drawString(3 * mm + 13 * mm, row_y, val_text)
            row_y -= 2.8 * mm

# ─── Build PDF ──────────────────────────────────────────────────────────
def build_pdf():
    products = parse_catalog()
    families = parse_families()
    print(f"✓ Parsed {len(products)} products, {len(families)} families")
    print(f"✓ Logo: {'found' if LOGO_PDF_PATH else 'NOT found'}")

    by_family = {}
    for p in products:
        by_family.setdefault(p["family"], []).append(p)

    family_order = [
        "culinary-herbs", "tea-herbs", "medicinal-herbs", "flowers",
        "aromatic-seeds", "functional-seeds", "vegetables-others",
        "essential-oils", "vegetable-oils",
    ]

    doc = BaseDocTemplate(
        str(OUTPUT_PDF), pagesize=A4,
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=24 * mm, bottomMargin=12 * mm,
        title="Herbs Milanos — Wholesale Catalog",
        author="Herbs Milanos",
    )
    content_frame = Frame(
        MARGIN, 12 * mm,
        PAGE_W - 2 * MARGIN, PAGE_H - 24 * mm - 12 * mm,
        id="content", leftPadding=0, rightPadding=0,
        topPadding=0, bottomPadding=0,
    )
    doc.addPageTemplates([
        PageTemplate(id="content", frames=[content_frame], onPage=page_bg),
    ])

    styles = getSampleStyleSheet()
    style_family_h = ParagraphStyle(
        "FamilyH", parent=styles["Heading1"],
        fontName="Helvetica-Bold", fontSize=16, textColor=GREEN_DARK,
        alignment=TA_CENTER, leading=20, spaceAfter=2,
    )
    style_family_sub = ParagraphStyle(
        "FamilySub", parent=styles["Normal"],
        fontName="Helvetica-Oblique", fontSize=8, textColor=GREEN,
        alignment=TA_CENTER, leading=10, spaceAfter=6,
    )
    style_company_h = ParagraphStyle(
        "CompanyH", parent=styles["Heading1"],
        fontName="Helvetica-Bold", fontSize=18, textColor=GREEN_DARK,
        alignment=TA_CENTER, leading=22, spaceAfter=4,
    )
    style_body = ParagraphStyle(
        "Body", parent=styles["Normal"],
        fontName="Helvetica", fontSize=9, textColor=INK,
        alignment=TA_JUSTIFY, leading=13, spaceAfter=6,
    )
    style_label = ParagraphStyle(
        "Label", parent=styles["Normal"],
        fontName="Helvetica-Bold", fontSize=8, textColor=MUTED,
        alignment=TA_LEFT, leading=11,
    )
    style_value = ParagraphStyle(
        "Value", parent=styles["Normal"],
        fontName="Helvetica", fontSize=8, textColor=INK,
        alignment=TA_LEFT, leading=11,
    )

    story = []
    cards_per_row = 3
    card_w = (PAGE_W - 2 * MARGIN - (cards_per_row - 1) * 4 * mm) / cards_per_row
    card_h = 62 * mm
    row_gap = 4 * mm

    for fid in family_order:
        if fid not in by_family: continue
        family_name = families.get(fid, fid)
        family_products = by_family[fid]

        story.append(Spacer(1, 1 * mm))
        story.append(Paragraph(family_name, style_family_h))
        story.append(Paragraph(
            f"{len(family_products)} products in this family", style_family_sub))
        story.append(HRFlowable(width="40%", thickness=1, color=GREEN,
                                 hAlign="CENTER", spaceBefore=0, spaceAfter=4))
        story.append(Spacer(1, 1 * mm))

        rows = []
        current_row = []
        for p in family_products:
            card = ProductCard(p, card_w, card_h)
            current_row.append(card)
            if len(current_row) == cards_per_row:
                rows.append(current_row)
                current_row = []
        if current_row:
            while len(current_row) < cards_per_row:
                current_row.append("")
            rows.append(current_row)

        for row_cards in rows:
            t = Table([row_cards], colWidths=[card_w] * cards_per_row,
                      rowHeights=[card_h])
            t.setStyle(TableStyle([
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]))
            story.append(t)
            story.append(Spacer(1, row_gap))

        story.append(PageBreak())

    # ─── Company info page ─────────────────────────────────────────────
    story.append(Paragraph("About Herbs Milanos", style_company_h))
    story.append(HRFlowable(width="40%", thickness=1, color=GREEN,
                             hAlign="CENTER", spaceBefore=0, spaceAfter=8))
    story.append(Paragraph(
        "Herbs Milanos is an Egyptian botanical ingredients manufacturer "
        "and exporter established in 2000. We supply herbs, flowers, seeds, "
        "spices, essential oils and vegetable oils to customers in 30+ countries.",
        style_body))
    story.append(Paragraph(
        "Our commercial office is in Cairo, with processing facilities in "
        "Beni Suef, Fayoum, Minya and Assiut — the heart of Egypt's medicinal "
        "and aromatic plant production.", style_body))
    story.append(Spacer(1, 6 * mm))

    # Certifications
    story.append(Paragraph("<b>Certifications</b>", style_label))
    certs = [
        ("ISO 9001:2015", "Quality Management System — valid until 2030"),
        ("ISO 22000:2018", "Food Safety Management System — valid until 2030"),
        ("HACCP", "Hazard Analysis & Critical Control Points — valid until 2030"),
    ]
    cert_data = [[
        Paragraph(f"<b>{name}</b>", style_value),
        Paragraph(desc, style_value),
    ] for name, desc in certs]
    ct = Table(cert_data, colWidths=[40 * mm, PAGE_W - 2 * MARGIN - 40 * mm])
    ct.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("LINEBELOW", (0, 0), (-1, -1), 0.25, BORDER),
    ]))
    story.append(ct)
    story.append(Spacer(1, 8 * mm))

    # Trade terms
    story.append(Paragraph("<b>Trade Terms</b>", style_label))
    trade = [
        ("MOQ", "1 metric ton (MT) per item — mixed 20ft container accepted"),
        ("Incoterms", "FOB, CIF, CFR, EXW"),
        ("Ports", "Alexandria, Port Said, Damietta"),
        ("Payment", "30% advance (T/T), 70% against shipping documents"),
        ("Packing", "25 kg paper bags + PE liner, cartons, or private label"),
        ("Lead time", "7–15 days from order confirmation"),
        ("Documentation", "COA, Phytosanitary, Certificate of Origin"),
    ]
    trade_rows = [[
        Paragraph(f"<b>{k}</b>", style_value),
        Paragraph(v, style_value),
    ] for k, v in trade]
    tt = Table(trade_rows, colWidths=[30 * mm, PAGE_W - 2 * MARGIN - 30 * mm])
    tt.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("LINEBELOW", (0, 0), (-1, -1), 0.25, BORDER),
    ]))
    story.append(tt)
    story.append(Spacer(1, 10 * mm))

    # Contact
    story.append(HRFlowable(width="100%", thickness=1.5, color=GOLD,
                             hAlign="CENTER", spaceBefore=0, spaceAfter=6))
    story.append(Paragraph("<b>Get a Quote in 24 Hours</b>", ParagraphStyle(
        "Contact", parent=style_body, alignment=TA_CENTER, fontSize=11,
        textColor=GREEN_DARK)))
    story.append(Paragraph(
        "Email: herbs.milanos.eg@gmail.com  ·  "
        "WhatsApp: +20 122 621 1624  ·  "
        "Beni Suef, Egypt",
        ParagraphStyle("ContactInfo", parent=style_body, alignment=TA_CENTER)))

    # Remove trailing PageBreak
    if story and isinstance(story[-1], PageBreak):
        story.pop()

    doc.build(story)
    print(f"✓ PDF generated: {OUTPUT_PDF}")
    print(f"  Size: {OUTPUT_PDF.stat().st_size / 1024:.1f} KB")

if __name__ == "__main__":
    build_pdf()
