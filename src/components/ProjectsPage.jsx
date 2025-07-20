import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaShieldAlt, FaLeaf, FaGraduationCap, FaStar, FaTrophy, FaRocket } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { motion } from "framer-motion";
import canguard from "../assets/Canguard.png";
import farmsaathi from "../assets/FarmSaathi.png";
import timecraft from "../assets/TimeCraft.jpeg";
import eduzone from "../assets/EduZone.jpeg";

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  github, 
  liveLink,
  achievements = [],
  category = "AI/ML",
  featured = false,
  icon,
  stats = {}
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getCategoryColor = (cat) => {
    const colors = {
      "AI/ML": "from-purple-500 to-blue-500",
      "Agriculture": "from-green-500 to-emerald-500", 
      "Education": "from-orange-500 to-red-500",
      "Security": "from-red-500 to-pink-500"
    };
    return colors[cat] || "from-gray-500 to-gray-600";
  };

  const categoryGradient = getCategoryColor(category);
  
  return (
    <motion.div 
      className={`relative rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full shadow-xl ${
        featured 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-yellow-500/50 ring-1 ring-yellow-500/20' 
          : 'bg-gray-900/90 border-gray-700/50 hover:border-yellow-500/50'
      }`}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered 
          ? '0 25px 50px -15px rgba(255, 204, 0, 0.3), 0 0 0 1px rgba(255, 204, 0, 0.1)' 
          : '0 10px 30px -15px rgba(0, 0, 0, 0.3)'
      }}
    >

      {/* Category Badge - moved to not overlap with links */}
      <div className="absolute top-4 left-4 z-10" style={{ marginTop: featured ? "40px" : "0px" }}>
        <div className={`bg-gradient-to-r ${categoryGradient} text-white px-2 py-1 rounded-full text-xs font-medium flex items-center`}>
          {icon && <span className="mr-1 text-xs">{icon}</span>}
          {category}
        </div>
      </div>

      <div className="relative overflow-hidden" style={{ height: featured ? "200px" : "180px" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        
        <img 
          src={image || "/api/placeholder/600/400"} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-700"
          style={{ 
            transform: isHovered ? "scale(1.1) rotate(1deg)" : "scale(1)",
            filter: isHovered ? "brightness(1.1) saturate(1.2)" : "brightness(0.9)"
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        
        {/* Stats Overlay */}
        {Object.keys(stats).length > 0 && (
          <div className="absolute top-16 left-4 space-y-2">
            {Object.entries(stats).map(([key, value], idx) => (
              <motion.div
                key={idx}
                className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <BiTargetLock className="mr-1 text-yellow-500" />
                <span className="font-medium text-yellow-500">{value}</span>
                <span className="ml-1">{key}</span>
              </motion.div>
            ))}
          </div>
        )}
        
        {/* Project links */}
        <div className="absolute top-4 right-4 flex gap-2">
          {github && (
            <motion.a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-sm hover:bg-yellow-500 text-white hover:text-black p-3 rounded-full transition-all duration-300"
              aria-label="View GitHub repository"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-lg" />
            </motion.a>
          )}
          
          {liveLink && (
            <motion.a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-sm hover:bg-yellow-500 text-white hover:text-black p-3 rounded-full transition-all duration-300"
              aria-label="View live project"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt className="text-lg" />
            </motion.a>
          )}
        </div>
        
        {/* Project title banner with enhanced styling */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent py-6 px-6">
          <motion.h3 
            className={`font-bold text-yellow-500 ${featured ? 'text-3xl' : 'text-2xl'}`}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col"
        style={{ minHeight: "200px", maxHeight: "280px" }}
      >
        <p className="text-gray-300 mb-3 flex-grow leading-relaxed text-sm">
          {description.length > 120 ? description.substring(0, 120) + "..." : description}
        </p>
        
        {/* Compact achievements */}
        {achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-yellow-500 font-medium mb-2 text-sm flex items-center">
              <FaTrophy className="mr-1 text-xs" />
              Key Results
            </h4>
            <ul className="space-y-1">
              {achievements.slice(0, 3).map((achievement, index) => (
                <li 
                  key={index} 
                  className="flex items-start"
                >
                  <span className="text-yellow-500 mr-2 mt-0.5">
                    <FaRocket className="text-xs" />
                  </span>
                  <span className="text-gray-400 text-xs leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Enhanced tech stack */}
        <div className="mb-6">
          <h4 className="text-gray-400 text-sm font-medium mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span 
                key={index} 
                className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 text-xs rounded-full border border-gray-600/50 hover:border-yellow-500/50 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.1, y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Compact CTA button */}
        {github && (
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-medium rounded-full transition-all duration-300 text-sm"
          >
            <span>View Project</span>
            <FaArrowRight className="ml-2 text-xs" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "CanGuard AI",
      description: "Advanced 3-tier behavioral anomaly detection framework combining statistical modeling, Siamese neural networks, and GraphSAGE-based GNNs with temporal drift analysis for real-time security monitoring.",
      achievements: [
        "98% real-time classification accuracy with advanced ML ensemble",
        "GDPR-compliant edge inference with sub-150ms latency optimization",
        "Intelligent user verification through uncertainty scoring and predictive drift tracking",
        "GraphSAGE-based GNN implementation for complex behavioral pattern recognition"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "GraphSAGE", "NetworkX", "MySQL", "WebSockets", "Node.js", "Docker", "Flask"],
      image: canguard, 
      github: "https://github.com/DevanshKapoor/canguard-ai",
      category: "Security",
      icon: <FaShieldAlt />,
      stats: {
        "Accuracy": "98%",
        "Latency": "<150ms"
      }
    },
    {
      title: "FarmSaathi",
      description: "Multimodal AI agricultural assistant integrating voice input and audio responses across multiple Indian languages with advanced crop recommendation and disease prediction capabilities.",
      achievements: [
        "Multilingual support in Hindi, English, Tamil, and Punjabi with ASR/TTS pipelines",
        "Weather-aware crop recommendation system achieving 87% accuracy",
        "Crop disease prediction model with 92% precision using computer vision",
        "RAG-based audiobot for context-aware responses improving rural awareness"
      ],
      technologies: ["TensorFlow", "Keras", "HuggingFace Transformers", "OpenCV", "Pandas", "MongoDB", "Web Speech API", "REST API"],
      image: farmsaathi, 
      github: "https://github.com/DevanshKapoor/farmsaathi",
      liveLink: "https://farmsaathi.vercel.app",
      category: "Agriculture",
      icon: <FaLeaf />,
      stats: {
        "Languages": "4",
        "Accuracy": "92%"
      }
    },
    {
      title: "TimeCraft",
      description: "Intelligent automated class scheduling system that resolves time conflicts and optimizes academic timetables using advanced algorithms with real-time collaborative features.",
      achievements: [
        "75% reduction in manual scheduling time for educational institutions",
        "95% effectiveness in automated conflict resolution using custom algorithms",
        "Real-time collaborative updates via WebSockets for instant schedule synchronization",
        "Advanced constraint satisfaction algorithms for optimal resource allocation"
      ],
      technologies: ["React", "Node.js", "MySQL", "WebSockets", "Express", "Algorithm Design", "Redux", "JWT Auth"],
      image: timecraft, 
      github: "https://github.com/DevanshKapoor/TimeCraft",
      liveLink: "https://timecraft-scheduler.vercel.app",
      category: "Education",
      icon: <FaGraduationCap />,
      stats: {
        "Efficiency": "75%",
        "Accuracy": "95%"
      }
    },
    {
      title: "EduZone",
      description: "Comprehensive learning management system bridging the gap between students and educators through interactive modules, performance analytics, and personalized learning paths.",
      achievements: [
        "40% increase in student engagement through interactive learning modules",
        "AI-powered performance analytics providing personalized learning recommendations",
        "Integrated assessment tools with automated grading and feedback system",
        "Progressive Web App architecture for seamless cross-platform experience"
      ],
      technologies: ["React", "Firebase", "Material UI", "Chart.js", "OAuth", "PWA", "Service Workers", "Cloud Functions"],
      image: eduzone, 
      github: "https://github.com/DevanshKapoor/EduZone",
      liveLink: "https://eduzone-learn.vercel.app",
      category: "Education",
      icon: <FaGraduationCap />,
      stats: {
        "Engagement": "+40%",
        "Features": "15+"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-20 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover my latest innovations in AI/ML, featuring cutting-edge projects that solve real-world challenges through advanced algorithms, neural networks, and intelligent system design.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Featured project - same size as others now */}
          <motion.div variants={itemVariants}>
            <ProjectCard {...projects[0]} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProjectCard {...projects[1]} />
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.slice(2).map((project, index) => (
            <motion.div key={index + 2} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="https://github.com/DevanshKapoor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-yellow-500 hover:to-yellow-600 hover:text-black transition-all duration-300 border border-gray-600 hover:border-yellow-500 shadow-lg hover:shadow-yellow-500/25 text-lg font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-3 text-xl" />
            Explore All Projects on GitHub
            <FaArrowRight className="ml-3 transform transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;