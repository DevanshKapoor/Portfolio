import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import FarmSaathi from "../images/FarmSaathi.png";
const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  github, 
  liveLink,
  achievements = []
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-300"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <img 
          src={image || "/api/placeholder/600/400"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ 
            transform: isHovered ? "scale(1.05)" : "scale(1)" 
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-70"></div>
        
        {/* Project links */}
        <div className="absolute top-4 right-4 flex gap-3">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800/80 hover:bg-yellow-500 text-white hover:text-black p-2 rounded-full transition-colors"
              aria-label="View GitHub repository"
            >
              <FaGithub className="text-lg" />
            </a>
          )}
          
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800/80 hover:bg-yellow-500 text-white hover:text-black p-2 rounded-full transition-colors"
              aria-label="View live project"
            >
              <FaExternalLinkAlt className="text-lg" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-yellow-500">{title}</h3>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        {achievements.length > 0 && (
          <ul className="mb-4 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-gray-400 text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "FarmSaathi",
      description: "AI-powered agricultural assistance platform with voice-enabled features.",
      achievements: [
        "Increased accessibility through multi-language support (Hindi, English, Punjabi)",
        "Achieved 87% accuracy in weather-based crop recommendations",
        "Implemented 92% precision in image recognition for crop analysis"
      ],
      technologies: ["TensorFlow", "Keras", "Node.js", "MongoDB", "React", "Tailwind CSS"],
      image: "../images/FarmSaathi.png", 
      github: "https://github.com/DevanshKapoor/farmsaathi"
    },
    {
      title: "TimeCraft",
      description: "Smart class rescheduling system that automates slot assignment.",
      achievements: [
        "Led a team of 4 developers",
        "Resolved 95% of scheduling conflicts automatically",
        "Reduced scheduling resolution time by 70%"
      ],
      technologies: ["MySQL", "React", "Node.js", "Python", "Web Sockets"],
      image: "/api/placeholder/600/400", // Replace with actual image
      github: "https://github.com/DevanshKapoor/timecraft"
    }
    // Add more projects based on your resume or additional work
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-yellow-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work, featuring deep learning models, web applications, and research projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;