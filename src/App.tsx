import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingSplash from "./components/LoadingSplash";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Stats = lazy(() => import("./components/Stats"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Blog = lazy(() => import("./components/Blog"));
const BlogPost = lazy(() => import("./components/BlogPost"));
const CTA = lazy(() => import("./components/CTA"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBlogPost, setSelectedBlogPost] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
            <section id="hero" aria-label="Hero section">
              <Hero />
            </section>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div></div>}>
              <section id="about" aria-label="About section">
                <About />
              </section>
              <Stats />
              <section id="skills" aria-label="Skills section">
                <Skills />
              </section>
              <section id="projects" aria-label="Projects section">
                <Projects />
              </section>
              <section id="experience" aria-label="Experience section">
                <Experience />
              </section>
              <section id="education" aria-label="Education section">
                <Education />
              </section>
              <section id="testimonials" aria-label="Testimonials section">
                <Testimonials />
              </section>
              <CTA />
              <section id="blog" aria-label="Blog section">
                {selectedBlogPost ? (
                  <BlogPost postId={selectedBlogPost} onBack={() => setSelectedBlogPost(null)} />
                ) : (
                  <Blog onPostSelect={(postId) => setSelectedBlogPost(postId)} />
                )}
              </section>
              <section id="contact" aria-label="Contact section">
                <Contact />
              </section>
            </Suspense>
          </main>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default App;
