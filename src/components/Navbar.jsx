import React, { useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = ({hamMenu, setHamMenu}) => {

  useEffect(() => {
    document.body.style.overflow = hamMenu ? "hidden" : ""
  }, [hamMenu])
  

  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 10, 0.8)] backdrop-blur-lg border-white/10 shadow-lg'>
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex justify-between items-center h-16'>
                <ScrollLink 
                  to="home" 
                  smooth={true} 
                  duration={500} 
                  className='font-medium text-xl cursor-pointer'
                >
                  S<span className='text-gray-500'>uryansu</span> S<span className='text-gray-500'>ingh</span>
                </ScrollLink>

                <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' 
                  onClick={()=> setHamMenu((prev) => !prev)}>
                    &#9776;
                </div>

                <div className='hidden md:flex items-center space-x-8'>
                    <ScrollLink 
                      to="about" 
                      smooth={true} 
                      duration={500} offset={-120}
                      className='hover:text-gray-600 font-bold transition-colors cursor-pointer'
                    >
                      About
                    </ScrollLink>
                    <ScrollLink 
                      to="projects" 
                      smooth={true} 
                      duration={500} offset={-100}
                      className='hover:text-gray-600 font-bold transition-colors cursor-pointer'
                    >
                      Projects
                    </ScrollLink>
                    <ScrollLink 
                      to="contact" 
                      smooth={true} 
                      duration={500} 
                      className='hover:text-gray-600 font-bold transition-colors cursor-pointer'
                    >
                      Contact
                    </ScrollLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar