import Header from "@/app/components/Header";
import GalleryGrid from "@/app/components/GalleryGrid";

export const metadata = {
  title: "Gallery | Hotel Caroline",
  description: "Explore the elegance and ambiance of Hotel Caroline.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-12 md:pt-48 md:pb-24 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-center mb-6 text-[#d4af37]">
            Our Gallery
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide">
            Immerse yourself in the visual journey of our exquisite spaces, culinary delights, and captured moments.
          </p>
        </div>
      </div>

      <GalleryGrid />
    </main>
  );
}
