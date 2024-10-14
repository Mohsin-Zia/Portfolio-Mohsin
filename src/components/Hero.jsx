import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMousePointer } from 'react-icons/fa';
import { heroData } from '../data/data';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center  text-white">
      {/* Left Side: Text Content */}
      <div className="w-1/2 p-10 space-y-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase text-gray-400 text-sm"
        >
          {heroData.subtitle}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl font-bold leading-tight"
        >
          {heroData.greeting} <br /> {heroData.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-gray-300"
        >
          {heroData.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center cursor-pointer text-lg"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <FaMousePointer className="mr-2" />
          <span>{heroData.scrollText}</span>
        </motion.div>
      </div>

      {/* Right Side: Hero Image */}
      <div className="relative w-1/2 h-full">
        <img
          src={heroData.image}
          alt="Developer"
          className="w-full h-full object-cover grayscale"
          style={{ opacity: 0.9 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
      </div>

      {/* Fading Scroll Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroData.overlayImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: scrollY / (window.innerHeight / 2),
        }}
      />
    </section>
  );
};

export default Hero;
