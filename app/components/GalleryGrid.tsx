"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/gallerycasino/3.jpg", alt: "Ambient Bar Setting" },
  { src: "/gallerycasino/11.jpg", alt: "Exquisite Dessert" },
  { src: "/gallerycasino/1.jpg", alt: "Hotel Interior" },
  { src: "/gallerycasino/4.jpg", alt: "Luxury Room" },
  { src: "/gallerycasino/5.jpg", alt: "Elegant Dining" },
  { src: "/gallerycasino/6.jpg", alt: "Scenic View" },
  { src: "/gallerycasino/7.jpg", alt: "Relaxing Lounge" },
  { src: "/gallerycasino/8.jpg", alt: "Premium Suites" },
  { src: "/gallerycasino/9.png", alt: "Outdoor Ambiance" },
  { src: "/gallerycasino/10.jpg", alt: "Architectural Detail" },
  { src: "/gallerycasino/2.jpg", alt: "Gourmet Cuisine" },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer mb-6"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
            
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out shadow-sm"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Elegant Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                 <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-stone-800 font-serif italic text-lg">Visualizza</span>
                 </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
