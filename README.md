# Enlock — website

Landing page, Privacy Policy and Terms & Conditions for **Enlock**, the offline iPhone vault for ID cards and documents.

Live: https://enlock.app

| Page | File |
|---|---|
| Landing | `index.html` |
| Privacy Policy | `privacy.html` |
| Terms & Conditions | `terms.html` |

Plain HTML/CSS/JS, no build step. Monochrome design (dark by default, light toggle) in the spirit of linear.app: one ink colour, greys, hairlines.

## Run locally

```sh
python3 -m http.server 8000
```

## Deploy

Hosted on Vercel at enlock.app as a static site (no build step, see `vercel.json`). A copy also deploys to GitHub Pages on every push to `main`.

Contact: hello@enlock.app (general), support@enlock.app (support and privacy).

## Before the App Store launch

- Swap the "Coming soon" App Store buttons (`index.html`, two places) for the real App Store link.
- Use `privacy.html` as the Privacy Policy URL in App Store Connect, and declare **Data Not Collected** in App Privacy.
