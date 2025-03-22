import BallCanvas from "./canvas/BallCanvas"
import { technologies } from "../constants/tech"

const Tech = () => {
  return (
    <div className="mt-10 mb-30 flex flex-row flex-wrap justify-center gap-x-20">
      {technologies.map((technology) => (
        <div className="w-28 shadow-lg rounded-full h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech