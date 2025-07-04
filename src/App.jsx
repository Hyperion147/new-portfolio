import './App.css'
import Loading from './components/utils/Loading'
import Navbar from './components/utils/Navbar'
import Mobile from './components/utils/Mobile'
import Hero from './components/sections/Hero'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import ProjectSection from './components/sections/ProjectSection'
import FixedButtons from "./components/ui/FixedButtons"
import Cursor from "./components/ui/Cursor"
import { useState, useEffect } from 'react'


function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [hamMenu, setHamMenu] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-300 bg-[#fff9f0] dark:bg-slate-800 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-[100vw] overflow-x-hidden">
          <Navbar hamMenu={hamMenu} setHamMenu={setHamMenu} />
          <Mobile hamMenu={hamMenu} setHamMenu={setHamMenu} />
          <Hero />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
          <FixedButtons />
          <Cursor />
        </div>
      </div>
    </>
  )
}

export default App
