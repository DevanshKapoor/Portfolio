import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import myImage from '../assets/FarmSaathi.png' ;

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
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all duration-300 flex flex-col h-full shadow-lg"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(255, 204, 0, 0.2)" }}
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
            <motion.a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800/80 hover:bg-yellow-500 text-white hover:text-black p-3 rounded-full transition-colors"
              aria-label="View GitHub repository"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FaGithub className="text-lg" />
            </motion.a>
          )}
          
          {liveLink && (
            <motion.a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800/80 hover:bg-yellow-500 text-white hover:text-black p-3 rounded-full transition-colors"
              aria-label="View live project"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FaExternalLinkAlt className="text-lg" />
            </motion.a>
          )}
        </div>
        
        {/* Project title banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent py-4 px-6">
          <h3 className="text-2xl font-bold text-yellow-500">{title}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        {achievements.length > 0 && (
          <ul className="mb-4 space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2 mt-1">•</span>
                <span className="text-gray-400 text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-yellow-500/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {github && (
          <motion.a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center text-yellow-500 hover:text-yellow-400 font-medium group"
            whileHover={{ x: 5 }}
          >
            View Project
            <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "FarmSaathi",
      description: "An AI-powered agricultural assistance platform with voice-enabled features to help farmers optimize crop selection, detect diseases, and access market insights in their preferred language.",
      achievements: [
        "Multi-language support in Hindi, English, and Punjabi using NLP for voice recognition",
        "Real-time crop disease identification with 92% accuracy using computer vision",
        "Personalized weather-based crop recommendations with 87% accuracy"
      ],
      technologies: ["TensorFlow", "React", "Node.js", "MongoDB", "Express", "NLP", "Computer Vision"],
      image: "src/assets/FarmSaathi.png", 
      github: "https://github.com/DevanshKapoor/farmsaathi",
      liveLink: "https://farmsaathi.vercel.app"
    },
    {
      title: "TimeCraft",
      description: "An automated class scheduling system that resolves time conflicts and optimizes academic timetables using advanced algorithms and real-time notifications.",
      achievements: [
        "Reduced manual scheduling time by 75% for educational institutions",
        "Automated conflict resolution with 95% effectiveness using custom algorithms",
        "Real-time updates via WebSockets for instant schedule changes"
      ],
      technologies: ["React", "Node.js", "MySQL", "WebSockets", "Express", "Algorithm Design", "Redux"],
      image: "src/assets/TimeCraft.jpeg", 
      github: "https://github.com/DevanshKapoor/TimeCraft",
      liveLink: "https://timecraft-scheduler.vercel.app"
    },
    {
      title: "EduZone",
      description: "A comprehensive learning management system designed to bridge the gap between students and educators through interactive learning modules and analytics.",
      achievements: [
        "Interactive learning modules increased student engagement by 40%",
        "Performance analytics providing personalized learning paths",
        "Integrated assessment tools with automated grading system"
      ],
      technologies: ["React", "Firebase", "Material UI", "Chart.js", "OAuth", "Progressive Web App"],
      image: "src/assets/EduZone.jpeg", 
      github: "https://github.com/DevanshKapoor/EduZone",
      liveLink: "https://eduzone-learn.vercel.app"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-yellow-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of innovative solutions, featuring AI-powered applications, intelligent systems, and academic tools designed to solve real-world problems.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <motion.a
            href="https://github.com/DevanshKapoor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-800 text-white hover:bg-yellow-500 hover:text-black transition-colors border border-gray-700 hover:border-yellow-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-2" />
            View More Projects on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;