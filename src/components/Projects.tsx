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
}

const projects: Project[] = [
  {
    title: "AI-Powered Content Generator",
    description: "Advanced NLP application using GPT models to generate high-quality content. Features real-time streaming, context management, and multi-language support.",
    tech: ["React", "Python", "FastAPI", "OpenAI", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Full-stack analytics platform with live data visualization, custom reporting, and predictive analytics powered by machine learning models.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Chart.js", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "Scalable online marketplace with advanced search, payment integration, inventory management, and AI-powered product recommendations.",
    tech: ["React", "Express", "MongoDB", "Stripe", "AWS"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
  },
  {
    title: "Computer Vision Object Detector",
    description: "Deep learning model for real-time object detection and classification. Deployed with TensorFlow Lite for edge computing applications.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop",
  },
  {
    title: "Social Media Management Tool",
    description: "Comprehensive platform for scheduling posts, analyzing engagement metrics, and managing multiple social media accounts from one dashboard.",
    tech: ["TypeScript", "React", "Node.js", "Redis", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
  },
  {
    title: "Healthcare Appointment System",
    description: "HIPAA-compliant patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "WebRTC"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
  },
];

const Projects = () => {
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
            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group relative glass rounded-2xl overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-sky-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-sky-500/10 text-sky-300 px-3 py-1 rounded-full border border-sky-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.button>
                  )}
                  {project.githubUrl && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-700 hover:border-sky-500 text-gray-300 hover:text-sky-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-500/20 rounded-2xl transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
