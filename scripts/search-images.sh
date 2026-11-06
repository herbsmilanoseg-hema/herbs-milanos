#!/bin/bash
# Search real images for all 58 catalog products + 5 families + 4 about-gallery.
# Uses z-ai image-search (free, re-hosted on OSS, embeddable).
# Writes results to /home/z/my-project/scripts/image-urls.json

set -u
OUT="/home/z/my-project/scripts/image-urls.json"
echo "{" > "$OUT"
FIRST=1
emit() {
  local key="$1" query="$2"
  local res url
  res=$(z-ai image-search -q "$query" --count 1 --no-rank --gl us 2>/dev/null)
  url=$(echo "$res" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['results'][0]['original_url'] if d.get('success') and d.get('results') else '')" 2>/dev/null)
  if [ -z "$url" ]; then
    echo "  MISS: $key ($query)" >&2
    url=""
  else
    echo "  OK:   $key → $url" >&2
  fi
  if [ $FIRST -eq 1 ]; then FIRST=0; else echo "," >> "$OUT"; fi
  printf '  "%s": "%s"' "$key" "$url" >> "$OUT"
  sleep 8  # avoid 429 rate limiting between calls
}

# Herbs & Leaves (20)
emit "basil" "dried sweet basil leaves herbs bunch"
emit "bay-laurel" "dried bay laurel leaves"
emit "dill-weed" "fresh dill weed herb leaves bunch"
emit "marjoram" "dried marjoram herb leaves"
emit "molokhia" "dried molokhia jute leaves herb"
emit "oregano" "dried oregano herb leaves"
emit "parsley" "dried parsley herb leaves flakes"
emit "peppermint" "dried peppermint mint leaves herbs"
emit "spearmint" "fresh spearmint mint leaves bunch"
emit "rosemary" "fresh rosemary herb sprigs"
emit "sage" "dried sage herb leaves salvia"
emit "thyme" "fresh thyme herb sprigs"
emit "lemongrass" "fresh lemongrass stalks herb"
emit "lemon-balm" "fresh lemon balm melissa herb leaves"
emit "lemon-verbena" "lemon verbena herb leaves plant"
emit "moringa" "moringa oleifera leaves powder green"
emit "guava-leaves" "dried guava leaves herbal tea"
emit "olive-leaves" "dried olive leaves herbal"
emit "henna" "henna powder leaves green dye"
emit "licorice" "dried licorice root sticks glycyrrhiza"

# Flowers (6)
emit "chamomile" "dried chamomile flowers herb tea"
emit "calendula" "dried calendula marigold flowers petals"
emit "mullein" "mullein verbascum flowers yellow dried"
emit "safflower" "dried safflower carthamus flowers red"
emit "jasmine" "white jasmine flowers fresh blossoms"
emit "hibiscus" "dried hibiscus sabdariffa calyces red"

# Seeds & Spices (12)
emit "anise" "anise seeds spice whole star"
emit "caraway" "caraway seeds spice bowl"
emit "coriander-seed" "coriander seeds whole spice"
emit "cumin" "cumin seeds spice brown bowl"
emit "fennel" "fennel seeds whole green spice"
emit "celery-seeds" "celery seeds spice small brown"
emit "black-seed" "nigella sativa black seed spice bowl"
emit "fenugreek" "fenugreek seeds spice bowl yellow"
emit "linseed" "flax linseed seeds brown bowl"
emit "dill-seeds" "dill seeds spice whole brown"
emit "basil-seeds" "basil seeds sabja black small"
emit "sesame" "white sesame seeds bowl spice"

# Essential Oils (14)
emit "orange-blossom" "orange blossom flowers essential oil bottle"
emit "neroli-oil" "neroli essential oil bottle aromatherapy"
emit "rose-oil" "rose essential oil bottle damask"
emit "jasmine-concrete" "jasmine essential oil bottle perfume"
emit "jasmine-absolute" "jasmine absolute oil glass bottle"
emit "geranium-oil" "geranium essential oil bottle pelargonium"
emit "chamomile-oil" "chamomile essential oil blue bottle"
emit "basil-oil" "basil essential oil bottle green"
emit "marjoram-oil" "marjoram essential oil bottle"
emit "peppermint-oil" "peppermint essential oil bottle"
emit "spearmint-oil" "spearmint essential oil bottle"
emit "lemongrass-oil" "lemongrass essential oil bottle yellow"
emit "parsley-oil" "parsley essential oil bottle herb"
emit "dill-oil" "dill essential oil bottle green"

# Vegetable oils (6)
emit "jojoba-oil" "jojoba oil bottle golden carrier"
emit "sweet-almond-oil" "sweet almond oil bottle cosmetic"
emit "sunflower-oil" "sunflower oil bottle golden"
emit "olive-leaf-extract" "olive leaf extract powder supplement"
emit "calendula-infused-oil" "calendula infused oil orange bottle"
emit "shea-butter" "shea butter natural raw white"

# Family images (5)
emit "family-herbs-leaves" "assorted dried culinary herbs leaves bowls"
emit "family-flowers" "dried edible flowers hibiscus chamomile calendula"
emit "family-seeds-spices" "assorted whole spices and seeds bowls"
emit "family-essential-oils" "essential oil bottles aromatherapy collection"
emit "family-vegetable-oils" "carrier oils bottles natural cosmetics"

# About gallery (4)
emit "about-gallery-1" "Egyptian herb farm field cultivation"
emit "about-gallery-2" "herbs drying in sun traditional method"
emit "about-gallery-3" "botanical ingredients processing facility"
emit "about-gallery-4" "spices and herbs sorting quality control"

echo "" >> "$OUT"
echo "}" >> "$OUT"
echo "DONE — saved to $OUT"
