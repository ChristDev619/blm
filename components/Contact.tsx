'use client';

import { useState, useEffect } from 'react';
import { getTranslation } from '@/lib/translations';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactProps {
  locale: string;
}

export default function Contact({ locale }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    
    // Auto hide after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Save message to server (text file)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();

      // Show success notification
      showNotification(
        locale === 'ar' 
          ? 'تم إرسال رسالتك بنجاح!' 
          : 'Message sent successfully!',
        'success'
      );
      
      // Clear form after submission
      setFormData({
        name: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending message:', error);
      showNotification(
        locale === 'ar' 
          ? 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.' 
          : 'Error sending message. Please try again.',
        'error'
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Set typing animation
    setIsTyping(true);
    
    // Clear previous timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    
    // Set new timeout to stop animation after 2 seconds of no typing
    const timeout = setTimeout(() => {
      setIsTyping(false);
    }, 2000);
    
    setTypingTimeout(timeout);
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sky-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
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
                      href="https://wa.me/966598331519"
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
              className="relative bg-gradient-to-br from-white/10 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Painting Brush Animations */}
              <AnimatePresence>
                {isTyping && (
                  <>
                                         {/* Top-left brush */}
                     <motion.div
                       key="brush1"
                       className="absolute -top-8 -left-8 text-5xl opacity-80"
                       initial={{ opacity: 0, x: -30, y: -30, rotate: -45 }}
                       animate={{ opacity: 0.8, x: 0, y: 0, rotate: 0 }}
                       exit={{ opacity: 0, x: -30, y: -30, rotate: -45 }}
                       transition={{ duration: 0.8, ease: "easeOut" }}
                     >
                       🖌️
                     </motion.div>
                     
                     {/* Top-right brush */}
                     <motion.div
                       key="brush2"
                       className="absolute -top-4 -right-4 text-5xl opacity-90"
                       initial={{ opacity: 0, x: 40, y: -25, rotate: 45 }}
                       animate={{ opacity: 0.9, x: 0, y: 0, rotate: 0 }}
                       exit={{ opacity: 0, x: 40, y: -25, rotate: 45 }}
                       transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                     >
                       🎨
                     </motion.div>
                     
                     {/* Bottom-left brush */}
                     <motion.div
                       key="brush3"
                       className="absolute -bottom-6 -left-6 text-4xl opacity-70"
                       initial={{ opacity: 0, x: -25, y: 25, rotate: -30 }}
                       animate={{ opacity: 0.7, x: 0, y: 0, rotate: 0 }}
                       exit={{ opacity: 0, x: -25, y: 25, rotate: -30 }}
                       transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                     >
                       🖼️
                     </motion.div>
                     
                     {/* Bottom-right brush */}
                     <motion.div
                       key="brush4"
                       className="absolute -bottom-8 -right-8 text-5xl opacity-80"
                       initial={{ opacity: 0, x: 30, y: 30, rotate: 30 }}
                       animate={{ opacity: 0.8, x: 0, y: 0, rotate: 0 }}
                       exit={{ opacity: 0, x: 30, y: 30, rotate: 30 }}
                       transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                     >
                       🎭
                     </motion.div>
                    
                                         {/* Floating paint drops */}
                     <motion.div
                       key="drop1"
                       className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full shadow-lg"
                       initial={{ opacity: 0, scale: 0, y: -15 }}
                       animate={{ opacity: 0.9, scale: 1, y: 0 }}
                       exit={{ opacity: 0, scale: 0, y: -15 }}
                       transition={{ duration: 0.6, delay: 0.3 }}
                     />
                     <motion.div
                       key="drop2"
                       className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full shadow-lg"
                       initial={{ opacity: 0, scale: 0, y: -12 }}
                       animate={{ opacity: 0.8, scale: 1, y: 0 }}
                       exit={{ opacity: 0, scale: 0, y: -12 }}
                       transition={{ duration: 0.6, delay: 0.5 }}
                     />
                     <motion.div
                       key="drop3"
                       className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full shadow-lg"
                       initial={{ opacity: 0, scale: 0, y: -10 }}
                       animate={{ opacity: 0.8, scale: 1, y: 0 }}
                       exit={{ opacity: 0, scale: 0, y: -10 }}
                       transition={{ duration: 0.6, delay: 0.7 }}
                     />
                  </>
                )}
              </AnimatePresence>
              
              {/* Form background pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
                <div className="absolute top-0 left-0 w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
              
              <div className="relative z-10">
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
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-3"
                         dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {getTranslation(locale, 'contact.form.name')}
                  </label>
                                                        <input
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-white/25"
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
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-3"
                         dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {getTranslation(locale, 'contact.form.phone')}
                  </label>
                                                        <input
                     type="tel"
                     id="phone"
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-white/25"
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
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-3"
                         dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {getTranslation(locale, 'contact.form.message')}
                  </label>
                                                        <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     rows={4}
                     className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-white/60 backdrop-blur-sm transition-all duration-300 resize-none hover:bg-white/25"
                     placeholder={getTranslation(locale, 'contact.form.messagePlaceholder')}
                     suppressHydrationWarning
                   />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">📤</span>
                    {getTranslation(locale, 'contact.form.send')}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
          </div>
        </AnimatedSection>
      </div>

      {/* Modern Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed top-6 right-6 z-50 max-w-sm"
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
          >
            <div className={`
              relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl 
              rounded-2xl p-6 shadow-2xl border border-slate-700/40
              ${toastType === 'success' 
                ? 'shadow-blue-500/30 border-blue-400/40' 
                : 'shadow-red-500/30 border-red-400/40'
              }
            `}>
              {/* Success Icon */}
              {toastType === 'success' && (
                <motion.div
                  className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg border-2 border-blue-400/50"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                >
                  <span className="text-white text-xl font-bold">✓</span>
                </motion.div>
              )}

              {/* Error Icon */}
              {toastType === 'error' && (
                <motion.div
                  className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg border-2 border-red-400/50"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                >
                  <span className="text-white text-xl font-bold">✕</span>
                </motion.div>
              )}

              {/* Content */}
              <div className="ml-8">
                <h4 className={`
                  text-lg font-bold mb-2
                  ${toastType === 'success' ? 'text-blue-200' : 'text-red-200'}
                `}>
                  {toastType === 'success' 
                    ? (locale === 'ar' ? 'تم بنجاح!' : 'Success!')
                    : (locale === 'ar' ? 'خطأ!' : 'Error!')
                  }
                </h4>
                <p className="text-slate-300 leading-relaxed" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {toastMessage}
                </p>
              </div>

              {/* Progress Bar */}
              <motion.div
                className={`
                  absolute bottom-0 left-0 h-1 rounded-b-2xl
                  ${toastType === 'success' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-gradient-to-r from-red-500 to-pink-600'}
                `}
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 4, ease: "linear" }}
              />

              {/* Close Button */}
              <button
                onClick={() => setShowToast(false)}
                className="absolute top-3 right-3 text-slate-400 hover:text-slate-200 transition-colors duration-200 hover:bg-slate-700/50 rounded-full w-6 h-6 flex items-center justify-center"
              >
                <span className="text-lg font-bold">×</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 