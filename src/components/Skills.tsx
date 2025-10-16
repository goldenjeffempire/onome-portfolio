import { motion } from "framer-motion";
import { useState } from "react";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: SkillItem[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastAPI", level: 88 },
      { name: "PostgreSQL / MongoDB", level: 85 },
      { name: "REST / GraphQL APIs", level: 90 },
    ],
  },
  {
    category: "AI/ML Engineering",
    icon: "🤖",
    skills: [
      { name: "TensorFlow / PyTorch", level: 87 },
      { name: "NLP & LLMs", level: 85 },
      { name: "Computer Vision", level: 82 },
      { name: "Model Deployment", level: 88 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker / CI/CD", level: 85 },
      { name: "AWS / Cloud Services", level: 80 },
      { name: "Linux / Bash", level: 88 },
    ],
  },
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-16">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(categoryIndex)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="glass p-8 rounded-2xl hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-sky-400">{category.category}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === categoryIndex ? 1 : 0.7 }}
                        className="text-sky-400 text-sm font-semibold"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.2,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-sky-500 to-purple-500 rounded-full relative"
                      >
                        <motion.div
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 bg-white/20"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg">
            Constantly learning and exploring new technologies to stay at the cutting edge of innovation
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
