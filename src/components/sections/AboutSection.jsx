import React from 'react'
import Tech from '../Tech'
import { motion } from 'motion/react'


const AboutSection = () => {
  return (
    <div id='about'>
      <div className='px-10 md:px-50 lg:px-60 mt-10 text-center'>
        <motion.div>
          <p id='heading' className='bg-gradient-to-r from-indigo-200 to-gray-900 leading-right rounded-2xl bg-clip-text text-transparent text-4xl font-medium text-center'>Introduction</p>
        </motion.div>

        <motion.p className="mt-10 text-[17px] max-w-3xl mx-auto leading-[25px] text-center flex items-center justify-center">
          I am a rookie Frontend Developer with experience in Javascript, Tailwind and currently learning React alongside some libraries such as Framer motion... I am a quick learner and hoping to get projects to enhance my skills in Frontend Development!
        </motion.p>
        <Tech />
      </div>
    </div>
  )
}

export default AboutSection