import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ExperienceTimeline = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6
      }
    }
  };

  // Experience data
  const experiences = [
    {
      title: "Research Intern",
      company: "Samsung PRISM, Samsung R&D",
      period: "February 2025 - Present",
      description: [
        "Developing and optimizing Large Language Models (LLMs) for advanced Natural Language Processing applications.",
        "Designed and implemented efficient deep learning architectures to enhance language understanding and response generation, reducing inference latency by 20%.",
        "Utilized techniques like Retrieval-Augmented Generation (RAG) and AI agents to boost response accuracy by 15%."
      ],
      skills: ["Deep Learning", "LLMs", "RAG", "AI Agents", "NLP"],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" // Replace with Samsung logo
    },
    {
      title: "Deep Learning Intern",
      company: "IIT Mandi",
      period: "May 2024 - July 2024",
      description: [
        "Collaborated on a research paper focused on image reconstruction using brain EEG signals consisting of 128 channels.",
        "Engaged in a multidisciplinary team of 8 people, including IIT Mandi professors and students from various fields.",
        "Utilized deep learning models, such as Conformers and MAE, along with Siamese Network to perform image classification over 50+ classes."
      ],
      skills: ["Deep Learning", "EEG Signal Processing", "Image Reconstruction", "Conformers", "MAE", "Siamese Networks"],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" // Replace with IIT Mandi logo
    },
    {
      title: "Senior Coordinator",
      company: "TIET's Centre for Training and Development",
      period: "2023",
      description: [
        "Led a team of 50 to organize a 6-day Placement Symposium attended by 1700+ students.",
        "Focused on resume building and placement training activities to enhance student employability.",
        "Coordinated with industry professionals and academic departments to create effective training modules."
      ],
      skills: ["Leadership", "Event Management", "Team Coordination", "Training"],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" // Replace with TIET logo
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-yellow-500">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through research, development, and leadership roles
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-1 bg-yellow-500 h-full -z-10 ml-1.5"></div>
              )}
              
              <div className="flex items-start mb-12">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mt-2"></div>
                </div>
                
                {/* Content */}
                <div className="ml-8 bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellow-500 transition-all w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-yellow-500">{exp.company}</p>
                    </div>
                    <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  
                  <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-800 text-yellow-500 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Education entry */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="flex items-start">
              {/* Timeline dot */}
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mt-2"></div>
              </div>
              
              {/* Content */}
              <div className="ml-8 bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellow-500 transition-all w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Computer Science Student</h3>
                    <p className="text-yellow-500">Thapar Institute of Engineering and Technology</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0">August 2022 - May 2026</p>
                </div>
                
                <p className="text-gray-300 mb-2">CGPA: 9.08/10.0</p>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-400 mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Natural Language Processing",
                      "Network Programming",
                      "Computer Networks",
                      "Data Structures and Algorithms",
                      "Speech Synthesis",
                      "Database Management Systems",
                      "Operating Systems",
                      "Object Oriented Programming"
                    ].map((course, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;