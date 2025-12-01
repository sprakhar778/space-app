  import { useState } from "react";
  import Logo from "../assets/logo.png";
  useState;
  export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <nav data-aos="fade-down" data-aos-delay="300" className="">
        <div className="fixed w-full p-4 flex justify-between items-center border-spacing-5 border-b border-white/30 z-[1] bg-black/30 backdrop-blur-md">
          <div className="flex gap-2 items-center">
            <img src={Logo} className="h-10 w-10" alt="" />
            <h1 className="text-white text-3xl font-bold">SpaceX</h1>
          </div>

          <ul className="hidden md:flex space-x-12 text-white text-[20x] font-medium">
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="#">Technology</a>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="#">Galaxy</a>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="hidden  md:block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 hover:scale-105 transform transition duration-300">
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
    <div className="w-full md:hidden fixed top-16 left-0 border-b border-white/30 bg-black/30 backdrop-blur-md z-10">
      <ul className="flex flex-col items-center space-y-2 p-4 text-white">
        
        <li className="w-full text-center py-2 rounded hover:bg-white/10 transition duration-300 cursor-pointer">
          <a href="#">Home</a>
        </li>

        <li className="w-full text-center py-2 rounded hover:bg-white/10 transition duration-300 cursor-pointer">
          <a href="#">About</a>
        </li>

        <li className="w-full text-center py-2 rounded hover:bg-white/10 transition duration-300 cursor-pointer">
          <a href="#">Technology</a>
        </li>

        <li className="w-full text-center py-2 rounded hover:bg-white/10 transition duration-300 cursor-pointer">
          <a href="#">Galaxy</a>
        </li>

        <li className="w-full text-center py-2 rounded hover:bg-white/10 transition duration-300 cursor-pointer">
          <a href="#">Contact</a>
        </li>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Login
        </button>
      </ul>
    </div>
  )}

      </nav>
    );
  }
