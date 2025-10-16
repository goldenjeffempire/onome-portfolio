import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "University of Lagos",
    period: "2016 — 2020",
    details:
      "Focused on algorithms, artificial intelligence, data structures, and software systems design. Graduated with strong foundation in full stack development and machine learning.",
    icon: <GraduationCap size={28} className="text-sky-400" />,
  },
  {
    title: "Professional Certification in Machine Learning",
    institution: "Coursera / Stanford Online",
    period: "2021",
    details:
      "Completed advanced coursework in supervised learning, neural networks, and deep learning architectures. Applied ML principles in several production-grade projects.",
    icon: <Award size={26} className="text-purple-400" />,
  },
];

const Education = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-10">
          Education & Certifications
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250, damping: 12 }}
              className="glass p-8 rounded-2xl shadow-lg hover:shadow-purple-600/20"
            >
              <div className="flex items-center justify-center mb-4">{edu.icon}</div>
              <h3 className="text-xl font-semibold text-sky-400">{edu.title}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-gray-500 text-sm mb-4">{edu.period}</p>
              <p className="text-gray-400 leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
