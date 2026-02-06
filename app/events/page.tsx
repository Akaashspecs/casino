"use client";

import { useRef } from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.fromTo(
                titleRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
            )
            .fromTo(
                ".event-text",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" },
                "-=0.5"
            )
            .fromTo(
                cardRef.current,
                { opacity: 0, scale: 0.8, rotation: -5 },
                { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
                "-=0.5"
            );
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className="mt-24 bg-neutral-50 min-h-screen pt-32 pb-20 px-6 md:px-12 text-black overflow-hidden intro-section">
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Text Content */}
                <div className="text-center lg:text-left space-y-8">
                    <h1
                        ref={titleRef}
                        className={`${greatVibes.className} text-7xl md:text-9xl  text-gray-900 drop-shadow-sm`}
                    >
                        Eventi & <br /> Cerimonie
                    </h1>
                    
                    <div className="space-y-6">
                        <p className="event-text text-xl md:text-2xl font-light text-gray-600 leading-relaxed">
                            Rendi indimenticabile ogni momento. Che sia un matrimonio da favola, una festa di laurea frizzante o una cena aziendale elegante.
                        </p>
                        <p className="event-text text-lg text-gray-500">
                            Il nostro team è pronto a realizzare i tuoi desideri con passione e cura per i dettagli, offrendo spazi unici e un servizio impeccabile.
                        </p>
                    </div>

                    <div className="event-text pt-8">
                        <p className="uppercase tracking-widest text-sm font-bold text-gray-400 mb-4">
                            Perfetto per
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {["Matrimoni", "Compleanni", "Feste Private", "Meeting", "Battesimi"].map((tag, i) => (
                                <span key={i} className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Creative Contact Card */}
                <div className="flex justify-center lg:justify-end py-10">
                    <div 
                        ref={cardRef}
                        className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group hover:scale-105 transition-transform duration-500"
                    >
                        {/* Decorative Top */}
                        <div className="h-32 bg-gray-900 relative">
                             <div className="absolute inset-0 bg-[url('/hotel/hotel-hall.webp')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                             <div className="absolute -bottom-10 left-0 right-0 h-20 bg-white rounded-t-[50%]"></div>
                        </div>

                        {/* Card Content */}
                        <div className="px-10 pb-12 pt-4 text-center">
                            <h3 className={`${greatVibes.className} mt-8 text-5xl text-amber-600 mb-2`}>
                                Invito
                            </h3>
                            <p className="text-gray-400 text-sm uppercase tracking-wider mb-8">
                                Contattaci per un preventivo
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:eventi@hotelcaroline.com" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group/item">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-500 shadow-sm mr-4 group-hover/item:scale-110 transition-transform">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-400 uppercase font-bold">Scrivici</p>
                                        <p className="text-gray-900 font-medium">eventi@hotelcaroline.com</p>
                                    </div>
                                </a>

                                <a href="https://wa.me/3903321431105" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group/item">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm mr-4 group-hover/item:scale-110 transition-transform">
                                        <FaWhatsapp size={24} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-400 uppercase font-bold">Chiamaci / WhatsApp</p>
                                        <p className="text-gray-900 font-medium">+39-0332-1431105   </p>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-10 pt-8 border-t border-dashed border-gray-200">
                                <p className="text-gray-400 text-xs italic">
                                    "Realizziamo i tuoi sogni, un evento alla volta."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};  

export default Events;