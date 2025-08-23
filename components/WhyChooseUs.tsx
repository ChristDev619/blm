'use client';

import { getTranslation, getTranslationArray } from '@/lib/translations';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface WhyChooseUsProps {
  locale: string;
}

export default function WhyChooseUs({ locale }: WhyChooseUsProps) {
  const features = getTranslationArray(locale, 'why.features');

  // Professional icons for each feature
  const featureIcons = [
    { icon: '🌍', gradient: 'from-blue-500 to-indigo-600', glow: 'blue' }, // European Experience
    { icon: '⚡', gradient: 'from-amber-500 to-orange-600', glow: 'amber' }, // Advanced Technology
    { icon: '⏰', gradient: 'from-purple-500 to-pink-600', glow: 'purple' }, // Time Commitment
    { icon: '🛡️', gradient: 'from-emerald-500 to-teal-600', glow: 'emerald' }, // Written Warranties
    { icon: '🌿', gradient: 'from-green-500 to-emerald-600', glow: 'green' }, // Eco-Friendly
    { icon: '👥', gradient: 'from-cyan-500 to-blue-600', glow: 'cyan' } // Professional Team
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background with floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-600/15 to-cyan-600/15 rounded-full blur-3xl opacity-60"></div>
        
        {/* Floating paint drops */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              background: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'][i % 4],
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-full text-indigo-200 text-sm font-medium mb-8 border border-indigo-700/30 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.span>
              ✨ Swedish-European Excellence
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
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {getTranslation(locale, 'why.title')}
            </motion.h2>
            
            <motion.p 
              className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
              style={{ 
                lineHeight: locale === 'ar' ? '1.8' : '1.6',
                textAlign: 'center'
              }}
            >
              {getTranslation(locale, 'why.subtitle')}
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature: string, index: number) => {
              const iconData = featureIcons[index] || featureIcons[0];
              return (
                <motion.div 
                  key={index} 
                  className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:bg-white/10 overflow-hidden"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.4 }
                  }}
                >
                  {/* Dynamic glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${iconData.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-700`}></div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-${iconData.glow}-400 rounded-full opacity-0 group-hover:opacity-60`}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0, 0.6, 0]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10">
                    {/* Enhanced icon with 3D effect */}
                    <motion.div 
                      className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${iconData.gradient} rounded-2xl mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative overflow-hidden`}
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Inner glow */}
                      <div className="absolute inset-1 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <span className="text-3xl relative z-10 filter drop-shadow-lg">
                        {iconData.icon}
                      </span>
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-500 leading-tight"
                        dir={locale === 'ar' ? 'rtl' : 'ltr'}
                        style={{ 
                          lineHeight: locale === 'ar' ? '1.6' : '1.4',
                          textAlign: locale === 'ar' ? 'right' : 'left'
                        }}>
                      {feature}
                    </h3>
                    
                    {/* Enhanced decorative line with animation */}
                    <motion.div 
                      className={`h-1 bg-gradient-to-r ${iconData.gradient} rounded-full transition-all duration-500`}
                      initial={{ width: 48 }}
                      whileInView={{ width: 64 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      whileHover={{ width: 80 }}
                    />
                    

                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>


      </div>
    </section>
  );
} 