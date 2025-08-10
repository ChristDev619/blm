'use client';

import { getTranslation, getTranslationArray } from '@/lib/translations';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface WhyChooseUsProps {
  locale: string;
}

export default function WhyChooseUs({ locale }: WhyChooseUsProps) {
  const features = getTranslationArray(locale, 'why.features');

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-600/20 to-emerald-600/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-full text-emerald-200 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Premium Quality Service
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-100 via-teal-100 to-green-100 bg-clip-text text-transparent mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {getTranslation(locale, 'why.title')}
            </motion.h2>
            
            <motion.p 
              className="text-xl text-emerald-100/90 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {getTranslation(locale, 'why.subtitle')}
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature: string, index: number) => (
              <motion.div 
                key={index} 
                className="group relative bg-emerald-950/40 backdrop-blur-sm rounded-2xl p-8 border border-emerald-800/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-emerald-950/60"
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
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/20 to-teal-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-emerald-50 mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                    {feature}
                  </h3>
                  
                  {/* Decorative line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Enhanced CTA Block */}
        <AnimatedSection delay={0.4}>
          <motion.div 
            className="relative bg-gradient-to-br from-emerald-700 via-teal-700 to-green-700 rounded-3xl p-10 md:p-16 text-center text-white overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-50">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                ✨ Let's Get Started
              </motion.div>
              
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {getTranslation(locale, 'why.cta.title')}
              </motion.h3>
              
              <motion.p 
                className="text-xl mb-10 opacity-90 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {getTranslation(locale, 'why.cta.subtitle')}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-3 text-xl">📞</span>
                  {getTranslation(locale, 'why.cta.quote')}
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/00966598331519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-3 text-xl">💬</span>
                  {getTranslation(locale, 'why.cta.whatsapp')}
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
} 