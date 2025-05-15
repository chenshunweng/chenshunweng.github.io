import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import { ThemeContext } from '../contexts/ThemeContext';

const contactDetails = {
  email: "chenshunweng.1999@gmail.com",
  phone_key: "contact_phone_value",
  address_key: "contact_address_value",
  linkedin: "https://www.linkedin.com/in/chenshun-weng/",
  github: "https://github.com/ChenshunWeng",
};

// IMPORTANT: Replace with your own Formspree endpoint!
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ID"; 

const Contact = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 3000); // Reset status after 3 seconds
      } else {
        // Try to parse error from Formspree if available
        const data = await response.json();
        if (data.errors) {
          console.error("Formspree errors:", data.errors);
          // You could display these errors to the user if desired
        }
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className={`py-16 md:py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} text-light-text dark:text-dark-text transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          {t('contact_title')}
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{t('contact_get_in_touch')}</h3>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
              {t('contact_intro_text')}
            </p>
            
            {contactDetails.email && (
              <a href={`mailto:${contactDetails.email}`} className={`flex items-center space-x-3 ${theme === 'dark' ? 'text-gray-300 hover:text-primary-light' : 'text-gray-700 hover:text-primary'} transition-colors group`}>
                <Mail size={20} className={`${theme === 'dark' ? 'text-primary-light' : 'text-primary'} group-hover:scale-110 transition-transform`} />
                <span>{contactDetails.email}</span>
              </a>
            )}
            {contactDetails.phone_key && t(contactDetails.phone_key) !== 'contact_phone_value' && (
              <div className={`flex items-center space-x-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <Phone size={20} className={`${theme === 'dark' ? 'text-primary-light' : 'text-primary'}`} />
                <span>{t(contactDetails.phone_key)}</span>
              </div>
            )}
            {contactDetails.address_key && t(contactDetails.address_key) !== 'contact_address_value' && (
              <div className={`flex items-center space-x-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <MapPin size={20} className={`${theme === 'dark' ? 'text-primary-light' : 'text-primary'}`} />
                <span>{t(contactDetails.address_key)}</span>
              </div>
            )}
            <div className="flex space-x-4 pt-4">
              {contactDetails.linkedin && (
                <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${theme === 'dark' ? 'text-gray-400 hover:text-primary-light' : 'text-gray-500 hover:text-primary'} transition-colors`}>
                  <Linkedin size={28} />
                </a>
              )}
              {contactDetails.github && (
                <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`${theme === 'dark' ? 'text-gray-400 hover:text-primary-light' : 'text-gray-500 hover:text-primary'} transition-colors`}>
                  <Github size={28} />
                </a>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className={`space-y-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 md:p-8 rounded-xl shadow-lg`}>
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>{t('contact_form_name')}</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className={`mt-1 block w-full px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`} />
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>{t('contact_form_email')}</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className={`mt-1 block w-full px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`} />
            </div>
            <div>
              <label htmlFor="message" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>{t('contact_form_message')}</label>
              <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className={`mt-1 block w-full px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={formStatus === 'sending'}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${theme === 'dark' ? 'text-gray-900 bg-primary hover:bg-primary-dark focus:ring-primary-dark' : 'text-white bg-primary hover:bg-primary-dark focus:ring-primary-dark'} focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'} transition-colors duration-300 disabled:opacity-50`}
              >
                {formStatus === 'sending' ? t('contact_form_sending') : t('contact_form_send_button')}
              </button>
            </div>
            {formStatus === 'success' && <p className="text-sm text-green-500">{t('contact_form_sent_success')}</p>}
            {formStatus === 'error' && <p className="text-sm text-red-500">{t('contact_form_sent_error')}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

