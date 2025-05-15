import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-24 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1 animate-slide-in-left flex justify-center">
            <img 
              src="/assets/images/profile-picture.jpg" 
              alt={t('name')}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-light-primary dark:border-dark-primary"
              onError={(e) => { e.target.onerror = null; e.target.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22256%22%20height%3D%22256%22%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22256%22%20height%3D%22256%22%20fill%3D%22%23ddd%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23999%22%3EProfile%20Pic%3C/text%3E%3C/svg%3E'; }} // Fallback placeholder
            />
          </div>
          <div className="md:col-span-2 animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-6">
              {t('about_title')}
            </h2>
            {/* Ensure text color provides good contrast on both light/dark backgrounds */}
            <p className="text-light-text/80 dark:text-dark-text/80 leading-relaxed mb-6 whitespace-pre-line">
              {t('about_text')}
            </p>
            <a 
              href="/Lebenslauf_Chenshun_Weng.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-light-primary hover:bg-light-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary dark:bg-dark-primary dark:hover:bg-dark-accent dark:text-dark-background dark:focus:ring-offset-dark-background transition-colors duration-300 group"
            >
              <Download size={20} className="mr-2 -ml-1 group-hover:animate-bounce" />
              {t('resume_button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

