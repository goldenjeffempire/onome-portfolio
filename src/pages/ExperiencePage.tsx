import { lazy, Suspense } from "react";

const Experience = lazy(() => import("../components/Experience"));
const Education = lazy(() => import("../components/Education"));

const ExperiencePage = () => {
  return (
    <div className="pt-20">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        <section id="experience" aria-label="Experience section">
          <Experience />
        </section>
        <section id="education" aria-label="Education section">
          <Education />
        </section>
      </Suspense>
    </div>
  );
};

export default ExperiencePage;
