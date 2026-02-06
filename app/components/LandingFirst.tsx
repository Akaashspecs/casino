"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Great_Vibes, Dancing_Script } from "next/font/google";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

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
        className="absolute inset-0 z-0 w-full h-full object-cover blur-[7px] brightness-[0.6]"
      />

      {/* Static Logo Overlay */}
    

      <div className="relative z-10 w-full max-w-[1000px] flex flex-col items-center justify-center -space-y-10">
        {/* First Line */}
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
        </svg>
  
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
      </div>
    </div>
  );
};

export default LandingFirst;