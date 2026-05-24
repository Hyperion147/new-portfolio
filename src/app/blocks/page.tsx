"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "@/components/utils/Navbar";
import { BentoGrid } from "@/components/ui/bento-grid";
import MobilePageHeading from "@/components/utils/MobilePageHeading";
import BlobCursor from "./components/BlobCursor";
import ThemeClipperBlock from "./components/ThemeClipper";
import RectTip from "./components/RectTip";

export default function BlocksPage() {
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
        <div className="min-h-screen bg-background">
            <div className="overflow-x-hidden duration-500">
                <Navbar />

                <main className="mx-auto max-w-7xl px-4 pb-28 pt-4 md:pt-28">
                    <MobilePageHeading
                        eyebrow="components"
                        title="Blocks"
                    />
                    <BentoGrid className="blocks-grid mx-auto max-w-5xl md:auto-rows-[180px] md:grid-cols-4">
                        <BlobCursor />
                        <ThemeClipperBlock />
                        <RectTip />
                    </BentoGrid>
                </main>
            </div>
        </div>
    );
}
