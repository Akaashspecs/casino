"use client";

import { useRef } from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGlassCheers, FaMusic, FaCheck, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

const Restaurant = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerTitleRef = useRef<HTMLHeadingElement>(null);
    const restoSectionRef = useRef<HTMLDivElement>(null);
    const barSectionRef = useRef<HTMLDivElement>(null);
    const eventsSectionRef = useRef<HTMLDivElement>(null);
    const privateEventsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            // Header Animation
            tl.fromTo(
                headerTitleRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
            );

            // Restaurant Section
            gsap.fromTo(
                restoSectionRef.current?.children || [],
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: restoSectionRef.current,
                        start: "top 75%",
                    },
                }
            );

             // Bar Section
             gsap.fromTo(
                barSectionRef.current?.children || [],
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: barSectionRef.current,
                        start: "top 75%",
                    },
                }
            );
            
            // Events Cards Stagger
             if (eventsSectionRef.current) {
                gsap.fromTo(
                    eventsSectionRef.current.children,
                    { opacity: 0, scale: 0.95 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.3,
                        scrollTrigger: {
                            trigger: eventsSectionRef.current,
                            start: "top 80%",
                        },
                    }
                );
            }

             // Private Events Fade In
             gsap.fromTo(
                privateEventsRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: privateEventsRef.current,
                        start: "top 70%",
                    },
                }
            );
        },
        { scope: containerRef }
    );

    return (
         <div ref={containerRef} className="bg-white min-h-screen text-black overflow-hidden relative">
            
            {/* Header / Hero */}
            <div className="pt-32 pb-20 text-center mt-10 md:mt-24 px-4">
                 <h1
                    ref={headerTitleRef}
                    className={`${greatVibes.className} text-7xl md:text-9xl mb-6 text-gray-900 drop-shadow-sm`}
                >
                    Ristorante & Bar
                </h1>
                <p className="text-gray-500 font-light text-lg uppercase tracking-widest">
                    Sinfonia dei gusti • Atmosfera unica
                </p>
                <div className="w-24 h-[1px] bg-gray-300 mx-auto mt-12"></div>
            </div>



            {/* Restaurant Section (Image Right) */}
            <section ref={restoSectionRef} className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div className="text-center md:text-left space-y-8">
                    <h2 className={`${greatVibes.className} text-5xl md:text-6xl text-amber-600`}>
                        Ristorante
                    </h2>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">
                        Dove la tradizione incontra la creatività
                    </h3>
                    <p className="text-gray-600 leading-loose text-lg font-light">
                        La nostra Chef propone piatti autentici, preparati con ingredienti selezionati e ricette originali. 
                        Ogni portata è pensata per esaltare i sapori italiani e regalare un’esperienza indimenticabile.
                        Un ambiente accogliente e curato, perfetto per chi cerca davvero il gusto genuino.
                    </p>
                 </div>
                 <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700">
                     <Image 
                        src="/extra/bread.jpg" 
                        alt="Restaurant Dish" 
                        fill 
                        className="object-cover"
                     />
                 </div>
            </section>

             {/* Bar Section (Image Left) */}
            <section ref={barSectionRef} className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-all duration-700 order-2 md:order-1">
                     <Image 
                        src="/extra/food-table.jpg" 
                        alt="Bar Cocktails" 
                        fill 
                        className="object-cover"
                     />
                 </div>
                 <div className="text-center md:text-left space-y-8 order-1 md:order-2">
                    <h2 className={`${greatVibes.className} text-5xl md:text-6xl text-blue-600`}>
                    Cocktail analcolici e bevande
                    </h2>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">
                        Un rituale di gusto
                    </h3>
                    <p className="text-gray-600 leading-loose text-lg font-light">
                        Proponiamo un ricco buffet e una carta di mocktails originali, con Spritz unici e d'autore.
                        Siamo a due passi dal montagne, immersi nel verde, lontani dal caos ma vicini alla natura.
                        Un luogo ideale per rilassarsi con i vostri cari, godersi un drink speciale e vivere un’atmosfera autentica.
                    </p>
                 </div>
            </section>

            {/* Events Section */}
            <section className="bg-gray-50 py-24 px-6 md:px-12">
                 <div className="max-w-6xl mx-auto">
                    <h2 className={`${greatVibes.className} text-6xl md:text-7xl text-center mb-16 text-gray-900`}>
                        Prossimi Eventi
                    </h2>
                    
                    <div ref={eventsSectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Event Card 1 */}
                        <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-amber-500 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-amber-100 p-4 rounded-full text-amber-600 mb-6 text-2xl">
                                <FaGlassCheers />
                            </div>
                            <h4 className="font-bold text-xl uppercase tracking-wider mb-2">Ogni Venerdì e Sabato</h4>
                            <p className="text-3xl font-serif text-gray-900 mb-4">Aperitivi a Buffet</p>
                            <p className="text-gray-500">Con musica e animazione per iniziare la serata con energia.</p>
                        </div>

                         {/* Event Card 2 */}
                         <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-purple-500 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-purple-100 p-4 rounded-full text-purple-600 mb-6 text-2xl">
                                <FaMusic />
                            </div>
                            <h4 className="font-bold text-xl uppercase tracking-wider mb-2">Ogni Domenica</h4>
                            <p className="text-3xl font-serif text-gray-900 mb-4">Aperidance</p>
                            <p className="text-gray-500">Divertimento assicurato per bambini e adulti.</p>
                        </div>
                    </div>
                 </div>
            </section>

            {/* Private Events Section */}
            <section ref={privateEventsRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="bg-gray-900 text-white rounded-3xl p-10 md:p-20 relative overflow-hidden">
                     {/* Background Pattern Hint */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="flex flex-col md:flex-row gap-16 relative z-10">
                        <div className="md:w-1/2 space-y-8">
                             <h2 className={`${greatVibes.className} text-5xl md:text-6xl text-white`}>
                                Eventi Personalizzati
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                Se avete bisogno di organizzare un evento personalizzato, rivolgetevi a noi. 
                                Ci prenderemo cura di ogni dettaglio con la massima accoglienza e professionalità, 
                                rendendo la vostra occasione davvero speciale.
                            </p>
                            <Link href={'/events'} className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors uppercase text-sm tracking-wider">
                                Contattaci
                            </Link>
                        </div>

                        <div className="md:w-1/2 bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <ul className="text-lg space-y-4 font-light">
                                {[
                                    "Compleanni",
                                    "Cene Aziendali",
                                    "Feste di Laurea",
                                    "Matrimoni",
                                    "Battesimi",
                                    "Prime Comunioni"
                                ].map((event, idx) => (
                                    <li key={idx} className="flex items-center space-x-4 border-b border-white/10 pb-2 last:border-0">
                                         <FaCheck className="text-green-400 text-sm" />
                                         <span>{event}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

         </div>
    );
};

export default Restaurant;