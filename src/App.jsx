import './App.css'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Mobile from './components/Mobile'
import Hero from './components/sections/Hero'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import { useState , useEffect } from 'react'

function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [hamMenu, setHamMenu] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!isLoaded && <Loading onComplete={()=> setIsLoaded(true)} /> }
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <Navbar hamMenu={hamMenu} setHamMenu={setHamMenu} />
            <Mobile hamMenu={hamMenu} setHamMenu={setHamMenu} />
            <Hero />
            <AboutSection />
            <ContactSection />
    
      </div>
    </>
  )
}

export default App
