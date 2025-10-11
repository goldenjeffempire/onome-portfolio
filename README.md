# ðŸŒ Jeffery Onome Emuodafevware â€” Portfolio Website

A **modern, fully responsive, and animated** portfolio built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.  
Designed to showcase my professional work as a **Full Stack Software Engineer & AI/ML Expert** â€” fast, beautiful, and production-ready.

---

## ðŸš€ Tech Stack

- âš›ï¸ **React 18 + TypeScript** â€” Component-based, scalable architecture.
- âš¡ **Vite** â€” Lightning-fast build tool with instant HMR.
- ðŸŽ¨ **Tailwind CSS** â€” Utility-first styling with custom glassmorphism and gradients.
- ðŸŒ€ **Framer Motion** â€” Smooth scroll-triggered and micro-interactions.
- ðŸ”— **Lucide React Icons** â€” Clean, consistent icon set.
- ðŸ“± **PWA Ready** â€” Offline, installable, and blazing fast.
- ðŸ§ **SEO Optimized** â€” Metadata, Open Graph, and Twitter cards included.

---

## ðŸ“ Project Structure

```
onome-portfolio/
â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ pwa-192x192.png
â”‚   â”œâ”€â”€ pwa-512x512.png
â”‚   â””â”€â”€ vite.svg
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ Hero.tsx
â”‚   â”‚   â”œâ”€â”€ About.tsx
â”‚   â”‚   â”œâ”€â”€ Skills.tsx
â”‚   â”‚   â”œâ”€â”€ Experience.tsx
â”‚   â”‚   â”œâ”€â”€ Education.tsx
â”‚   â”‚   â””â”€â”€ Contact.tsx
â”‚   â”œâ”€â”€ styles/
â”‚   â”‚   â””â”€â”€ globals.css
â”‚   â”œâ”€â”€ App.tsx
â”‚   â”œâ”€â”€ main.tsx
â”‚   â””â”€â”€ index.css
â”œâ”€â”€ package.json
â”œâ”€â”€ tailwind.config.js
â”œâ”€â”€ postcss.config.js
â”œâ”€â”€ vite.config.ts
â””â”€â”€ README.md
```

---

## âš™ï¸ Setup (Android Termux)

### 1ï¸âƒ£ Install dependencies

```bash
pkg update && pkg upgrade -y
pkg install nodejs git -y
```

### 2ï¸âƒ£ Create project directory

```bash
mkdir onome-portfolio && cd onome-portfolio
```

### 3ï¸âƒ£ Initialize project

```bash
npm create vite@latest . -- --template react-ts
```

### 4ï¸âƒ£ Install libraries

```bash
npm install
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer vite-plugin-pwa
```

### 5ï¸âƒ£ Configure Tailwind

```bash
npx tailwindcss init -p
```

Then replace all config files and `src/` files with the provided ones.

---

## ðŸ§‘â€ðŸ’» Development

```bash
npm run dev
```

Visit the URL Termux prints (usually `http://localhost:5173`) to see your site.

---

## ðŸ—ï¸ Build for Production

```bash
npm run build
npm run preview
```

Builds the site to `/dist` â€” optimized and minified.

---

## ðŸŒ Deployment

### **Option 1: Vercel**

```bash
npm install -g vercel
vercel login
vercel
```

### **Option 2: Netlify (via GitHub)**

```bash
git init
git add .
git commit -m "Initial commit - Onome Portfolio"
git branch -M main
git remote add origin https://github.com/<yourusername>/onome-portfolio.git
git push -u origin main
```

Then connect repo on Netlify â†’ â€œAdd New Siteâ€ â†’ build command `npm run build` â†’ publish directory `dist/`.

---

## ðŸ”¥ Features

- ðŸŒˆ Modern, responsive UI/UX design
- âœ¨ Glassmorphism and gradient visuals
- ðŸŒ€ Smooth animations and transitions
- ðŸ“± Progressive Web App (Offline + Installable)
- ðŸ” SEO + Open Graph optimization
- ðŸ’¡ Modular and scalable code architecture

---

## ðŸ‘¨â€ðŸ’» Author

**Jeffery Onome Emuodafevware**  
ðŸ“ Lagos, Nigeria  
ðŸ“§ [jeffemuodafe124@gmail.com](mailto:jeffemuodafe124@gmail.com)  
ðŸ”— [LinkedIn](https://www.linkedin.com/in/jefferyonome) | [GitHub](https://github.com/jefferyonome) | [Twitter/X](https://twitter.com/jefferyonome)

---

## ðŸ“œ License

This project is open-source under the [MIT License](LICENSE).

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

---

### ðŸ’­ Final Thoughts

> â€œGood code is poetry in logic â€” structured, efficient, and beautiful.â€  
> This portfolio represents the bridge between creativity and technology â€” an evolving showcase of whatâ€™s possible when design meets engineering.

---
