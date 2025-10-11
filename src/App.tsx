import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  // Scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden"
      >
        {/* Navigation */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
          <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
            <h1 className="text-xl md:text-2xl font-bold text-gradient tracking-wide">
              Jeffery Onome Emuodafevware
            </h1>
            <ul className="hidden md:flex gap-6 text-sm">
              <li>
                <a href="#hero" className="hover:text-sky-400 transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-400 transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-400 transition-all">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-sky-400 transition-all">
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-sky-400 transition-all">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Sections */}
        <main className="pt-20 space-y-32">
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
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

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-10 border-t border-white/10">
          © {new Date().getFullYear()} Jeffery Onome Emuodafevware. All rights reserved.
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
