import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 via-purple-900/50 to-black opacity-60 animate-pulse"></div>

      {/* Subtle moving circles */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-4"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gradient mb-4 fade-in">
          Jeffery Onome Emuodafevware
        </h1>
        <p className="text-lg sm:text-2xl text-gray-300 mb-8">
          Software Engineer | AI/ML Expert | Full Stack Developer
        </p>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all"
        >
          View My Work
          <ArrowRight size={20} />
        </motion.a>
      </motion.div>

      {/* Optional background 3D element placeholder */}
      {/* You could integrate a Three.js or Lottie animation here later */}
    </section>
  );
};

export default Hero;
