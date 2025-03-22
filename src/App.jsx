import './App.css'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Mobile from './components/Mobile'
import Hero from './components/sections/Hero'
import AboutSection from './components/sections/AboutSection'
import { cn } from "./components/utils"
import { useState } from 'react'

function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [hamMenu, setHamMenu] = useState(false)

  return (
    <>
    <div className="relative w-full items-center bg-white">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {!isLoaded && <Loading onComplete={()=> setIsLoaded(true)} /> }
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <Navbar hamMenu={hamMenu} setHamMenu={setHamMenu} />
            <Mobile hamMenu={hamMenu} setHamMenu={setHamMenu} />
            <Hero />
            <AboutSection />
    
      </div>
      </div>
    </>
  )
}

export default App
