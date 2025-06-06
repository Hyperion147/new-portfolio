import ToggleDark from "./ToggleDark"

const Mobile = ({ hamMenu, setHamMenu }) => {

    return (
        <div className={`fixed w-full backdrop-blur-sm dark:bg-gray-600 dark:text-gray-200 z-41 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden
        ${hamMenu 
            ? "h-100 opacity-100 bg-gray-300 pointer-events-auto" 
            : "h-0 opacity-0 pointer-events-none"}`}>
            
            <button onClick={() => setHamMenu(false)
            } className='absolute top-7 right-12 text-3xl focus:outline-none cursor-pointer' aria-label='Close Menu'>
                &times;
            </button>

            <a href="#about" className={`text-2xl font-semibold my-4 transform transition-transform duration-300 ${hamMenu ? "opacity-100 translate-y-0" : "opactiy-0 translate-y-5"}`}
            onClick={() => setHamMenu(false)}>About</a>
            <a href="#projects" className={`text-2xl font-semibold my-4 transform transition-transform duration-300 ${hamMenu ? "opacity-100 translate-y-0" : "opactiy-0 translate-y-5"}`}
            onClick={() => setHamMenu(false)}>Projects</a>
            <a href="#contact" className={`text-2xl font-semibold my-4 transform transition-transform duration-300 ${hamMenu ? "opacity-100 translate-y-0" : "opactiy-0 translate-y-5"}`}
            onClick={() => setHamMenu(false)}>Contact</a>
            <ToggleDark />

        </div>
    )
}

export default Mobile