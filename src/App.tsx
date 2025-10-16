import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingSplash from "./components/LoadingSplash";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

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

          <main className="pt-0">
            <section id="hero">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="education">
              <Education />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>

          <footer className="text-center text-sm text-gray-500 py-10 border-t border-white/10">
            © {new Date().getFullYear()} Jeffery Onome Emuodafevware. All rights reserved.
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
