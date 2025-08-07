'use client';

import { getTranslation, getTranslationArray } from '@/lib/translations';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServicesProps {
  locale: string;
}

export default function Services({ locale }: ServicesProps) {
  const serviceIcons = [
    '🎨', '🔧', '🧹', '🛡️', '🔒', '📋'
  ];

  const services = getTranslationArray(locale, 'services.list');

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-100 to-purple-200 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Professional Services
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
              style={{ 
                textAlign: 'center',
                width: '100%'
              }}
            >
              {getTranslation(locale, 'services.title')}
            </motion.h2>
            
            <motion.p 
              className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
              style={{ 
                lineHeight: locale === 'ar' ? '2' : '1.75',
                wordSpacing: locale === 'ar' ? '0.1em' : 'normal',
                textAlign: 'center'
              }}
            >
              {getTranslation(locale, 'services.subtitle')}
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Hero Image and Services Grid */}
        <AnimatedSection delay={0.3}>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Professional Painting Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/50 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Container */}
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/34.png"
                    alt="Professional painter using spray gun"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-bold text-slate-900 dark:text-white">Professional Spray Painting</span>
                  </motion.div>
                </div>
                
                {/* Stats overlay at bottom */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">Eco-Friendly</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">Support</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service: string, index: number) => (
                  <motion.div 
                    key={index} 
                    className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/90 dark:hover:bg-slate-800/90"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <span className="text-xl text-white">{serviceIcons[index]}</span>
                      </motion.div>
                      
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300"
                          dir={locale === 'ar' ? 'rtl' : 'ltr'}
                          style={{ 
                            lineHeight: locale === 'ar' ? '1.6' : '1.4',
                            textAlign: locale === 'ar' ? 'right' : 'left'
                          }}>
                        {service}
                      </h3>
                      
                      <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:w-12 transition-all duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Enhanced Stats Section */}
        <AnimatedSection delay={0.4}>
          <motion.div 
            className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 dark:border-slate-700/50 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {getTranslation(locale, 'services.stats.warranty.value')}
                </motion.div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">
                  {getTranslation(locale, 'services.stats.warranty.label')}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {getTranslation(locale, 'services.stats.eco.value')}
                </motion.div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">
                  {getTranslation(locale, 'services.stats.eco.label')}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {getTranslation(locale, 'services.stats.support.value')}
                </motion.div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">
                  {getTranslation(locale, 'services.stats.support.label')}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
} 