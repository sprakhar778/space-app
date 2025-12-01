export function Card({ title, description, icon }) {
  return (
    <div  data-aos="fade-up" data-aos-delay="300" 
      className="
        flex flex-col justify-center items-center
        bg-sky-700/50 backdrop-blur-sm 
        rounded-lg p-6 
        
        min-h-[400px] max-w-sm mx-auto mt-8 
        text-center text-white
        
        transition-all duration-300 ease-out
        hover:scale-[1.05] 
        hover:-translate-y-2
        hover:shadow-lg hover:shadow-sky-500/30
      "
    >
      <div data-aos="fade-up" data-aos-delay="400" className="text-4xl mb-4 font-semibold">
        {title}
      </div>

      <h2 data-aos="fade-up" data-aos-delay="500" className="text-2xl font-bold mb-2">
        {icon}
      </h2>

      <p data-aos="fade-up" data-aos-delay="600"  className="text-white/80">
        {description}
      </p>
    </div>
  );
}
