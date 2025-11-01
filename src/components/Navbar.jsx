import React from "react";
import { nav } from "framer-motion/client";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-3xl font-bold text-white">
            Danish
            <span className="text-purple">Manyotra</span>
            <div className="w-4 h-4 bg-purple rounded-full "></div>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          <a
            href="#Home"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#About"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#Skills"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#Projects"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#Experience"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Experience</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#Contact"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
        </div>

        {/* mobile view  */}

        <div className="md-hidden lg:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer "
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer "
            />
          )}
        </div>
      </div>

      {/* mobile Menu  */}

      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center text-2xl">
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#Home"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Home</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#About"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>About</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#Skills"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Skills</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#Projects"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Projects</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#Experience"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Experience</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#Contact"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
