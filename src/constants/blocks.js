export const blobCursorCode = `"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
    const cursorRef = useRef(null);
    const backdropRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                window.innerWidth <= 768 ||
                "ontouchstart" in window
            );
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile || !cursorRef.current || !backdropRef.current) return;

        const cursor = cursorRef.current;
        const backdrop = backdropRef.current;
        
        let mouseX = 0;
        let mouseY = 0;
        let isHovering = false;

        gsap.set([cursor, backdrop], { xPercent: -50, yPercent: -50, opacity: 1 });

        const updatePosition = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            gsap.set(cursor, { x: mouseX, y: mouseY });

            if (!isHovering) {
                gsap.to(backdrop, {
                    x: mouseX,
                    y: mouseY,
                    duration: 0.15,
                    ease: "power3.out",
                });
            }
        };

        const handleHover = (e) => {
            isHovering = true;
            const target = e.currentTarget;
            const rect = target.getBoundingClientRect();

            gsap.killTweensOf(backdrop);

            gsap.to(backdrop, {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                width: rect.width + 10,
                height: rect.height + 4,
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                duration: 0.3,
                ease: "power3.out",
            });

            gsap.to(cursor, { opacity: 0, duration: 0.3 });
        };

        const handleUnHover = () => {
            isHovering = false;
            gsap.to(backdrop, {
                width: 16,
                height: 16,
                borderRadius: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                duration: 0.5,
                ease: "power3.out",
            });
            gsap.to(cursor, { opacity: 1, duration: 0.3 });
        };

        window.addEventListener("mousemove", updatePosition);

        const refreshListeners = () => {
            const elements = document.querySelectorAll("a, button, [data-cursor-hover]");
            elements.forEach((el) => {
                el.addEventListener("mouseenter", handleHover);
                el.addEventListener("mouseleave", handleUnHover);
            });
            return elements;
        };

        const hoverElements = refreshListeners();

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            hoverElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleHover);
                el.removeEventListener("mouseleave", handleUnHover);
            });
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <>
            <div ref={cursorRef} className="fixed top-0 left-0 pointer-events-none w-2 h-2 rounded-full bg-white mix-blend-difference z-9998" />
            <div ref={backdropRef} className="fixed top-0 left-0 pointer-events-none w-4 h-4 rounded-full border border-slate-400 bg-white/5 z-9997" style={{willChange: "width, height, transform"}} />
        </>
    );
};

export default Cursor;`;
