import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { portfolioConfig } from "../config/portfolio";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative glass p-12 md:p-16 rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {portfolioConfig.cta.title}{" "}
                <span className="text-gradient">{portfolioConfig.cta.highlightedText}</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {portfolioConfig.cta.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.button
                onClick={() => navigate(portfolioConfig.cta.buttons.primary.target)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(14, 165, 233, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
              >
                {portfolioConfig.cta.buttons.primary.text}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>

              <motion.button
                onClick={() => navigate(portfolioConfig.cta.buttons.secondary.target)}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(14, 165, 233, 0.1)",
                  borderColor: "rgba(14, 165, 233, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 glass border border-sky-500/30 text-sky-400 px-8 py-4 rounded-full text-lg font-semibold transition-all"
              >
                <Mail size={20} />
                {portfolioConfig.cta.buttons.secondary.text}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
