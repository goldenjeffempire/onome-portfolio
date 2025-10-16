import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:jeffemuodafe124@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open default email client
      window.location.href = mailtoLink;

      // Show success message after a brief delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setIsSubmitting(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Let's Collaborate</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you have an exciting project idea, a role that needs filling, or just want to
            connect — I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:jeffemuodafe124@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-gray-300 hover:text-sky-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">jeffemuodafe124@gmail.com</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-gray-300"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+234 805 258 7419</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-gray-300"
              >
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Lagos, Nigeria</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-6">
              <p className="text-gray-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/jefferyonome"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/jefferyonome"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://twitter.com/jefferyonome"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-2xl space-y-6"
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center h-full py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Email Client Opened!</h3>
                <p className="text-gray-400 text-center">
                  Your default email app should open. Send the email to complete your message.
                </p>
              </motion.div>
            ) : submitStatus === 'error' ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center h-full py-12"
              >
                <AlertCircle className="w-16 h-16 text-red-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Error Occurred</h3>
                <p className="text-gray-400 text-center mb-4">
                  Unable to open email client. Please email me directly at:
                </p>
                <a 
                  href="mailto:jeffemuodafe124@gmail.com" 
                  className="text-sky-400 hover:text-sky-300 font-medium"
                >
                  jeffemuodafe124@gmail.com
                </a>
              </motion.div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-colors"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Opening Email...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send via Email
                    </>
                  )}
                </motion.button>
                
                <p className="text-xs text-gray-500 text-center">
                  This will open your default email client with the message pre-filled
                </p>
              </>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
