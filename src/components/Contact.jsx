import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';

const contactDetails = {
  email: "chenshunweng.1999@gmail.com",
  phone_key: "contact_phone_value",
  address_key: "contact_address_value",
  linkedin: "https://www.linkedin.com/in/chenshun-weng/",
  github: "https://github.com/ChenshunWeng",
};

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = React.useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      if (formData.email && formData.message) {
        console.log("Form submitted:", formData);
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 3000);
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-light-card dark:bg-dark-card/50 text-light-text dark:text-dark-text transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          {t('contact_title')}
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 animate-slide-in-up animation-delay-200">
            <h3 className="text-2xl font-semibold mb-4">{t('contact_get_in_touch', 'Get in Touch')}</h3>
            <p className="text-light-text/80 dark:text-dark-text/80 leading-relaxed">
              {t('contact_intro_text', 'I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out to me.')}
            </p>
            
            {contactDetails.email && (
              <a href={`mailto:${contactDetails.email}`} className="flex items-center space-x-3 text-light-text/90 dark:text-dark-text/90 hover:text-light-primary dark:hover:text-dark-primary transition-colors group">
                <Mail size={20} className="text-light-primary dark:text-dark-primary group-hover:scale-110 transition-transform" />
                <span>{contactDetails.email}</span>
              </a>
            )}
            {contactDetails.phone_key && t(contactDetails.phone_key) && t(contactDetails.phone_key) !== 'contact_phone_value' && (
              <div className="flex items-center space-x-3 text-light-text/90 dark:text-dark-text/90">
                <Phone size={20} className="text-light-primary dark:text-dark-primary" />
                <span>{t(contactDetails.phone_key)}</span>
              </div>
            )}
            {contactDetails.address_key && t(contactDetails.address_key) && t(contactDetails.address_key) !== 'contact_address_value' && (
              <div className="flex items-center space-x-3 text-light-text/90 dark:text-dark-text/90">
                <MapPin size={20} className="text-light-primary dark:text-dark-primary" />
                <span>{t(contactDetails.address_key)}</span>
              </div>
            )}
            <div className="flex space-x-4 pt-4">
              {contactDetails.linkedin && (
                <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-light-muted hover:text-light-primary dark:text-dark-muted dark:hover:text-dark-primary transition-colors">
                  <Linkedin size={28} />
                </a>
              )}
              {contactDetails.github && (
                <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-light-muted hover:text-light-primary dark:text-dark-muted dark:hover:text-dark-primary transition-colors">
                  <Github size={28} />
                </a>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-light-background dark:bg-dark-background p-6 md:p-8 rounded-xl shadow-lg animate-slide-in-up animation-delay-400">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light-text/90 dark:text-dark-text/90 mb-1">{t('contact_form_name', 'Your Name')}</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-light-background dark:bg-dark-card border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-light-primary focus:border-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary sm:text-sm text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light-text/90 dark:text-dark-text/90 mb-1">{t('contact_form_email', 'Your Email')}</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-light-background dark:bg-dark-card border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-light-primary focus:border-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary sm:text-sm text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-light-text/90 dark:text-dark-text/90 mb-1">{t('contact_form_message', 'Your Message')}</label>
              <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-light-background dark:bg-dark-card border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-light-primary focus:border-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary sm:text-sm text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted"></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={formStatus === 'sending'}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-light-primary hover:bg-light-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary dark:bg-dark-primary dark:hover:bg-dark-accent dark:text-dark-background dark:focus:ring-offset-dark-background transition-colors duration-300 disabled:opacity-50"
              >
                {formStatus === 'sending' ? t('contact_form_sending', 'Sending...') : t('contact_form_send_button', 'Send Message')}
              </button>
            </div>
            {formStatus === 'success' && <p className="text-sm text-green-600 dark:text-green-400">{t('contact_form_sent_success', 'Message sent successfully!')}</p>}
            {formStatus === 'error' && <p className="text-sm text-red-600 dark:text-red-400">{t('contact_form_sent_error', 'Failed to send message. Please try again.')}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

