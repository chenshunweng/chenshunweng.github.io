import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe } from 'lucide-react';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext); // toggleTheme here is actually setUserThemePreference

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
  ];

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme); // This calls setUserThemePreference(newTheme)
  };

  return (
    <header 
      id="home" 
      className="relative h-screen flex flex-col items-center justify-center text-center p-6 bg-cover bg-center bg-no-repeat transition-colors duration-300"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/images/hero-background.jpg')`,
      }}
    >
      <div className="absolute top-6 right-6 flex items-center space-x-4 z-10">
        <div className="relative group">
          <button className="text-white hover:text-primary dark:hover:text-dark-primary transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50">
            <Globe size={24} />
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-light-card dark:bg-dark-card rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === lang.code ? 'text-primary dark:text-dark-primary font-semibold' : 'text-light-text dark:text-dark-text'} hover:bg-primary/10 dark:hover:bg-dark-primary/20 transition-colors`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleThemeToggle} className="text-white hover:text-primary dark:hover:text-dark-primary transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50">
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      <div className="relative z-0 animate-fade-in-down">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{t('name')}</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">{t('tagline')}</p>
        <nav className="space-x-4 md:space-x-6">
          {['about', 'projects', 'skills', 'education', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`} 
              className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-primary dark:decoration-dark-primary transition-all duration-300 text-lg"
            >
              {t(`nav_${section}`)}
            </a>
          ))}
        </nav>
      </div>
      {/* Optional: Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <svg className="w-8 h-8 text-white opacity-70 hover:opacity-100 transition-opacity" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;

