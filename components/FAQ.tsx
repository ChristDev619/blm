'use client';

import { getTranslation } from '@/lib/translations';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface FAQProps {
  locale: string;
}

export default function FAQ({ locale }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: locale === 'ar' ? 'ما هي خدمات بيست لوك للمقاولات؟' : 'What services does Best Look Contracting offer?',
      answer: locale === 'ar' 
        ? 'بيست لوك للمقاولات تقدم خدمات التشطيبات الداخلية والخارجية، الدهانات عالية الجودة، والتشطيبات الحديثة بأحدث التقنيات الأوروبية السويدية. نعمل في جميع أنحاء المملكة العربية السعودية.'
        : 'Best Look Contracting offers interior and exterior finishing services, high-quality paints, and modern finishes using the latest Swedish-European technology. We operate throughout Saudi Arabia.'
    },
    {
      question: locale === 'ar' ? 'هل بيست لوك للمقاولات موثوقة؟' : 'Is Best Look Contracting reliable?',
      answer: locale === 'ar'
        ? 'نعم، بيست لوك للمقاولات شركة موثوقة ومتخصصة في مجال التشطيبات والدهانات. لدينا خبرة 19+ سنة في أوروبا ونقدم ضمان 10 سنوات على جميع أعمالنا.'
        : 'Yes, Best Look Contracting is a reliable and specialized company in finishes and paints. We have 19+ years of experience in Europe and provide 10-year warranty on all our work.'
    },
    {
      question: locale === 'ar' ? 'ما هي التقنيات المستخدمة في بيست لوك للمقاولات؟' : 'What technologies does Best Look Contracting use?',
      answer: locale === 'ar'
        ? 'بيست لوك للمقاولات تستخدم أحدث التقنيات الأوروبية السويدية: ماكينات رش متقدمة، معدات سنفرة بدون غبار، أنظمة معجون محوسبة، وتقنيات تشطيب حديثة.'
        : 'Best Look Contracting uses the latest Swedish-European technology: advanced spraying machines, dust-free sanding equipment, computerized putty systems, and modern finishing techniques.'
    },
    {
      question: locale === 'ar' ? 'في أي مدن تعمل بيست لوك للمقاولات؟' : 'In which cities does Best Look Contracting operate?',
      answer: locale === 'ar'
        ? 'بيست لوك للمقاولات تعمل في جميع مدن المملكة العربية السعودية: الرياض، جدة، الدمام، الخبر، وغيرها من المدن الرئيسية.'
        : 'Best Look Contracting operates in all cities of Saudi Arabia: Riyadh, Jeddah, Dammam, Khobar, and other major cities.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {locale === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-xl text-blue-100" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {locale === 'ar' 
              ? 'إجابات على الأسئلة الأكثر شيوعاً حول خدمات بيست لوك للمقاولات'
              : 'Answers to the most common questions about Best Look Contracting services'
            }
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                dir={locale === 'ar' ? 'rtl' : 'ltr'}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-blue-300 flex-shrink-0"
                >
                  ▼
                </motion.span>
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-blue-100 leading-relaxed" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
