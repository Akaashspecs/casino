"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section 
        ref={containerRef} 
        className="relative bg-[#f9f8f4] text-stone-800 py-32 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-100/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-amber-100/40 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`${greatVibes.className} text-amber-600 text-5xl md:text-6xl mb-4`}
            >
               La nostra storia

            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 leading-tight`}
            >
           Un rifugio senza tempo
 <br />
                <span className="italic text-stone-500">Nel cuore della natura</span>
            </motion.h2>
        </div>

        {/* Content Block 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
            
            {/* Image Parallax */}
            <motion.div 
                style={{ y: y1 }}
                className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto group"
            >
                <div className="absolute inset-0 border border-amber-600/20 transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="relative h-full w-full overflow-hidden shadow-xl">
                    <Image
                        src="/extra/food-cutt.png"
                        alt="Exquisite Culinary Experience"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </motion.div>

            {/* Text */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-lg mx-auto md:mr-auto text-center md:text-left"
            >
                <h3 className={`${playfair.className} text-3xl text-amber-700 mb-6`}>
                    Eccellenza culinaria
                </h3>
                <p className="text-stone-600 leading-relaxed text-lg mb-8 font-light">
                  At <span className="text-amber-600 font-medium">Country House 'U Casino</span>, every meal is a celebration of taste. 
                    I nostri chef selezionano attentamente i migliori ingredienti locali per creare piatti che onorano la tradizione 
                    abbracciando la raffinatezza moderna. Lasciati tentare da sapori che rimangono nel cuore a lungo dopo l'ultimo boccone.
                </p>
                <div className="w-16 h-[1px] bg-amber-600/30 mx-auto md:mx-0" />
            </motion.div>
        </div>

        {/* Content Block 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            
            {/* Text (Order 2 on mobile, 1 on desktop) */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-lg mx-auto md:ml-auto text-center md:text-right order-2 md:order-1"
            >
                <h3 className={`${playfair.className} text-3xl text-amber-700 mb-6`}>
                Un rifugio senza tempo
                </h3>
                <p className="text-stone-600 leading-relaxed text-lg mb-8 font-light">
                    Fuggi dal trambusto della vita quotidiana e immergiti nella tranquillità. 
                    I nostri spazi sono pensati per essere il tuo santuario, unendo fascino rustico e 
                    lusso contemporaneo. Che tu sia qui per una fuga romantica o un ritiro rigenerante, 
                    trova la tua pace con noi.
                </p>
                 <div className="w-16 h-[1px] bg-amber-600/30 mx-auto md:ml-auto md:mr-0" />
            </motion.div>

            {/* Image Parallax (Order 1 on mobile, 2 on desktop) */}
            <motion.div 
                style={{ y: y2 }}
                className="relative aspect-[4/5] w-full max-w-md mx-auto md:mr-auto order-1 md:order-2 group"
            >
                <div className="absolute inset-0 border border-amber-600/20 transform -translate-x-4 translate-y-4 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />
                <div className="relative h-full w-full overflow-hidden shadow-xl">
                    <Image
                        src="/extra/cc.png"
                        alt="Serene Atmosphere"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;