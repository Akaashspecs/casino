"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                     bg-black/30 backdrop-blur-3xl border-b border-white/10
                `}
        >
            <div className="container mx-auto px-6 flex items-center justify-between pointer-events-auto relative">
                <Link href="/">
                    <Image
    src="/extra/color-logo.png"
    alt="Hotel"
    width={260}          // required for Next Image
    height={260}
    className="
      w-24 md:w-32 lg:w-40
      h-auto
      p-2
    "
    priority
  />

                </Link>

                <nav className="hidden md:flex space-x-8 py-4 ">
                    {["Home", "Hotel", "Restaurant", "Events", "Gallery"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="text-sm font-medium text-white hover:scale-105 hover:text-white transition-colors uppercase tracking-wide"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-black/80 backdrop-blur-3xl rounded-3xl overflow-hidden md:hidden animate-in slide-in-from-top-2 fade-in duration-300 border border-white/10">
                        <nav className="flex flex-col py-4">
                            {["Home", "Hotel", "Restaurant", "Events", "Gallery"].map((item) => (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    className="px-6 py-3 text-white hover:bg-white/10 transition-colors uppercase tracking-wide text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
