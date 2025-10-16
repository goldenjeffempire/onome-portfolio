import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    title: "ALX Software Engineering Program",
    institution: "Backend Development Specialization",
    period: "2023 — 2024",
    details:
      "Completed comprehensive backend engineering program focusing on Django, REST APIs, database architecture, and scalable system design. Graduated with certification in Backend Specialization.",
    icon: <GraduationCap size={28} className="text-sky-400" />,
  },
  {
    title: "Design System University",
    institution: "UI/UX & Frontend Design",
    period: "2023 — 2024",
    details:
      "Mastered modern design systems, component architecture, and user experience principles. Focused on creating accessible, responsive, and aesthetically refined interfaces.",
    icon: <Award size={26} className="text-purple-400" />,
  },
  {
    title: "EdX Computer Science Program",
    institution: "Software Development Fundamentals",
    period: "2022 — 2023",
    details:
      "Built foundational knowledge in algorithms, data structures, and software engineering principles through comprehensive online coursework.",
    icon: <BookOpen size={26} className="text-sky-400" />,
  },
  {
    title: "National Comprehensive School, Warri",
    institution: "Secondary School Certificate (SSCE)",
    period: "2016",
    details:
      "Completed secondary education with strong foundation in mathematics, sciences, and analytical thinking.",
    icon: <GraduationCap size={26} className="text-purple-400" />,
  },
];

const Education = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-10">
          Education & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-6 rounded-2xl shadow-lg hover:shadow-purple-600/20 transition-all text-left"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="mt-1"
                >
                  {edu.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-sky-400 mb-1">{edu.title}</h3>
                  <p className="text-gray-300 text-sm mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-xs mb-3">{edu.period}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 glass p-6 rounded-xl inline-block"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Certificate Highlights</h3>
          <p className="text-gray-400">
            🏆 Software Engineering Backend Specialization - ALX (2024)
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
