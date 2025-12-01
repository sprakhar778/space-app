import { FaSatellite, FaSatelliteDish, FaSpaceAwesome } from "react-icons/fa6";
import { Card } from "./Card";
import Wave from '../assets/wave2.mp4';
import { FaReact, FaSpaceShuttle } from 'react-icons/fa';
import moon from "../assets/mountain.png";

export function ServiceList() {
  const services = [
    {
      title: 'Rocket Launches',
      description: 'Experience the thrill of rocket launches with our state-of-the-art technology.',
      icon: <FaSpaceAwesome className="text-5xl "/>
    },
    {
      title: 'Satellite Deployment',
      description: 'We provide reliable satellite deployment services for various applications.',
      icon: <FaSatelliteDish className="text-5xl "/>,
    },
    {
      title: 'Space Tourism',
      description: 'Join us for an unforgettable journey beyond the stars with our space tourism packages.',
      icon: <FaSpaceShuttle className="text-5xl "/>,
    },
  ];

  return (
  <div className="w-full overflow-x-hidden justify-center items-center">

    {/* Moon image container */}
    <div className="relative w-full overflow-hidden">
      <img
        src={moon}
        className="
          relative 
          -bottom-2 
          -left-40
          w-[2200px]
          max-w-none 
          h-32 
          object-fit  
          z-5
        "
      />

      {/* Blending layer */}
     <div className="absolute bottom-0 left-0 w-full h-32 
  bg-gradient-to-b from-transparent via-[#000417]/40 to-[#000000] 
   opacity-90 z-30">
</div>
    </div>  
  
    {/* Services Section */}
    <div className="relative w-full  py-[200px] bg-navyish backdrop:blur-sm overflow-visible">

      <h2 data-aos="fade-up" data-aos-delay="300" className="text-5xl font-bold text-white text-center mb-10"> 
        Our Services
      </h2>

      <div className="grid grid-cols-1 mx-5 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

   <video  
        autoPlay
        loop
        muted
        className="relative w-full h-[500px] object-cover mt-12 rounded-lg"
      >
        <source src={Wave} type="video/mp4" />
      </video>

      {/* Smooth fade-out blend */}
      <div
        className="
          pointer-events-none
          w-full 
          h-32 
          -mt-32 
          bg-gradient-to-b 
          from-transparent 
          via-navyish/50 
          to-navyish
          relative 
          z-40
        "
      />
    </div>
  </div>
);
}