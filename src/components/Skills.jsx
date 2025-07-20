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
  FaDatabase as FaDB,
  FaChartLine,
  FaRobot,
  FaCloud,
  FaMobile,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt
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
  SiGithub,
  SiTypescript,
  SiPostgresql,
  SiFlask,
  SiStreamlit,
  SiFastapi,
  SiHuggingface,
  SiOpenai,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiGit,
  SiLinux,
  SiFirebase,
  SiNextdotjs
} from "react-icons/si";

// Skill category component with enhanced styling
const SkillCategory = ({ title, icon, description, children, index }) => {
  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="text-3xl text-yellow-400">{icon}</div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {children}
      </div>
    </motion.div>
  );
};

// Enhanced skill item with better animations and details
const SkillItem = ({ icon, name, level, experience }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getPercentage = () => {
    switch(level.toLowerCase()) {
      case 'expert': return 95;
      case 'advanced': return 85;
      case 'intermediate': return 70;
      case 'beginner': return 50;
      default: return 60;
    }
  };

  const getLevelColor = () => {
    switch(level.toLowerCase()) {
      case 'expert': return 'from-green-500 to-emerald-400';
      case 'advanced': return 'from-blue-500 to-cyan-400';
      case 'intermediate': return 'from-yellow-500 to-orange-400';
      case 'beginner': return 'from-gray-500 to-gray-400';
      default: return 'from-yellow-500 to-orange-400';
    }
  };
  
  return (
    <motion.div 
      className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all group relative overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradient on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl text-yellow-400 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div>
            <h4 className="font-semibold text-white group-hover:text-yellow-400 transition-colors">
              {name}
            </h4>
            {experience && (
              <p className="text-xs text-gray-400 mt-1">{experience}</p>
            )}
          </div>
        </div>
        
        <div className="mb-3">
          <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className={`h-full bg-gradient-to-r ${getLevelColor()}`}
              initial={{ width: 0 }}
              animate={{ width: isHovered ? `${getPercentage()}%` : `${getPercentage()}%` }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-gray-400">{level}</span>
            <span className="text-xs text-yellow-400 font-medium">{getPercentage()}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced detailed skill card
const DetailedSkillCard = ({ title, icon, description, keyPoints, metrics }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 h-full hover:border-yellow-400/50 transition-all duration-300"
      whileHover={{ y: -5 }}
      layout
    >
      <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-400/10 p-6 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <div className="text-4xl text-yellow-400">{icon}</div>
          <div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            {metrics && (
              <p className="text-yellow-300 text-sm font-medium mt-1">{metrics}</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        
        {keyPoints && keyPoints.length > 0 && (
          <div className="space-y-3">
            {keyPoints.slice(0, isExpanded ? keyPoints.length : 3).map((point, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-yellow-400 mt-1 text-sm">▶</span>
                <span className="text-gray-400 text-sm leading-relaxed">{point}</span>
              </motion.div>
            ))}
            
            {keyPoints.length > 3 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-yellow-400 text-sm hover:text-yellow-300 transition-colors flex items-center gap-2 mt-4"
              >
                {isExpanded ? 'Show Less' : 'Show More'}
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Achievement highlight component
const AchievementHighlight = ({ metric, label, icon }) => {
  return (
    <motion.div
      className="text-center p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-3xl text-yellow-400 mb-2">{icon}</div>
      <div className="text-2xl font-bold text-white mb-1">{metric}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-blue-400/5"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My Skills
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Built through hands-on experience at Samsung PRISM, IIT Mandi research, and personal projects. 
            From developing multilingual LLMs to creating full-stack applications.
          </motion.p>
        </motion.div>

        {/* Main skill areas - Enhanced cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <DetailedSkillCard 
            title="AI & Machine Learning" 
            icon={<FaBrain />}
            metrics="Samsung PRISM AI Intern | IIT Mandi Research"
            description="Specializing in developing and optimizing large language models, implementing RAG techniques, and building AI systems for real-world applications including multilingual text classification and brain-computer interfaces."
            keyPoints={[
              "Developed multilingual LLMs for Samsung's Bixby achieving 85.2% accuracy across 12 languages",
              "Implemented Few Shot Learning and Agentic AI techniques improving response accuracy by 15%",
              "Built EEG-based brain-computer interfaces using Conformers, MAE, and Siamese Networks",
              "Applied GraphSAGE-based GNNs for behavioral anomaly detection with 98% accuracy",
              "Expertise in transformer architectures, autoencoder models, and contrastive learning",
              "Experience with PyTorch, TensorFlow, Hugging Face, and LangChain frameworks"
            ]}
          />
          
          <DetailedSkillCard 
            title="Full-Stack Development" 
            icon={<FaCode />}
            metrics="React • Node.js • Python APIs • Cloud Deployment"
            description="Building modern, responsive web applications with focus on user experience, scalable architecture, and integration with AI/ML backend systems for comprehensive solutions."
            keyPoints={[
              "Developed multimodal AI assistants with voice input/output across multiple languages",
              "Built real-time applications using WebSockets with <150ms latency requirements",
              "Created RESTful and FastAPI backends for ML model serving and data processing",
              "Implemented GDPR-compliant edge inference systems for privacy-focused applications",
              "Experience with React, Next.js, Tailwind CSS, Node.js, Flask, and FastAPI",
              "Database design and optimization with PostgreSQL, MongoDB, and MySQL"
            ]}
          />
        </div>

        
        {/* Call to action section */}
        <motion.div 
          className="text-center mt-20 p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in collaboration?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Always excited to work on innovative AI projects, research collaborations, 
            or challenging full-stack applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://drive.google.com/file/d/1W_jE1CvgIJmWJsc3oArNiFdeE8PqvHLb/view?usp=drivesdk" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              <FaExternalLinkAlt className="text-sm" />
              View Full Resume
            </a>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition-all"
              >
                <FaGithub />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition-all"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;