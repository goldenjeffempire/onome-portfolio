import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Software Engineer",
    company: "OnomeLabs Technologies",
    period: "2023 — Present",
    description: `
      Leading the architecture and development of full-scale web applications 
      using React, Node.js, and AI-driven systems. Building the company’s foundational 
      software products with an emphasis on performance, scalability, and sleek UI/UX. 
      Mentoring junior engineers and driving AI/ML integration into core products.
    `,
  },
  {
    role: "AI/ML Developer",
    company: "Freelance Projects",
    period: "2021 — 2023",
    description: `
      Designed and deployed ML models for real-world use cases including predictive 
      analytics, recommendation systems, and natural language interfaces. 
      Optimized model performance for low-resource environments.
    `,
  },
  {
    role: "Software Developer Intern",
    company: "TechLabs Africa",
    period: "2020 — 2021",
    description: `
      Gained deep hands-on experience in frontend and backend development. 
      Collaborated with senior developers to deliver responsive, production-grade web applications. 
      Focused on debugging, testing, and version control best practices.
    `,
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-10">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="glass p-6 rounded-xl shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold text-sky-400">{exp.role}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
                <ChevronDown
                  size={22}
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180 text-sky-400" : "text-gray-500"
                  }`}
                />
              </button>

              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-400 mt-4 leading-relaxed"
                >
                  {exp.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
