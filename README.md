# 🌟 Jeffery Onome Emuodafevware — Portfolio Website

A **modern, responsive, and interactive** personal portfolio built with **React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion**.  
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

- ⚛ **React 19 + TypeScript** — Scalable, component-based architecture with full type safety
- ⚡ **Vite** — Lightning-fast bundler with Hot Module Replacement (HMR)
- 🎨 **Tailwind CSS** — Utility-first styling with glassmorphism and gradient effects
- 🌈 **Framer Motion** — Seamless animations and scroll-based interactions
- 🔗 **Lucide React Icons** — Clean, consistent iconography
- 🧠 **SEO Optimized** — Comprehensive metadata, Open Graph, and Twitter card integration
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop

---

## 📁 Project Structure

```bash
onome-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI/CD
├── public/
│   ├── profile.jpg             # Profile image
│   ├── robots.txt              # SEO robots file
│   ├── sitemap.xml             # Sitemap for search engines
│   └── vite.svg                # Favicon
├── src/
│   ├── components/             # React components
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Chatbot.tsx
│   │   ├── Contact.tsx
│   │   ├── CTA.tsx
│   │   ├── Education.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LoadingSplash.tsx
│   │   └── Navigation.tsx
│   ├── data/                   # Static data
│   │   ├── blogPosts.ts
│   │   └── expandedBlogPosts.ts
│   ├── pages/                  # Page components
│   │   ├── BlogPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ExperiencePage.tsx
│   │   ├── HomePage.tsx
│   │   └── ProjectsPage.tsx
│   ├── services/               # API services
│   │   └── api.ts
│   ├── styles/                 # Global styles
│   │   └── globals.css
│   ├── types/                  # TypeScript types
│   │   └── api.ts
│   ├── utils/                  # Utility functions
│   │   └── chatbotEngine.ts
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Tailwind imports
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore file
├── CONTRIBUTING.md             # Contribution guidelines
├── LICENSE                     # MIT License
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # This file
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jefferyonome/onome-portfolio.git
   cd onome-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional):
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

---

## 👨‍💻 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

---

## 🏗 Build for Production

```bash
npm run build
```

This generates an optimized, minified build in the `/dist` directory.

### Preview Production Build

```bash
npm run start
```

---

## 🧪 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run preview` - Preview build locally

---

## 🌐 Deployment

### Deploy to Replit

This project is configured for deployment on Replit:

1. Import the repository to Replit
2. The project will auto-configure and install dependencies
3. Click "Run" to start the development server
4. Click "Publish" for production deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel
```

### Deploy to Netlify

```bash
# Connect via GitHub
1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: npm run build
4. Set publish directory: dist
```

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your base path
2. Build the project: `npm run build`
3. Deploy the `dist` folder to GitHub Pages

---

## 🔥 Key Features

### Design & UI
- 🌐 Sleek, responsive UI/UX across all devices
- ✨ Glassmorphism and gradient design aesthetics
- 💫 Smooth animations and transitions with Framer Motion
- 🎨 Dark theme with sky-blue and purple accents
- 🖼 Professional profile photo integration

### Functionality
- 📝 Dynamic blog system with category filtering
- 💼 Interactive experience and education timelines
- 🤖 AI-powered chatbot (optional OpenAI integration)
- 📧 Functional contact form with validation
- 🔍 Built-in SEO and Open Graph optimization
- ⚡ Fast page loads with code splitting

### Development
- 🧩 Scalable and modular architecture
- 🔒 Full TypeScript type safety
- ✅ ESLint and Prettier configured
- 🚀 GitHub Actions CI/CD pipeline
- 📦 Optimized build with Vite

---

## 👤 Author

**Jeffery Onome Emuodafevware**  
📍 Lagos, Nigeria  
📧 [jeffemuodafe124@gmail.com](mailto:jeffemuodafe124@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/jefferyonome) | [GitHub](https://github.com/jefferyonome) | [Twitter/X](https://twitter.com/jefferyonome)

---

## 🤝 Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 💭 Acknowledgments

- Built with ❤️ using modern web technologies
- Inspired by the latest design trends in web development
- Thanks to the open-source community for amazing tools and libraries

---

## 📊 Project Status

- ✅ Fully functional and production-ready
- ✅ Responsive across all devices
- ✅ SEO optimized
- ✅ Accessibility features implemented
- ✅ CI/CD pipeline configured
- ✅ Performance optimized

---

> _"Good code is poetry in logic — structured, efficient, and beautiful."_
>
> This portfolio bridges creativity and technology — a living example of what happens when engineering meets design with intent and precision.
