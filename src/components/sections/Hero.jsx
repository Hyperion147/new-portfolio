import React from 'react'
import { motion } from 'motion/react'
import { cn } from '../Utils'
import { Link as ScrollLink } from 'react-scroll'

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center bg-white dark:bg-slate-800 min-h-screen mb-20">
    <div
      className={cn(
        "absolute inset-0",
        "bg-[length:20px_20px]",
        "bg-[image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:opacity-30"
      )}
    />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
        <div className='text-center z-10 px-4'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 pb-2 bg-gradient-to-r from-indigo-200 to-gray-500 dark:to-white leading-right rounded-2xl bg-clip-text text-transparent'>Hello, I'm Suryansu Singh</h1>
            <p className='text-gray-500 text-lg mb-8 max-w-lg mx-auto dark:text-gray-200'>
                I develop Responsive Websites using React and Tailwind...
            </p>
        </div>

        <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
            <ScrollLink to="about" smooth={true} duration={1000} offset={-120}>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2 dark:border-white dark:bg-slate-700'>
                    <motion.div
                    animate={{
                        y: [0,24,0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}  className='w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-200'
                    />
                </div>
            </ScrollLink>
        </div>

    </section>
    </div>
  )
}

export default Hero