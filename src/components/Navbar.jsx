import React, { useEffect } from 'react'

const Navbar = ({hamMenu, setHamMenu}) => {

  useEffect(() => {
    document.body.style.overflow = hamMenu ? "hidden" : ""
  }, [hamMenu])
  

  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 10, 0.8)] backdrop-blur-lg border-white/10 shadow-lg'>
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex justify-between items-center h-16'>
                <a id='logo-name' href='#home' className='font-medium text-xl'>
                  S<span className='text-gray-500'>uryansu</span> S<span className='text-gray-500'>ingh</span>
                </a>

                <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' 
                  onClick={()=> setHamMenu((prev) => !prev)}>
                    &#9776;
                </div>

                <div className='hidden md:flex items-center space-x-8'>
                    <a href="#about" className='hover:text-gray-600 font-bold transition-colors'>About</a>
                    <a href="#porjects" className='hover:text-gray-600 font-bold transition-colors'>Projects</a>
                    <a href="#contact" className='hover:text-gray-600 font-bold transition-colors'>Contact</a>
                </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar