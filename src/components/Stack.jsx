import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import tailwind from "../assets/Tailwind.jpeg";

// Tech tile component with hover effect and animation
const TechTile = ({ name, icon, category, proficiency, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    }),
    hover: { 
      y: -8, 
      scale: 1.05,
      transition: { duration: 0.3 } 
    }
  };

  // Display stars for proficiency level (out of 5)
  const renderProficiency = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`text-sm ${i < proficiency ? "text-yellow-400" : "text-gray-600"}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-yellow-400 transition-all w-full h-full backdrop-blur-sm hover:bg-gray-800/80 group"
      variants={variants}
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-16 w-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <img 
          src={icon} 
          alt={name} 
          className="max-h-full max-w-full object-contain filter group-hover:brightness-110" 
          draggable="false"
        />
      </div>
      
      <h3 className="text-sm font-semibold mb-2 text-center text-white group-hover:text-yellow-400 transition-colors">{name}</h3>
      
      <div className="mb-3 flex justify-center">
        {renderProficiency()}
      </div>
      
      <motion.div 
        className="text-xs text-gray-400 text-center mb-2"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: 0.2 }}
      >
        {category}
      </motion.div>

      {isHovered && description && (
        <motion.div 
          className="text-xs text-gray-300 text-center mt-2 px-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.div>
      )}
    </motion.div>
  );
};

// Category container for grouping tech items
const TechCategory = ({ title, children, index, description }) => {
  return (
    <motion.div 
      className="mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">{title}</h2>
        {description && (
          <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {children}
      </div>
    </motion.div>
  );
};

const Stack = () => {
  // All icons now use CDN links instead of local file paths
  const icons = {
    // Languages
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    r: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    
    // AI/ML Frameworks
    pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    tensorflow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    keras: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
    opencv: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    
    // Data Science
    pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    
    // Web Development
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    
    // Databases
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    
    // Tools & Platforms
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
  };
  
  // Tech data organized by category with descriptions based on your resume
  const techData = {
    languages: {
      title: "Programming Languages",
      description: "Core programming languages I use for AI research, data science, and full-stack development",
      items: [
        { name: "Python", icon: icons.python, proficiency: 5, category: "Language", description: "Primary language for ML, AI research & backend development" },
        { name: "JavaScript", icon: icons.javascript, proficiency: 4, category: "Language", description: "Frontend development & Node.js applications" },
        { name: "TypeScript", icon: icons.typescript, proficiency: 4, category: "Language", description: "Type-safe development for large applications" },
        { name: "C++", icon: icons.cpp, proficiency: 4, category: "Language", description: "System programming & competitive programming" },
        { name: "SQL", icon: icons.sql, proficiency: 4, category: "Query Language", description: "Database design, optimization & complex queries" },
        { name: "R", icon: icons.r, proficiency: 3, category: "Language", description: "Statistical analysis & data visualization" }
      ]
    },
    ai_ml: {
      title: "AI & Machine Learning",
      description: "Deep learning frameworks and libraries I use for research in NLP, computer vision, and neural networks",
      items: [
        { name: "PyTorch", icon: icons.pytorch, proficiency: 5, category: "Deep Learning", description: "Primary framework for neural network research & LLMs" },
        { name: "TensorFlow", icon: icons.tensorflow, proficiency: 4, category: "Deep Learning", description: "Production ML models & TensorFlow Serving" },
        { name: "Keras", icon: icons.keras, proficiency: 4, category: "Deep Learning", description: "Rapid prototyping of neural networks" },
        { name: "OpenCV", icon: icons.opencv, proficiency: 4, category: "Computer Vision", description: "Image processing & computer vision applications" },
        { name: "Hugging Face", icon: icons.pytorch, proficiency: 4, category: "NLP/LLMs", description: "Transformers, fine-tuning & model deployment" },
        { name: "LangChain", icon: icons.python, proficiency: 4, category: "LLM Framework", description: "Building LLM applications & RAG systems" }
      ]
    },
    data_science: {
      title: "Data Science & Analytics",
      description: "Tools for data manipulation, analysis, and scientific computing in research projects",
      items: [
        { name: "Pandas", icon: icons.pandas, proficiency: 5, category: "Data Analysis", description: "Data manipulation & ETL pipelines" },
        { name: "NumPy", icon: icons.numpy, proficiency: 5, category: "Numerical Computing", description: "Mathematical operations & array processing" },
        { name: "Jupyter", icon: icons.jupyter, proficiency: 5, category: "Development", description: "Interactive data analysis & research notebooks" },
        { name: "Scikit-learn", icon: icons.python, proficiency: 4, category: "ML Library", description: "Classical ML algorithms & model evaluation" },
        { name: "XGBoost", icon: icons.python, proficiency: 4, category: "ML Framework", description: "Gradient boosting for structured data" },
        { name: "Streamlit", icon: icons.python, proficiency: 4, category: "ML Apps", description: "Rapid ML application prototyping" }
      ]
    },
    web_dev: {
      title: "Web Development",
      description: "Full-stack development technologies for building modern web applications and APIs",
      items: [
        { name: "React", icon: icons.react, proficiency: 4, category: "Frontend", description: "Component-based UI development" },
        { name: "Next.js", icon: icons.nextjs, proficiency: 4, category: "React Framework", description: "Full-stack React applications with SSR" },
        { name: "Tailwind CSS", icon: tailwind, proficiency: 4, category: "Styling", description: "Utility-first CSS framework" },
        { name: "Node.js", icon: icons.nodejs, proficiency: 4, category: "Backend", description: "JavaScript runtime for server applications" },
        { name: "Flask", icon: icons.flask, proficiency: 4, category: "Python Web", description: "Lightweight web framework for ML APIs" },
        { name: "FastAPI", icon: icons.fastapi, proficiency: 4, category: "Python Web", description: "High-performance API development" }
      ]
    },
    databases: {
      title: "Databases & Storage",
      description: "Database technologies for storing and managing application and research data",
      items: [
        { name: "PostgreSQL", icon: icons.postgres, proficiency: 4, category: "SQL Database", description: "Advanced relational database operations" },
        { name: "MongoDB", icon: icons.mongodb, proficiency: 3, category: "NoSQL Database", description: "Document-based data storage" },
        { name: "MySQL", icon: icons.mysql, proficiency: 4, category: "SQL Database", description: "Relational database design & optimization" },
        { name: "Firebase", icon: icons.firebase, proficiency: 3, category: "Cloud Database", description: "Real-time database & authentication" }
      ]
    },
    tools: {
      title: "Development Tools & DevOps",
      description: "Development environment, version control, and deployment tools for project management",
      items: [
        { name: "Git", icon: icons.git, proficiency: 4, category: "Version Control", description: "Source code management & collaboration" },
        { name: "GitHub", icon: icons.github, proficiency: 4, category: "Code Hosting", description: "Repository hosting & CI/CD pipelines" },
        { name: "VS Code", icon: icons.vscode, proficiency: 5, category: "IDE", description: "Primary development environment" },
        { name: "Docker", icon: icons.docker, proficiency: 4, category: "Containerization", description: "Application containerization & deployment" },
        { name: "Kubernetes", icon: icons.kubernetes, proficiency: 2, category: "Orchestration", description: "Container orchestration & scaling" },
        { name: "Linux", icon: icons.linux, proficiency: 4, category: "OS", description: "Server administration & shell scripting" }
      ]
    }
  };

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05
      }
    }
  };

  return (
    <section id="stack" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-blue-400/5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My Tech Stack
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Technologies and frameworks I use in AI research, data science, and full-stack development. 
            From building LLMs at Samsung to developing multimodal AI systems.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(techData).map(([key, category], index) => (
            <TechCategory 
              key={key} 
              title={category.title} 
              description={category.description}
              index={index}
            >
              {category.items.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  custom={i}
                  variants={containerVariants}
                  className="flex justify-center items-center"
                >
                  <TechTile {...tech} />
                </motion.div>
              ))}
            </TechCategory>
          ))}
        </motion.div>

        {/* Bottom section with call to action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 text-lg mb-6">
            Always learning and exploring new technologies in AI, ML, and software development
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-yellow-400/20 text-yellow-300 rounded-full text-sm font-medium">
              AI Research
            </span>
            <span className="px-4 py-2 bg-blue-400/20 text-blue-300 rounded-full text-sm font-medium">
              Full-Stack Development
            </span>
            <span className="px-4 py-2 bg-green-400/20 text-green-300 rounded-full text-sm font-medium">
              Data Science
            </span>
            <span className="px-4 py-2 bg-purple-400/20 text-purple-300 rounded-full text-sm font-medium">
              Machine Learning
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;