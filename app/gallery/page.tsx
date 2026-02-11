import Header from "@/app/components/Header";
import GalleryGrid from "@/app/components/GalleryGrid";
import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    subsets: ["latin"],
});

export const metadata = {
  title: "Gallery | Hotel Caroline",
  description: "Explore the elegance and ambiance of Hotel Caroline.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f9f8f4] text-gray-900 selection:bg-amber-100 selection:text-amber-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-12 md:pt-48 md:pb-24 px-6">
        <div className="container mx-auto text-center">
            <span className={`${greatVibes.className} text-amber-600 text-5xl md:text-6xl block mb-4`}>
                La nostra Galleria
            </span>
          <h1 className={`${playfair.className} text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8`}>
            Momenti Indimenticabili
          </h1>
          <p className="text-stone-600 text-center max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide leading-relaxed">
            Immergiti nell'atmosfera unica dei nostri spazi, scopri i dettagli che rendono speciale ogni soggiorno.
          </p>
           <div className="w-24 h-px bg-amber-400 mx-auto mt-12 opacity-60"></div>
        </div>
      </div>

      <GalleryGrid />
    </main>
  );
}
