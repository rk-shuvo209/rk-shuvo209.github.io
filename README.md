# Rash Kanto — SEO Specialist Portfolio

Static single-page portfolio exported from a Claude artifact.

## Contents

- `index.html` — page markup
- `styles.css` — all site styles
- `script.js` — experience tabs, FAQ accordion, scroll reveal
- `.nojekyll` — disables Jekyll processing on GitHub Pages

The only external dependency is Google Fonts (Outfit + Plus Jakarta Sans), loaded over HTTPS.

## Preview locally

Open `index.html` directly in a browser, or serve the folder:

```powershell
python -m http.server 8000
```

Then visit http://localhost:8000

## Live site

Deployed with GitHub Pages at **https://rk-shuvo209.github.io/**

Repository: https://github.com/rk-shuvo209/rk-shuvo209.github.io

To publish updates:

```powershell
git add .
git commit -m "Update site"
git push
```

## Notes

- No framework, bundler, or npm install required.
- `index.html`, `styles.css`, and `script.js` are the only site files — keep them together.
