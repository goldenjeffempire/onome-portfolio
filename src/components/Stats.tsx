import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  {
    value: 3,
    suffix: "+",
    label: "Years Experience",
    icon: "🚀",
  },
  {
    value: 25,
    suffix: "+",
    label: "Projects Completed",
    icon: "💼",
  },
  {
    value: 15,
    suffix: "+",
    label: "Happy Clients",
    icon: "😊",
  },
  {
    value: 100,
    suffix: "%",
    label: "Success Rate",
    icon: "🎯",
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-gradient">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-2xl text-center hover:shadow-2xl hover:shadow-sky-500/20 transition-all"
            >
              <motion.div
                className="text-4xl mb-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {stat.icon}
              </motion.div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
