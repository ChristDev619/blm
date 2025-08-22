'use client';

import { getTranslation } from '@/lib/translations';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PortfolioProps {
  locale: string;
}

export default function Portfolio({ locale }: PortfolioProps) {
  // Portfolio images - using actual images
  const portfolioImages = [
    {
      src: '/images/portfolio/1.jpg',
      title: getTranslation(locale, 'portfolio.projects.project1.title')
    },
    {
      src: '/images/portfolio/2.jpg',
      title: getTranslation(locale, 'portfolio.projects.project2.title')
    },
    {
      src: '/images/portfolio/3.jpg',
      title: getTranslation(locale, 'portfolio.projects.project3.title')
    }
  ];

  // Specific icons for each project type
  const projectIcons = ['🏰', '🏢', '🏘️']; // Villa, Office Complex, Residential Complex
  const paintingTools = ['🖌️', '🎨']; // Only spray gun and paint

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Left Side - Simple Painting Tools */}
      <div className="absolute left-4 top-1/4 h-1/2 w-16 pointer-events-none">
        <motion.div
          className="absolute text-3xl opacity-30"
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: [100, 0, 100],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🖌️
        </motion.div>
        
        <motion.div
          className="absolute text-3xl opacity-30 top-1/2"
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: [-100, 0, -100],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 4,
            ease: "easeInOut"
          }}
        >
          🎨
        </motion.div>
      </div>

      {/* Right Side - Simple Business Icons */}
      <div className="absolute right-4 top-1/4 h-1/2 w-16 pointer-events-none">
        <motion.div
          className="absolute text-2xl opacity-30"
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🏰
        </motion.div>
        
        <motion.div
          className="absolute text-2xl opacity-30 top-1/3"
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut"
          }}
        >
          🏢
        </motion.div>
        
        <motion.div
          className="absolute text-2xl opacity-30 top-2/3"
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        >
          🏘️
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tr from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {getTranslation(locale, 'portfolio.title')}
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {getTranslation(locale, 'portfolio.subtitle')}
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Swiper with animated elements */}
            <div className="relative">
              
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="portfolio-swiper"
              >
                {portfolioImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <motion.div 
                      className="group relative bg-gray-800/40 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-700/40"
                      whileHover={{ 
                        y: -10,
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Simple hover brush effect */}
                      <motion.div
                        className="absolute -top-2 -right-2 text-xl opacity-0 group-hover:opacity-70 pointer-events-none"
                        transition={{ duration: 0.3 }}
                      >
                        🖌️
                      </motion.div>
                      
                      <div className="w-full h-64 relative overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Painting overlay effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <div className="p-4 bg-gray-800/40 relative">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                          {image.title}
                        </h3>
                        
                        {/* Project-specific icon indicator */}
                        <div className="absolute bottom-2 right-2 text-sm opacity-50">
                          {projectIcons[index % projectIcons.length]}
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </AnimatedSection>


      </div>
    </section>
  );
} 