import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Briefcase, CalendarDays, BookText, Award } from 'lucide-react'; // Example icons

const educationData = [
  {
    degree_key: 'education_msc_degree',
    institution_key: 'education_msc_institution',
    period_key: 'education_msc_period',
    focus_key: 'education_msc_focus',
    thesis_key: 'education_msc_thesis',
    icon: GraduationCap,
  },
  {
    degree_key: 'education_beng_mechatronics_degree',
    institution_key: 'education_beng_mechatronics_institution',
    period_key: 'education_beng_mechatronics_period',
    focus_key: 'education_beng_mechatronics_focus',
    thesis_key: 'education_beng_mechatronics_thesis',
    icon: GraduationCap, // Or Briefcase if it's more like work experience
  },
  {
    degree_key: 'education_beng_mechanical_degree',
    institution_key: 'education_beng_mechanical_institution',
    period_key: 'education_beng_mechanical_period',
    focus_key: 'education_beng_mechanical_focus',
    honors_key: 'education_beng_mechanical_honors',
    icon: GraduationCap,
  },
];

const EducationItem = ({ item, index }) => {
  const { t } = useTranslation();
  const IconComponent = item.icon || Briefcase; // Default icon

  return (
    <div 
      className={`relative pl-10 pb-10 border-l-2 border-light-border dark:border-dark-border animate-slide-in-up ${index === educationData.length - 1 ? 'border-l-transparent' : ''}`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="absolute -left-[1.1rem] top-0 w-8 h-8 bg-light-primary dark:bg-dark-primary rounded-full flex items-center justify-center ring-4 ring-light-background dark:ring-dark-background">
        <IconComponent size={16} className="text-white dark:text-dark-background" />
      </div>
      <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-1">{t(item.degree_key)}</h3>
      <p className="text-md text-light-muted dark:text-dark-muted mb-1">{t(item.institution_key)}</p>
      <p className="text-sm text-light-muted dark:text-dark-muted mb-3 flex items-center">
        <CalendarDays size={14} className="mr-2 opacity-70" /> {t(item.period_key)}
      </p>
      {item.focus_key && (
        <div className="mb-2">
          <h4 className="text-sm font-semibold text-light-text/90 dark:text-dark-text/90 mb-1 flex items-center">
            <BookText size={14} className="mr-2 opacity-70" /> {t('education_focus_label')}
          </h4>
          <p className="text-sm text-light-text/80 dark:text-dark-text/80 whitespace-pre-line">{t(item.focus_key)}</p>
        </div>
      )}
      {item.thesis_key && (
        <div className="mb-2">
          <h4 className="text-sm font-semibold text-light-text/90 dark:text-dark-text/90 mb-1 flex items-center">
            <BookText size={14} className="mr-2 opacity-70" /> {t('education_thesis_label')}
          </h4>
          <p className="text-sm text-light-text/80 dark:text-dark-text/80 whitespace-pre-line">{t(item.thesis_key)}</p>
        </div>
      )}
      {item.honors_key && (
         <div className="mt-2">
          <h4 className="text-sm font-semibold text-light-text/90 dark:text-dark-text/90 mb-1 flex items-center">
            <Award size={14} className="mr-2 opacity-70" /> {t('education_honors_label')}
          </h4>
          <p className="text-sm text-light-text/80 dark:text-dark-text/80 whitespace-pre-line">{t(item.honors_key)}</p>
        </div>
      )}
    </div>
  );
};

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-16 md:py-24 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          {t('education_title')}
        </h2>
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

