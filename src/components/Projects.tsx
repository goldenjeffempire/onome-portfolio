import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  size?: "small" | "medium" | "large";
}

const projects: Project[] = [
  {
    title: "AI-Powered Content Generator",
    description: "Advanced NLP application using GPT models to generate high-quality content. Features real-time streaming, context management, and multi-language support.",
    tech: ["React", "Python", "FastAPI", "OpenAI", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    featured: true,
    size: "large",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Full-stack analytics platform with live data visualization, custom reporting, and predictive analytics powered by machine learning models.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Chart.js", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    featured: true,
    size: "medium",
  },
  {
    title: "E-Commerce Platform",
    description: "Scalable online marketplace with advanced search, payment integration, inventory management, and AI-powered product recommendations.",
    tech: ["React", "Express", "MongoDB", "Stripe", "AWS"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
    size: "medium",
  },
  {
    title: "Computer Vision Object Detector",
    description: "Deep learning model for real-time object detection and classification. Deployed with TensorFlow Lite for edge computing applications.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop",
    size: "small",
  },
  {
    title: "Social Media Management Tool",
    description: "Comprehensive platform for scheduling posts, analyzing engagement metrics, and managing multiple social media accounts from one dashboard.",
    tech: ["TypeScript", "React", "Node.js", "Redis", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    size: "small",
  },
  {
    title: "Healthcare Appointment System",
    description: "HIPAA-compliant patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "WebRTC"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    size: "medium",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getGridClass = (size?: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-1";
      case "small":
        return "md:col-span-1";
      default:
        return "md:col-span-1";
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl w-full"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            className="inline-flex items-center gap-2 glass border border-purple-500/30 rounded-full px-4 py-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Featured Work</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Projects & Portfolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of innovative solutions built with cutting-edge technologies
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative glass rounded-2xl overflow-hidden ${getGridClass(project.size)}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute top-4 right-4"
                  >
                    <span className="bg-gradient-to-r from-sky-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                      Featured
                    </span>
                  </motion.div>
                )}
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.h3
                  className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:line-clamp-3 transition-all">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-xs glass text-sky-300 px-3 py-1 rounded-full border border-sky-500/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.8)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.button>
                  )}
                  {project.githubUrl && (
                    <motion.button
                      whileHover={{ scale: 1.05, borderColor: "rgba(14, 165, 233, 0.8)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </motion.button>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <button className="w-full bg-gray-800 text-gray-400 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                      Private Project
                    </button>
                  )}
                </div>
              </div>

              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-sky-500/30 rounded-2xl transition-colors pointer-events-none"
                whileHover={{
                  boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
