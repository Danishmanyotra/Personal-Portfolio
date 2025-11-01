import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="Home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-dark-100  via-dark-300 to-dark-100"
    >
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between mt-6">
        {/* left side content  */}
        <div className="md:w-1/2 mb-10 md:mb-0 md:pl-20">
          <h1 className="text-4xl md:text-5xl  font-bold mb-4 ">
            Hi, I'm <span className="text-purple">Danish Manyotra</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 typewriter">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I create stunning web experience with modern technologies and
            innovative design.
          </p>

          <div className="flex space-x-4">
            <a
              href="#Projects"
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#Contact"
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-purple-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* right side image  */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple to-pink animate-pulse-slow opacity-70 ">
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="relative rounded-full h-62 w-70 md:w-80 md:h-80 object-cover z-10"
                src={assets.Profile}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
