# BHK World — Landing Page

A one-page website for the Instagram bio link and for sharing on WhatsApp.
It costs nothing to host and you can edit it at any time.

## Files

| File | What it is |
|---|---|
| `content.js` | **All the text on the page.** This is the only file you normally edit. |
| `assets/` | Photos (founder, villa, interior, towers, Dubai skyline). |
| `style.css` | Colours and design. The colours are at the very top. |
| `main.js` | Builds the page and runs the scroll animations. No need to touch it. |
| `index.html` | Page structure, plus the title shown in Google and link previews. |

## How to edit

1. Open `content.js` in any text editor (Notepad works, VS Code is nicer).
2. Change only the text **inside the quotes**. Keep commas and brackets as they are.
3. Save the file, then refresh the page.

Common edits:
- **Phone, WhatsApp, email, address:** the `contact` section.
- **Instagram:** fill in `instagram` and `instagramHandle` and an Instagram card appears automatically.
- **Numbers (10,231+ leads, etc.):** the `stats` section.
- **Process steps / services / FAQ:** add or delete a `{ ... },` block to add or remove an item.
- **Founder photo:** replace `assets/founder.jpg` with a new photo that has the same name.
- **Icons** you can use: `chat, search, car, handshake, file, key, home, building, rupee, shield, chart, spark, lock, palm, pin`.

## Publish for free (pick one)

### Option A: Netlify Drop (easiest, about 2 minutes)
1. Go to https://app.netlify.com/drop and create a free account.
2. Drag the **whole folder** onto the page.
3. You get a link like `bhkworld.netlify.app`. Rename it under *Site settings → Change site name*.
4. **To update later:** open the site in Netlify → *Deploys* → drag the folder in again.

### Option B: GitHub Pages (best for long-term edits)
1. Create a free GitHub account and a new **public** repository named `bhkworld`.
2. Click *Add file → Upload files*, and upload everything in this folder.
3. Go to *Settings → Pages → Branch: main → Save*.
4. Your link: `https://YOUR-USERNAME.github.io/bhkworld/`
5. **To update later:** open `content.js` on GitHub, click the ✏️ pencil, edit, then click *Commit*. It goes live in about a minute, and you can do this from your phone too.

### Optional: your own domain
A domain like `bhkworld.in` costs about ₹500–900 a year. Both Netlify and GitHub Pages let you connect one for free under *Domain settings*.

## Preview on your computer
Double-click `index.html` to open it in your browser.
