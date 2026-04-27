# Products — the 30

> **Status:** placeholder. Replace with the real list once user provides CSV.

## How to deliver the list

Put a file at `content/products.csv` with the following columns:

```
slug,name,tagline,description,category,status,cover_idea
```

| Column | Required | Notes |
|--------|----------|-------|
| `slug` | yes | URL-safe (`voice-concierge`, `lead-radar`) |
| `name` | yes | Display name |
| `tagline` | yes | One-line elevator pitch (≤ 90 chars) |
| `description` | no | Long-form for the product detail page |
| `category` | yes | One of: `agent`, `automation`, `vision`, `data`, `voice`, `ops` |
| `status` | yes | One of: `live`, `beta`, `concept` |
| `cover_idea` | no | Brief for `tools/generate_product_image.py` |

Once `content/products.csv` exists, replace the hardcoded array in `src/lib/products.ts` with a CSV-loader that reads it at build time.

## Current placeholder list

See `src/lib/products.ts`. The 30 entries there are placeholders chosen to demonstrate the grid layout, category mix, and status badges. They should be replaced wholesale with the real product list.
