import React from "react";
import { motion } from "framer-motion";
import { assets ,aboutInfo} from "../assets/assets";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="About"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* Heading  */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion.
        </p>

        {/* image + my journey  */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* image  */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-[50%] h-[50%] object-cover mx-auto rounded-4xl"
              src={assets.Profile}
              alt="Profile"
            />
          </div>
          {/* text content  */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate full-stack developer who loves turning ideas
                into interactive, user-friendly web experiences. I specialize in
                building scalable web applications using React.js, Node.js,
                Express.js, and MongoDB, with a strong focus on clean UI,
                performance, and functionality.{" "}
              </p>
              <p className="text-gray-300 mb-6">
                When I'm not coding, I explore new tech trends, works on side
                projects, and enjoy music or time outdoors to recharge and stay
                creative.
              </p>

              {/* cards  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple">
                      <data.icon className='w-8 h-8'/>
                    </div>
                    <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                    <p className='text-gray-400'>{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
