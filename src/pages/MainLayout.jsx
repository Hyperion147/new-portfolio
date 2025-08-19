import Navbar from "../components/utils/Navbar";
import Mobile from "../components/utils/Mobile";
import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import FixedButtons from "../components/ui/FixedButtons";

import React, { useState } from "react";

const ContactSection = React.lazy(() =>
    import("../components/sections/ContactSection")
);
const ProjectSection = React.lazy(() =>
    import("../components/sections/ProjectSection")
);

const MainLayout = () => {
    const [hamMenu, setHamMenu] = useState(false);

    return (
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
    );
};

export default MainLayout;
