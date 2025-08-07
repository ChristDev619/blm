'use client';

import { getTranslation } from '@/lib/translations';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface AboutProps {
  locale: string;
}

export default function About({ locale }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-900/20 to-purple-900/20 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-full text-blue-300 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Our Story
            </motion.div>
            
                         <motion.h2 
               className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-8 leading-tight"
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
               {getTranslation(locale, 'about.title')}
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
               {getTranslation(locale, 'about.subtitle')}
             </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: "🎨", title: getTranslation(locale, 'about.features.spraying.title'), description: getTranslation(locale, 'about.features.spraying.description'), color: "from-blue-500 to-indigo-600" },
              { icon: "🔧", title: getTranslation(locale, 'about.features.sanding.title'), description: getTranslation(locale, 'about.features.sanding.description'), color: "from-indigo-500 to-purple-600" },
              { icon: "🛡️", title: getTranslation(locale, 'about.features.mesh.title'), description: getTranslation(locale, 'about.features.mesh.description'), color: "from-purple-500 to-pink-600" }
            ].map((feature, index) => (
                             <motion.div 
                 key={index}
                 className="group relative bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:from-slate-700 hover:to-slate-600 hover:scale-105"
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
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                                     <motion.div 
                     className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 border border-slate-500/50"
                     whileHover={{ rotate: 5 }}
                   >
                     <span className="text-2xl text-slate-300 group-hover:text-blue-400 transition-colors duration-300">{feature.icon}</span>
                   </motion.div>
                  
                                                        <h3 className="text-xl font-bold text-slate-200 mb-4 group-hover:text-blue-400 transition-colors duration-300"
                       dir={locale === 'ar' ? 'rtl' : 'ltr'}
                       style={{ 
                         lineHeight: locale === 'ar' ? '1.6' : '1.4',
                         textAlign: 'center'
                       }}>
                     {feature.title}
                   </h3>
                   
                   <p className="text-slate-400 leading-relaxed"
                      dir={locale === 'ar' ? 'rtl' : 'ltr'}
                      style={{ 
                        lineHeight: locale === 'ar' ? '1.8' : '1.6',
                        wordSpacing: locale === 'ar' ? '0.05em' : 'normal',
                        textAlign: 'center'
                      }}>
                     {feature.description}
                   </p>
                  
                  {/* Decorative line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mt-6 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

                 {/* European Expertise Block */}
         <AnimatedSection delay={0.4}>
           <motion.div 
             className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-3xl overflow-hidden shadow-2xl mb-20 border border-slate-600/30"
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             whileHover={{ scale: 1.01 }}
           >
             <div className="grid md:grid-cols-2 items-stretch">
                               <motion.div
                  className="p-10 md:p-16"
                  style={{ background: '#1e293b' }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                 <motion.div
                   className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-900/50 to-yellow-900/50 rounded-full text-amber-300 text-sm font-medium mb-6 border border-amber-700/50"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.3 }}
                   viewport={{ once: true }}
                 >
                   <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                   European Excellence®
                 </motion.div>

                 <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6"
                     dir={locale === 'ar' ? 'rtl' : 'ltr'}
                     style={{ lineHeight: locale === 'ar' ? '1.3' : '1.2' }}>
                   {getTranslation(locale, 'about.expertise.title')}
                 </h3>
                 
                 <p className="text-lg text-slate-300 mb-8 leading-relaxed"
                    dir={locale === 'ar' ? 'rtl' : 'ltr'}
                    style={{ 
                      lineHeight: locale === 'ar' ? '1.9' : '1.7',
                      wordSpacing: locale === 'ar' ? '0.05em' : 'normal'
                    }}>
                   {getTranslation(locale, 'about.expertise.description')}
                 </p>
                 
                 <motion.div 
                   className="flex items-center text-sm text-slate-300 bg-slate-700/80 backdrop-blur-sm rounded-xl px-4 py-3 w-fit border border-slate-600/50 shadow-sm"
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6, delay: 0.4 }}
                   viewport={{ once: true }}
                 >
                   <span className="mr-3 text-lg">🏆</span>
                   <span className="font-medium">{getTranslation(locale, 'about.expertise.experience')}</span>
                 </motion.div>
               </motion.div>
               
               <motion.div 
                 className="relative h-full min-h-[300px] md:min-h-[400px] overflow-hidden bg-gradient-to-br from-slate-700 to-slate-600"
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
                 viewport={{ once: true }}
               >
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 z-10"></div>
                 <Image
                   src="/images/right-guy.webp"
                   alt="Professional contractor"
                   fill
                   className="object-cover"
                 />
               </motion.div>
             </div>
           </motion.div>
         </AnimatedSection>

                 {/* Quote Section - Refined Design */}
         <AnimatedSection delay={0.5}>
           <div className="text-center max-w-4xl mx-auto">
             <motion.div
               className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-600/50 hover:shadow-xl transition-all duration-500"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.01 }}
             >
               {/* Subtle background gradient */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 rounded-2xl opacity-60"></div>
               
               <div className="relative z-10">
                 <motion.div
                   className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4 shadow-sm"
                   initial={{ opacity: 0, scale: 0 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                   viewport={{ once: true }}
                   whileHover={{ scale: 1.1, rotate: 5 }}
                 >
                   <span className="text-white text-sm font-bold">"</span>
                 </motion.div>
                 
                 <motion.blockquote 
                   className="text-lg md:text-xl text-slate-200 italic mb-4 leading-relaxed font-medium"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.3 }}
                   viewport={{ once: true }}
                   dir={locale === 'ar' ? 'rtl' : 'ltr'}
                   style={{ 
                     lineHeight: locale === 'ar' ? '1.8' : '1.6',
                     wordSpacing: locale === 'ar' ? '0.05em' : 'normal',
                     textAlign: 'center'
                   }}
                 >
                   {getTranslation(locale, 'about.quote.text')}
                 </motion.blockquote>
                 
                 <motion.div
                   className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-3"
                   initial={{ scaleX: 0 }}
                   whileInView={{ scaleX: 1 }}
                   transition={{ duration: 0.8, delay: 0.4 }}
                   viewport={{ once: true }}
                 />
                 
                 <motion.p 
                   className="text-slate-400 font-medium text-sm"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.5 }}
                   viewport={{ once: true }}
                   dir={locale === 'ar' ? 'rtl' : 'ltr'}
                   style={{ textAlign: 'center' }}
                 >
                   {getTranslation(locale, 'about.quote.author')}
                 </motion.p>
               </div>
             </motion.div>
           </div>
                  </AnimatedSection>

         {/* Trust Indicators Section */}
         <AnimatedSection delay={0.6}>
           <motion.div 
             className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl mb-20 border border-slate-700/50"
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             whileHover={{ scale: 1.01 }}
           >
             {/* Background decorative elements */}
             <div className="absolute inset-0 overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-indigo-600/10"></div>
               <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>
             </div>

             <div className="relative z-10 p-12 md:p-16">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                 {/* 10+ Years Warranty */}
                 <motion.div 
                   className="text-center group"
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   viewport={{ once: true }}
                 >
                   <motion.div 
                     className="text-5xl md:text-6xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-300"
                     initial={{ scale: 0.5 }}
                     whileInView={{ scale: 1 }}
                     transition={{ duration: 0.8, delay: 0.3 }}
                     viewport={{ once: true }}
                   >
                     <CountUp end={10} duration={2.5} delay={0.5} />+
                   </motion.div>
                   <p className="text-slate-300 text-lg font-medium group-hover:text-white transition-colors duration-300"
                      dir={locale === 'ar' ? 'rtl' : 'ltr'}
                      style={{ textAlign: 'center' }}>
                     {getTranslation(locale, 'about.trust.warranty')}
                   </p>
                 </motion.div>

                 {/* 100% Eco-Friendly */}
                 <motion.div 
                   className="text-center group"
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.4 }}
                   viewport={{ once: true }}
                 >
                   <motion.div 
                     className="text-5xl md:text-6xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors duration-300"
                     initial={{ scale: 0.5 }}
                     whileInView={{ scale: 1 }}
                     transition={{ duration: 0.8, delay: 0.5 }}
                     viewport={{ once: true }}
                   >
                     <CountUp end={100} duration={2.5} delay={0.7} />%
                   </motion.div>
                   <p className="text-slate-300 text-lg font-medium group-hover:text-white transition-colors duration-300"
                      dir={locale === 'ar' ? 'rtl' : 'ltr'}
                      style={{ textAlign: 'center' }}>
                     {getTranslation(locale, 'about.trust.eco')}
                   </p>
                 </motion.div>

                 {/* 24/7 Support */}
                 <motion.div 
                   className="text-center group"
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.6 }}
                   viewport={{ once: true }}
                 >
                   <motion.div 
                     className="text-5xl md:text-6xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors duration-300"
                     initial={{ scale: 0.5 }}
                     whileInView={{ scale: 1 }}
                     transition={{ duration: 0.8, delay: 0.7 }}
                     viewport={{ once: true }}
                   >
                     24/7
                   </motion.div>
                   <p className="text-slate-300 text-lg font-medium group-hover:text-white transition-colors duration-300"
                      dir={locale === 'ar' ? 'rtl' : 'ltr'}
                      style={{ textAlign: 'center' }}>
                     {getTranslation(locale, 'about.trust.support')}
                   </p>
                 </motion.div>
               </div>
             </div>
           </motion.div>
         </AnimatedSection>
       </div>
     </section>
   );
 }

// CountUp component for animated numbers
function CountUp({ end, duration = 2, delay = 0 }: { end: number; duration?: number; delay?: number }) {
   const [count, setCount] = useState(0);
   const [hasAnimated, setHasAnimated] = useState(false);

   useEffect(() => {
     if (hasAnimated) return;

     const timer = setTimeout(() => {
       let startTime: number;
       let animationFrameId: number;

       const animate = (currentTime: number) => {
         if (!startTime) startTime = currentTime;
         const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
         
         setCount(Math.floor(progress * end));
         
         if (progress < 1) {
           animationFrameId = requestAnimationFrame(animate);
         } else {
           setHasAnimated(true);
         }
       };

       animationFrameId = requestAnimationFrame(animate);
     }, delay * 1000);

     return () => {
       clearTimeout(timer);
     };
   }, [end, duration, delay, hasAnimated]);

   return <span>{count}</span>;
 } 