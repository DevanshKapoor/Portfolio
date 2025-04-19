import me from "../assets/MyImage.png"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Me = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the scroll indicator when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text content */}
          <motion.div 
            className="w-full lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-yellow-500 text-2xl md:text-3xl mb-2 font-bold">
              HELLO!
            </h2>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              I'm <span className="text-yellow-500">Devansh <br />Kapoor</span>
            </h1>
            
            <div className="flex items-center mb-8 text-lg text-gray-300">
              <span>Machine Learning</span>
              <span className="mx-3 text-yellow-500">|</span>
              <span>Web Development</span>
            </div>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              A computer science student at Thapar Institute with expertise in deep learning and web development. 
              Currently working as a research intern at Samsung PRISM, focused on optimizing Large Language Models.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <a 
                href="mailto:kapoordevansh15@gmail.com" 
                className="px-8 py-3 bg-yellow-500 text-black font-medium rounded-full hover:bg-yellow-600 transition-colors flex items-center gap-2"
              >
                <FaEnvelope />
                Contact Me
              </a>
              
              <a 
                href="https://github.com/DevanshKapoor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border border-yellow-500 text-yellow-500 font-medium rounded-full hover:bg-yellow-500 hover:text-black transition-colors flex items-center gap-2"
              >
                <FaGithub />
                GitHub
              </a>
              
              <a 
                href="https://www.linkedin.com/in/devansh-kapoor-819b29256/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border border-yellow-500 text-yellow-500 font-medium rounded-full hover:bg-yellow-500 hover:text-black transition-colors flex items-center gap-2"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main image with glow effect */}
              <div className="relative z-10">
                <img 
                  src={me} 
                  alt="Devansh Kapoor" 
                  className="max-w-full h-auto max-h-[70vh] object-contain rounded-lg drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                />
              </div>
              
              {/* Background decorative element */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      {isVisible && (
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <BsArrowDown className="text-2xl text-yellow-500" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Me;