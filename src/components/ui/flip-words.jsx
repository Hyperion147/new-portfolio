import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FlipWords = ({ words, duration = 3000 }) => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div className="inline-block relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="inline-block mx-1 text-slate-500 dark:text-slate-300 font-medium"
        >
          {words[currentWord]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};