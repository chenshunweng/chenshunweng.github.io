import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Briefcase, GraduationCap, Code, Award, Heart } from 'lucide-react';

const About = () => {
  const { t, i18n } = useTranslation();
  
  // Resume file mapping based on language
  const resumeFiles = {
    de: "/Lebenslauf_Chenshun_Weng.pdf",
    en: "/Resume_Chenshun_Weng.pdf",
    zh: "/翁陈顺.pdf"
  };
  
  // Get current resume file based on language
  const currentResumeFile = resumeFiles[i18n.language] || resumeFiles.de;

  return (
    <section id="about" className="py-16 md:py-24 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Profile section with image and intro */}
          <div className="grid md:grid-cols-3 gap-10 items-center mb-16">
            <div className="md:col-span-1 animate-slide-in-left flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-light-accent dark:from-dark-primary dark:to-dark-accent rounded-full blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="/assets/images/profile-picture.jpg" 
                  alt={t('name')}
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-light-primary dark:border-dark-primary group-hover:scale-105 transition duration-300"
                  onError={(e) => { e.target.onerror = null; e.target.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22256%22%20height%3D%22256%22%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22256%22%20height%3D%22256%22%20fill%3D%22%23ddd%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23999%22%3EProfile%20Pic%3C/text%3E%3C/svg%3E'; }}
                />
              </div>
            </div>
            <div className="md:col-span-2 animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-6">
                {t('about_title')}
              </h2>
              <p className="text-light-text/90 dark:text-dark-text/90 leading-relaxed mb-6 whitespace-pre-line text-lg">
                {t('about_text')}
              </p>
              
              {/* Professional philosophy section */}
              <div className="mb-6 bg-light-card dark:bg-dark-card p-4 rounded-lg border-l-4 border-primary dark:border-dark-primary">
                <h3 className="text-xl font-semibold mb-2 text-primary dark:text-dark-primary">
                  {t('professional_philosophy_title')}
                </h3>
                <p className="text-light-text/80 dark:text-dark-text/80 leading-relaxed italic">
                  {t('professional_philosophy_text')}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={currentResumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-light-primary hover:bg-light-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary dark:bg-dark-primary dark:hover:bg-dark-accent dark:text-dark-background dark:focus:ring-offset-dark-background transition-colors duration-300 group"
                >
                  <Download size={20} className="mr-2 -ml-1 group-hover:animate-bounce" />
                  {t('resume_button')}
                </a>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-transparent hover:bg-light-card dark:hover:bg-dark-card text-light-text dark:text-dark-text font-medium rounded-md transition-colors border border-light-border dark:border-dark-border"
                >
                  {t('contact_button')}
                </a>
              </div>
            </div>
          </div>
          
          {/* Key attributes section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-light-border dark:border-dark-border">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 dark:bg-dark-primary/20 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-primary dark:text-dark-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t('experience_title')}</h3>
              </div>
              <p className="text-light-text/80 dark:text-dark-text/80">{t('experience_text')}</p>
            </div>
            
            <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-light-border dark:border-dark-border">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 dark:bg-dark-primary/20 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-primary dark:text-dark-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t('education_title')}</h3>
              </div>
              <p className="text-light-text/80 dark:text-dark-text/80">{t('education_text')}</p>
            </div>
            
            <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-light-border dark:border-dark-border">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 dark:bg-dark-primary/20 rounded-full mr-4">
                  <Code className="h-6 w-6 text-primary dark:text-dark-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t('skills_title')}</h3>
              </div>
              <p className="text-light-text/80 dark:text-dark-text/80">{t('skills_text')}</p>
            </div>
            
            <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-light-border dark:border-dark-border">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 dark:bg-dark-primary/20 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-primary dark:text-dark-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t('interests_title')}</h3>
              </div>
              <p className="text-light-text/80 dark:text-dark-text/80">{t('interests_text')}</p>
            </div>
          </div>
          
          {/* Career goals section */}
          <div className="mt-16 bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border">
            <h3 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
              {t('career_goals_title')}
            </h3>
            <p className="text-light-text/80 dark:text-dark-text/80 leading-relaxed mb-4">
              {t('career_goals_text')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-primary/5 dark:bg-dark-primary/10 rounded-lg border border-primary/20 dark:border-dark-primary/20">
                <h4 className="font-semibold text-primary dark:text-dark-primary mb-2">{t('short_term_goals_title')}</h4>
                <p className="text-sm text-light-text/80 dark:text-dark-text/80">{t('short_term_goals_text')}</p>
              </div>
              <div className="p-4 bg-primary/5 dark:bg-dark-primary/10 rounded-lg border border-primary/20 dark:border-dark-primary/20">
                <h4 className="font-semibold text-primary dark:text-dark-primary mb-2">{t('mid_term_goals_title')}</h4>
                <p className="text-sm text-light-text/80 dark:text-dark-text/80">{t('mid_term_goals_text')}</p>
              </div>
              <div className="p-4 bg-primary/5 dark:bg-dark-primary/10 rounded-lg border border-primary/20 dark:border-dark-primary/20">
                <h4 className="font-semibold text-primary dark:text-dark-primary mb-2">{t('long_term_goals_title')}</h4>
                <p className="text-sm text-light-text/80 dark:text-dark-text/80">{t('long_term_goals_text')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
