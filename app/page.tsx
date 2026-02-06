
import DayNightTransition from "./components/DayNightTransition";
import MapSection from "./components/MapSection";
import FoodDetail from "./components/FoodDetail";
import Info from "./components/Info";
import LandingFirst from "./components/LandingFirst";

export default function Home() {
  return (
    <main className="min-h-[200vh]">
<LandingFirst/>

      <Info />
      <MapSection />

      <FoodDetail />
    </main>
  );
}
