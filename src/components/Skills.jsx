import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, Brain, Code, LanguagesIcon, Settings, Users, Star } from 'lucide-react';

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
    icon: Brain,
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

// Define skill level colors
const skillLevelColors = {
  'skills_level_proficient': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  'skills_level_advanced': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'skills_level_intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  'skills_level_basic': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
  'skills_level_fluent': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  'skills_level_native': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
};

const Skills = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (custom) => ({
      width: custom,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  // Helper function to get skill level percentage
  const getSkillLevelPercentage = (level_key) => {
    switch(level_key) {
      case 'skills_level_proficient': return '95%';
      case 'skills_level_advanced': return '80%';
      case 'skills_level_intermediate': return '60%';
      case 'skills_level_basic': return '40%';
      case 'skills_level_fluent': return '90%';
      case 'skills_level_native': return '100%';
      default: return '50%';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-light-card dark:bg-dark-card/50 text-light-text dark:text-dark-text transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          {t('skills_title')}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-12 text-light-muted dark:text-dark-muted"
        >
          {t('skills_text')}
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {Object.values(skillsData).map((category, catIndex) => (
            <motion.div 
              key={category.title_key} 
              variants={itemVariants}
              className="bg-light-background dark:bg-dark-background p-6 rounded-xl shadow-lg border border-light-border dark:border-dark-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <category.icon size={28} className="mr-3 text-light-primary dark:text-dark-primary" />
                <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text">{t(category.title_key)}</h3>
              </div>
              <ul className="space-y-5">
                {category.items.map((skill) => {
                  const levelPercentage = getSkillLevelPercentage(skill.level_key);
                  const levelColorClass = skillLevelColors[skill.level_key] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
                  
                  return (
                    <li key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-light-text/90 dark:text-dark-text/90">
                        <span className="flex items-center font-medium">
                          <Star size={16} className="mr-2 text-yellow-500 dark:text-yellow-400 flex-shrink-0" />
                          {skill.name}
                        </span>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${levelColorClass}`}>
                          {t(skill.level_key)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div 
                          className="h-2.5 rounded-full bg-light-primary dark:bg-dark-primary"
                          variants={skillBarVariants}
                          custom={levelPercentage}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
