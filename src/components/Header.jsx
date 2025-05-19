import React, { useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, ChevronDown } from 'lucide-react';
import { ThemeContext } from '../contexts/ThemeContext';
import { changeLanguage } from '../i18n';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Language options with flags and full names
  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ];

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
  };

  const handleLanguageChange = (lng) => {
    changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangMenuOpen && !event.target.closest('.lang-menu-container')) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangMenuOpen]);

  // Get current language display info
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <>
      {/* Fixed navigation bar that appears on scroll */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-light-background/90 dark:bg-dark-background/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="text-light-text dark:text-dark-text font-bold text-xl transition-colors">
            {t('name').split(' ')[0]} <span className="text-primary dark:text-dark-primary">{t('name').split(' ')[1]}</span>
          </a>
          
          <div className="hidden md:flex space-x-6">
            {['about', 'projects', 'skills', 'education', 'contact'].map((section) => (
              <a 
                key={section}
                href={`#${section}`} 
                className="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-dark-primary transition-colors"
              >
                {t(`nav_${section}`)}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Enhanced language selector */}
            <div className="relative lang-menu-container">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full ${
                  scrolled 
                    ? 'bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text' 
                    : 'bg-white/20 text-white'
                } hover:bg-primary/20 dark:hover:bg-dark-primary/30 transition-all`}
                aria-expanded={isLangMenuOpen}
                aria-haspopup="true"
              >
                <span className="text-lg mr-1">{currentLang.flag}</span>
                <span className="text-sm font-medium hidden sm:inline">{currentLang.code.toUpperCase()}</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown menu with improved styling */}
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-light-card dark:bg-dark-card rounded-md shadow-lg py-1 z-50 border border-light-border dark:border-dark-border animate-fade-in">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center w-full text-left px-4 py-2 ${
                        i18n.language === lang.code 
                          ? 'bg-primary/10 dark:bg-dark-primary/20 text-primary dark:text-dark-primary font-medium' 
                          : 'text-light-text dark:text-dark-text'
                      } hover:bg-primary/10 dark:hover:bg-dark-primary/20 transition-colors`}
                    >
                      <span className="text-lg mr-3">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Theme toggle button */}
            <button 
              onClick={handleThemeToggle} 
              className={`p-2 rounded-full ${
                scrolled 
                  ? 'bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text' 
                  : 'bg-white/20 text-white'
              } hover:bg-primary/20 dark:hover:bg-dark-primary/30 transition-all`}
              aria-label={theme === 'dark' ? t('switch_to_light_mode') : t('switch_to_dark_mode')}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <header 
        id="home" 
        className="relative h-screen flex flex-col items-center justify-center text-center p-6 bg-cover bg-center bg-no-repeat transition-colors duration-300"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url('/assets/images/hero-background.jpg')`,
        }}
      >
        <div className="relative z-0 animate-fade-in-down max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{t('name')}</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6">{t('tagline')}</p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{t('hero_description')}</p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl"
            >
              {t('view_projects')}
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-md transition-colors border border-white/30"
            >
              {t('contact_me')}
            </a>
          </div>
        </div>
        
        {/* Improved scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <a 
            href="#about" 
            aria-label={t('scroll_to_about')}
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">{t('scroll_down')}</span>
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
