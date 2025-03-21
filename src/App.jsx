import './App.css'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Mobile from './components/Mobile'
import Hero from './components/sections/Hero'
import AboutSection from './components/sections/AboutSection'
import { useState } from 'react'

function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [hamMenu, setHamMenu] = useState(false)

  return (
    <>
      {!isLoaded && <Loading onComplete={()=> setIsLoaded(true)} /> }
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-white`}>
            <Navbar hamMenu={hamMenu} setHamMenu={setHamMenu} />
            <Mobile hamMenu={hamMenu} setHamMenu={setHamMenu} />
            <Hero />
            <AboutSection />
        </div>
    </>
  )
}

export default App
