"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ToggleDark from "@/components/utils/ToggleDark";

export default function ResumePage() {
    // Replace with your actual Google Drive share link
    const googleDriveUrl = 'https://drive.google.com/file/d/1su8kU2JIohmi4JQ1EwQPqqfvK4MSg7Rc/view?usp=sharing';

    return (
        <motion.section
            aria-label="Project gallery"
            className="bg-[#fff9f0] dark:bg-slate-800 min-h-screen overflow-x-hidden flex flex-col w-full"
            initial={{ opacity: 0, y: -100, filter: "blur(14px)" }}
            animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
            }}
        >
            {/* Header */}
            <div className="flex flex-row justify-between items-center px-6 sm:px-12 lg:mx-80 pt-6 lg:pt-8 head gap-4">
                {/* Back button */}
                <Link className="z-50" href="/">
                    <p className="bg-gradient-to-r from-slate-500 dark:from-indigo-200 to-gray-400 dark:to-slate-500 leading-right bg-clip-text text-transparent text-sm sm:text-lg lg:text-xl font-medium pixeltext flex items-center gap-2">
                        <MdKeyboardDoubleArrowLeft className="dark:text-indigo-200 text-slate-500" />
                        go back
                    </p>
                </Link>

                {/* Title center on mobile, right on desktop */}
                <h2 className="bg-gradient-to-r from-slate-500 dark:from-indigo-200 to-gray-700 dark:to-slate-300 leading-right bg-clip-text text-transparent sm:text-lg lg:text-xl font-medium pixeltext text-center sm:text-left">
                    /pages/resume.jsx
                </h2>

                <ToggleDark />
            </div>

            {/* Divider */}
            <div className="bg-gradient-to-r from-transparent via-gray-500 dark:via-indigo-200 to-transparent mt-4 h-[1px] mx-6 sm:mx-12 lg:mx-80" />
            <div className="w-full mx-auto max-w-4xl shadow-md rounded-lg p-4 mt-6 flex items-center">
                <iframe
                    src={`${googleDriveUrl.replace('/view', '/preview')}`}
                    width="100%"
                    height="600px"
                    className="border border-slate-500 rounded-md"
                    title="Resume Preview"
                    allow="autoplay"
                ></iframe>
            </div>
        </motion.section>
    );
}
