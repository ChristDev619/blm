import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "خدمات بيست لوك للمقاولات - دهانات وتشطيبات حديثة | السعودية",
  description: "بيست لوك للمقاولات تقدم خدمات الدهانات والتشطيبات الحديثة في المملكة العربية السعودية. تشطيبات داخلية وخارجية، دهانات عالية الجودة، تقنيات أوروبية سويدية متقدمة.",
  keywords: "بيست لوك للمقاولات, خدمات دهانات, تشطيبات حديثة, دهانات داخلية, دهانات خارجية, مقاولات السعودية, دهانات أوروبية, تشطيبات سويدية",
};

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen">
      <Navigation locale={locale} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                {locale === 'ar' ? 'خدمات بيست لوك للمقاولات' : 'Best Look Contracting Services'}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                {locale === 'ar' 
                  ? 'بيست لوك للمقاولات - شركة مقاولات متخصصة في الدهانات والتشطيبات الحديثة في المملكة العربية السعودية. نقدم خدمات عالية الجودة بأحدث التقنيات الأوروبية السويدية.'
                  : 'Best Look Contracting - Specialized contracting company in paints and modern finishes in Saudi Arabia. We provide high-quality services with the latest Swedish-European technology.'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Interior Finishes */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {locale === 'ar' ? 'التشطيبات الداخلية' : 'Interior Finishes'}
                </h3>
                <p className="text-gray-700" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {locale === 'ar' 
                    ? 'بيست لوك للمقاولات متخصصة في التشطيبات الداخلية بأحدث التقنيات. دهانات عالية الجودة، تشطيبات زخرفية، وتنفيذ احترافي.'
                    : 'Best Look Contracting specializes in interior finishes with the latest technology. High-quality paints, decorative finishes, and professional execution.'
                  }
                </p>
              </div>

              {/* Exterior Finishes */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {locale === 'ar' ? 'التشطيبات الخارجية' : 'Exterior Finishes'}
                </h3>
                <p className="text-gray-700" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {locale === 'ar' 
                    ? 'خدمات التشطيبات الخارجية من بيست لوك للمقاولات تشمل دهانات مقاومة للعوامل الجوية وتشطيبات حديثة للواجهات.'
                    : 'Exterior finishing services from Best Look Contracting include weather-resistant paints and modern facade finishes.'
                  }
                </p>
              </div>

              {/* High-End Paints */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {locale === 'ar' ? 'الدهانات عالية الجودة' : 'High-End Paints'}
                </h3>
                <p className="text-gray-700" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {locale === 'ar' 
                    ? 'بيست لوك للمقاولات تستخدم دهانات أوروبية عالية الجودة مع ضمان 10 سنوات. تقنيات متقدمة وتنفيذ احترافي.'
                    : 'Best Look Contracting uses high-quality European paints with 10-year warranty. Advanced technology and professional execution.'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                {locale === 'ar' ? 'لماذا تختار بيست لوك للمقاولات؟' : 'Why Choose Best Look Contracting?'}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {locale === 'ar' ? 'الخبرة الأوروبية السويدية' : 'Swedish-European Expertise'}
                </h3>
                <p className="text-gray-700 mb-4" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {locale === 'ar' 
                    ? 'بيست لوك للمقاولات تجلب الخبرة الأوروبية السويدية إلى المملكة العربية السعودية. فريق محترف بخبرة 19+ سنة في مجال التشطيبات والدهانات.'
                    : 'Best Look Contracting brings Swedish-European expertise to Saudi Arabia. Professional team with 19+ years of experience in finishes and paints.'
                  }
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {locale === 'ar' ? 'التقنيات المتقدمة' : 'Advanced Technology'}
                </h3>
                <p className="text-gray-700 mb-4" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {locale === 'ar' 
                    ? 'نستخدم أحدث التقنيات والمعدات المتقدمة في جميع مشاريعنا. ماكينات رش حديثة، معدات سنفرة بدون غبار، وأنظمة ضمان الجودة.'
                    : 'We use the latest technology and advanced equipment in all our projects. Modern spraying machines, dust-free sanding equipment, and quality assurance systems.'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
