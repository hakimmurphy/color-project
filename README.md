# 🎨 Color Project — React Palette Builder

An interactive color-palette builder built with **React + Vite**. Create palettes, browse existing ones, view single-color shades, and persist everything to **LocalStorage**. Includes smooth **route transitions** and a ready-to-use **GitHub Pages** deployment flow. This is updated code from Colt Steele's React Bootcamp course.

> Built on Vite with a `<BrowserRouter>` entry, and a route structure for palette list, palette detail, single-color view, and new-palette form. Animations use `CSSTransition` / `TransitionGroup`. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}

---

## ✨ Features

- **Palette list** → view, add, and delete palettes. :contentReference[oaicite:2]{index=2}  
- **Palette detail** → expand a palette into multiple shades. :contentReference[oaicite:3]{index=3}  
- **Single-color view** → see all tints/shades for a color. :contentReference[oaicite:4]{index=4}  
- **Create new palette** (form page). :contentReference[oaicite:5]{index=5}  
- **LocalStorage persistence** (key: `palettes`). :contentReference[oaicite:6]{index=6}  
- **Route transitions** with `react-transition-group`. :contentReference[oaicite:7]{index=7}  
- **Material UI + Emotion** styling ecosystem, plus handy UI libs (`rc-slider`, `react-color`, Font Awesome). :contentReference[oaicite:8]{index=8}

---

## 🧰 Tech Stack

- **React 18**, **Vite**, **React Router**. Entry at `index.html` → `src/main.jsx` → `App.jsx`. :contentReference[oaicite:9]{index=9} :contentReference[oaicite:10]{index=10} :contentReference[oaicite:11]{index=11}  
- **Animations:** `react-transition-group`. :contentReference[oaicite:12]{index=12}  
- **UI:** `@mui/material`, `@emotion/react`, `@emotion/styled`, Font Awesome. :contentReference[oaicite:13]{index=13}  
- **Color tooling:** `rc-slider`, `react-color`, `chroma-js`. :contentReference[oaicite:14]{index=14}

---

## 🚦 Routes

- `/` → Palette list  
- `/palette/new` → New palette form  
- `/palette/:id` → Palette detail  
- `/palette/:paletteId/:colorId` → Single-color view  
(Defined in `App.jsx` with wrappers and transitions.) :contentReference[oaicite:15]{index=15}

---

## 💾 Data Persistence

Palettes are saved to **LocalStorage** and rehydrated on load:

```js
const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```
## 🌐 Deploy to GitHub Pages
This project is preconfigured to deploy to GitHub Pages:
- Vite base path is set to /color-project in vite.config.js. If your repo name differs, update this. 
Publish with:

```js
npm run predeploy   # builds the app
npm run deploy      # pushes /dist to gh-pages
```

Deployment uses the gh-pages package and the predeploy/deploy scripts in package.json. 
After deployment, your site will be available at:
```js
https://<your-username>.github.io/<your-repo-name>/
```

## 📁 Project Structure (high level)
```css
color-project/
├─ index.html
├─ vite.config.js
├─ package.json
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ Palette.jsx
   ├─ PaletteList.jsx
   ├─ SingleColorPalette.jsx
   ├─ NewPaletteForm.jsx
   ├─ Page.jsx
   ├─ seedColors.js
   └─ ColorHelpers.js
```

## 🧪 Scripts & Linting
- ESLint config and React hooks plugin are included; run npm run lint.

## 🚧 Roadmap
- Export/import palettes (JSON)
- Drag-and-drop reordering (hooks are available via react-sortable-hoc) 
- Accessibility & contrast checks

## 🙌 Acknowledgments
- Fonts via Google Fonts in index.html. 
-vDeployment via gh-pages. 

