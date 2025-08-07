import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ClientOnly from '@/components/ClientOnly';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen">
      <Navigation locale={locale} />
      <ClientOnly>
        <div className="fixed top-20 right-4 z-40">
          <a
            href={locale === 'en' ? '/ar' : '/en'}
            className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <span className="mr-2 text-lg">
              {locale === 'en' ? '🇸🇦' : '🇸🇪'}
            </span>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {locale === 'en' ? 'العربية' : 'English'}
            </span>
          </a>
        </div>
      </ClientOnly>
      <Hero locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <Portfolio locale={locale} />
      <WhyChooseUs locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </div>
  );
} 