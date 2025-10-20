import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { config } from "../config/env";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
        break;
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const mailtoLink = `mailto:${config.contact.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        setTouched({});
      }, 3000);
    } catch {
      setSubmitStatus('error');
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const inputClasses = (fieldName: keyof FormErrors) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const isValid = touched[fieldName] && !errors[fieldName] && formData[fieldName];
    
    return `w-full bg-gray-800/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all ${
      hasError
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
        : isValid
        ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20'
        : 'border-gray-700 focus:border-sky-500 focus:ring-sky-500/20'
    }`;
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
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 glass border border-sky-500/30 rounded-full px-4 py-2 mb-4"
          >
            <Mail className="w-4 h-4 text-sky-400" />
            <span className="text-sm text-sky-300">Get In Touch</span>
          </motion.div>
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
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href={`mailto:${config.contact.email}`}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 text-gray-300 hover:text-sky-400 transition-colors group"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center group-hover:bg-sky-500/20 transition-colors"
                >
                  <Mail className="w-5 h-5 text-sky-400" />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{config.contact.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${config.contact.phonePrimary.replace(/\s/g, '')}`}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors"
                >
                  <Phone className="w-5 h-5 text-purple-400" />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{config.contact.phonePrimary}</p>
                  <p className="font-medium text-sm">{config.contact.phoneSecondary}</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 text-gray-300 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center group-hover:bg-sky-500/20 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-sky-400" />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{config.contact.location}</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-6">
              <p className="text-gray-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                <motion.a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href={config.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href={config.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
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
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                </motion.div>
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
                    onBlur={handleBlur}
                    className={inputClasses('name')}
                    placeholder="John Doe"
                  />
                  <AnimatePresence>
                    {touched.name && errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
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
                    onBlur={handleBlur}
                    className={inputClasses('email')}
                    placeholder="john@example.com"
                  />
                  <AnimatePresence>
                    {touched.email && errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
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
                    onBlur={handleBlur}
                    className={inputClasses('subject')}
                    placeholder="Project Collaboration"
                  />
                  <AnimatePresence>
                    {touched.subject && errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.subject}
                      </motion.p>
                    )}
                  </AnimatePresence>
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
                    onBlur={handleBlur}
                    rows={5}
                    className={`${inputClasses('message')} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  <AnimatePresence>
                    {touched.message && errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(14, 165, 233, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Opening Email...
                    </>
                  ) : (
                    <>
                      <motion.div
                        whileHover={{ x: 5 }}
                      >
                        <Send size={18} />
                      </motion.div>
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
