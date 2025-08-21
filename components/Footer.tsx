'use client';

import { getTranslation, getTranslationArray } from '@/lib/translations';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
            style={{
              left: `${15 + i * 20}%`,
              top: `${30 + i * 12}%`,
              transform: `rotate(${45 + i * 15}deg)`,
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
        
        {/* Pulsing Circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border border-blue-400/20 rounded-full"
            style={{
              left: `${25 + i * 30}%`,
              top: `${70 + i * 10}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Company Info - Enhanced Design */}
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      {getTranslation(locale, 'footer.logo.bestLook')}
                    </h3>
                    <p className="text-blue-300 text-sm font-medium">
                      {getTranslation(locale, 'footer.logo.contracting')}
                    </p>
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  dir={locale === 'ar' ? 'rtl' : 'ltr'}
                  style={{ 
                    lineHeight: locale === 'ar' ? '1.8' : '1.6',
                    textAlign: locale === 'ar' ? 'right' : 'left'
                  }}
                >
                  {getTranslation(locale, 'footer.description')}
                </motion.p>
                
                <motion.div 
                  className="flex space-x-4 rtl:space-x-reverse"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="https://wa.me/00966598331519"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xl">💬</span>
                  </motion.a>
                  <motion.a
                    href="mailto:info@blm.sa"
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xl">📧</span>
                  </motion.a>
                  <motion.a
                    href="tel:00966598331519"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xl">📞</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Machines - Enhanced Design */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-lg">🔧</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {getTranslation(locale, 'footer.machines.title')}
                  </h3>
                </motion.div>
                
                <ul className="space-y-3">
                  {getTranslationArray(locale, 'footer.machines.list').map((machine: string, index: number) => (
                    <motion.li 
                      key={index}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      dir={locale === 'ar' ? 'rtl' : 'ltr'}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"
                        style={{ marginRight: locale === 'ar' ? '0' : '0.75rem', marginLeft: locale === 'ar' ? '0.75rem' : '0' }}
                      />
                      <span style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}>{machine}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Info - Enhanced Design */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-lg">📍</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {getTranslation(locale, 'footer.contact.title')}
                  </h3>
                </motion.div>
                
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-400 text-sm">🏢</span>
                    </div>
                    <div className="text-gray-300" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                      <p style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}>
                        {getTranslation(locale, 'footer.contact.address.line1')}
                      </p>
                      <p style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}>
                        {getTranslation(locale, 'footer.contact.address.line2')}
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-green-400 text-sm">📱</span>
                    </div>
                    <a
                      href="https://wa.me/00966598331519"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                      dir={locale === 'ar' ? 'rtl' : 'ltr'}
                    >
                      {getTranslation(locale, 'footer.contact.phone')}
                    </a>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-purple-400 text-sm">✉️</span>
                    </div>
                    <a
                      href="mailto:info@blm.sa"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                      dir={locale === 'ar' ? 'rtl' : 'ltr'}
                    >
                      {getTranslation(locale, 'footer.contact.email')}
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Enhanced Bottom Bar */}
        <AnimatedSection delay={0.5}>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Gradient Separator */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mb-8"></div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <motion.p 
                  className="text-gray-300 text-sm font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  dir={locale === 'ar' ? 'rtl' : 'ltr'}
                  style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}
                >
                  {getTranslation(locale, 'footer.copyright')}
                </motion.p>
                
                <motion.div 
                  className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {[
                    { href: "#about", text: getTranslation(locale, 'footer.links.about') },
                    { href: "#machines", text: getTranslation(locale, 'footer.links.machines') },
                    { href: "#portfolio", text: getTranslation(locale, 'footer.links.portfolio') },
                    { href: "#contact", text: getTranslation(locale, 'footer.links.contact') }
                  ].map((link, index) => (
                    <motion.a 
                      key={index}
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      dir={locale === 'ar' ? 'rtl' : 'ltr'}
                    >
                      {link.text}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </footer>
  );
} 