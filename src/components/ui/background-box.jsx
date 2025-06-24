import React from "react";
import { motion } from "motion/react";
import { cn } from "../utils/Utils";

export const BoxesCore = ({
  className,
  ...rest
}) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(43).fill(1);
  let colors = [
    "#93c5fd",
    "#f9a8d4",
    "#86efac",
    "#fde047",
    "#fca5a5",
    "#d8b4fe",
    "#93c5fd",
    "#a5b4fc",
    "#c4b5fd",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "hidden absolute -top-1/4 left-1/4 z-0 md:flex min-h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className
      )}
      {...rest}>
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className="relative h-10 w-16 border-l border-slate-100">
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="relative h-10 w-16 border-t border-r border-slate-200 dark:border-slate-700 opacity-60">
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
