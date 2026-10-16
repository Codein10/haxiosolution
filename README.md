# Haxio Solution – Website

Static website for Haxio Solution (software development company).

## Files
```
haxio-solution-website/
├── index.html            ← the whole page (all sections)
├── css/style.css         ← global styles, animations, form & FAQ styles
├── js/main.js            ← enquiry form (WhatsApp / email)
└── assets/images/        ← logo, founder photo, project screenshots, illustrations
```

## Open it
- Double-click `index.html`, or
- In VS Code: open the folder → install the **Live Server** extension → right-click `index.html` → **Open with Live Server**.

## Edit common things
| What | Where |
|---|---|
| Brand colour (blue) | Search `#1E8FCC` in `index.html` / `css/style.css` |
| Phone / WhatsApp number | Search `8960401450` (index.html + js/main.js) |
| Email | Search `haxiosolution@gmail.com` |
| LinkedIn links | Search `linkedin.com` |
| Images | Replace files in `assets/images/` (keep the same file names) |

## Sections (in order)
Header · Hero · Tech stack strip · Highlights · Intro · Services (9 animated cards) · Why choose us ·
Process · Strengths · Projects (Travkings ERP, CRM, Smart Connect App, Website) · E-commerce ·
Benefits · Banner · Client success story · Meet the founder · Engagement models · FAQ ·
Scrolling text · Contact + enquiry form · Footer · Floating WhatsApp button

## Go live (free options)
1. **Netlify Drop** – go to app.netlify.com/drop and drag the `haxio-solution-website` folder in.
2. **Vercel / GitHub Pages** – push the folder to a GitHub repo and connect it.
3. Then connect your own domain (e.g. haxiosolution.com) in the host's domain settings.

## Notes
- Fonts load from Google Fonts (needs internet).
- The enquiry form opens WhatsApp or the visitor's email app with the details filled in. To receive
  submissions directly in your inbox, connect a form service such as Formspree or Web3Forms.
- The service-card scroll animation works in Chrome, Edge and Safari; other browsers show the cards without it.
