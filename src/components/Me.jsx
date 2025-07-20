import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowDown, BsDownload } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaRocket } from "react-icons/fa";
import me from "../assets/MyImage.png";
const Me = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  
  const titles = [
    "Machine Learning Engineer",
    "Full Stack Developer", 
    "AI Researcher",
    "Problem Solver"
  ];

  // Hide scroll indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 200);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rotating titles effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [titles.length]);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating particles component
  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, null],
              x: [null, Math.random() * 50 - 25, null],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        animate={{
          x: -mousePosition.x * 0.015,
          y: -mousePosition.y * 0.015,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text content */}
          <motion.div 
            className="w-full lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h2 
              className="text-yellow-500 text-xl md:text-2xl mb-2 font-bold tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              HELLO, I'M
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-white">Devansh</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Kapoor
              </span>
            </motion.h1>
            
            {/* Rotating Titles */}
            <div className="h-8 mb-8 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTitle}
                  className="flex items-center gap-3 text-lg text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    {currentTitle === 0 && <FaRocket className="text-yellow-500" />}
                    {currentTitle === 1 && <FaCode className="text-yellow-500" />}
                    {currentTitle === 2 && <FaRocket className="text-yellow-500" />}
                    {currentTitle === 3 && <FaCode className="text-yellow-500" />}
                  </div>
                  <span className="font-medium">{titles[currentTitle]}</span>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.p 
              className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              A passionate computer science student at{" "}
              <span className="text-yellow-500 font-medium">Thapar Institute</span> with expertise in 
              deep learning and web development. Currently working as a research intern at{" "}
              <span className="text-yellow-500 font-medium">Samsung PRISM</span>, focused on optimizing 
              Large Language Models.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="mailto:kapoordevansh15@gmail.com" 
                className="group px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-medium rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-yellow-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="group-hover:rotate-12 transition-transform duration-300" />
                Let's Talk
              </motion.a>
              
              <motion.a 
                href="#" 
                className="group px-8 py-3 bg-gray-800/50 backdrop-blur border border-gray-700 text-white font-medium rounded-full hover:bg-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsDownload className="group-hover:animate-bounce" />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { href: "https://github.com/DevanshKapoor", icon: FaGithub, label: "GitHub" },
                { href: "https://www.linkedin.com/in/devansh-kapoor-819b29256/", icon: FaLinkedin, label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/30 backdrop-blur border border-gray-700 rounded-full text-gray-400 hover:text-yellow-500 hover:border-yellow-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Animated background rings */}
              <div className="absolute -inset-8 rounded-full border border-yellow-500/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute -inset-12 rounded-full border border-yellow-500/10 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
              
              {/* Main image container */}
              <motion.div 
                className="relative z-10 group-hover:scale-105 transition-transform duration-500"
                whileHover={{ 
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <div className="relative">
                  <img 
                    src= {me}
                    alt="Devansh Kapoor - ML Engineer & Developer" 
                    className="max-w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(234,179,8,0.3))',
                    }}
                  />
                  
                  {/* Glassmorphism overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
              
              {/* Dynamic background glow */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 rounded-full blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 1.2 }}
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <motion.span 
              className="text-sm mb-3 font-medium tracking-wider"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              EXPLORE MORE
            </motion.span>
            <motion.div
              className="p-2 border border-gray-600 rounded-full hover:border-yellow-500 transition-colors duration-300"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <BsArrowDown className="text-xl text-yellow-500" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Me;