
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { footerData, contactData } from '../data/data'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {footerData.year} {footerData.name}. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            {contactData.socialMedia.map((social, index) => (
              <a key={index} href={social.url} className="hover:text-primary-500 transition duration-300">
                {social.name === 'GitHub' && <FaGithub size={24} />}
                {social.name === 'LinkedIn' && <FaLinkedin size={24} />}
                {social.name === 'Twitter' && <FaTwitter size={24} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer