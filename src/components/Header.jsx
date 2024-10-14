import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { navLinks } from '../data/data';
import Drawer from './Drawer';

const Header = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Centered Logo with Hover Effect */}
        <motion.div
          className="text-3xl font-bold bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          MyBrand
        </motion.div>
        
        {/* Nav Links and Dark Mode Toggle */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-lg text-white hover:text-gray-400 transition-colors duration-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition-colors duration-300 bg-gray-800 hover:bg-gray-600"
            whileHover={{ scale: 1.1 }}
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
          </motion.button>
        </div>

        {/* Drawer Toggle for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-3xl text-white">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Drawer for Mobile Navigation */}
      <AnimatePresence>
        {isDrawerOpen && (
          <Drawer
            isDrawerOpen={isDrawerOpen}
            toggleDrawer={toggleDrawer}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            navLinks={navLinks}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
