import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl glass p-10 md:p-16 text-center fade-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">About Me</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I'm <span className="font-semibold text-sky-400">Jeffery Onome Emuodafevware</span>, a
          passionate <span className="text-sky-400">Full Stack Software Engineer</span> and{" "}
          <span className="text-purple-400">AI/ML Expert</span> driven by a deep love for building
          intelligent, scalable, and user-centric digital experiences.
        </p>

        <p className="text-gray-400 mt-6 leading-relaxed">
          I bridge creativity and engineering — crafting interfaces that *feel* good while
          performing flawlessly under the hood. Whether it's deploying a model to production or
          architecting a full-stack system from scratch, I bring the same energy: elegance,
          precision, and purpose.
        </p>

        <p className="text-gray-400 mt-6 leading-relaxed">
          My work philosophy? **Build things that last.** I'm obsessed with efficiency, obsessed
          with learning, and always chasing that clean balance between functionality and aesthetics.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
