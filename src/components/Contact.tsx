import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl glass p-10 md:p-16 fade-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Let’s Collaborate</h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Whether you have an exciting project idea, a role that needs filling, or just want to
          connect — I’d love to hear from you. Let's build something innovative and meaningful
          together.
        </p>

        {/* Contact Info */}
        <div className="space-y-3 mb-8">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Mail size={18} className="text-sky-400" />
            <a href="mailto:jeffemuodafe124@gmail.com" className="hover:text-sky-400">
              jeffemuodafe124@gmail.com
            </a>
          </p>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Phone size={18} className="text-sky-400" />
            <span>+234 805 258 7419 | +234 901 704 8791</span>
          </p>
          <p className="text-gray-400">📍 Lagos, Nigeria</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-10">
          <motion.a
            href="https://www.linkedin.com/in/jefferyonome"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-sky-400 transition-all"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href="https://github.com/jefferyonome"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-sky-400 transition-all"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href="https://twitter.com/jefferyonome"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-sky-400 transition-all"
          >
            <Twitter size={28} />
          </motion.a>
        </div>

        {/* Call to Action Button */}
        <motion.a
          href="mailto:jeffemuodafe124@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg shadow-sky-500/20 transition-all"
        >
          Let’s Talk
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
