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
      title: getTranslation(locale, 'portfolio.projects.project1.title'),
      description: getTranslation(locale, 'portfolio.projects.project1.description')
    },
    {
      src: '/images/portfolio/2.jpg',
      title: getTranslation(locale, 'portfolio.projects.project2.title'),
      description: getTranslation(locale, 'portfolio.projects.project2.description')
    },
    {
      src: '/images/portfolio/3.jpg',
      title: getTranslation(locale, 'portfolio.projects.project3.title'),
      description: getTranslation(locale, 'portfolio.projects.project3.description')
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {getTranslation(locale, 'portfolio.title')}
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
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
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="w-full h-64 relative overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {image.description}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <motion.p 
              className="text-gray-500 dark:text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {getTranslation(locale, 'portfolio.placeholder')}
            </motion.p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 