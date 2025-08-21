'use client';

import { getTranslation, getTranslationArray } from '@/lib/translations';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface ServicesProps {
  locale: string;
}

export default function Services({ locale }: ServicesProps) {
  const services = getTranslationArray(locale, 'services.list');

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/15 to-violet-600/15 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-violet-600/15 to-purple-600/15 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-full text-slate-200 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Our Expertise
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
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
              className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
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

        <AnimatedSection delay={0.3}>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:from-slate-800 hover:to-slate-700 hover:scale-105"
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
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 border border-indigo-600/50"
                    whileHover={{ rotate: 5 }}
                  >
                    <span className="text-2xl text-white group-hover:text-blue-200 transition-colors duration-300">
                      {index === 0 ? "🏠" : "🏢"}
                    </span>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300"
                    dir={locale === 'ar' ? 'rtl' : 'ltr'}
                    style={{ 
                      lineHeight: locale === 'ar' ? '1.6' : '1.4',
                      textAlign: 'center'
                    }}>
                    {service}
                  </h3>
                  
                  {/* Decorative line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mt-6 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection delay={0.4}>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { key: 'warranty', icon: '🛡️' },
              { key: 'eco', icon: '🌱' },
              { key: 'support', icon: '📞' }
            ].map((stat, index) => (
              <motion.div 
                key={stat.key}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-500/30"
                  whileHover={{ rotate: 5 }}
                >
                  <span className="text-3xl">{stat.icon}</span>
                </motion.div>
                
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {getTranslation(locale, `services.stats.${stat.key}.value`)}
                </motion.div>
                
                <p className="text-slate-300 font-medium"
                   dir={locale === 'ar' ? 'rtl' : 'ltr'}
                   style={{ textAlign: 'center' }}>
                  {getTranslation(locale, `services.stats.${stat.key}.label`)}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
