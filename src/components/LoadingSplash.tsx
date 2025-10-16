import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingSplashProps {
  onLoadingComplete: () => void;
}

const LoadingSplash = ({ onLoadingComplete }: LoadingSplashProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-20 h-20 mx-auto mb-6"
          >
            <div className="w-full h-full bg-gradient-to-r from-sky-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">JO</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-gradient mb-2"
          >
            Jeffery Onome
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm"
          >
            Software Engineer & AI/ML Expert
          </motion.p>
        </motion.div>

        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
            className="h-full bg-gradient-to-r from-sky-500 to-purple-500"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-500 text-xs mt-4"
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingSplash;
