import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc",
    content: "Working with Jeffery was an absolute pleasure. His expertise in AI/ML and full-stack development helped us launch our product 3 months ahead of schedule. The quality of code and attention to detail is unmatched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow Solutions",
    content: "Jeffery's ability to understand complex requirements and translate them into elegant solutions is remarkable. His work on our analytics platform exceeded all expectations. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "Not only is Jeffery technically brilliant, but he's also an excellent communicator. He kept us informed throughout the project and delivered a product that our users love. A true professional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
  },
  {
    name: "David Park",
    role: "Founder",
    company: "AI Ventures",
    content: "Jeffery's deep understanding of machine learning and his practical approach to implementation made our AI product a reality. His code is clean, well-documented, and production-ready.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
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
            className="inline-flex items-center gap-2 glass border border-sky-500/30 rounded-full px-4 py-2 mb-4"
          >
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-sky-300">Client Testimonials</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by innovative companies and startups worldwide
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative"
                >
                  <Quote className="w-12 h-12 text-sky-500/30 absolute top-8 left-8" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full blur opacity-50" />
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-20 h-20 rounded-full object-cover relative border-2 border-white/20"
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-sky-400 text-sm">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </p>
                        <div className="flex gap-1 mt-2">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed italic">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 glass p-3 rounded-full border border-white/20 text-sky-400 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 glass p-3 rounded-full border border-white/20 text-sky-400 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-sky-500 w-8"
                  : "bg-gray-600 hover:bg-sky-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
