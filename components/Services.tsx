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
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-red-600/20 to-rose-600/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-full text-amber-200 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Professional Services
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-100 via-orange-100 to-rose-100 bg-clip-text text-transparent mb-8"
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
              className="text-xl text-amber-100/80 max-w-4xl mx-auto leading-relaxed"
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
                className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-amber-900/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-bold text-amber-100">Professional Spray Painting</span>
                  </motion.div>
                </div>
                

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
                    className="group relative bg-amber-950/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-800/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-amber-950/40"
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
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-800/15 to-orange-800/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <span className="text-xl text-white">{serviceIcons[index]}</span>
                      </motion.div>
                      
                      <h3 className="text-lg font-bold text-amber-50 mb-3 group-hover:text-amber-200 transition-colors duration-300"
                          dir={locale === 'ar' ? 'rtl' : 'ltr'}
                          style={{ 
                            lineHeight: locale === 'ar' ? '1.6' : '1.4',
                            textAlign: locale === 'ar' ? 'right' : 'left'
                          }}>
                        {service}
                      </h3>
                      
                      <div className="w-8 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full group-hover:w-12 transition-all duration-300"></div>
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
            className="bg-amber-950/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-800/30 shadow-2xl"
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
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {getTranslation(locale, 'services.stats.warranty.value')}
                </motion.div>
                <div className="text-amber-100/80 font-medium">
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
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {getTranslation(locale, 'services.stats.eco.value')}
                </motion.div>
                <div className="text-amber-100/80 font-medium">
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
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {getTranslation(locale, 'services.stats.support.value')}
                </motion.div>
                <div className="text-amber-100/80 font-medium">
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