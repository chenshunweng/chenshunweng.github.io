import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ExternalLink, Youtube, Image as ImageIcon, Briefcase, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const projectDataKeys = [
  {
    id: 'sdos',
    title_key: 'project_sdos_title',
    period_key: 'project_sdos_period',
    description_key: 'project_sdos_description',
    result_key: 'project_sdos_result',
    tools: ['MBSE', 'SysML', 'Cameo Systems Modeler', 'ISO 26262'],
    type_key: 'professional_experience_title',
    image_path: '/assets/images/project-sdos-thumbnail.jpg',
    video_path: '/assets/videos/project-sdos-demo.mp4'
  },
  {
    id: 'ur10e',
    title_key: 'project_ur10e_title',
    period_key: 'project_ur10e_period',
    description_key: 'project_ur10e_description',
    result_key: 'project_ur10e_result',
    tools: ['Fusion 360', 'Siemens NX', '3D Printing', 'FEM Analysis'],
    type_key: 'professional_experience_title',
    image_path: '/assets/images/project-ur10e-thumbnail.jpg',
    video_path: '/assets/videos/project-ur10e-demo.mp4'
  },
  {
    id: 'vw_factory',
    title_key: 'project_vw_factory_title',
    period_key: 'project_vw_factory_period',
    description_key: 'project_vw_factory_description',
    result_key: 'project_vw_factory_result',
    tools: ['Tecnomatix Plant Simulation', 'Lean Methods', 'Value Stream Mapping'],
    type_key: 'professional_experience_title',
    image_path: '/assets/images/project-vw-factory-thumbnail.jpg',
    video_path: '/assets/videos/project-vw-factory-demo.mp4'
  },
  {
    id: 'bsh_master',
    title_key: 'project_bsh_master_title',
    period_key: 'project_bsh_master_period',
    description_key: 'project_bsh_master_description',
    result_key: 'project_bsh_master_result',
    tools: ['Deep Learning', 'Visual Recognition', '3D Printing', 'Robotics'],
    type_key: 'professional_experience_title', 
    image_path: '/assets/images/project-bsh-master-thumbnail.jpg',
    video_path: '/assets/videos/project-bsh-master-demo.mp4'
  },
  {
    id: 'haering_bachelor',
    title_key: 'project_haering_bachelor_title',
    period_key: 'project_haering_bachelor_period',
    description_key: 'project_haering_bachelor_description',
    result_key: 'project_haering_bachelor_result',
    tools: ['Software Framework Development', 'Sequence Control Optimization', 'Collision Avoidance'],
    type_key: 'professional_experience_title', 
    image_path: '/assets/images/project-haering-bachelor-thumbnail.jpg',
    video_path: '/assets/videos/project-haering-bachelor-demo.mp4'
  }
];

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showFullDescription, setShowFullDescription] = useState(false);

  const projectTypes = [
    { key: 'all', label_key: 'projects_filter_all', icon: <Briefcase size={18} className="mr-2" /> },
    { key: 'professional_experience_title', label_key: 'professional_experience_title', icon: <Briefcase size={18} className="mr-2" /> },
    { key: 'school_projects_title', label_key: 'school_projects_title', icon: <BookOpen size={18} className="mr-2" /> },
  ];

  const filteredProjects = projectDataKeys.filter(project => 
    filter === 'all' || project.type_key === filter
  );

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setShowFullDescription(false); // Reset description view on new modal open
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 md:py-24 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in">
          {t('projects_title')}
        </h2>
        
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12 animate-fade-in animation-delay-200">
          {projectTypes.map(pt => (
            <button
              key={pt.key}
              onClick={() => setFilter(pt.key)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 flex items-center 
                ${filter === pt.key 
                  ? 'bg-light-primary text-white dark:bg-dark-primary dark:text-dark-background shadow-md scale-105'
                  : 'bg-light-card text-light-text/80 dark:bg-dark-card dark:text-dark-text/80 hover:bg-light-primary/80 dark:hover:bg-dark-primary/80 hover:text-white dark:hover:text-dark-background'}`}
            >
              {React.cloneElement(pt.icon, { className: filter === pt.key ? 'mr-2 text-white dark:text-dark-background' : 'mr-2 text-light-text/70 dark:text-dark-text/70 group-hover:text-white dark:group-hover:text-dark-background' })}
              {t(pt.label_key)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-light-card dark:bg-dark-card rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                    src={project.image_path} 
                    alt={t(project.title_key)} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.onerror = null; e.target.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22200%22%20viewBox%3D%220%200%20300%20200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22300%22%20height%3D%22200%22%20fill%3D%22%23e0e0e0%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2216%22%20fill%3D%22%23999%22%3EProject%20Image%3C/text%3E%3C/svg%3E'; }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">{t(project.title_key)}</h3>
                <p className="text-sm text-light-muted dark:text-dark-muted mb-3">{t(project.period_key)}</p>
                <p className="text-light-text/80 dark:text-dark-text/80 text-sm mb-4 truncate-3-lines">
                  {t(project.description_key)}
                </p>
                <button 
                  className="inline-flex items-center text-sm font-medium text-light-primary dark:text-dark-primary hover:underline"
                >
                  {t('project_card_details_button')}
                  <ExternalLink size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fade-in backdrop-blur-sm">
          <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative animate-slide-in-up">
            <button 
              onClick={() => setSelectedProject(null)} 
              className="absolute top-4 right-4 text-light-muted hover:text-red-500 dark:text-dark-muted dark:hover:text-red-400 transition-colors p-1 rounded-full bg-light-card/50 dark:bg-dark-card/50 hover:bg-red-500/10 dark:hover:bg-red-400/10"
              aria-label={t('project_modal_close_button')}
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text mb-3 pr-8">{t(selectedProject.title_key)}</h3>
            <p className="text-sm text-light-muted dark:text-dark-muted mb-4">{t(selectedProject.period_key)}</p>
            
            <div className="mb-6 aspect-w-16 aspect-h-9 bg-light-border dark:bg-dark-border rounded-lg overflow-hidden shadow-inner flex items-center justify-center text-light-muted dark:text-dark-muted">
              {selectedProject.video_path ? (
                <video controls className="w-full h-full object-cover" src={selectedProject.video_path} onError={(e) => e.target.style.display='none'}>
                  Your browser does not support the video tag.
                  <source src={selectedProject.video_path} type="video/mp4" />
                </video>
              ) : (
                <div className="flex flex-col items-center justify-center p-4">
                  <Youtube size={48} className="mb-2" /> 
                  <p className="text-center text-sm">{t('project_video_unavailable', 'Video coming soon')}</p>
                </div>
              )}
               {!selectedProject.video_path && <div className="w-full h-full flex items-center justify-center"><ImageIcon size={48} className="text-gray-400 dark:text-gray-500" /><p className="ml-2 text-gray-500 dark:text-gray-400">{t('project_video_placeholder_text', 'Video Placeholder')}</p></div>} 
            </div>

            <div className={`text-light-text/80 dark:text-dark-text/80 mb-4 whitespace-pre-line ${showFullDescription ? '' : 'max-h-24 overflow-hidden relative'}
                            ${!showFullDescription && t(selectedProject.description_key).length > 200 ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-8 after:bg-gradient-to-t after:from-light-card dark:after:from-dark-card after:to-transparent' : ''}
            `}>
                {t(selectedProject.description_key)}
            </div>
            {t(selectedProject.description_key).length > 200 && (
                <button onClick={() => setShowFullDescription(!showFullDescription)} className="flex items-center text-sm text-light-primary dark:text-dark-primary hover:underline mb-4">
                    {showFullDescription ? t('project_modal_show_less', 'Show Less') : t('project_modal_show_more', 'Show More')}
                    {showFullDescription ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                </button>
            )}
            
            {selectedProject.result_key && t(selectedProject.result_key) && (
              <div className="mb-4">
                <h4 className="text-md font-semibold text-light-text dark:text-dark-text mb-1">{t('project_modal_result_label')}</h4>
                <p className="text-light-text/80 dark:text-dark-text/80 text-sm">{t(selectedProject.result_key)}</p>
              </div>
            )}

            {selectedProject.tools && selectedProject.tools.length > 0 && (
              <div className="mb-4">
                <h4 className="text-md font-semibold text-light-text dark:text-dark-text mb-2">{t('project_modal_tools_label')}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-light-primary/10 dark:bg-dark-primary/20 text-light-primary dark:text-dark-primary text-xs font-medium rounded-full">
                      {tool} 
                    </span>
                  ))}
                </div>
              </div>
            )}
            <button 
              onClick={() => setSelectedProject(null)} 
              className="mt-6 w-full md:w-auto px-6 py-2 bg-light-primary hover:bg-light-accent text-white dark:bg-dark-primary dark:hover:bg-dark-accent dark:text-dark-background rounded-md transition-colors duration-300"
            >
              {t('project_modal_close_button')}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

