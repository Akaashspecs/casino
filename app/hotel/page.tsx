"use client";

import { useRef } from "react";
import Image from "next/image";
import { roomsInfo } from "@/utils/utils";
import { Great_Vibes } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
    FaCheck, 
    FaWifi, 
    FaSwimmingPool, 
    FaUtensils, 
    FaChild, 
    FaWheelchair, 
    FaMountain, 
    FaParking, 
    FaCoffee, 
    FaWater, 
    FaBaby, 
    FaPaw 
} from "react-icons/fa";
import { MdBalcony } from "react-icons/md";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

const Hotel = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const introTextRef = useRef<HTMLDivElement>(null);
    const roomsTitleRef = useRef<HTMLHeadingElement>(null);
    const roomsGridRef = useRef<HTMLDivElement>(null);
    const servicesTitleRef = useRef<HTMLHeadingElement>(null);
    const servicesGridRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            // Intro Animations
            tl.fromTo(
                titleRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            )
            .fromTo(
                introTextRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                "-=0.5"
            );

            // Rooms Title Animation
            gsap.fromTo(
                roomsTitleRef.current,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: roomsTitleRef.current,
                        start: "top 80%",
                    },
                }
            );

            // Rooms Grid Stagger Animation
            if (roomsGridRef.current) {
                gsap.fromTo(
                    roomsGridRef.current.children,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: roomsGridRef.current,
                            start: "top 75%",
                        },
                    }
                );
            }

            // Services Title Animation
             gsap.fromTo(
                servicesTitleRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: servicesTitleRef.current,
                        start: "top 80%",
                    },
                }
            );

            // Services Grid Animation
             if (servicesGridRef.current) {
                gsap.fromTo(
                    servicesGridRef.current.children,
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.3,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: servicesGridRef.current,
                            start: "top 75%",
                        },
                    }
                );
            }
        },
        { scope: containerRef }
    );

    const includedServices = [
        { name: "Wi-Fi", icon: <FaWifi /> },
        { name: "Piscina scoperta", icon: <FaSwimmingPool /> },
        { name: "Parcheggio", icon: <FaParking /> },
        { name: "Ristorante", icon: <FaUtensils /> },
        { name: "Camere per le famiglie", icon: <FaChild /> },
        { name: "Camere per i disabili", icon: <FaWheelchair /> },
        { name: "Vista montagna", icon: <FaMountain /> },
    ];

    const extraServices = [
        { name: "Balcone", icon: <MdBalcony /> },
        { name: "Colazione", icon: <FaCoffee /> },
        { name: "Parcheggio privato", icon: <FaParking /> },
        { name: "Vista Lago", icon: <FaWater /> },
        { name: "Culla", icon: <FaBaby /> },
        { name: "Animali ammessi", icon: <FaPaw /> },
    ];

    return (
        <div ref={containerRef} className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-12 text-black">
            {/* Header Section */}
            <header className="text-center mb-24 max-w-4xl mx-auto">
                <h1
                    ref={titleRef}
                    className={`${greatVibes.className} mt-10 md:mt-24 hover:text-amber-500 duration-500 text-7xl md:text-9xl mb-8 text-gray-900 drop-shadow-sm`}
                >
                    Hotel
                </h1>
                <div ref={introTextRef} className="text-lg md:text-xl text-gray-600 leading-relaxed font-light space-y-6">
                    <p>
                        Il Caroline Hotel è immerso nella natura e vi invita a rilassarvi dopo giornate intense.
                    </p>
                    <p>
                        Offriamo un’accoglienza attenta e personalizzata, con la massima cura per ogni dettaglio.

All’arrivo, gli ospiti vengono accolti con un welcome drink, per iniziare subito l’esperienza nel modo migliore.
                    </p>
                    <p className="italic font-medium text-gray-800">
                        "Un soggiorno ideale per chi cerca tranquillità, comfort e un contatto autentico con l’ambiente naturale."
                    </p>
                </div>
                <div className="w-24 h-[1px] bg-gray-300 mx-auto mt-12"></div>
            </header>

            {/* Rooms Section */}
            <section className="max-w-7xl mx-auto ">
                <h2
                    ref={roomsTitleRef}
                    className={`${greatVibes.className} text-6xl md:text-7xl text-center mb-16 text-gray-800`}
                >
                    Camere
                </h2>

                <div ref={roomsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {roomsInfo.map((room, index) => (
                        <div
                            key={index}
                            className="group bg-gray-50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={room.img}
                                    alt={room.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors">
                                    {room.title}
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed border-b border-gray-200 pb-6 min-h-[80px]">
                                    {room.description}
                                </p>
                                <ul className="space-y-3 mt-auto">
                                    {room.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-500">
                                            <span className="mr-3 mt-1 text-amber-500">
                                                <FaCheck size={12} />
                                            </span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
               
            </section> 
            <div className="flex justify-center mt-10">
 <a  target="_blank"
  rel="noopener noreferrer" href="https://booking.hotelincloud.com/en/show/118207" className="  bg-blue-400 px-6 py-2 rounded-full  md:text-white duration-700 font-semibold hover:scale-105  transition-colors">
               Prenota le nostre Camere
            </a>
            </div>
            

             {/* Services Section */}
            <section className="max-w-6xl mx-auto">
                <h2
                    ref={servicesTitleRef}
                    className={`${greatVibes.className} mt-32 text-6xl md:text-7xl text-center mb-16 text-gray-800`}
                >
                    Servizi
                </h2>
                
                <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Included Services */}
                    <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-2xl font-serif font-bold mb-8 text-gray-900 flex items-center">
                            <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 text-sm">
                                <FaCheck />
                            </span>
                            Inclusi
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                            {includedServices.map((service, idx) => (
                                <li key={idx} className="flex items-center text-gray-700 group">
                                    <span className="text-xl mr-3 text-gray-400 group-hover:text-amber-500 transition-colors">
                                        {service.icon}
                                    </span>
                                    <span className="text-sm font-medium">{service.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Extra Services */}
                     <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-2xl font-serif font-bold mb-8 text-gray-900 flex items-center">
                             <span className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-4 text-sm">
                                +
                            </span>
                            Con supplemento
                        </h4>
                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                            {extraServices.map((service, idx) => (
                                <li key={idx} className="flex items-center text-gray-700 group">
                                    <span className="text-xl mr-3 text-gray-400 group-hover:text-amber-500 transition-colors">
                                        {service.icon}
                                    </span>
                                    <span className="text-sm font-medium">{service.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                   
                </div>
            </section>
        </div>
    );
};

export default Hotel;