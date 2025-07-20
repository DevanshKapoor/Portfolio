import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "stack", label: "Stack" },
    { id: "projects", label: "Projects" },
    { id: "links", label: "Contact" }
  ];

  // Handle scroll effects with direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set navbar background when scrolled
      setScrolled(currentScrollY > 50);
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
      
      // Update active section based on scroll position
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  // Navbar variants for animations
  const navVariants = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    hidden: {
      y: -100,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const menuItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    hover: { 
      scale: 1.05,
      color: "#eab308",
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-800/50" 
          : "bg-transparent"
      }`}
      variants={navVariants}
      animate={scrollDirection === "up" ? "visible" : "hidden"}
      initial="visible"
    >
      {/* Background gradient overlay */}
      {scrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-gray-900/80 to-gray-900/50" />
      )}
      
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
            className="cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <h1 className="font-bold text-2xl md:text-3xl relative">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                DEVANSH
              </span>
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </h1>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 items-center">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  variants={menuItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-lg font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                      activeSection === item.id 
                        ? "text-yellow-500" 
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {/* Active section indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.li>
              ))}
            </ul>
            
            {/* Social Links & Resume */}
            <div className="flex items-center gap-4 border-l border-gray-700/50 pl-6">
              {/* Social Icons */}
              <div className="flex gap-2">
                {[
                  { href: "https://github.com/DevanshKapoor", icon: FaGithub, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/devansh-kapoor-819b29256/", icon: FaLinkedin, label: "LinkedIn" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-yellow-500/50 text-gray-400 hover:text-yellow-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
              
              {/* Resume Button */}
              <motion.a 
                href="https://drive.google.com/file/d/1W_jE1CvgIJmWJsc3oArNiFdeE8PqvHLb/view?usp=drivesdk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold rounded-xl hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaDownload className="group-hover:animate-bounce" />
                  Resume
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <motion.button
            className="block md:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-yellow-500 hover:bg-gray-700/50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiX className="text-2xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiMenu className="text-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-6 bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-700/50 overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Mobile Navigation Items */}
              <ul className="space-y-4 mb-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    variants={mobileItemVariants}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSection === item.id 
                          ? "text-yellow-500 bg-yellow-500/10 border-l-4 border-yellow-500" 
                          : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              
              {/* Mobile Social Links */}
              <motion.div 
                className="pt-6 border-t border-gray-700/50"
                variants={mobileItemVariants}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <div className="flex justify-center gap-4 mb-4">
                  {[
                    { href: "https://github.com/DevanshKapoor", icon: FaGithub },
                    { href: "https://www.linkedin.com/in/devansh-kapoor-819b29256/", icon: FaLinkedin }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700/50 rounded-xl text-gray-400 hover:text-yellow-500 hover:bg-gray-600/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
                
                {/* Mobile Resume Button */}
                <motion.a 
                  href="https://drive.google.com/file/d/1IPeCL9xDMYrbDAIbcaH-h89XoVsiEACk/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold rounded-xl hover:from-yellow-600 hover:to-amber-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaDownload />
                    Download Resume
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;