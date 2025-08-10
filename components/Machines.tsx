'use client';

import { getTranslation } from '@/lib/translations';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MachinesProps {
  locale: string;
}

export default function Machines({ locale }: MachinesProps) {
  const machines = [
    {
      id: 1,
      src: '/images/machines/1.jpg',
      alt: 'Professional painting machine 1'
    },
    {
      id: 2,
      src: '/images/machines/2.jpg',
      alt: 'Professional painting machine 2'
    },
    {
      id: 3,
      src: '/images/machines/3.jpg',
      alt: 'Professional painting machine 3'
    }
  ];

  return (
    <section id="machines" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-full text-blue-200 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Advanced Equipment
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-100 via-cyan-100 to-indigo-100 bg-clip-text text-transparent mb-8"
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
              {getTranslation(locale, 'machines.title')}
            </motion.h2>
            
            <motion.p 
              className="text-xl text-blue-100/80 max-w-4xl mx-auto leading-relaxed"
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
              {getTranslation(locale, 'machines.subtitle')}
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Machines Gallery */}
        <AnimatedSection delay={0.3}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine, index) => (
              <motion.div
                key={machine.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                                 <motion.div 
                   className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-3 border border-white/10 shadow-2xl overflow-hidden"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.3 }}
                 >
                   {/* Image Container */}
                   <div className="relative h-96 rounded-2xl overflow-hidden mb-4">
                     <Image
                       src={machine.src}
                       alt={machine.alt}
                       fill
                       className="object-contain group-hover:scale-110 transition-transform duration-500"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                                           {/* Overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   </div>
                  
                  {/* Machine Info */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-blue-50 mb-2 group-hover:text-blue-200 transition-colors duration-300"
                        dir={locale === 'ar' ? 'rtl' : 'ltr'}
                        style={{ 
                          lineHeight: locale === 'ar' ? '1.6' : '1.4',
                          textAlign: 'center'
                        }}>
                      {getTranslation(locale, `machines.machine${machine.id}.title`)}
                    </h3>
                    <p className="text-blue-100/70 text-sm leading-relaxed"
                       dir={locale === 'ar' ? 'rtl' : 'ltr'}
                       style={{ 
                         lineHeight: locale === 'ar' ? '1.8' : '1.6',
                         textAlign: 'center'
                       }}>
                      {getTranslation(locale, `machines.machine${machine.id}.description`)}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection delay={0.6}>
          <motion.div 
            className="mt-20 bg-blue-950/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-800/30 shadow-2xl"
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
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {getTranslation(locale, 'machines.features.technology.value')}
                </motion.div>
                <div className="text-blue-100/80 font-medium">
                  {getTranslation(locale, 'machines.features.technology.label')}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {getTranslation(locale, 'machines.features.precision.value')}
                </motion.div>
                <div className="text-blue-100/80 font-medium">
                  {getTranslation(locale, 'machines.features.precision.label')}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {getTranslation(locale, 'machines.features.efficiency.value')}
                </motion.div>
                <div className="text-blue-100/80 font-medium">
                  {getTranslation(locale, 'machines.features.efficiency.label')}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
