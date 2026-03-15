import { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const [hoveredItem, setHoveredItem] = useState(false);

    const istTime = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        timeStyle: "short",
    });
    return (
        <div className="lg:mx-28 mx-0">
            <div className="h-0.5 bg-gray-500 mt-8 mb-4" />
            <div className="flex justify-between">
                <div className="flex gap-2 items-end">
                    <p className="text-gray-400 text-sm">
                        Designed and Developed by
                    </p>
                    <div
                        className="relative"
                        onMouseEnter={() => setHoveredItem(true)}
                        onMouseLeave={() => setHoveredItem(false)}
                    >
                        {hoveredItem && (
                            <motion.a
                                href="https://x.com/Hyperion9913"
                                target="_blank"
                                className="absolute -top-16 left-1/2 z-40 w-42 h-16 flex -translate-x-1/2 gap-2 rounded-md border border-gray-300 px-2 py-2 text-xs dark:text-white backdrop-blur-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 10
                                    },
                                }}
                                exit={{ opacity: 0, y: 20 }}
                            >
                                <img
                                    src="/profile.jpg"
                                    alt="Hyperion9913"
                                    className="rounded-md"
                                />
                                <div className="">
                                    <p>suryansu.pro</p>
                                    <p>Part Time College ~Full time dev</p>
                                </div>
                            </motion.a>
                        )}
                        <a
                            href="https://x.com/Hyperion9913"
                            target="_blank"
                            className="dark:text-white text-black"
                        >
                            @x.com/Hyperion9913
                        </a>
                    </div>
                </div>
                <div className="flex gap-2 items-end">
                    <p className="text-gray-400 text-sm">HR, IN</p>
                    <p className="dark:text-white">{istTime}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
