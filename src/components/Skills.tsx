import { motion } from "framer-motion";

const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
  Frameworks: ["React", "Next.js", "Node.js", "Express", "TensorFlow", "PyTorch"],
  Tools: ["Git", "Docker", "Linux", "Firebase", "Vite", "Tailwind CSS"],
  AI_ML: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "LLMs"],
};

const Skills = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-10">Core Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, skillList], idx) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-2xl shadow-lg hover:shadow-sky-600/20 transition-all"
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-sky-400 mb-4">{category}</h3>
              <ul className="flex flex-wrap justify-center gap-3">
                {skillList.map((skill) => (
                  <li
                    key={skill}
                    className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full text-sm hover:bg-sky-500 hover:text-white transition-all"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
