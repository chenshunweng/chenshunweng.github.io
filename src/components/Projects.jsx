import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, BookOpen, ExternalLink, Video, Image as ImageIcon, Wrench, Award } from 'lucide-react';
import { ThemeContext } from '../contexts/ThemeContext';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'professional', 'school'
  const [projects, setProjects] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const projectKeys = [
    'project_bsh_master',
    'project_haering_bachelor',
    'project_sdos',
    'project_ur10e',
    'project_vw_factory'
  ];

  useEffect(() => {
    const loadProjects = () => {
      const loadedProjects = projectKeys.map(key => {
        const baseName = key.replace(/_/g, '-'); // e.g., project_sdos -> project-sdos
        return {
          id: key,
          title: t(`${key}_title`),
          period: t(`${key}_period`),
          description: t(`${key}_description`),
          result: t(`${key}_result`),
          category: t(`${key}_category`), // 'professional' or 'school'
          challenge: t(`${key}_challenge`, ''), // New field for challenge
          solution: t(`${key}_solution`, ''), // New field for solution
          tools: t(`${key}_tools`, ''), // New field for tools used
          image: `/assets/images/${baseName}-thumbnail.jpg`, // Corrected image path
          video: `/assets/videos/${baseName}-demo.mp4`  // Corrected video path
        };
      });
      setProjects(loadedProjects);
    };

    loadProjects();
    // Reload projects when language changes
    i18n.on('languageChanged', loadProjects);
    return () => {
      i18n.off('languageChanged', loadProjects);
    };
  }, [t, i18n]);

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const openModal = (project) => {
    setSelectedProject(project);
    setShowFullDescription(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const FilterButton = ({ type, label }) => (
    <button
      onClick={() => setFilter(type)}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ease-in-out font-medium 
                  ${filter === type 
                    ? (theme === 'dark' ? 'bg-dark-accent text-dark-background font-semibold shadow-md' : 'bg-light-primary text-white font-semibold shadow-md') 
                    : (theme === 'dark' ? 'bg-slate-700 hover:bg-slate-600 text-slate-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700')}
                  focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-dark-accent' : 'focus:ring-light-primary'}`}
    >
      {type === 'all' && <Briefcase size={18} className="inline mr-2" />} 
      {type === 'professional' && <Briefcase size={18} className="inline mr-2" />}
      {type === 'school' && <BookOpen size={18} className="inline mr-2" />}
      {label}
    </button>
  );

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 min-h-screen">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold text-center mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            {t('projects_title')}
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center space-x-2 sm:space-x-4 mb-12">
          <FilterButton type="all" label={t('projects_filter_all')} />
          <FilterButton type="professional" label={t('projects_filter_professional')} />
          <FilterButton type="school" label={t('projects_filter_school')} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl shadow-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out 
                          ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
              onClick={() => openModal(project)}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  onError={(e) => { e.target.onerror = null; e.target.src='/assets/images/placeholder_project.jpg'; }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-gray-900 via-transparent' : 'from-black/70 via-transparent'} to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold text-white mb-1 line-clamp-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.period}</p>
                </div>
              </div>
              <div className="p-6">
                <p className={`text-sm mb-4 line-clamp-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                <button 
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-300 
                              ${theme === 'dark' ? 'bg-dark-primary text-dark-background hover:bg-dark-accent' : 'bg-light-primary text-white hover:bg-light-accent'}`}
                >
                  {t('project_card_details_button')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            onClick={closeModal} // Close modal on backdrop click
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative 
                          ${theme === 'dark' ? 'bg-gray-800 text-gray-200 border border-gray-700' : 'bg-white text-gray-800 border border-gray-300'}`}
              onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside content
            >
              <button 
                onClick={closeModal} 
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors duration-200 
                            ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700 hover:text-white' : 'text-gray-500 hover:bg-gray-200 hover:text-gray-800'}`}
              >
                <X size={24} />
              </button>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{selectedProject.title}</h2>
              <p className={`text-sm mb-4 md:mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{selectedProject.period}</p>
              
              <div className="mb-6 aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                {selectedProject.video ? (
                  <video controls className="w-full h-full object-contain" src={selectedProject.video} onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerHTML = `<div class='flex items-center justify-center h-full ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}'><Video size={48} className='mr-2'/> ${t('project_video_unavailable')}</div>`;}}>
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className={`flex items-center justify-center h-full ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    <ImageIcon size={48} className="mr-2"/> {t('project_video_placeholder_text')}
                  </div>
                )}
              </div>

              <div className={`prose prose-sm md:prose-base max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">
                    <span className="inline-block mr-2">📋</span> 
                    {t('project_description', 'Description')}
                  </h4>
                  <p className="whitespace-pre-line">{selectedProject.description}</p>
                </div>

                {selectedProject.challenge && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">
                      <span className="inline-block mr-2">🔍</span> 
                      {t('project_challenge', 'Challenge')}
                    </h4>
                    <p className="whitespace-pre-line">{selectedProject.challenge}</p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">
                      <span className="inline-block mr-2">💡</span> 
                      {t('project_solution', 'Solution')}
                    </h4>
                    <p className="whitespace-pre-line">{selectedProject.solution}</p>
                  </div>
                )}

                {selectedProject.tools && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2 flex items-center">
                      <Wrench size={20} className="mr-2" />
                      {t('project_modal_tools_label')}
                    </h4>
                    <p className="whitespace-pre-line">{selectedProject.tools}</p>
                  </div>
                )}

                {selectedProject.result && (
                  <div className="mt-6 p-4 rounded-lg border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
                    <h4 className="font-semibold text-lg mb-1 flex items-center text-green-700 dark:text-green-400">
                      <Award size={20} className="mr-2" />
                      {t('project_modal_result_label')}
                    </h4>
                    <p className="whitespace-pre-line text-green-800 dark:text-green-300">{selectedProject.result}</p>
                  </div>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
