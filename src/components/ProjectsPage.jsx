import React, { useState } from 'react';
import { Github, ExternalLink, Search } from 'lucide-react';
import projects from '../assets/projects.json';
import testImage from '../images/DSC_3259.jpg';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'machine-learning', label: 'Machine Learning' },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div id="projects" className="text-center text-3xl md:text-4xl font-bold pt-[10vh]">PROJECTS</div>
        <p className="text-center text-xl md:text-xl p-[3vh] text-gray-400">
          Bringing ideas to life through code and creativity
        </p>

        {/* Filter and Search */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === category.id
                    ? 'bg-yellow-400 text-black'
                    : 'bg-black border border-yellow-400 text-white hover:bg-gray-800'
                }`}
              >
                {category.label}
              </button>
            ))}

          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 w-64"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => {
            // Dynamically import image
            let imageSrc;
            try {
                imageSrc = new URL(`../${project.image}`, import.meta.url).href;
            } catch (err) {
            imageSrc = `https://via.placeholder.com/400x250?text=${project.title}`;
            }

            return (
              <div
                key={project.id}
                className="bg-black border border-yellow-400 rounded-lg overflow-hidden hover:bg-slate-900"
              >
                <img
                  src={imageSrc}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-zinc-200">{project.title}</h3>
                    <span className="px-3 py-1 bg-yellow-400 text-slate-500 text-sm rounded-full border border-slate-500">
                      {project.category === 'web-development' ? 'Web Dev' : 'ML'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveDemo}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
