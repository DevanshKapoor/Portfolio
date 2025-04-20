import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "skills", "stack", "projects", "links"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 ${
      scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="flex items-center justify-between">
        <h1 className="roboto-bold text-xl md:text-2xl lg:text-3xl">
          <span className="text-grad">DEVANSH</span>
        </h1>
        
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 lg:gap-8 items-center">
            <li>
              <button 
                onClick={() => scrollToSection("home")}
                className={`text-lg hover:text-yellow-500 transition-colors ${
                  activeSection === "home" ? "text-yellow-500" : ""
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("skills")}
                className={`text-lg hover:text-yellow-500 transition-colors ${
                  activeSection === "skills" ? "text-yellow-500" : ""
                }`}
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("stack")} 
                className={`text-lg hover:text-yellow-500 transition-colors ${
                  activeSection === "stack" ? "text-yellow-500" : ""
                }`}
              >
                Stack
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("projects")}
                className={`text-lg hover:text-yellow-500 transition-colors ${
                  activeSection === "projects" ? "text-yellow-500" : ""
                }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("links")}
                className={`text-lg hover:text-yellow-500 transition-colors ${
                  activeSection === "links" ? "text-yellow-500" : ""
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
          
          <div className="flex gap-3 border-l border-gray-700 pl-6">
            <a 
              href="https://github.com/DevanshKapoor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/devansh-kapoor-819b29256/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1W_jE1CvgIJmWJsc3oArNiFdeE8PqvHLb/view?usp=drivesdk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 border border-yellow-500 rounded-md text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="block md:hidden text-yellow-500 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 rounded-lg p-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            <li>
              <button 
                onClick={() => scrollToSection("home")}
                className={`block w-full text-left px-2 py-1 rounded ${
                  activeSection === "home" ? "text-yellow-500" : ""
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("skills")}
                className={`block w-full text-left px-2 py-1 rounded ${
                  activeSection === "skills" ? "text-yellow-500" : ""
                }`}
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("stack")}
                className={`block w-full text-left px-2 py-1 rounded ${
                  activeSection === "stack" ? "text-yellow-500" : ""
                }`}
              >
                Stack
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("projects")}
                className={`block w-full text-left px-2 py-1 rounded ${
                  activeSection === "projects" ? "text-yellow-500" : ""
                }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("links")}
                className={`block w-full text-left px-2 py-1 rounded ${
                  activeSection === "links" ? "text-yellow-500" : ""
                }`}
              >
                Contact
              </button>
            </li>
            <li className="pt-2 border-t border-gray-700 mt-2">
              <a 
                href="https://drive.google.com/file/d/1IPeCL9xDMYrbDAIbcaH-h89XoVsiEACk/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 border border-yellow-500 rounded-md text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;