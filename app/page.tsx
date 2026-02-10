
import DayNightTransition from "./components/DayNightTransition";
import MapSection from "./components/MapSection";
import FoodDetail from "./components/FoodDetail";
import Info from "./components/Info";
import LandingFirst from "./components/LandingFirst";
import About from "./components/About";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <main className="min-h-[200vh]">
<LandingFirst/>

      <Info />
      <About/>
      <MapSection />

      <FoodDetail />
      <Reviews/>
    </main>
  );
}
