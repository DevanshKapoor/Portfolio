import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaDatabase, 
  FaTools, 
  FaBrain,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase as FaDB
} from "react-icons/fa";
import { 
  SiTensorflow, 
  SiPytorch, 
  SiJavascript, 
  SiCplusplus, 
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiGithub
} from "react-icons/si";

// Skill category component
const SkillCategory = ({ title, icon, children }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="text-2xl font-bold text-yellow-500">{title}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  );
};

// Individual skill component with progress indicator
const SkillItem = ({ icon, name, level }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Convert level string to percentage
  const getPercentage = () => {
    switch(level.toLowerCase()) {
      case 'expert': return 95;
      case 'advanced': return 85;
      case 'intermediate': return 70;
      case 'beginner': return 50;
      default: return 60;
    }
  };
  
  return (
    <motion.div 
      className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl text-yellow-500">
          {icon}
        </div>
        <h4 className="font-medium">{name}</h4>
      </div>
      
      <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-yellow-500"
          initial={{ width: 0 }}
          animate={{ width: `${getPercentage()}%` }}
          transition={{ duration: isHovered ? 0.3 : 0.8, delay: 0.1 }}
        />
      </div>
      <div className="text-right text-xs text-gray-400 mt-1">{level}</div>
    </motion.div>
  );
};

// Expanded skill card component for detailed descriptions
const DetailedSkillCard = ({ title, icon, description, keyPoints }) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 h-full"
      whileHover={{ borderColor: "rgb(234 179 8)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-gray-800 p-4 flex items-center gap-3">
        <div className="text-3xl text-yellow-500">{icon}</div>
        <h3 className="text-xl font-bold text-yellow-500">{title}</h3>
      </div>
      
      <div className="p-5">
        <p className="text-gray-300 mb-4">{description}</p>
        
        {keyPoints && keyPoints.length > 0 && (
          <ul className="space-y-2">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2 mt-1">•</span>
                <span className="text-gray-400 text-sm">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-yellow-500">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here's my technical toolkit, built through hands-on experience in research, internships, and personal projects.
          </p>
        </motion.div>

        {/* Main skill areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <DetailedSkillCard 
            title="Machine Learning & AI" 
            icon={<FaBrain />}
            description="I specialize in developing and optimizing deep learning models for natural language processing and computer vision applications."
            keyPoints={[
              "Implemented RAG (Retrieval-Augmented Generation) techniques to enhance LLM accuracy by 15%",
              "Built and optimized classification models achieving 92% precision in image recognition",
              "Developed AI agents for automated decision-making systems",
              "Experience with transformer architectures and autoencoder models"
            ]}
          />
          
          <DetailedSkillCard 
            title="Web Development" 
            icon={<FaCode />}
            description="Full-stack development with modern frameworks, focusing on responsive, intuitive user interfaces and robust backend systems."
            keyPoints={[
              "Built interactive, responsive web applications using React and Tailwind CSS",
              "Developed RESTful APIs with Node.js and Express",
              "Experience with database design and optimization using MongoDB and MySQL",
              "Implemented real-time features using WebSockets"
            ]}
          />
        </div>

        {/* Resume button */}
        <div className="mt-16 text-center">
          <a 
            href="https://drive.google.com/file/d/1W_jE1CvgIJmWJsc3oArNiFdeE8PqvHLb/view?usp=drivesdk" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-yellow-500 text-black font-medium rounded-full hover:bg-yellow-600 transition-colors"
          >
            View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;