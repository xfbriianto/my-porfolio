import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons

const Portfolio = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [text, setText] = useState('');
  const fullText = "Avail Dwi Febrianto";
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack online shopping platform built with React and Node.js",
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application using OpenWeatherMap API",
      imageUrl: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["JavaScript", "API", "CSS3"]
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A collaborative task management tool for teams",
      imageUrl: "https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D",
      tags: ["React", "Firebase", "Material-UI"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills",
      imageUrl: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww",
      tags: ["React", "Tailwind CSS", "Framer Motion"]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 right-0 p-4 w-full flex flex-col md:flex-row justify-between items-center bg-white/80 backdrop-blur z-50">
        <h1 className="text-xl md:text-2xl font-bold font-mono mb-4 md:mb-0">AVAIL DWI FEBRIANTO</h1>
        <div className="space-x-4 md:space-x-8 text-sm md:text-base">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
              className={`hover:text-gray-600 transition-colors ${
                activeSection === section ? 'font-bold' : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* Home Section */}
      <motion.section
        id="home"
        className="min-h-screen flex items-center px-4 md:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hello, I'm <span className="animated-text">{text}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">Frontend & Backend Developer</p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="min-h-screen flex items-center px-4 md:px-20 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-8 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I am currently pursuing my passion for technology as a Software Engineering Technology student at Politeknik Negeri Banyuwangi, majoring in Business Informatics, where I blend business insights with cutting-edge software development skills to craft innovative solutions for today's digital challenges.
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="min-h-screen px-4 md:px-20 py-16 md:py-32 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs md:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 md:px-20 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <p className="text-lg mb-6 text-center">
              Feel free to reach out to me for any inquiries or collaborations.
            </p>
            <div className="flex justify-center items-center space-x-6 mb-8">
              <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                your.email@example.com
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800 transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">
                <FaGithub size={32} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaLinkedin size={32} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
                <FaTwitter size={32} />
              </a>
              <a href="https://instagram.com/itsavfbriiiant_" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram size={32} />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
