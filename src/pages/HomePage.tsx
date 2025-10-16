import { lazy, Suspense } from "react";
import Hero from "../components/Hero";

const About = lazy(() => import("../components/About"));
const Stats = lazy(() => import("../components/Stats"));
const Skills = lazy(() => import("../components/Skills"));
const CTA = lazy(() => import("../components/CTA"));

const HomePage = () => {
  return (
    <div>
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
        <CTA />
      </Suspense>
    </div>
  );
};

export default HomePage;
