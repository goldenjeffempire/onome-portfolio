import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingIcons = [
    { icon: "💻", delay: 0, duration: 3 },
    { icon: "🚀", delay: 0.5, duration: 4 },
    { icon: "⚡", delay: 1, duration: 3.5 },
    { icon: "🎯", delay: 1.5, duration: 4.5 },
    { icon: "🤖", delay: 2, duration: 3.8 },
  ];

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 via-purple-900/50 to-black opacity-60"></div>

      <motion.div
        className="absolute -top-40 -left-20 w-96 h-96 bg-sky-500/30 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{
          x: -mousePosition.x * 2,
          y: -mousePosition.y * 2,
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${15 + index * 18}%`,
            top: `${20 + (index % 3) * 25}%`,
            x: mousePosition.x * (index % 2 === 0 ? 0.5 : -0.5),
            y: mousePosition.y * (index % 2 === 0 ? 0.5 : -0.5),
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ opacity }}
        className="z-10 px-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 glass border border-sky-500/30 rounded-full px-4 py-2 mb-6 cursor-pointer"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
          </motion.div>
          <span className="text-sm text-sky-300">Available for exciting projects</span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gradient mb-4"
          animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.02 }}
        >
          Jeffery Onome Emuodafevware
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Software Engineer | AI/ML Expert | Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(14, 165, 233, 0.5)",
              rotateX: 5,
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all"
            style={{ transformStyle: "preserve-3d" }}
          >
            View My Work
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>

          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(14, 165, 233, 0.1)",
              borderColor: "rgba(14, 165, 233, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 glass border border-sky-500/30 text-sky-400 px-6 py-3 rounded-full text-lg font-semibold transition-all"
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 cursor-pointer"
          whileHover={{ scale: 1.2, color: "#38bdf8" }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
