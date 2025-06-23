import { useEffect, useState } from "react";
import sunIcon from "/Sun.svg";
import moonIcon from "/Moon.svg";

const ToggleDark = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      // Return true if explicitly dark or if no preference and system prefers dark
      return savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    }
    return false;
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-7 border-2 md:border-none border-gray-500      
            sm:w-12 sm:h-6 
            md:w-14 md:h-7
            lg:w-16 lg:h-8 
            rounded-full
            bg-gray-300 dark:bg-gray-700 
            transition-all duration-300 linker
          "
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span
        className={`
            absolute top-0.5 left-0.5 
            w-5 h-5       
            sm:w-5 sm:h-5   
            md:w-6 md:h-6  
            lg:w-7 lg:h-7 
            rounded-full 
            border border-gray-300 dark:border-gray-500 
            bg-white dark:bg-gray-400 
            shadow-md 
            transform transition-all duration-300 
            flex items-center justify-center
            ${isDark
            ? "translate-x-[1.25rem] sm:translate-x-[1.5rem] md:translate-x-[1.75rem] lg:translate-x-[2rem]"
            : "translate-x-0"
          }
          `}
      >
        {isDark ? (
          <img
            src={moonIcon}
            alt="Moon"
            className="
                  w-3 h-3   
                  sm:w-3 sm:h-3   
                  md:w-3.5 md:h-3.5 
                  lg:w-4 lg:h-4  
                "
          />
        ) : (
          <img
            src={sunIcon}
            alt="Sun"
            className="
                  w-3 h-3  
                  sm:w-3 sm:h-3  
                  md:w-3.5 md:h-3.5 
                  lg:w-4 lg:h-4 
                "
          />
        )}
      </span>
    </button>
  );
};

export default ToggleDark;
