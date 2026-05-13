```tsx
"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RectTipProps {
  heading: string;
  description: string;
  photo: string;
  link: string;
  width?: string; // e.g., "w-48"
  height?: string; // e.g., "h-20"
  className?: string;
}

const RectTipComp = ({
  heading,
  description,
  photo,
  link,
  width = "w-42",
  height = "h-16",
  className = ""
}: RectTipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute -top-20 left-1/2 z-40 flex -translate-x-1/2 gap-2 rounded-md border border-gray-300  p-2 text-xs backdrop-blur-2xl dark:text-white ${width} ${height}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            exit={{ opacity: 0, y: 10 }}
          >
            <img
              src={photo}
              alt={heading}
              className="aspect-square h-full shrink-0 rounded-md object-cover"
            />
            <div className="flex flex-col justify-center overflow-hidden">
              <p className="font-bold truncate">{heading}</p>
              <p className="text-gray-500 dark:text-gray-400 line-clamp-2 leading-tight">
                {description}
              </p>
            </div>
          </motion.a>
        )}
      </AnimatePresence>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black transition-opacity hover:opacity-70 dark:text-white"
      >
        {heading}
      </a>
    </div>
  );
};

export default RectTipComp;


```