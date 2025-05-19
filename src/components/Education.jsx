import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, CalendarDays, BookText, Award, MapPin, Building } from 'lucide-react';

const educationData = [
  {
    degree_key: 'education_msc_degree',
    institution_key: 'education_msc_institution',
    period_key: 'education_msc_period',
    focus_key: 'education_msc_focus',
    thesis_key: 'education_msc_thesis',
    icon: GraduationCap,
    location: 'Berlin, Germany',
  },
  {
    degree_key: 'education_beng_mechatronics_degree',
    institution_key: 'education_beng_mechatronics_institution',
    period_key: 'education_beng_mechatronics_period',
    focus_key: 'education_beng_mechatronics_focus',
    thesis_key: 'education_beng_mechatronics_thesis',
    icon: GraduationCap,
    location: 'Merseburg, Germany',
  },
  {
    degree_key: 'education_beng_mechanical_degree',
    institution_key: 'education_beng_mechanical_institution',
    period_key: 'education_beng_mechanical_period',
    focus_key: 'education_beng_mechanical_focus',
    honors_key: 'education_beng_mechanical_honors',
    icon: GraduationCap,
    location: 'Changzhou, China',
  },
];

const EducationItem = ({ item, index }) => {
  const { t } = useTranslation();
  const IconComponent = item.icon || Briefcase;

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className={`relative pl-10 pb-10 border-l-2 border-light-border dark:border-dark-border ${index === educationData.length - 1 ? 'border-l-transparent' : ''}`}
    >
      <div className="absolute -left-[1.1rem] top-0 w-8 h-8 bg-light-primary dark:bg-dark-primary rounded-full flex items-center justify-center ring-4 ring-light-background dark:ring-dark-background shadow-md">
        <IconComponent size={16} className="text-white dark:text-dark-background" />
      </div>
      
      <div className="bg-light-card dark:bg-dark-card rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-light-border dark:border-dark-border/50">
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-1">{t(item.degree_key)}</h3>
        
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <div className="flex items-center text-md text-light-primary dark:text-dark-primary font-medium">
            <Building size={16} className="mr-1 flex-shrink-0" /> 
            {t(item.institution_key)}
          </div>
          
          {item.location && (
            <div className="flex items-center text-sm text-light-muted dark:text-dark-muted">
              <MapPin size={14} className="mr-1 flex-shrink-0" /> 
              {item.location}
            </div>
          )}
        </div>
        
        <p className="text-sm text-light-muted dark:text-dark-muted mb-4 flex items-center">
          <CalendarDays size={14} className="mr-2 opacity-70 flex-shrink-0" /> {t(item.period_key)}
        </p>
        
        {item.focus_key && (
          <div className="mb-3 bg-light-background/50 dark:bg-dark-background/50 p-3 rounded-md">
            <h4 className="text-sm font-semibold text-light-text/90 dark:text-dark-text/90 mb-1 flex items-center">
              <BookText size={14} className="mr-2 opacity-70 flex-shrink-0" /> {t('education_focus_label')}
            </h4>
            <p className="text-sm text-light-text/80 dark:text-dark-text/80 whitespace-pre-line">{t(item.focus_key)}</p>
          </div>
        )}
        
        {item.thesis_key && (
          <div className="mb-3 bg-light-background/50 dark:bg-dark-background/50 p-3 rounded-md">
            <h4 className="text-sm font-semibold text-light-text/90 dark:text-dark-text/90 mb-1 flex items-center">
              <BookText size={14} className="mr-2 opacity-70 flex-shrink-0" /> {t('education_thesis_label')}
            </h4>
            <p className="text-sm text-light-text/80 dark:text-dark-text/80 whitespace-pre-line">{t(item.thesis_key)}</p>
          </div>
        )}
        
        {item.honors_key && (
           <div className="mt-3 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-md border-l-4 border-yellow-400 dark:border-yellow-600">
            <h4 className="text-sm font-semibold text-yellow-700 dark:text-yellow-400 mb-1 flex items-center">
              <Award size={14} className="mr-2 opacity-70 flex-shrink-0" /> {t('education_honors_label')}
            </h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-300 whitespace-pre-line">{t(item.honors_key)}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-16 md:py-24 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          {t('education_title')}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-12 text-light-muted dark:text-dark-muted"
        >
          {t('education_text')}
        </motion.p>
        
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <EducationItem key={item.degree_key} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
