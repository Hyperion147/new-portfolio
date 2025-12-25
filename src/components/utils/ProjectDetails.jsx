"use client";
import { createPortal } from "react-dom";
import { RxExternalLink } from "react-icons/rx";
import { FaCode } from "react-icons/fa6";
import { motion } from "motion/react";
// use native <video> to avoid next-video loader when not configured

const ProjectDetails = ({
    heading,
    description,
    href,
    video,
    image,
    tags,
    code,
    closeModal,
}) => {
    if (typeof document === "undefined") return null;

    // safe fallback: show video when available otherwise show image

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm overflow-hidden"
            onClick={() => closeModal()}
        >
            <motion.div
                className="relative max-w-2xl shadow-sm rounded-2xl bg-linear-to-l dark:text-white border-2 border-slate-300 z-60 mx-10 md:mx-0"
                initial={{ opacity: 0, filter: "blur(14px)" }}
                animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { ease: "easeIn" },
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="group relative aspect-video overflow-hidden">
                    <div className="aspect-video w-full p-4">
                        {video ? (
                            <video
                                className="h-full w-full object-cover"
                                src={video}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        ) : (
                            <img src={image} alt={heading} className="h-full w-full object-cover" />
                        )}
                    </div>
                </div>
                <div className="pb-5 px-6">
                    <div className="flex items-center justify-between">
                        <h5 className="mb-2 text-2xl font-bold">{heading}</h5>
                        <div className="flex gap-4 dark:text-indigo-200 text-gray-500">
                            <a
                                href={href}
                                target="_blank"
                                className=" hover:-translate-y-1 transition-all duration-500"
                            >
                                <RxExternalLink className="w-6 h-6" />
                            </a>
                            <a
                                href={code}
                                target="_blank"
                                className=" hover:-translate-y-1 transition-all duration-500"
                            >
                                <FaCode className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                        {description}
                    </p>
                    <div className="flex items-center justify-between mt-4 dark:text-indigo-200 text-gray-500">
                        <div className="flex gap-2">
                            {tags.map((tag) => (
                                <p
                                    key={tag.id}
                                    className=" hover:-translate-y-1 transition-all duration-500"
                                >
                                    {tag.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>,
        document.body
    );
};

export default ProjectDetails;
