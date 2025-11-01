import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../assets/assets';
import ProjectCard from './ProjectCard';
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsRef = useRef(null); // reference to Projects section

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  // Scroll to Projects section whenever "View Less" is clicked
  useEffect(() => {
    if (!showAll && projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [showAll]);

  return (
    <motion.div
      ref={projectsRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.1 }}
      id="Projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A selection of my recent work
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
          >
            <span>{showAll ? 'View Less Projects' : 'View More Projects'}</span>
            {showAll ? (
              <FaArrowUp className="ml-2" />
            ) : (
              <FaArrowRight className="ml-2" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

