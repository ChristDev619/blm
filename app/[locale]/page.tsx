import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Machines from '@/components/Machines';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen">
      <Navigation locale={locale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <Machines locale={locale} />
      <Portfolio locale={locale} />
      <WhyChooseUs locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </div>
  );
} 