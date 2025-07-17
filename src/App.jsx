import './App.css'
import Navbar from './components/utils/Navbar'
import Mobile from './components/utils/Mobile'
import Hero from './components/sections/Hero'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import ProjectSection from './components/sections/ProjectSection'
import FixedButtons from "./components/ui/FixedButtons"
import { useState, useEffect } from 'react'


function App() {

  const [hamMenu, setHamMenu] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#fff9f0] dark:bg-slate-800">
        <div className="max-w-[100vw] overflow-x-hidden transition-colors duration-500">
          <Navbar hamMenu={hamMenu} setHamMenu={setHamMenu} />
          <Mobile hamMenu={hamMenu} setHamMenu={setHamMenu} />
          <Hero />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
          <FixedButtons />
        </div>
      </div>
    </>
  )
}

export default App
