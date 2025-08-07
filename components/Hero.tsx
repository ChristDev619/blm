'use client';

import { getTranslation } from '@/lib/translations';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface HeroProps {
  locale: string;
}

export default function Hero({ locale }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
             {/* Animated Background Elements - Hexagon Pattern */}
       <div className="absolute inset-0 overflow-hidden">
         {/* Hexagon Grid Pattern */}
         <div className="absolute inset-0 opacity-10">
           <div className="absolute inset-0" style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '60px 60px'
           }}></div>
         </div>

         {/* Floating Hexagons */}
         <div className="absolute inset-0">
           {[...Array(6)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-20 h-20"
               style={{
                 left: `${15 + i * 15}%`,
                 top: `${20 + i * 12}%`,
               }}
               animate={{
                 rotate: [0, 360],
                 scale: [1, 1.2, 1],
                 opacity: [0.3, 0.6, 0.3],
               }}
               transition={{
                 duration: 15 + i * 2,
                 repeat: Infinity,
                 ease: "linear",
                 delay: i * 0.5,
               }}
             >
               <svg viewBox="0 0 100 100" className="w-full h-full">
                 <polygon
                   points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
                   fill="none"
                   stroke="rgba(59, 130, 246, 0.3)"
                   strokeWidth="2"
                 />
               </svg>
             </motion.div>
           ))}
         </div>

         {/* Animated Data Stream */}
         <div className="absolute inset-0">
           {[...Array(8)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-1 h-16 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"
               style={{
                 left: `${10 + i * 12}%`,
                 top: '-16px',
               }}
               animate={{
                 y: ['0vh', '100vh'],
                 opacity: [0, 1, 0],
               }}
               transition={{
                 duration: 8 + i * 0.5,
                 repeat: Infinity,
                 ease: "linear",
                 delay: i * 0.3,
               }}
             />
           ))}
         </div>

         {/* Pulsing Circles */}
         <div className="absolute inset-0">
           {[...Array(5)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-8 h-8 border-2 border-indigo-400/30 rounded-full"
               style={{
                 left: `${25 + i * 20}%`,
                 top: `${35 + i * 10}%`,
               }}
               animate={{
                 scale: [1, 2, 1],
                 opacity: [0.5, 0, 0.5],
               }}
               transition={{
                 duration: 4,
                 repeat: Infinity,
                 ease: "easeInOut",
                 delay: i * 0.8,
               }}
             />
           ))}
         </div>

         {/* Floating Particles */}
         <div className="absolute inset-0">
           {[...Array(15)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-1 h-1 bg-white/40 rounded-full"
               style={{
                 left: `${5 + i * 6}%`,
                 top: `${10 + i * 5}%`,
               }}
               animate={{
                 y: [0, -30, 0],
                 x: [0, 10, 0],
                 opacity: [0, 1, 0],
               }}
               transition={{
                 duration: 5 + i * 0.3,
                 repeat: Infinity,
                 ease: "easeInOut",
                 delay: i * 0.2,
               }}
             />
           ))}
         </div>

         {/* Animated Lines */}
         <div className="absolute inset-0">
           {[...Array(4)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-32 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
               style={{
                 left: `${20 + i * 25}%`,
                 top: `${15 + i * 20}%`,
                 transform: `rotate(${30 + i * 15}deg)`,
               }}
               animate={{
                 scaleX: [0, 1, 0],
                 opacity: [0, 0.8, 0],
               }}
               transition={{
                 duration: 6,
                 repeat: Infinity,
                 ease: "easeInOut",
                 delay: i * 0.5,
               }}
             />
           ))}
         </div>
       </div>

             {/* Main Content */}
       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <motion.div
           className="space-y-8"
         >
                     {/* Premium Badge with 3D Effect */}
           <motion.div
             initial={{ opacity: 0, y: 50, rotateX: -90 }}
             animate={{ opacity: 1, y: 0, rotateX: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 backdrop-blur-sm border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium shadow-2xl"
             dir={locale === 'ar' ? 'rtl' : 'ltr'}
           >
             <motion.span 
               className={`${locale === 'ar' ? 'ml-3' : 'mr-3'} text-xl`}
               animate={{ rotate: [0, 360] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             >
               🏆
             </motion.span>
             {getTranslation(locale, 'hero.badge')}
             <motion.div
               className={`${locale === 'ar' ? 'mr-3' : 'ml-3'} w-2 h-2 bg-amber-400 rounded-full`}
               animate={{ scale: [1, 1.5, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
             />
           </motion.div>

                     {/* Main Title with Split Animation */}
           <div className="space-y-4">
             <motion.h1 
               className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-indigo-200 leading-none"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.3 }}
               dir={locale === 'ar' ? 'rtl' : 'ltr'}
             >
               {getTranslation(locale, 'hero.title').split(' ').map((word, index) => (
                 <motion.span
                   key={index}
                   className={`inline-block ${locale === 'ar' ? 'ml-4' : 'mr-4'}`}
                   initial={{ opacity: 0, y: 100, rotateX: -90 }}
                   animate={{ opacity: 1, y: 0, rotateX: 0 }}
                   transition={{ 
                     duration: 0.8, 
                     delay: 0.5 + index * 0.1,
                     ease: "easeOut"
                   }}
                   whileHover={{ 
                     scale: 1.05,
                     textShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
                   }}
                 >
                   {word}
                 </motion.span>
               ))}
             </motion.h1>
           </div>

                     {/* Subtitle with Typewriter Effect */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1.2 }}
             className="relative"
           >
             <motion.p 
               className="text-2xl md:text-3xl text-blue-100 font-light max-w-4xl mx-auto leading-relaxed"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.5 }}
               dir={locale === 'ar' ? 'rtl' : 'ltr'}
             >
               {getTranslation(locale, 'hero.subtitle')}
             </motion.p>
             <motion.div
               className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 1, delay: 2 }}
             />
           </motion.div>

           {/* Description with Fade In */}
           <motion.p 
             className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1.8 }}
             dir={locale === 'ar' ? 'rtl' : 'ltr'}
           >
             {getTranslation(locale, 'hero.description')}
           </motion.p>

                     {/* Enhanced CTA Buttons */}
           <motion.div 
             className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 2.2 }}
           >
             <motion.a
               href="#contact"
               className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <motion.div
                 className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               />
               <span className="relative mr-3 text-2xl">📞</span>
               <span className="relative">{getTranslation(locale, 'hero.cta.book')}</span>
               <motion.div
                 className="absolute inset-0 bg-white/20"
                 initial={{ x: "-100%" }}
                 whileHover={{ x: "100%" }}
                 transition={{ duration: 0.6 }}
               />
             </motion.a>

             <motion.a
               href="https://wa.me/00966598331519"
               target="_blank"
               rel="noopener noreferrer"
               className="group relative inline-flex items-center px-10 py-5 border-2 border-blue-400/50 text-blue-200 font-bold rounded-2xl backdrop-blur-sm hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <span className="mr-3 text-2xl">💬</span>
               {getTranslation(locale, 'hero.cta.contact')}
               <motion.div
                 className="absolute inset-0 border-2 border-blue-400 rounded-2xl"
                 initial={{ scale: 1 }}
                 whileHover={{ scale: 1.1, opacity: 0 }}
                 transition={{ duration: 0.3 }}
               />
             </motion.a>
           </motion.div>

           {/* Trust Indicators - Moved to better position */}
           <motion.div 
             className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 2.6 }}
           >
             {[
               { icon: "✅", text: getTranslation(locale, 'hero.trust.warranty'), color: "text-green-400" },
               { icon: "🌿", text: getTranslation(locale, 'hero.trust.eco'), color: "text-emerald-400" },
               { icon: "⚡", text: getTranslation(locale, 'hero.trust.technology'), color: "text-amber-400" }
             ].map((item, index) => (
               <motion.div
                 key={index}
                 className={`flex items-center ${item.color} font-medium`}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 2.8 + index * 0.1 }}
               >
                 <span className="mr-2 text-lg">{item.icon}</span>
                 {item.text}
               </motion.div>
             ))}
           </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.2 }}
      >
        <motion.div
          className="flex flex-col items-center text-blue-200"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <motion.svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 3.5 }}
      >
        <motion.a
          href="https://wa.me/00966598331519"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-2xl hover:bg-green-400 transition-colors duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          💬
        </motion.a>
      </motion.div>
    </section>
  );
} 