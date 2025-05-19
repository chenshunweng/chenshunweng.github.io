import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, Send, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { ThemeContext } from '../contexts/ThemeContext';

const contactDetails = {
  email: "chenshunweng.1999@gmail.com",
  phone_key: "contact_phone_value",
  address_key: "contact_address_value",
  linkedin: "https://www.linkedin.com/in/chenshun-weng/",
  github: "https://github.com/ChenshunWeng",
};

// IMPORTANT: Replace with your own Formspree endpoint!
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meogvvze"; 

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
        setTimeout(() => setFormStatus(''), 5000); // Reset status after 5 seconds
      } else {
        const data = await response.json();
        if (data.errors) {
          console.error("Formspree errors:", data.errors);
        }
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

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

  return (
    <section id="contact" className={`py-16 md:py-24 bg-light-card dark:bg-dark-card/50 text-light-text dark:text-dark-text transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold mb-6 text-center text-light-text dark:text-dark-text`}
        >
          {t('contact_title')}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-12 text-light-muted dark:text-dark-muted"
        >
          {t('contact_subtitle')}
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className={`text-2xl font-semibold mb-4 text-light-text dark:text-dark-text`}>{t('contact_get_in_touch')}</h3>
            <p className={`text-light-text/80 dark:text-dark-text/80 leading-relaxed`}>
              {t('contact_intro_text')}
            </p>
            
            <div className="space-y-4 mt-8">
              {contactDetails.email && (
                <motion.a 
                  href={`mailto:${contactDetails.email}`} 
                  className={`flex items-center space-x-3 text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors group p-3 rounded-lg hover:bg-light-background dark:hover:bg-dark-background`}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-light-primary/10 dark:bg-dark-primary/20 flex items-center justify-center">
                    <Mail size={20} className={`text-light-primary dark:text-dark-primary group-hover:scale-110 transition-transform`} />
                  </div>
                  <span className="font-medium">{contactDetails.email}</span>
                </motion.a>
              )}
              
              {contactDetails.phone_key && t(contactDetails.phone_key) !== 'contact_phone_value' && (
                <motion.div 
                  className={`flex items-center space-x-3 text-light-muted dark:text-dark-muted p-3 rounded-lg`}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-light-primary/10 dark:bg-dark-primary/20 flex items-center justify-center">
                    <Phone size={20} className={`text-light-primary dark:text-dark-primary`} />
                  </div>
                  <span className="font-medium">{t(contactDetails.phone_key)}</span>
                </motion.div>
              )}
              
              {contactDetails.address_key && t(contactDetails.address_key) !== 'contact_address_value' && (
                <motion.div 
                  className={`flex items-center space-x-3 text-light-muted dark:text-dark-muted p-3 rounded-lg`}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-light-primary/10 dark:bg-dark-primary/20 flex items-center justify-center">
                    <MapPin size={20} className={`text-light-primary dark:text-dark-primary`} />
                  </div>
                  <span className="font-medium">{t(contactDetails.address_key)}</span>
                </motion.div>
              )}
            </div>
            
            <div className="flex space-x-4 pt-6">
              {contactDetails.linkedin && (
                <a 
                  href={contactDetails.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn" 
                  className={`w-12 h-12 rounded-full bg-light-background dark:bg-dark-background flex items-center justify-center text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary hover:shadow-md transition-all duration-300`}
                >
                  <Linkedin size={24} />
                </a>
              )}
              {contactDetails.github && (
                <a 
                  href={contactDetails.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub" 
                  className={`w-12 h-12 rounded-full bg-light-background dark:bg-dark-background flex items-center justify-center text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary hover:shadow-md transition-all duration-300`}
                >
                  <Github size={24} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.form 
            variants={itemVariants}
            onSubmit={handleSubmit} 
            className={`space-y-6 bg-light-background dark:bg-dark-background p-6 md:p-8 rounded-xl shadow-lg border border-light-border dark:border-dark-border/50 hover:shadow-xl transition-shadow duration-300`}
          >
            <div>
              <label htmlFor="name" className={`block text-sm font-medium text-light-text dark:text-dark-text mb-1`}>{t('contact_form_name')}</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className={`mt-1 block w-full px-4 py-3 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-200 sm:text-sm`} 
                placeholder={t('contact_form_name_placeholder')}
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block text-sm font-medium text-light-text dark:text-dark-text mb-1`}>{t('contact_form_email')}</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className={`mt-1 block w-full px-4 py-3 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-200 sm:text-sm`} 
                placeholder={t('contact_form_email_placeholder')}
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block text-sm font-medium text-light-text dark:text-dark-text mb-1`}>{t('contact_form_message')}</label>
              <textarea 
                name="message" 
                id="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className={`mt-1 block w-full px-4 py-3 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-200 sm:text-sm`}
                placeholder={t('contact_form_message_placeholder')}
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                disabled={formStatus === 'sending'}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white dark:text-dark-background bg-light-primary dark:bg-dark-primary hover:bg-light-accent dark:hover:bg-dark-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:ring-offset-light-background dark:focus:ring-offset-dark-background transition-colors duration-300 disabled:opacity-70 h-12`}
              >
                {formStatus === 'sending' ? (
                  <>
                    <Loader2 size={20} className="mr-2 animate-spin" />
                    {t('contact_form_sending')}
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    {t('contact_form_send_button')}
                  </>
                )}
              </button>
            </div>
            
            {formStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center"
              >
                <CheckCircle size={18} className="text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                <p className="text-sm text-green-700 dark:text-green-300">{t('contact_form_sent_success')}</p>
              </motion.div>
            )}
            
            {formStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center"
              >
                <AlertCircle size={18} className="text-red-500 dark:text-red-400 mr-2 flex-shrink-0" />
                <p className="text-sm text-red-700 dark:text-red-300">{t('contact_form_sent_error')}</p>
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
