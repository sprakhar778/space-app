export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] text-center text-white px-4">
      <h1 className="text-5xl font-bold mb-4">
        Explore the Universe with SpaceX
      </h1>
      <p className="text-lg mb-8 max-w-2xl">
        Join us on an epic journey through space and discover the wonders of the
        cosmos. From cutting-edge technology to breathtaking missions, SpaceX is
        at the forefront of space exploration.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 hover:scale-105 transform transition duration-300">
        Learn More
      </button>
    </div>
  );
}
