import React from 'react'
import { motion } from 'motion/react'



const AboutSection = () => {
  return (
    <div className='px-10 md:px-50 lg:px-60'>
    <motion.div id='about'>
        <p id='heading' className='text-5xl font-medium text-gray-700 '>Introduction</p>
    </motion.div>

    <motion.p  className="text-gray-800 mt-4 text-[17px] max-w-3xl leading-[25px]">
    I am a rookie Frontend Developer with experience in Javascript, Tailwind and currently learning React alongside some libraries such as Framer motion... I am a quick learner and hoping to get projects to enhance my skills in Frontend Development!
    </motion.p>
    </div>
  )
}

export default AboutSection