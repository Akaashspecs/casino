"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

export default function DayNightTransition() {
    const containerRef = useRef<HTMLDivElement>(null);
    const nightImageRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const [blur, setBlur] = useState(false);

    useEffect(() => {
        // trigger blur after mount
        setTimeout(() => setBlur(true), 100);
    }, []);


    useGSAP(
        () => {
            if (!containerRef.current || !nightImageRef.current || !textRef.current) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=400%", // Increased scroll distance
                    scrub: true,
                    pin: true,
                },
            });

            // Transition phase
            tl.fromTo(
                nightImageRef.current,
                { opacity: 0 },
                { opacity: 1, ease: "none", duration: 1 }
            );

            // Hold phase (keeps the view static for an equal amount of scroll)
            tl.to({}, { duration: 1 });

            // Writing animation on mount (independent of scroll)
            gsap.fromTo(
                textRef.current,
                { clipPath: "inset(0 100% 0 0)" },
                {
                    clipPath: "inset(0 0% 0 0)",
                    duration: 3,
                    ease: "power2.inOut",
                    delay: 0.5,
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className="relative  h-screen w-full overflow-hidden">
            {/* Day Image (Background) */}
            <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out
      ${blur ? "backdrop-blur-sm blur-md" : "backdrop-blur-0 blur-0"}`}
            >
                <Image
                    src="/hotel/hotel-hall.webp"
                    alt="Restaurant Day View"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Night Image (Foreground, fades in) */}
            <div ref={nightImageRef} className="absolute backdrop-blur-md blur-md inset-0 opacity-0">
                <Image
                    src="/hotel/hotel-hall-night.png"
                    alt="Restaurant Night View"
                    fill
                    className="object-cover "
                    priority
                />
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               
           
                <h2
                    ref={textRef}
                    className={`${greatVibes.className} text-6xl md:text-[140px] font-bold text-white  text-center drop-shadow-lg p-6 `}
                    style={{ clipPath: "inset(0 100% 0 0)" }} // Initial state to hide text
                >
                    Benvenuti all'Hotel <br /> Caroline
                    <div className="font-sans text-2xl md:text-4xl">
                        4 Star Luxury Experience
                    </div>
                </h2>

            </div>
        </div>
    );
}
