import BallCanvas from "./canvas/BallCanvas"
import { technologies } from "../constants/tech"

const Tech = () => {
  return (
    <div className="mt-30 mb-30 flex flex-row flex-wrap justify-center gap-x-20">
      {technologies.map((technology) => (
        <div className="w-28 shadow-lg rounded-full h-20 mb-5 hover:bg-gray-200 dark:bg-slate-800" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech