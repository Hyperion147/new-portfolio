import React from 'react'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
        <div className='text-center z-10 px-4'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 pb-2 bg-gradient-to-r from-indigo-200 to-gray-500 leading-right rounded-2xl bg-clip-text text-transparent'>Hello, I'm Suryansu Singh</h1>
            <p className='text-gray-500 text-lg mb-8 max-w-lg mx-auto'>
                I develop Responsive Websites using React and Tailwind...
            </p>
        </div>

        <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
            <a href="#about">
                <div className='w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2'>
                    <motion.div
                    animate={{
                        y: [0,24,0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}  className='w-3 h-3 rounded-full bg-gray-400'
                    />
                </div>
            </a>
        </div>

    </section>
  )
}

export default Hero