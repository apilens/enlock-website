# slomo — landing page

Landing page for **slomo**, the black-box flight recorder for Python.

> Stop reproducing bugs. Replay them.

A single self-contained `index.html` — no build step, no dependencies. Served via GitHub Pages.

## Local preview

```bash
open index.html          # macOS
# or
python -m http.server    # then http://localhost:8000
```

## Structure

- `index.html` — the entire site: styles, markup, and the animated terminal demo (vanilla JS, respects `prefers-reduced-motion`).

Docs links currently point to `#` — they'll be wired up when the documentation site ships.
