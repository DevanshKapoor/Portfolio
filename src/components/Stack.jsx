import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Tech tile component with hover effect and animation
const TechTile = ({ name, icon, category, proficiency }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    }),
    hover: { y: -8, transition: { duration: 0.3 } }
  };

  // Display stars for proficiency level (out of 5)
  const renderProficiency = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`text-sm ${i < proficiency ? "text-yellow-500" : "text-gray-600"}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-900 border border-gray-800 hover:border-yellow-500 transition-all w-full h-full"
      variants={variants}
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-16 w-16 mb-3 flex items-center justify-center">
        <img 
          src={icon} 
          alt={name} 
          className="max-h-full max-w-full object-contain" 
          draggable="false"
          style={{ display: 'block', margin: '0 auto' }} 
        />
      </div>
      
      <h3 className="text-sm font-medium mb-1 text-center">{name}</h3>
      
      <div className="mt-1 flex justify-center">
        {renderProficiency()}
      </div>
      
      {isHovered && (
        <motion.div 
          className="mt-2 text-xs text-gray-400 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {category}
        </motion.div>
      )}
    </motion.div>
  );
};

// Category container for grouping tech items
const TechCategory = ({ title, children, index }) => {
  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <h2 className="text-xl md:text-2xl font-semibold text-yellow-500 mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {children}
      </div>
    </motion.div>
  );
};

const Stack = () => {
  // All icons now use CDN links instead of local file paths
  const icons = {
    cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    r: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    tensorflow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
  };
  
  // Tech data organized by category
  const techData = {
    languages: [
      { name: "C++", icon: icons.cpp, proficiency: 4, category: "Language" },
      { name: "Python", icon: icons.python, proficiency: 5, category: "Language" },
      { name: "JavaScript", icon: icons.javascript, proficiency: 4, category: "Language" },
      { name: "R", icon: icons.r, proficiency: 3, category: "Language" },
      { name: "SQL", icon: icons.postgres, proficiency: 4, category: "Language" }
    ],
    ml: [
      { name: "PyTorch", icon: icons.pytorch, proficiency: 4, category: "ML Framework" },
      { name: "TensorFlow", icon: icons.tensorflow, proficiency: 4, category: "ML Framework" },
      { name: "Pandas", icon: icons.pandas, proficiency: 5, category: "Data Analysis" },
      { name: "NumPy", icon: icons.numpy, proficiency: 5, category: "Data Analysis" },
      { name: "Jupyter", icon: icons.jupyter, proficiency: 5, category: "Development" }
    ],
    web: [
      { name: "React", icon: icons.react, proficiency: 4, category: "Frontend" },
      { name: "Tailwind", icon: icons.tailwind, proficiency: 4, category: "CSS Framework" },
      { name: "Node.js", icon: icons.nodejs, proficiency: 3, category: "Backend" },
      { name: "MongoDB", icon: icons.mongodb, proficiency: 3, category: "Database" },
      { name: "PostgreSQL", icon: icons.postgres, proficiency: 4, category: "Database" }
    ],
    tools: [
      { name: "Git", icon: icons.git, proficiency: 4, category: "Version Control" },
      { name: "GitHub", icon: icons.github, proficiency: 4, category: "Code Hosting" },
      { name: "VS Code", icon: icons.vscode, proficiency: 5, category: "Editor" },
      { name: "Docker", icon: icons.docker, proficiency: 3, category: "Containerization" },
      { name: "Kubernetes", icon: icons.kubernetes, proficiency: 2, category: "Orchestration" },
      { name: "Linux", icon: icons.linux, proficiency: 3, category: "Operating System" }
    ]
  };

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="stack" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-yellow-500">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I've mastered through research projects and professional development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TechCategory title="Programming Languages" index={0}>
  {techData.languages.map((tech, i) => (
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


          <TechCategory title="Machine Learning & Data Science" index={1}>
            {techData.ml.map((tech, i) => (
              <motion.div key={tech.name} custom={i} variants={containerVariants} className="flex justify-center items-center w-full">
                <TechTile {...tech} />
              </motion.div>
            ))}
          </TechCategory>

          <TechCategory title="Web Development" index={2}>
            {techData.web.map((tech, i) => (
              <motion.div key={tech.name} custom={i} variants={containerVariants} className="flex justify-center items-center w-full">
                <TechTile {...tech} />
              </motion.div>
            ))}
          </TechCategory>

          <TechCategory title="Development Tools & Environments" index={3}>
            {techData.tools.map((tech, i) => (
              <motion.div key={tech.name} custom={i} variants={containerVariants} className="flex justify-center items-center w-full">
                <TechTile {...tech} />
              </motion.div>
            ))}
          </TechCategory>
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;