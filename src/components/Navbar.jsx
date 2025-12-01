import { useState } from "react";
import Logo from "../assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="fixed w-full p-4 flex justify-between items-center border-b border-white/30 z-20 bg-black/30 backdrop-blur-md">
        <div className="flex gap-2 items-center">
          <img src={Logo} className="h-10 w-10" alt="" />
          <h1 className="text-white text-3xl font-bold">SpaceX</h1>
        </div>

        <ul className="hidden md:flex space-x-12 text-white text-[20px] font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Technology</a></li>
          <li><a href="#">Galaxy</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="hidden md:block bg-blue-600 text-white px-6 py-3 mr-4 rounded hover:bg-blue-500 transition ">
          Login
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full md:hidden bg-black/30 backdrop-blur-md border-b border-white/30 z-10">
          <ul className="flex flex-col items-center space-y-2 p-4 text-white">
            <li className="w-full text-center py-2 hover:bg-white/10"><a href="#">Home</a></li>
            <li className="w-full text-center py-2 hover:bg-white/10"><a href="#">About</a></li>
            <li className="w-full text-center py-2 hover:bg-white/10"><a href="#">Technology</a></li>
            <li className="w-full text-center py-2 hover:bg-white/10"><a href="#">Galaxy</a></li>
            <li className="w-full text-center py-2 hover:bg-white/10"><a href="#">Contact</a></li>

            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
