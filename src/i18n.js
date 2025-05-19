import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';
import translationZH from './locales/zh/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  zh: {
    translation: translationZH,
  },
};

// Custom language detection function with priority: German > English > Chinese
const detectBrowserLanguage = () => {
  // Get browser language (e.g., 'en-US', 'de-DE', 'zh-CN')
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Check if it's one of our supported languages with priority
  if (langCode === 'de') return 'de'; // German first priority
  if (langCode === 'en') return 'en'; // English second priority
  if (langCode === 'zh') return 'zh'; // Chinese third priority
  
  // Default to German for European languages, English for others
  const europeanLangs = ['fr', 'es', 'it', 'nl', 'pt', 'ru', 'pl'];
  return europeanLangs.includes(langCode) ? 'de' : 'en';
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'de', // Changed fallback to German
    debug: false, // Set to false in production
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      checkWhitelist: true,
    },
    // Override the detected language with our custom function
    lng: detectBrowserLanguage(),
  });

// Export language change function for easier access
export const changeLanguage = (lng) => {
  return i18n.changeLanguage(lng);
};

export default i18n;
