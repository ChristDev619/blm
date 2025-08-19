'use client';

import { getTranslation } from '@/lib/translations';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface AboutProps {
  locale: string;
}

export default function About({ locale }: AboutProps) {
  return (
    <>
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-600/15 to-violet-600/15 rounded-full blur-3xl opacity-40"></div>
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
              Our Story
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
                    <span className="text-2xl text-white group-hover:text-blue-200 transition-colors duration-300">{feature.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300"
                    dir={locale === 'ar' ? 'rtl' : 'ltr'}
                    style={{ 
                      lineHeight: locale === 'ar' ? '1.6' : '1.4',
                      textAlign: 'center'
                    }}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed"
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
      </div>
    </section>

    {/* Full Screen Video Showcase - Outside container */}
    <section className="relative">
      <AnimatedSection delay={0.4}>
        <motion.div 
          className="relative w-screen overflow-hidden"
          style={{ marginLeft: 'calc(-50vw + 50%)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        {/* True Full Screen Video Section */}
        <motion.div 
          className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-screen overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
              {/* Video Container with Auto-Play on Scroll */}
              <div className="relative w-full h-full">
                <video
                  ref={(el) => {
                    if (el) {
                      const observer = new IntersectionObserver(
                        (entries) => {
                          entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                              // Auto-play when scrolled into view
                              el.currentTime = 0;
                              el.play().catch(console.log);
                            } else {
                              // Pause when out of view
                              el.pause();
                            }
                          });
                        },
                        { threshold: 0.5 } // Play when 50% visible
                      );
                      
                      observer.observe(el);
                      
                      return () => observer.disconnect();
                    }
                  }}
                  className="w-full h-full object-contain"
                  muted={false}
                  playsInline
                  loop
                  preload="metadata"
                  poster="/images/hero-bg.jpg"
                >
                  <source src="/vid/2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                

                


                {/* Decorative corner elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-lg"></div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
    </section>

    <section id="about-continued" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* European Expertise Block - NEW DESIGN */}
        <AnimatedSection delay={0.5}>
          <motion.div 
            className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-20 border border-slate-700/40"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 items-center gap-0">
              {/* Image Carousel Section - Left Side */}
              <motion.div 
                className="relative h-[400px] lg:h-[500px] overflow-hidden order-2 lg:order-1 w-full lg:rounded-l-none rounded-r-3xl lg:rounded-r-none"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full lg:rounded-l-none rounded-r-3xl lg:rounded-r-none">
                  {/* Image Carousel */}
                  <motion.div
                    className="relative w-full h-full"
                    key="carousel-container"
                  >
                    {[
                      { src: '/picxx/123.png', alt: 'Professional work sample 1' },
                      { src: '/picxx/1234.png', alt: 'Professional work sample 2' }
                    ].map((image, index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: index === 0 ? 1 : 0 }}
                        animate={{ 
                          opacity: index === 0 ? 
                            [1, 1, 1, 0, 0, 0] : 
                            [0, 0, 0, 1, 1, 1],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain w-full h-full transition-transform duration-500 hover:scale-105 lg:rounded-l-none rounded-r-3xl lg:rounded-r-none"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={index === 0}
                        />
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-transparent"></div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Carousel Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                    {[0, 1].map((index) => (
                      <motion.div
                        key={index}
                        className="w-3 h-3 rounded-full bg-white/80 shadow-lg"
                        animate={{
                          scale: index === 0 ? 
                            [1.2, 1.2, 1.2, 1, 1, 1] : 
                            [1, 1, 1, 1.2, 1.2, 1.2],
                          opacity: index === 0 ? 
                            [1, 1, 1, 0.5, 0.5, 0.5] : 
                            [0.5, 0.5, 0.5, 1, 1, 1]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  

                </div>
              </motion.div>

              {/* Content Section - Now on the right */}
              <motion.div
                className="p-8 lg:p-12 xl:p-16 order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-blue-200 text-sm font-medium mb-6 border border-blue-500/30 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
                  European Excellence®
                </motion.div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
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
                  className="inline-flex items-center text-sm text-white bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-500/30 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <span className="mr-3 text-xl">🏆</span>
                  <span className="font-semibold">{getTranslation(locale, 'about.expertise.experience')}</span>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-lg"></div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Quote Section - Refined Design */}
        <AnimatedSection delay={0.6}>
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="relative bg-gradient-to-br from-indigo-900 to-violet-900 rounded-2xl p-6 md:p-8 shadow-lg border border-violet-800/40 hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-violet-900/10 rounded-2xl opacity-60"></div>
              
              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full mb-4 shadow-sm"
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
                  className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full mx-auto mb-3"
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
      </div>
    </section>
    </>
  );
}

// Enhanced CountUp component with scroll trigger
function CountUp({ end, duration = 2, delay = 0 }: { end: number; duration?: number; delay?: number }) {
   const [count, setCount] = useState(0);
   const [hasAnimated, setHasAnimated] = useState(false);
   const [isInView, setIsInView] = useState(false);
   const countRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         if (entry.isIntersecting && !hasAnimated) {
           setIsInView(true);
         }
       },
       { threshold: 0.5 }
     );

     if (countRef.current) {
       observer.observe(countRef.current);
     }

     return () => observer.disconnect();
   }, [hasAnimated]);

   useEffect(() => {
     if (!isInView || hasAnimated) return;

     const timer = setTimeout(() => {
       let startTime: number;
       let animationFrameId: number;

       const animate = (currentTime: number) => {
         if (!startTime) startTime = currentTime;
         const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
         
         // Add easing function for smoother animation
         const easeOutQuart = 1 - Math.pow(1 - progress, 4);
         const currentCount = Math.floor(easeOutQuart * end);
         
         setCount(currentCount);
         
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
   }, [isInView, end, duration, delay, hasAnimated]);

   return <span ref={countRef}>{count}</span>;
} 