"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef1 = useRef<HTMLDivElement>(null);
    const textRef2 = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                titleRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
            )
                .fromTo(
                    textRef1.current,
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
                    "-=0.8"
                )
                .fromTo(
                    textRef2.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                    "-=0.6"
                );
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-12 bg-neutral-50 text-black overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">

                {/* Visual / Title Side */}
                <div className="w-full md:w-1/3 text-center md:text-right">
                    <h2
                        ref={titleRef}
                        className={` ${greatVibes.className} text-7xl md:text-8xl leading-none text-black drop-shadow-sm`}
                    >
                        Chi <br /> siamo
                    </h2>
                    <div className="hidden md:block w-[1px] h-32 bg-black/30 mx-auto mt-8 md:ml-auto md:mr-10"></div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/3 space-y-12">
                    <div ref={textRef1} className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed border-l-4 border-black pl-6">
                        <p className="font-semibold">
                            Rilassatevi e dedicate del tempo ai vostri cari al <strong>Caroline Hotel</strong>, un’oasi di pace a due passi dal lago di Lugano.
                        </p>
                    </div>

                    <div ref={textRef2} className="text-lg md:text-xl text-gray-600 leading-loose space-y-6">
                        <p>
                            Situato nell'incantevole paesino di Brusimpiano, con la sua architettura romantica, è la destinazione ideale per coppie, famiglie e gruppi alla ricerca di relax, avventura e divertimento acquatico.
                        </p>
                        <p>
                            Il nostro giardino con piscina è il luogo perfetto per distendersi dopo una giornata intensa, prima di concedersi un sonno ristoratore nelle nostre confortevoli camere con vista lago.
                        </p>
                        <p>
                            Il bar vi aspetta con aperitivi classici e a buffet, cocktail unici e una selezione di Spritz d'autore. Vi invitiamo inoltre a scoprire la cucina del nostro ristorante, con specialità italiane e un servizio attento al cliente e alla cura dei dettagli.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;