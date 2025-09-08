import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Analytics from "../analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  if (locale === 'ar') {
    return {
      title: "بيست لوك للمقاولات - دهانات عالية الجودة وتشطيبات حديثة | السعودية",
      description: "بيست لوك للمقاولات - شركة مقاولات متخصصة في الدهانات الراقية والتشطيبات الحديثة في المملكة العربية السعودية. خبرة أوروبية سويدية مع ضمان 10 سنوات. خدمات تشطيبات داخلية وخارجية بأحدث التقنيات.",
      keywords: "بيست لوك للمقاولات, مقاولات, دهانات, تشطيبات, السعودية, جدة, الرياض, الدمام, دهانات عالية الجودة, تشطيبات حديثة, مقاول دهانات, شركة مقاولات, دهانات أوروبية, تشطيبات سويدية",
      openGraph: {
        title: "بيست لوك للمقاولات - دهانات عالية الجودة وتشطيبات حديثة",
        description: "شركة مقاولات متخصصة في الدهانات الراقية والتشطيبات الحديثة في المملكة العربية السعودية",
        locale: 'ar_SA',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: "بيست لوك للمقاولات - دهانات عالية الجودة وتشطيبات حديثة",
        description: "شركة مقاولات متخصصة في الدهانات الراقية والتشطيبات الحديثة في المملكة العربية السعودية",
      },
      alternates: {
        canonical: '/ar',
        languages: {
          'ar': '/ar',
          'en': '/en',
        },
      },
    };
  }
  
  return {
    title: "Best Look Contracting - High-End Paints & Modern Finishes | Saudi Arabia",
    description: "Best Look Contracting - Specialized contracting company in high-end paints and modern finishes in Saudi Arabia. Swedish-European expertise with 10-year warranty. Interior and exterior finishing services with latest technology.",
    keywords: "Best Look Contracting, contracting, painting, finishing, Saudi Arabia, Jeddah, Riyadh, Dammam, high-end paints, modern finishes, painting contractor, contracting company, European paints, Swedish finishes",
    openGraph: {
      title: "Best Look Contracting - High-End Paints & Modern Finishes",
      description: "Specialized contracting company in high-end paints and modern finishes in Saudi Arabia",
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Best Look Contracting - High-End Paints & Modern Finishes",
      description: "Specialized contracting company in high-end paints and modern finishes in Saudi Arabia",
    },
    alternates: {
      canonical: '/en',
      languages: {
        'ar': '/ar',
        'en': '/en',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": locale === 'ar' ? "بيست لوك للمقاولات" : "Best Look Contracting",
    "alternateName": locale === 'ar' ? "Best Look Contracting" : "بيست لوك للمقاولات",
    "description": locale === 'ar' 
      ? "شركة مقاولات متخصصة في الدهانات الراقية والتشطيبات الحديثة في المملكة العربية السعودية"
      : "Specialized contracting company in high-end paints and modern finishes in Saudi Arabia",
    "url": "https://blm.sa",
    "telephone": "+966598339151",
    "email": "Info@bestlook.sa",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": locale === 'ar' ? "شارع الأمير محمد بن سلمان" : "Prince Mohammed bin Salman Street",
      "addressLocality": locale === 'ar' ? "الرياض" : "Riyadh",
      "addressRegion": locale === 'ar' ? "حي الرمال" : "Al-Rimal District",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",
      "longitude": "46.6753"
    },
    "openingHours": "Mo-Su 08:00-18:00",
    "priceRange": "$$",
    "currenciesAccepted": "SAR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "24.7136",
        "longitude": "46.6753"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": locale === 'ar' ? "خدمات التشطيبات والدهانات" : "Painting and Finishing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'ar' ? "تشطيبات داخلية" : "Interior Finishes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'ar' ? "تشطيبات خارجية" : "Exterior Finishes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'ar' ? "دهانات عالية الجودة" : "High-End Paints"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "foundingDate": "2005",
    "numberOfEmployees": "25-50",
    "knowsAbout": [
      locale === 'ar' ? "الدهانات الأوروبية" : "European Paints",
      locale === 'ar' ? "التشطيبات الحديثة" : "Modern Finishes",
      locale === 'ar' ? "تقنيات الرش المتقدمة" : "Advanced Spraying Techniques",
      locale === 'ar' ? "المواد الصديقة للبيئة" : "Eco-Friendly Materials"
    ],
    "brand": {
      "@type": "Brand",
      "name": locale === 'ar' ? "بيست لوك" : "Best Look"
    }
  };

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
} 