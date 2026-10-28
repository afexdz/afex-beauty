# AFEX Beauty

Catalogue de sites démo pour la beauté en Algérie (cosmétiques, instituts, salons) : beauty.afexad.app.

- `index.html` : la page du portfolio (liste `DEMOS`, catégories Cosmétiques et parfums, Instituts et spas, Coiffure et onglerie).
- `sites/<slug>/` : une démo par dossier, photos listées dans `images.txt` et téléchargées à la construction.
- `scripts/vercel-images.sh` : construction Vercel (photos, puis aperçus du portfolio via `scripts/covers.mjs`, sites listés dans `scripts/covers.json`).
