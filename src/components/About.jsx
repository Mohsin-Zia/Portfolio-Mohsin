import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import { aboutData } from '../data/data'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-6">
        
        {/* About Me Title */}
        <motion.h2
          className="text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        {/* About Description */}
        <motion.div
          className="bg-gray-800 p-10 rounded-lg shadow-lg border border-gray-700 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {aboutData.bio.map((paragraph, index) => (
            <p key={index} className="text-lg mb-4 leading-relaxed text-gray-300">
              {paragraph}
            </p>
          ))}
        </motion.div>
        
        {/* Timeline Title */}
        <motion.h3
          className="text-4xl font-semibold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Education & Experience
        </motion.h3>
        
        {/* Timeline */}
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
          {aboutData.education.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgba(30, 30, 30, 0.9)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}
              contentArrowStyle={{ borderRight: '7px solid rgba(30, 30, 30, 0.9)' }}
              date={item.year}
              iconStyle={{ background: '#333', color: '#fff', boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.1)' }}
              icon={<FaGraduationCap />}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="vertical-timeline-element-title text-2xl font-bold text-white">{item.school}</h3>
                <h4 className="vertical-timeline-element-subtitle text-xl mt-2 text-gray-400">{item.degree}</h4>
                <p className="mt-4 text-gray-300">{item.description}</p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
          
          {aboutData.experience.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgba(30, 30, 30, 0.9)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}
              contentArrowStyle={{ borderRight: '7px solid rgba(30, 30, 30, 0.9)' }}
              date={item.year}
              iconStyle={{ background: '#444', color: '#fff', boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.1)' }}
              icon={<FaBriefcase />}
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="vertical-timeline-element-title text-2xl font-bold text-white">{item.company}</h3>
                <h4 className="vertical-timeline-element-subtitle text-xl mt-2 text-gray-400">{item.position}</h4>
                <p className="mt-4 text-gray-300">{item.description}</p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default About
