import { motion } from "framer-motion";
import { Code2, Rocket, Target } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gradient text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Jeffery Onome Emuodafevware"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm <span className="font-semibold text-sky-400">Jeffery Onome Emuodafevware</span>, a
              passionate <span className="text-sky-400">Full Stack Software Engineer</span> and{" "}
              <span className="text-purple-400">AI/ML Expert</span> driven by a deep love for building
              intelligent, scalable, and user-centric digital experiences.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I bridge creativity and engineering — crafting interfaces that <span className="text-sky-400 italic">feel good</span> while
              performing flawlessly under the hood. Whether it's deploying a model to production or
              architecting a full-stack system from scratch, I bring the same energy: elegance,
              precision, and purpose.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-4 rounded-xl text-center"
              >
                <Code2 className="w-8 h-8 mx-auto mb-2 text-sky-400" />
                <h3 className="font-semibold text-white">Clean Code</h3>
                <p className="text-xs text-gray-400">Elegant & Maintainable</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-4 rounded-xl text-center"
              >
                <Rocket className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <h3 className="font-semibold text-white">Innovation</h3>
                <p className="text-xs text-gray-400">AI-Powered Solutions</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-4 rounded-xl text-center"
              >
                <Target className="w-8 h-8 mx-auto mb-2 text-sky-400" />
                <h3 className="font-semibold text-white">Precision</h3>
                <p className="text-xs text-gray-400">Detail-Oriented</p>
              </motion.div>
            </div>

            <p className="text-gray-400 leading-relaxed pt-4">
              My work philosophy? <span className="font-bold text-sky-400">Build things that last.</span> I'm obsessed with efficiency, obsessed
              with learning, and always chasing that clean balance between functionality and aesthetics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
