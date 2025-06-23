import './App.css'
import Loading from './components/utils/Loading'
import Navbar from './components/utils/Navbar'
import Mobile from './components/utils/Mobile'
import Hero from './components/sections/Hero'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import ProjectSection from './components/sections/ProjectSection'
import FixedButtons from "./components/ui/FixedButtons"
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
      <div className={`min-h-screen transition-opacity duration-700 dark:bg-slate-800 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar hamMenu={hamMenu} setHamMenu={setHamMenu} />
        <Mobile hamMenu={hamMenu} setHamMenu={setHamMenu} />
        <Hero />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <FixedButtons />
      </div>
    </>
  )
}

export default App
