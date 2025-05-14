import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 px-6 text-center transition-colors duration-300">
      <div className="container mx-auto">
        <p className="text-sm mb-1">&copy; {new Date().getFullYear()} {t('name')}. {t('footer_copyright').replace(`© ${new Date().getFullYear()} ${t('name')}. `, '')}</p>
        <p className="text-xs text-gray-400">{t('footer_built_with')}</p>
      </div>
    </footer>
  );
};

export default Footer;
