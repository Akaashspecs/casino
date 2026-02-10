"use client";

"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Great_Vibes, Dancing_Script } from "next/font/google";
import { useGSAP } from "@gsap/react";

const greatVibes = Dancing_Script({
    weight: "700",
    subsets: ["latin"],
});

const LandingFirst = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const text1Ref = useRef<SVGTextElement>(null);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context || !containerRef.current) return;

      const frameCount = 90;
      const currentFrame = { index: 1 };
      const images: HTMLImageElement[] = [];

      // Preload images
      for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();

        img.src = `/hotel-images/ezgif-frame-${i
          .toString()
          .padStart(3, "0")}.jpg`;
        images.push(img);
      }

      const render = () => {
        const img = images[Math.round(currentFrame.index) - 1];
        if (img && img.complete) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          // Object-cover logic for canvas
          const hRatio = canvas.width / img.width;
          const vRatio = canvas.height / img.height;
          const ratio = Math.max(hRatio, vRatio);
          const centerShift_x = (canvas.width - img.width * ratio) / 2;
          const centerShift_y = (canvas.height - img.height * ratio) / 2;

          context.clearRect(0, 0, canvas.width, canvas.height);
          // Draw image
          context.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
          );
          
          // Apply filters manually since canvas doesn't support CSS filters inside drawImage
          // Instead we rely on the CSS class on canvas for blur/brightness
        }
      };

      // Ensure first image loads and renders
      images[0].onload = render;

      // Scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%", // Adjust scroll length for speed
          scrub: true,
          pin: true,
          onUpdate: render, // Redraw on resize/scroll
        },
      });

      // Animate frame index
      tl.to(currentFrame, {
        index: frameCount,
        ease: "none",
        onUpdate: render,
      });

    
    },
    { scope: containerRef }
  );

  useEffect(() => {
    // Initial SVG Paths
    const curvePath = "M 50 200 Q 500 50 850 200";
    const curvePath2 = "M 50 200 Q 500 350 850 200";

    if (path1Ref.current) path1Ref.current.setAttribute("d", curvePath);
    if (path2Ref.current) path2Ref.current.setAttribute("d", curvePath2);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Canvas for Image Sequence */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full object-cover blur-[10px] brightness-[0.8]"
      />

      {/* Static Logo Overlay */}
    

      {/* <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white pb-20 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="flex flex-col items-center"
                >
                    <motion.h1 
                        className="text-5xl md:text-8xl font-serif tracking-in-expand italic font-light"
                        initial={{ opacity: 0, scale: 0.9, letterSpacing: "-0.05em" }}
                        animate={{ opacity: 1, scale: 1, letterSpacing: "0em" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        Hotel Caroline
                    </motion.h1>
                
                     
                </motion.div>
            </div> */}
      <div className="relative z-10 w-full max-w-[2000px] flex flex-col items-center justify-center -space-y-10">
       
       
           <motion.p 
                        className="mt-6 text-lg md:text-2xl font-light tracking-widest uppercase opacity-80"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.8, y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    >
        <svg viewBox="0 0 1000 300" className="w-full h-auto overflow-visible ml-5">
          <defs>
            <path id="curve1" ref={path1Ref} />
          </defs>
          <text
            ref={text1Ref}
            width="1000"
            className={`${greatVibes.className}  text-[140px] font-bold fill-white italic`}
            textAnchor="middle"
          >
            <textPath href="#curve1" startOffset="50%">
          <tspan>Country</tspan>
    <tspan dx="140">House</tspan>
            </textPath>
          </text>
        </svg></motion.p>
        <div className="relative h-[400px] w-[600px] ">
          <Image src={'/extra/logo-car.png'} alt="food" fill className="object-cover " />
        </div>
      <motion.p 
                        className="mt-6 text-lg md:text-2xl font-light tracking-widest uppercase opacity-80"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.8, y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    >
        {/* Second Line */}
        <svg viewBox="0 0 1000 300" className="w-full max-w-[1000px] ml-5">
          <defs>
            <path id="curve2" ref={path2Ref} />
            {/* Text Shadow */}
            <filter
              id="textShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="6"
                stdDeviation="8"
                floodColor="black"
                floodOpacity="0.5"
              />
            </filter>
          </defs>

          <text
            textAnchor="middle"
            filter="url(#textShadow)"
            className={`${greatVibes.className} fill-white text-[100px] italic`}
          >
            <textPath href="#curve2" startOffset="50%">
              <tspan>U</tspan>
    <tspan dx="190">Casino</tspan>
            </textPath>
          </text>
        </svg>
        </motion.p>
      </div>
    </div>
  );
};

export default LandingFirst;