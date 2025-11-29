import bgVideo from "./assets/earth-bg.mp4";
import moon from "./assets/mountain.png";
import shuttle from "./assets/space-shuttle.png";
import satellite1 from "./assets/satellite-1.jpg";
import satellite2 from "./assets/satellite-2.jpg";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServiceList } from "./components/ServiceList";
import { Banner } from "./components/Banner";

function App() {
  return (
    <div className="">
      <div className="h-[1000px] w-full relative">
        <video
          autoPlay
          loop
          muted
          className="fixed top-0 left-0 w-full h-[900px] object-cover z-[-10]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

       
        <div className="absolute top-[20%] left-0 w-full h-[400px] overflow-hidden pointer-events-none z-[-5]">
          <img
            // Changed right-[-50%] to right-[-20%] to ensure it starts closer to the visible area
            className="absolute right-[-20%] w-[40%] animate-shuttleFly"
            src={shuttle}
            alt="shuttle"
          />
        </div>

        <Navbar />
        <HeroSection />
        <ServiceList />
        <Banner direction="right" image={satellite1} />
        <Banner direction="left" image={satellite2} />
        <Banner direction="right" image={satellite1} />
        <Banner direction="left" image={satellite2} />
      </div>
    </div>
  );
}

export default App;