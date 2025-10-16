import { lazy, Suspense } from "react";

const Contact = lazy(() => import("../components/Contact"));
const Testimonials = lazy(() => import("../components/Testimonials"));

const ContactPage = () => {
  return (
    <div className="pt-20">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        <section id="testimonials" aria-label="Testimonials section">
          <Testimonials />
        </section>
        <section id="contact" aria-label="Contact section">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default ContactPage;
