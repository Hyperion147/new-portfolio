"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import toast from "react-hot-toast";
import Mobile from "@/components/utils/Mobile";
import MobileTheme from "@/components/utils/MobileTheme";
import Navbar from "@/components/utils/Navbar";
import { BentoGrid } from "@/components/ui/bento-grid";
import BlobCursor from "./components/BlobCursor";
import ThemeClipperBlock from "./components/ThemeClipper";

export default function BlocksPage() {
    const [hamMenu, setHamMenu] = useState(false);

    // Initial page entrance animation
    useGSAP(() => {
        gsap.from(".blocks-grid", {
            y: 50,
            duration: 1,
            filter: "blur(12px)",
            opacity: 0,
            ease: "power3.out",
        });
    });

    return (
        <div className="min-h-screen bg-[#fff9f0] dark:bg-gray-900">
            <div className="overflow-x-hidden duration-500">
                <Mobile hamMenu={hamMenu} setHamMenu={setHamMenu} />
                <MobileTheme />
                <Navbar hamMenu={hamMenu} setHamMenu={setHamMenu} />

                <main className="mx-auto max-w-7xl px-4 pb-12 pt-28">
                    <BentoGrid className="blocks-grid mx-auto max-w-5xl md:auto-rows-[180px] md:grid-cols-4">
                        <BlobCursor />
                        <ThemeClipperBlock />
                    </BentoGrid>
                </main>
            </div>
        </div>
    );
}
