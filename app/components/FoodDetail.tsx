"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import { images } from "@/utils/utils";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

const FoodDetail = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                titleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            )
                .fromTo(
                    textRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                    "-=0.5"
                );
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className="relative flex flex-col items-center text-center py-24 px-6 md:px-12 text-black overflow-hidden">
            
            {/* Background Image */}
            <div className="absolute inset-0 z-10">
                <Image
                    src="/extra/foodcollage.png"
                    alt="Food Collage Background"
                    fill
                    className="object-cover brightness-75  pointer-events-none"
                    priority
                />
                 <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
            </div>

            <div className="relative z-10 flex flex-col items-center backdrop-blur-xl bg-black/50  w-fit p-9 rounded-2xl text-white">
                <h3
                    ref={titleRef}
                    className={`${greatVibes.className} text-6xl md:text-7xl mb-12 text-white`}
                >
                    Ristorante
                </h3>
                <div
                    ref={textRef}
                    className="max-w-3xl text-lg md:text-xl leading-loose font-light text-gray-800 space-y-8 text-white"
                >
                    <p>
                        A due passi dal montagne, immerso nel verde, il nostro locale unisce l’atmosfera vivace del bar all’eleganza del ristorante.
                    </p>
                    <p>
                        Per l’aperitivo vi attende un ricco buffet con cocktail unici e Spritz d’autore, mentre la cena celebra le specialità italiane con le ricette originali della nostra Chef.
                    </p>
                    <p>
                        Ogni dettaglio è curato con attenzione, per offrirvi momenti autentici di convivialità e sapore.
                    </p>
                    <div className="w-24 h-[1px] bg-black/20 mx-auto my-8"></div>
                    <p className="italic text-2xl font-serif text-white">
                        "Che sia un brindisi al tramonto o una cena indimenticabile, qui si assapora davvero la bellezza della tradizione italiana."
                    </p>
                </div>
                <Link href="/restaurant" className="mt-10 bg-blue-400 px-6 py-2 rounded-full  text-white hover:text-gray-900 transition-colors">
                Scopri di piu'
                </Link>
               
            </div>


        

        </div>
    );
};

export default FoodDetail;