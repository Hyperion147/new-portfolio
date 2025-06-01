import { useEffect, useRef } from 'react'
import gsap from "gsap"

const Cursor = () => {
    const cursorRef = useRef(null)
    const backdropRef = useRef(null)

    useEffect(() => {
        if ("ontouchstart" in window || !cursorRef.current || !backdropRef.current) return;

        const cursor = cursorRef.current
        const backdrop = backdropRef.current

        gsap.set([cursor, backdrop], {
            xPercent: -50,
            yPercent: -50,
            opacity: 1,
        })

        let mouseX = 0
        let mouseY = 0

        const updatePosition = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
        const follower = gsap.to(backdrop, {
            x: mouseX,
            y: mouseY,
            ease: "power3.out",
            duration: 0.3
        })

        const render = () => {

            gsap.set(cursor, {
                x: mouseX,
                y: mouseY,
                duration: 0.1
            });

            follower.vars.x = mouseX;
            follower.vars.y = mouseY;
            follower.invalidate().restart()

            requestAnimationFrame(render)
        }
        requestAnimationFrame(render)
        window.addEventListener('mousemove', updatePosition)

        const handleHover = () => {
            gsap.to(cursor, {
                scale: 0.9,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                duration: 0.3
            })
            gsap.to(backdrop, {
                scale: 1.2,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                duration: 0.3
            })
        }

        const handleUnHover = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                duration: 0.3
            })
            gsap.to(backdrop, {
                scale: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                duration: 0.3
            })
        }


        const hoverElements = document.querySelectorAll("a, button, [data-cursor-hover]")
        hoverElements.forEach(element => {
            element.addEventListener("mouseenter", handleHover)
            element.addEventListener("mouseleave", handleUnHover)
        });

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            hoverElements.forEach(element => {
                element.removeEventListener("mouseenter", handleHover);
                element.removeEventListener("mouseleave", handleUnHover);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef}
                className="fixed border pointer-events-none w-6 h-6 rounded-full bg-gray mix-blend-difference z-[9999] transform scale-100 opacity-0"
            />
            <div ref={backdropRef}
                className="fixed pointer-events-none w-8 h-8 rounded-full bg-black/10 border border-white/10 z-[9998] transform scale-100 opacity-0"
            />
        </>
    )
}

export default Cursor