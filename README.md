# 🌍 Jeffery Onome Emuodafevware — Portfolio Website

A **modern, responsive, and interactive** personal portfolio built with **React, TypeScript, Vite, Tailwind CSS, and Framer Motion**.  
Designed to showcase the professional work of a **Full Stack Software Engineer & AI/ML Expert**, this project emphasizes performance, aesthetics, and scalability.

---

![Portfolio Preview](https://raw.githubusercontent.com/jefferyonome/onome-portfolio/main/public/preview.png)

<p align="center">
  <a href="https://github.com/jefferyonome/onome-portfolio/stargazers"><img src="https://img.shields.io/github/stars/jefferyonome/onome-portfolio" alt="Stars Badge"></a>
  <a href="https://github.com/jefferyonome/onome-portfolio/network/members"><img src="https://img.shields.io/github/forks/jefferyonome/onome-portfolio" alt="Forks Badge"></a>
  <a href="https://github.com/jefferyonome/onome-portfolio/blob/main/LICENSE"><img src="https://img.shields.io/github/license/jefferyonome/onome-portfolio" alt="License Badge"></a>
  <a href="https://github.com/jefferyonome/onome-portfolio/issues"><img src="https://img.shields.io/github/issues/jefferyonome/onome-portfolio" alt="Issues Badge"></a>
</p>

---

## 🚀 Tech Stack

- ⚛ **React 18 + TypeScript** — Scalable, component-based architecture.
- ⚡ **Vite** — Ultra-fast bundler with Hot Module Replacement (HMR).
- 🎨 **Tailwind CSS** — Utility-first styling with glassmorphism and gradient effects.
- 🌈 **Framer Motion** — Seamless animations and scroll-based interactions.
- 🔗 **Lucide React Icons** — Clean, consistent iconography.
- 📱 **PWA Ready** — Installable and works offline.
- 🧠 **SEO Optimized** — Metadata, Open Graph, and Twitter card integration.

---

## 📁 Project Structure

```bash
onome-portfolio/
├── public/
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── README.md
```

---

## ⚙️ Setup (Android Termux)

### 1. Install Dependencies

```bash
pkg update && pkg upgrade -y
pkg install nodejs git -y
```

### 2. Create Project Directory

```bash
mkdir onome-portfolio && cd onome-portfolio
```

### 3. Initialize Vite + React + TypeScript

```bash
npm create vite@latest . -- --template react-ts
```

### 4. Install Required Libraries

```bash
npm install
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer vite-plugin-pwa
```

### 5. Configure Tailwind

```bash
npx tailwindcss init -p
```

Replace the default configuration and `src/` files with those provided in this repository.

---

## 👨‍💻 Development

To start the development server:

```bash
npm run dev
```

Access the project at `http://localhost:5173` (or the URL displayed in Termux).

---

## 🏗 Build for Production

```bash
npm run build
npm run preview
```

This generates an optimized, minified build in the `/dist` directory.

---

## 🌐 Deployment

### **Option 1: Deploy with Vercel**

```bash
npm install -g vercel
vercel login
vercel
```

### **Option 2: Deploy with Netlify (via GitHub)**

```bash
git init
git add .
git commit -m "Initial commit - Onome Portfolio"
git branch -M main
git remote add origin https://github.com/<yourusername>/onome-portfolio.git
git push -u origin main
```

Then connect the GitHub repository to Netlify, set the build command to `npm run build`, and the publish directory to `dist/`.

---

## 🔥 Key Features

- 🌐 Sleek, responsive UI/UX
- ✨ Glassmorphism and gradient design aesthetics
- 💫 Smooth animations and transitions
- 📱 Progressive Web App (offline-ready + installable)
- 🔍 Built-in SEO and Open Graph optimization
- 🧩 Scalable and modular architecture

---

## 👤 Author

**Jeffery Onome Emuodafevware**  
📍 Lagos, Nigeria  
📧 [jeffemuodafe124@gmail.com](mailto:jeffemuodafe124@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/jefferyonome) | [GitHub](https://github.com/jefferyonome) | [Twitter/X](https://twitter.com/jefferyonome)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 💭 Final Note

> _“Good code is poetry in logic — structured, efficient, and beautiful.”_
>
> This portfolio bridges creativity and technology — a living example of what happens when engineering meets design with intent and precision.
