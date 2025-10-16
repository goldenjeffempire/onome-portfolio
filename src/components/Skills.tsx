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
    category: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript / TypeScript", level: 92 },
      { name: "C / C++", level: 85 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚙️",
    skills: [
      { name: "Django / Flask", level: 93 },
      { name: "React / Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "TensorFlow / PyTorch", level: 87 },
    ],
  },
  {
    category: "Databases & Tools",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL / MySQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Git / Docker", level: 92 },
      { name: "REST APIs / GraphQL", level: 90 },
    ],
  },
  {
    category: "Design & Cloud",
    icon: "🎨",
    skills: [
      { name: "HTML / CSS / Tailwind", level: 95 },
      { name: "UI/UX Design Systems", level: 88 },
      { name: "AWS / Nginx", level: 80 },
    ],
  },
];

const softSkills = [
  "Leadership",
  "Problem-Solving",
  "Communication",
  "Agile Methodology",
  "Team Collaboration",
  "Strategic Thinking",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                <motion.span 
                  className="text-4xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {category.icon}
                </motion.span>
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
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold text-purple-400 mb-6 text-center">Soft Skills & Competencies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass px-6 py-3 rounded-full border border-purple-500/30 text-purple-300 font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg">
            Constantly evolving and mastering new technologies to deliver cutting-edge solutions
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
