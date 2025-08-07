'use client';

import { useState } from 'react';
import { getTranslation } from '@/lib/translations';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface ContactProps {
  locale: string;
}

export default function Contact({ locale }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
              style={{ textAlign: 'center' }}
            >
              {getTranslation(locale, 'contact.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
              style={{ 
                textAlign: 'center',
                lineHeight: locale === 'ar' ? '1.8' : '1.6'
              }}
            >
              {getTranslation(locale, 'contact.subtitle')}
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information - Left Column */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6"
                    dir={locale === 'ar' ? 'rtl' : 'ltr'}
                    style={{ textAlign: 'left' }}>
                  {getTranslation(locale, 'contact.info.title')}
                </h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed"
                   dir={locale === 'ar' ? 'rtl' : 'ltr'}
                   style={{ 
                     lineHeight: locale === 'ar' ? '1.8' : '1.6'
                   }}>
                  {getTranslation(locale, 'contact.info.description')}
                </p>
              </div>

              <div className="space-y-8">
                {/* Address */}
                <motion.div 
                  className="flex items-start space-x-4 rtl:space-x-reverse group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center group-hover:bg-pink-500/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl">📍</span>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300"
                        dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                      {getTranslation(locale, 'contact.info.address.title')}
                    </h4>
                    <p className="text-slate-300 leading-relaxed"
                       dir={locale === 'ar' ? 'rtl' : 'ltr'}
                       style={{ 
                         lineHeight: locale === 'ar' ? '1.6' : '1.5'
                       }}>
                      {getTranslation(locale, 'contact.info.address.value')}
                    </p>
                  </div>
                </motion.div>

                {/* WhatsApp */}
                <motion.div 
                  className="flex items-start space-x-4 rtl:space-x-reverse group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl">📱</span>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300"
                        dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                      {getTranslation(locale, 'contact.info.whatsapp.title')}
                    </h4>
                    <a
                      href="https://wa.me/00966598331519"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg"
                    >
                      {getTranslation(locale, 'contact.info.whatsapp.value')}
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="flex items-start space-x-4 rtl:space-x-reverse group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl">📧</span>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
                        dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                      {getTranslation(locale, 'contact.info.email.title')}
                    </h4>
                    <a
                      href="mailto:info@blm.sa"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg"
                    >
                      {getTranslation(locale, 'contact.info.email.value')}
                    </a>
                  </div>
                </motion.div>

                {/* Website */}
                <motion.div 
                  className="flex items-start space-x-4 rtl:space-x-reverse group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl">🌐</span>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
                        dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                      {getTranslation(locale, 'contact.info.website.title')}
                    </h4>
                    <a
                      href="https://www.bestlook.sa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg"
                    >
                      {getTranslation(locale, 'contact.info.website.value')}
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form - Right Column */}
            <motion.div 
              className="bg-slate-700/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-600/30 shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8"
                  dir={locale === 'ar' ? 'rtl' : 'ltr'}
                  style={{ textAlign: 'left' }}>
                {getTranslation(locale, 'contact.form.title')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-3"
                         dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {getTranslation(locale, 'contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-300"
                    required
                    suppressHydrationWarning
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-3"
                         dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {getTranslation(locale, 'contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-300"
                    required
                    suppressHydrationWarning
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-3"
                         dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {getTranslation(locale, 'contact.form.projectType')}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300"
                    required
                    suppressHydrationWarning
                  >
                    <option value="">{getTranslation(locale, 'contact.form.projectTypePlaceholder')}</option>
                    <option value="residential">{getTranslation(locale, 'contact.form.projectTypes.residential')}</option>
                    <option value="commercial">{getTranslation(locale, 'contact.form.projectTypes.commercial')}</option>
                    <option value="interior">{getTranslation(locale, 'contact.form.projectTypes.interior')}</option>
                    <option value="exterior">{getTranslation(locale, 'contact.form.projectTypes.exterior')}</option>
                    <option value="renovation">{getTranslation(locale, 'contact.form.projectTypes.renovation')}</option>
                    <option value="other">{getTranslation(locale, 'contact.form.projectTypes.other')}</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-3"
                         dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {getTranslation(locale, 'contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-300 resize-none"
                    placeholder={getTranslation(locale, 'contact.form.messagePlaceholder')}
                    suppressHydrationWarning
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {getTranslation(locale, 'contact.form.send')}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 