import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingSplash from "./components/LoadingSplash";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import Chatbot from "./components/Chatbot";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingSplash key="splash" onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="overflow-hidden">
          <ScrollProgress />
          <Navigation />

          <main id="main-content" className="pt-0" role="main">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div></div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>

          <Chatbot />
        </div>
      )}
    </Router>
  );
}

export default App;
