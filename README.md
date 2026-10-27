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

## Deploy to GitHub Pages

1. Create an empty repository on GitHub (e.g. `rash-kanto-portfolio`).
2. From this folder:

   ```powershell
   git remote add origin https://github.com/<your-username>/rash-kanto-portfolio.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / folder: **/ (root)**
4. Site goes live at `https://<your-username>.github.io/rash-kanto-portfolio/`.

For a custom domain, add a `CNAME` file containing the domain and configure DNS with your provider.

## Notes

- No framework, bundler, or npm install required.
- `index.html`, `styles.css`, and `script.js` are the only site files — keep them together.
