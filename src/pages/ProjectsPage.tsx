import { lazy, Suspense } from "react";

const Projects = lazy(() => import("../components/Projects"));

const ProjectsPage = () => {
  return (
    <div className="pt-20">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        <section id="projects" aria-label="Projects section">
          <Projects />
        </section>
      </Suspense>
    </div>
  );
};

export default ProjectsPage;
