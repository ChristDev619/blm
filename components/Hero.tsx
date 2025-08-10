'use client';

import { getTranslation } from '@/lib/translations';
import { motion } from 'framer-motion';

interface HeroProps {
  locale: string;
}

export default function Hero({ locale }: HeroProps) {
  // Colorful gradients for each word in the heading (cycled)
  const wordGradients: string[] = [
    'from-rose-300 to-rose-500',
    'from-amber-300 to-orange-500',
    'from-emerald-300 to-teal-500',
    'from-sky-300 to-blue-500',
    'from-indigo-300 to-violet-500',
    'from-fuchsia-300 to-pink-500'
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-center bg-cover group"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/40 to-slate-950/70 transition-all duration-500 group-hover:from-slate-950/40 group-hover:via-slate-900/20 group-hover:to-slate-950/40" />

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
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.3 }}
               dir={locale === 'ar' ? 'rtl' : 'ltr'}
             >
                                                               {getTranslation(locale, 'hero.title').split(' ').map((word, index) => (
                   <motion.span
                     key={index}
                      className={`inline-block ${locale === 'ar' ? 'ml-4' : 'mr-4'} ${(locale === 'en' && (word.toLowerCase().includes('best') || word.toLowerCase().includes('look') || word.toLowerCase().includes('contracting'))) || (locale === 'ar' && (word.includes('بيست') || word.includes('لوك') || word.includes('للمقاولات'))) ? 'text-white' : `bg-clip-text text-transparent bg-gradient-to-r ${wordGradients[index % wordGradients.length]}`} hover:brightness-110`}
                     initial={{ opacity: 0, y: 100, rotateX: -90 }}
                     animate={{ opacity: 1, y: 0, rotateX: 0 }}
                     transition={{ 
                       duration: 0.8, 
                       delay: 0.5 + index * 0.1,
                       ease: "easeOut"
                     }}
                     whileHover={{ 
                        scale: 1.08,
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
             onMouseEnter={() => {
               const section = document.getElementById('hero');
               if (section) {
                 section.classList.add('group-hover');
               }
             }}
             onMouseLeave={() => {
               const section = document.getElementById('hero');
               if (section) {
                 section.classList.remove('group-hover');
               }
             }}
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