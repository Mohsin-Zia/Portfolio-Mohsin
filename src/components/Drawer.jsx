
import { motion } from 'framer-motion'
import { FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import {navLinks} from '../data/data'

const Drawer = ({ toggleDrawer, darkMode, setDarkMode }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="h-full w-full shadow-lg"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween' }}
      >
        <div className="p-6 relative">
          <button onClick={toggleDrawer} className="absolute top-5 right-5 text-2xl">
            <FaTimes />
          </button>
          <ul className="mt-12 space-y-6 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xl font-semibold hover:text-primary-500 transition-colors duration-300"
                  onClick={toggleDrawer}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => {
                setDarkMode(!darkMode)
                toggleDrawer()
              }}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 flex items-center justify-center"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Drawer
