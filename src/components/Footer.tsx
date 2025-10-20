import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { config } from "../config/env";
import { portfolioConfig } from "../config/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { label: "Home", route: "/" },
    { label: "Projects", route: "/projects" },
    { label: "Experience", route: "/experience" },
    { label: "Blog", route: "/blog" },
  ];

  const moreLinks = [
    { label: "Contact", route: "/contact" },
  ];

  const handleLinkClick = (route: string) => {
    if (location.pathname === route) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(route);
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: config.social.linkedin,
      label: "LinkedIn",
      color: "hover:text-sky-400 hover:bg-sky-500/20",
    },
    {
      icon: <Github size={20} />,
      href: config.social.github,
      label: "GitHub",
      color: "hover:text-purple-400 hover:bg-purple-500/20",
    },
    {
      icon: <Twitter size={20} />,
      href: config.social.twitter,
      label: "Twitter",
      color: "hover:text-sky-400 hover:bg-sky-500/20",
    },
    {
      icon: <Mail size={20} />,
      href: `mailto:${config.contact.email}`,
      label: "Email",
      color: "hover:text-purple-400 hover:bg-purple-500/20",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/50 backdrop-blur-xl" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">{portfolioConfig.personal.firstName} {portfolioConfig.personal.lastName}</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              {portfolioConfig.footer.tagline}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={() => handleLinkClick(link.route)}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-sky-400 transition-colors inline-block text-left"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={() => handleLinkClick(link.route)}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-sky-400 transition-colors inline-block text-left"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} {portfolioConfig.personal.name}. {portfolioConfig.footer.copyright}
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            {portfolioConfig.footer.builtWith.split('React')[0]} <Heart size={14} className="text-red-500 fill-red-500" /> {portfolioConfig.footer.builtWith.split('with')[1]}
          </p>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center text-sky-400 hover:text-white transition-colors z-40 border border-sky-500/30"
        aria-label="Scroll to top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
