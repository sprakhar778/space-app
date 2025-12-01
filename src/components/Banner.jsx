import satellite1 from "../assets/satellite-1.jpg";

export function Banner({ direction = "right", image = satellite1 }) {
  const isLeft = direction === "left";

  return (
    <div  className="relative w-full py-12 px-8 bg-navyish overflow-visible flex justify-center items-center">
      <div data-aos="fade-up" data-aos-delay="200"
        className={
          `
          relative flex flex-col md:flex-row items-center   gap-8 bg-navyish
          w-full mx-auto border-b-2 border-white/20 p-3
          transition-all duration-300 hover:translate-y-[-4px]

          /* Glow */
          shadow-[0_0_20px_rgba(0,150,255,0.15)]

          /* Desktop layout */
          md:w-[50%] 
        ` +
          (isLeft
            ? " md:flex-row-reverse md:ml-[5%] md:border-l-2 md:border-white/30 md:shadow-[-10px_0_25px_-5px_rgba(0,150,255,0.25)]"
            : " md:flex-row md:ml-[45%] md:border-r-2 md:border-white/30 md:shadow-[10px_0_25px_-5px_rgba(0,150,255,0.25)]")
        }
      >
        {/* Image Section */}
        <div className="w-full md:w-[50%] h-[250px]  md:h-[300px] overflow-hidden flex-shrink-0 rounded-md">
          <img data-aos="zoom-in" data-aos-delay="300"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            src={image}
            alt="Satellite"
          />
        </div>
        
        {/* Text Section */}
        <div className="flex-1">
          <h2  data-aos="fade-up" data-aos-delay="250" className="text-white text-4xl font-bold mb-4">Satellite</h2>
          <p  data-aos="fade-up" data-aos-delay="300" className="text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            excepturi? Soluta quos sunt nulla necessitatibus provident inventore
            labore recusandae quae.
          </p>

          {/* Button Hover */}
          <button  data-aos="fade-up" data-aos-delay="300" className="bg-blue-500 px-6 py-3 text-white rounded-md transition-all duration-300 hover:bg-blue-400 hover:shadow-[0_0_12px_rgba(0,150,255,0.6)] hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
