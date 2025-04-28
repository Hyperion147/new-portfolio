import React from 'react'
import { AnimatedTooltip } from '../ui/animated-tooltip';

const languages = [
  {
    id: 1,
    name: "HTML",
    designation: "",
    image:
      "/tech/html.png",
  },
  {
    id: 2,
    name: "CSS",
    image:
      "/tech/css.png",
  },
  {
    id: 3,
    name: "Javascript",
    image:
      "/tech/javascript.png",
  },
  {
    id: 4,
    name: "React",
    image:
      "/tech/reactjs.png",
  },
  {
    id: 5,
    name: "Tailwind",
    image:
      "/tech/tailwind.png",
  },
  {
    id: 6,
    name: "Typescript",
    image:
      "/tech/typescript.png",
  },
  {
    id: 7,
    name: "GIT",
    image:
      "/tech/git.png",
  },
  {
    id: 8,
    name: "Figma",
    image:
      "/tech/figma.png",
  },
];


const AboutSection = () => {
  return (
    <div id='about' className='dark:bg-slate-800'>
      <div className='px-10 md:px-50 lg:px-60 mt-10 text-center'>
        <div>
          <p id='heading' className='bg-gradient-to-r from-indigo-200 to-gray-900 dark:to-slate-200 leading-right rounded-2xl bg-clip-text text-transparent text-4xl font-medium text-center'>Introduction</p>
        </div>

        <p className="mt-10 text-[17px] max-w-3xl dark:text-white mx-auto leading-[25px] text-center flex items-center justify-center">
          I am a rookie Frontend Developer with experience in Javascript, Tailwind and currently learning React alongside some libraries such as Framer motion... I am a quick learner and hoping to get projects to enhance my skills in Frontend Development!
        </p>
        <div className='flex flex-row items-center justify-center my-20 w-full'>
        <AnimatedTooltip items={languages} />
        </div>

      </div>
    </div>
  )
}

export default AboutSection