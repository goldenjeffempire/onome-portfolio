import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Founder & Lead Engineer",
    company: "OnomeLabs Technologies",
    period: "Jan 2025 — Present",
    location: "Remote",
    description: `
      Building Echoverse, an AI-powered platform integrating automation & machine learning.
      Designed full-stack architecture and AI pipelines using TensorFlow & PyTorch.
      Driving product vision, development, and deployment strategies.
    `,
  },
  {
    role: "AI/ML Engineer",
    company: "Freelance & Independent Projects",
    period: "Jan 2024 — Present",
    location: "Remote",
    description: `
      Developed ML models for NLP & predictive analytics.
      Deployed AI models into production-ready APIs.
      Researched generative AI use cases for real-world applications.
    `,
  },
  {
    role: "Lead Backend Developer",
    company: "GlobalXchange (ALX Capstone Project)",
    period: "Jun 2024 — Oct 2024",
    location: "Remote",
    description: `
      Led backend engineering for a trading platform using Django & PostgreSQL.
      Optimized database performance, boosting efficiency by 40%.
      Built APIs supporting secure transactions and user features.
    `,
  },
  {
    role: "Backend Software Engineer Intern",
    company: "ALX SE Program",
    period: "Aug 2023 — Oct 2024",
    location: "Remote",
    description: `
      Built backend services with Django & REST APIs.
      Integrated secure authentication and database management.
      Collaborated with cross-functional teams on production-grade applications.
    `,
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-10">
          Professional Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl shadow-lg hover:shadow-sky-500/10 transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-lg p-2 -m-2 transition-all"
                aria-expanded={openIndex === index}
                aria-controls={`experience-${index}`}
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="text-xl font-semibold text-sky-400">{exp.role}</h3>
                    <span className="text-gray-500 text-sm whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.location}</p>
                </div>
                <ChevronDown
                  size={22}
                  className={`ml-4 transition-transform ${
                    openIndex === index ? "rotate-180 text-sky-400" : "text-gray-500"
                  }`}
                  aria-hidden="true"
                />
              </button>

              {openIndex === index && (
                <motion.div
                  id={`experience-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-400 mt-4 leading-relaxed"
                  role="region"
                  aria-label={`${exp.role} details`}
                >
                  {exp.description.split('\n').map((line, i) => (
                    line.trim() && (
                      <p key={i} className="mb-2 flex items-start">
                        <span className="text-sky-400 mr-2">•</span>
                        <span>{line.trim()}</span>
                      </p>
                    )
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
