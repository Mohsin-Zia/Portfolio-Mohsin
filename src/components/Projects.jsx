import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsData } from '../data/data'
import { useMediaQuery } from 'react-responsive'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })

  useEffect(() => {
    if (!isMobile && !isTablet) {
      setHoveredIndex(Math.floor(projectsData.length / 2))
    }
  }, [isMobile, isTablet])

  const handlePrevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectsData.length - 1))
  }

  const handleNextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex < projectsData.length - 1 ? prevIndex + 1 : 0))
  }

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        {isMobile || isTablet ? (
          <div className="relative">
            <motion.div
              key={activeIndex}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={projectsData[activeIndex].image}
                alt={projectsData[activeIndex].title}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{projectsData[activeIndex].title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{projectsData[activeIndex].description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projectsData[activeIndex].technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-primary-500 text-white rounded-full text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <a
                    href={projectsData[activeIndex].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary-500 text-white rounded text-center hover:bg-primary-600 transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={projectsData[activeIndex].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-500 text-white rounded text-center hover:bg-gray-600 transition duration-300"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
            <button
              onClick={handlePrevProject}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNextProject}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center h-[500px] overflow-x-auto">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative h-[400px] bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden cursor-pointer mx-2"
                initial={{ width: index === Math.floor(projectsData.length / 2) ? "600px" : "300px" }}
                animate={{
                  width: hoveredIndex === index ? "600px" : "300px",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(Math.floor(projectsData.length / 2))}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-70 p-6 flex flex-col justify-end"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-primary-500 text-white rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition duration-300"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
                        >
                          GitHub Repo
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects