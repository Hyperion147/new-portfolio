import React from 'react'

const Mobile = ({ hamMenu, setHamMenu }) => {

    return (
        <div className={`fixed top-0 left-0 w-full z-41 bg-[rgba(10, 10, 10, 10, 0.8)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden
        ${hamMenu 
            ? "h-screen opacity-100 bg-gray-300 pointer-events-auto" 
            : "h-0 opacity-0 pointer-events-none"}`}>
            
            <button onClick={() => setHamMenu(false)
            } className='absolute top-4 right-7 text-3xl focus:outline-none cursor-pointer' aria-label='Close Menu'>
                &times;
            </button>

            <a href="#about" className={`text-2xl font-semibold my-4 transform transition-transform duration-300 ${hamMenu ? "opacity-100 translate-y-0" : "opactiy-0 translate-y-5"}`}
            onClick={() => setHamMenu(false)}>About</a>
            <a href="#projects" className={`text-2xl font-semibold my-4 transform transition-transform duration-300 ${hamMenu ? "opacity-100 translate-y-0" : "opactiy-0 translate-y-5"}`}
            onClick={() => setHamMenu(false)}>Projects</a>
            <a href="#contact" className={`text-2xl font-semibold my-4 transform transition-transform duration-300 ${hamMenu ? "opacity-100 translate-y-0" : "opactiy-0 translate-y-5"}`}
            onClick={() => setHamMenu(false)}>Contact</a>

        </div>
    )
}

export default Mobile