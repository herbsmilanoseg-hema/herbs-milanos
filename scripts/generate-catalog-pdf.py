#!/usr/bin/env python3
"""
Herbs Milanos — Wholesale Product Catalog (ONIC-style)
English only.

Style reference: ONIC_Export_Catalogue_2026_V3.docx
  • Off-white/ivory background (#F7F5F0)
  • White rounded-corner cards per product
  • Thin gray-green hairline borders (#DDE5DA)
  • Photo on top of each card
  • Bold dark serif headings (Playfair-style)
  • Italic latin name
  • Icon + label rows (harvest, forms, etc.)
  • Green accents (#4a8b3f)
  • Footer band per page
"""

import re
import sys
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm, cm
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.platypus import (
    BaseDocTemplate,
    PageTemplate,
    Frame,
    Paragraph,
    Spacer,
    PageBreak,
    Table,
    TableStyle,
    Image as RLImage,
    KeepTogether,
    NextPageTemplate,
    Flowable,
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# ─── Brand palette (matching ONIC style) ──────────────────────────────────
BG_IVORY = colors.HexColor("#F7F5F0")     # page background
CARD_BG = colors.white                     # product card background
BORDER = colors.HexColor("#DDE5DA")        # card border (gray-green hairline)
GREEN = colors.HexColor("#4a8b3f")        # primary green accent
GREEN_DARK = colors.HexColor("#1E3A2A")   # dark forest green for headings
INK = colors.HexColor("#2B2B2B")          # body text (near-black)
MUTED = colors.HexColor("#6B6B6B")        # secondary text
ICON_BG = colors.HexColor("#E4F0E0")      # pale green for icon circles
FOOTER_BG = colors.HexColor("#E8F1E0")    # light sage footer band

# ─── Paths ───────────────────────────────────────────────────────────────
PROJECT_ROOT = Path("/home/z/my-project")
CATALOG_TS = PROJECT_ROOT / "src" / "data" / "catalog.ts"
PRODUCTS_TS = PROJECT_ROOT / "src" / "data" / "products.ts"
SITE_TS = PROJECT_ROOT / "src" / "data" / "site.ts"
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
        if not m:
            break
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
            "id": product_id,
            "name": get_str("name"),
            "latinName": get_str("latinName"),
            "family": get_str("family"),
            "brief": get_str("brief"),
            "image": get_str("image"),
            "forms": get_arr("forms"),
            "origin": get_str("origin"),
            "season": get_str("season"),
            "moq": get_str("moq"),
            "purity": get_str("purity"),
            "shelfLife": get_str("shelfLife"),
        })
        i = j
    return products

def parse_families():
    src = PRODUCTS_TS.read_text(encoding="utf-8")
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.DOTALL)
    return dict(re.findall(r'id:\s*"([a-z-]+)"\s*,\s*name:\s*"([^"]+)"', src))

# ─── Product Card Flowable ──────────────────────────────────────────────
class ProductCard(Flowable):
    """A single product card with photo on top, name, latin, and spec rows."""

    def __init__(self, product, width, height=None, has_image=True):
        super().__init__()
        self.product = product
        self.width = width
        self.height = height or 70 * mm  # default card height
        self.has_image = has_image  # if False, render text-only card
        self._img_path = None
        if has_image:
            self._setup_image()

    def _setup_image(self):
        img_path = PROJECT_ROOT / "public" / self.product["image"].lstrip("/")
        if img_path.exists():
            try:
                from PIL import Image as PILImage
                pil_img = PILImage.open(img_path)
                pil_img.thumbnail((240, 240), PILImage.LANCZOS)
                if pil_img.mode != "RGB":
                    pil_img = pil_img.convert("RGB")
                tmp = Path("/tmp") / f"catcard_{self.product['id']}.jpg"
                pil_img.save(tmp, "JPEG", quality=85)
                self._img_path = str(tmp)
            except Exception:
                self._img_path = None

    def wrap(self, availWidth, availHeight):
        return self.width, self.height

    def draw(self):
        c = self.canv
        w, h = self.width, self.height
        # Card background (white rounded)
        c.setFillColor(CARD_BG)
        c.setStrokeColor(BORDER)
        c.setLineWidth(0.6)
        c.roundRect(0, 0, w, h, 3 * mm, fill=1, stroke=1)

        if self.has_image:
            # Image area (top portion)
            img_h = 28 * mm
            img_pad = 1.5 * mm
            img_w = w - 2 * img_pad
            if self._img_path:
                try:
                    c.drawImage(self._img_path, img_pad, h - img_h - img_pad,
                                width=img_w, height=img_h, preserveAspectRatio=True,
                                mask='auto')
                except Exception:
                    c.setFillColor(ICON_BG)
                    c.rect(img_pad, h - img_h - img_pad, img_w, img_h, fill=1, stroke=0)
                    c.setFillColor(GREEN)
                    c.setFont("Helvetica", 14)
                    c.drawCentredString(w / 2, h - img_h / 2, "🌿")
            else:
                c.setFillColor(ICON_BG)
                c.rect(img_pad, h - img_h - img_pad, img_w, img_h, fill=1, stroke=0)
                c.setFillColor(GREEN)
                c.setFont("Helvetica", 14)
                c.drawCentredString(w / 2, h - img_h / 2, "🌿")

            # Text area (below image)
            text_top = h - img_h - 2 * img_pad
        else:
            # Text-only card (no image) — for oils and similar
            text_top = h - 3 * mm

        # Product name (bold, dark)
        c.setFillColor(GREEN_DARK)
        c.setFont("Helvetica-Bold", 9.5)
        name_y = text_top - 4 * mm
        c.drawString(3 * mm, name_y, self.product["name"][:28])

        # Latin name (italic, muted)
        c.setFillColor(MUTED)
        c.setFont("Helvetica-Oblique", 7.5)
        c.drawString(3 * mm, name_y - 3.5 * mm, self.product["latinName"][:35])

        # Spec rows (label + value)
        specs = [
            ("Origin", self.product.get("origin") or "Egypt"),
            ("Harvest", self.product.get("season") or "—"),
            ("Forms", ", ".join(self.product.get("forms", [])) or "—"),
            ("MOQ", self.product.get("moq") or "—"),
            ("Purity", self.product.get("purity") or "—"),
            ("Shelf life", self.product.get("shelfLife") or "—"),
        ]
        row_y = name_y - 7 * mm
        for label, value in specs:
            if not value or value == "—":
                continue
            # Label (bold, small)
            c.setFillColor(MUTED)
            c.setFont("Helvetica-Bold", 6.5)
            c.drawString(3 * mm, row_y, label)
            # Value (regular)
            c.setFillColor(INK)
            c.setFont("Helvetica", 6.5)
            val_text = value[:30] + ("…" if len(value) > 30 else "")
            c.drawString(3 * mm + 14 * mm, row_y, val_text)
            row_y -= 3.2 * mm


# ─── Page background (ivory + footer band) ───────────────────────────────
def page_bg(canvas_obj, doc):
    canvas_obj.saveState()
    # Ivory page background
    canvas_obj.setFillColor(BG_IVORY)
    canvas_obj.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Footer band (light sage)
    footer_h = 8 * mm
    canvas_obj.setFillColor(FOOTER_BG)
    canvas_obj.rect(0, 0, PAGE_W, footer_h, fill=1, stroke=0)

    # Footer text
    canvas_obj.setFillColor(GREEN_DARK)
    canvas_obj.setFont("Helvetica", 8)
    canvas_obj.drawCentredString(PAGE_W / 2, 3 * mm,
        f"Herbs Milanos  ·  Wholesale Catalog  ·  Page {doc.page}")
    canvas_obj.restoreState()


def family_header_bg(canvas_obj, doc):
    """Family divider page: full green band header."""
    page_bg(canvas_obj, doc)


# ─── Build PDF ──────────────────────────────────────────────────────────
def build_pdf():
    products = parse_catalog()
    families = parse_families()
    print(f"✓ Parsed {len(products)} products, {len(families)} families")

    by_family = {}
    for p in products:
        by_family.setdefault(p["family"], []).append(p)

    family_order = [
        "culinary-herbs", "tea-herbs", "medicinal-herbs", "flowers",
        "aromatic-seeds", "functional-seeds", "vegetables-others",
        "essential-oils", "vegetable-oils",
    ]

    # Families that have no real product images → render as text-only cards
    # (oils are typically shipped in uniform containers, so a single
    # placeholder image repeated 39 times looks worse than a clean text card).
    NO_IMAGE_FAMILIES = {"essential-oils", "vegetable-oils"}

    doc = BaseDocTemplate(
        str(OUTPUT_PDF),
        pagesize=A4,
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=MARGIN, bottomMargin=12 * mm,
        title="Herbs Milanos — Wholesale Catalog",
        author="Herbs Milanos",
    )

    content_frame = Frame(
        MARGIN, 12 * mm,
        PAGE_W - 2 * MARGIN, PAGE_H - MARGIN - 12 * mm,
        id="content", leftPadding=0, rightPadding=0,
        topPadding=0, bottomPadding=0,
    )
    doc.addPageTemplates([
        PageTemplate(id="content", frames=[content_frame], onPage=page_bg),
    ])

    # Styles
    styles = getSampleStyleSheet()
    style_family_h = ParagraphStyle(
        "FamilyH", parent=styles["Heading1"],
        fontName="Helvetica-Bold", fontSize=18, textColor=GREEN_DARK,
        alignment=TA_CENTER, leading=22, spaceAfter=2,
    )
    style_family_sub = ParagraphStyle(
        "FamilySub", parent=styles["Normal"],
        fontName="Helvetica-Oblique", fontSize=9, textColor=GREEN,
        alignment=TA_CENTER, leading=12, spaceAfter=8,
    )

    story = []
    # Card grid: 3 cards per row (like ONIC page 05/06)
    cards_per_row = 3
    card_w = (PAGE_W - 2 * MARGIN - (cards_per_row - 1) * 4 * mm) / cards_per_row
    card_h = 64 * mm
    # Text-only cards (oils) are shorter since there's no image
    card_h_no_image = 38 * mm
    row_gap = 4 * mm

    for fid in family_order:
        if fid not in by_family:
            continue
        family_name = families.get(fid, fid)
        family_products = by_family[fid]
        has_image = fid not in NO_IMAGE_FAMILIES
        # For text-only cards, fit more per row (4) since they're smaller
        if has_image:
            cur_cards_per_row = cards_per_row
            cur_card_h = card_h
        else:
            cur_cards_per_row = 4
            cur_card_h = card_h_no_image
        cur_card_w = (PAGE_W - 2 * MARGIN - (cur_cards_per_row - 1) * 3 * mm) / cur_cards_per_row

        # Family header (centered, dark green serif)
        story.append(Spacer(1, 2 * mm))
        story.append(Paragraph(family_name, style_family_h))
        story.append(Paragraph(
            f"{len(family_products)} products in this family",
            style_family_sub
        ))
        # Thin green divider line
        from reportlab.platypus import HRFlowable
        story.append(HRFlowable(width="40%", thickness=1, color=GREEN,
                                 hAlign="CENTER", spaceBefore=0, spaceAfter=6))
        story.append(Spacer(1, 2 * mm))

        # Build grid of product cards
        rows = []
        current_row = []
        for p in family_products:
            card = ProductCard(p, cur_card_w, cur_card_h, has_image=has_image)
            current_row.append(card)
            if len(current_row) == cur_cards_per_row:
                rows.append(current_row)
                current_row = []
        if current_row:
            while len(current_row) < cur_cards_per_row:
                current_row.append("")
            rows.append(current_row)

        # Render each row as a Table of cards
        for row_cards in rows:
            row_data = [row_cards]
            t = Table(row_data, colWidths=[cur_card_w] * cur_cards_per_row,
                      rowHeights=[cur_card_h])
            t.setStyle(TableStyle([
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]))
            story.append(t)
            story.append(Spacer(1, row_gap))

        # Page break between families
        story.append(PageBreak())

    # Remove trailing PageBreak
    if story and isinstance(story[-1], PageBreak):
        story.pop()

    doc.build(story)
    print(f"✓ PDF generated: {OUTPUT_PDF}")
    print(f"  Size: {OUTPUT_PDF.stat().st_size / 1024:.1f} KB")
    print(f"  Text-only families (no images): {sorted(NO_IMAGE_FAMILIES)}")


if __name__ == "__main__":
    build_pdf()
