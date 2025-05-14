import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Brain, Code, LanguagesIcon, Settings, Users } from 'lucide-react'; // Example icons, adjust as needed

const skillsData = {
  simulation_design: {
    title_key: 'skills_simulation_design_title',
    icon: Settings,
    items: [
      { name: 'Process Simulate', level_key: 'skills_level_proficient' },
      { name: 'Plant Simulation', level_key: 'skills_level_proficient' },
      { name: 'CATIA', level_key: 'skills_level_proficient' },
      { name: 'Inventor', level_key: 'skills_level_proficient' },
      { name: 'Fusion 360', level_key: 'skills_level_proficient' },
      { name: 'Siemens NX', level_key: 'skills_level_proficient' },
    ]
  },
  programming_robotics: {
    title_key: 'skills_programming_robotics_title',
    icon: Code,
    items: [
      { name: 'Python', level_key: 'skills_level_advanced' },
      { name: 'C++', level_key: 'skills_level_intermediate' },
      { name: 'ROS (Robot Operating System)', level_key: 'skills_level_intermediate' },
      { name: 'PLC Programming (e.g., Siemens TIA Portal)', level_key: 'skills_level_proficient' },
      { name: 'Yaskawa Robots', level_key: 'skills_level_proficient' },
      { name: 'Universal Robots (UR)', level_key: 'skills_level_proficient' },
    ]
  },
  mbse_quality: {
    title_key: 'skills_mbse_quality_title',
    icon: Brain, // Or a more specific icon for MBSE/Quality
    items: [
      { name: 'Model-Based Systems Engineering (MBSE)', level_key: 'skills_level_proficient' },
      { name: 'SysML', level_key: 'skills_level_proficient' },
      { name: 'Cameo Systems Modeler', level_key: 'skills_level_proficient' },
      { name: 'FMEA (Failure Mode and Effects Analysis)', level_key: 'skills_level_intermediate' },
      { name: 'HoQ (House of Quality)', level_key: 'skills_level_intermediate' },
    ]
  },
  languages: {
    title_key: 'skills_languages_title',
    icon: LanguagesIcon,
    items: [
      { name: 'German', level_key: 'skills_level_fluent' },
      { name: 'English', level_key: 'skills_level_fluent' },
      { name: 'Chinese', level_key: 'skills_level_native' },
    ]
  }
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-16 md:py-24 bg-light-card dark:bg-dark-card/50 text-light-text dark:text-dark-text transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          {t('skills_title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {Object.values(skillsData).map((category, catIndex) => (
            <div 
              key={category.title_key} 
              className="bg-light-background dark:bg-dark-background p-6 rounded-xl shadow-lg animate-slide-in-up"
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <category.icon size={28} className="mr-3 text-light-primary dark:text-dark-primary" />
                <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text">{t(category.title_key)}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((skill) => (
                  <li key={skill.name} className="flex justify-between items-center text-light-text/90 dark:text-dark-text/90">
                    <span className="flex items-center">
                      <CheckCircle size={18} className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0" />
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium text-light-muted dark:text-dark-muted px-2 py-0.5 bg-light-border dark:bg-dark-border rounded-full">
                      {t(skill.level_key)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

