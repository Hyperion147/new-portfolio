import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {


  useGSAP(() => {
    gsap.from((".desc"), {
      y: 200,
      duration: 1,
      scrollTrigger: {
        trigger: ".desc",
        start: "top 80%"
      }
    })
    gsap.from((".langScroll"), {
      y: 200,
      duration: 2,
      scrollTrigger: {
        trigger: ".desc",
        start: "top 80%"
      }
    })
    gsap.from((".lateAbout"), {
      opacity: 0,
      duration: 2,
      delay: 3,
      scrollTrigger: {
        trigger: ".desc",
        start: "top 80%"
      }
    })
  })

  return (
    <div id='about' className='dark:bg-slate-800'>
      <div className='px-10 md:px-50 lg:px-60 mt-10 text-center'>
        <div>
          <p id='heading' className='bg-gradient-to-r from-indigo-200 to-gray-900 dark:to-slate-200 leading-right rounded-2xl bg-clip-text text-transparent text-4xl font-medium text-center desc'>Introduction</p>
        </div>

        <p className="mt-10 text-[17px] max-w-3xl dark:text-white mx-auto leading-[25px] text-center flex items-center justify-center desc">
          I am a rookie Frontend Developer with experience in Javascript, Tailwind and currently learning React alongside some libraries such as Framer motion... I am a quick learner and hoping to get projects to enhance my skills in Frontend Development!
        </p>
        <div className='flex flex-row items-center justify-center my-20 w-full langScroll'>
        <AnimatedTooltip items={languages} />
        </div>
        <div className='absolute descriptionText lateAbout left-90 top-268 opacity-40 text-3xl'>Hover Over These</div>
      </div>
    </div>
  )
}

export default AboutSection