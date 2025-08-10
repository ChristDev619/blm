'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getTranslation } from '@/lib/translations';

interface NavigationProps {
  locale: string;
}

const Navigation = ({ locale }: NavigationProps) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { href: `/${locale}`, label: getTranslation(locale, 'nav.home'), id: 'home' },
    { href: `/${locale}#about`, label: getTranslation(locale, 'nav.about'), id: 'about' },
    { href: `/${locale}#services`, label: getTranslation(locale, 'nav.services'), id: 'services' },
    { href: `/${locale}#portfolio`, label: getTranslation(locale, 'nav.portfolio'), id: 'portfolio' },
    { href: `/${locale}#contact`, label: getTranslation(locale, 'nav.contact'), id: 'contact' },
  ];

  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  const otherLocale = locale === 'en' ? 'ar' : 'en';
  const otherLocaleUrl = `/${otherLocale}${pathWithoutLocale}`;

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'hero' : section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.25)]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
          <div className="relative flex justify-between items-center h-16 px-4">
            <div className="flex-shrink-0">
              <Link href={`/${locale}`} className="group flex items-center">
                <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-200 transition-colors">
                  {getTranslation(locale, 'nav.logo.bestLook')}
                </span>
                <span className="text-sm text-slate-200/90 ml-2">
                  {getTranslation(locale, 'nav.logo.contracting')}
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center gap-1 rtl:space-x-reverse">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'text-white' 
                        : 'text-slate-200/90 hover:text-white'
                    }`}
                  >
                    <span className={`absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent transition-opacity ${
                      activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Link
                href={otherLocaleUrl}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br from-slate-800/70 to-slate-700/60 border border-white/10 text-slate-100 hover:from-slate-700/70 hover:to-slate-600/60 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span className="text-sm">{otherLocale === 'ar' ? '🇸🇦' : '🇺🇸'}</span>
                <span className="font-medium text-sm">{otherLocale === 'ar' ? 'العربية' : 'English'}</span>
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-200 hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4">
          <div className="mt-2 px-2 pt-2 pb-3 space-y-1 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-white bg-white/10' 
                    : 'text-slate-200 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={otherLocaleUrl}
              className="text-slate-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-2">{otherLocale === 'ar' ? '🇸🇦' : '🇺🇸'}</span>
              {otherLocale === 'ar' ? 'العربية' : 'English'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;