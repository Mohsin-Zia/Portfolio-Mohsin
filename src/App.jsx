import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <ScrollReveal>
            <Hero />
          </ScrollReveal>
          <ScrollReveal>
            <About />
          </ScrollReveal>
          <ScrollReveal>
            <Projects />
          </ScrollReveal>
          <ScrollReveal>
            <Skills />
          </ScrollReveal>
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App