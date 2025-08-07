'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getTranslation } from '@/lib/translations';

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: `/${locale}`, label: getTranslation(locale, 'nav.home') },
    { href: `/${locale}#about`, label: getTranslation(locale, 'nav.about') },
    { href: `/${locale}#services`, label: getTranslation(locale, 'nav.services') },
    { href: `/${locale}#portfolio`, label: getTranslation(locale, 'nav.portfolio') },
    { href: `/${locale}#contact`, label: getTranslation(locale, 'nav.contact') },
  ];

  // Get the path without the locale
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  
  // Determine the other locale
  const otherLocale = locale === 'en' ? 'ar' : 'en';
  
  // Construct the URL for the other locale
  const otherLocaleUrl = `/${otherLocale}${pathWithoutLocale}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center">
              <span className="text-2xl font-bold text-blue-400">{getTranslation(locale, 'nav.logo.bestLook')}</span>
              <span className="text-sm text-slate-300 ml-2">{getTranslation(locale, 'nav.logo.contracting')}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 rtl:space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Language Switcher */}
          <div className="hidden md:block">
            <Link
              href={otherLocaleUrl}
              className="inline-flex items-center px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg shadow-sm hover:shadow-md hover:bg-slate-700 transition-all duration-200 transform hover:scale-105"
            >
              <span className="mr-2 text-sm">
                {otherLocale === 'ar' ? '🇸🇦' : '🇺🇸'}
              </span>
              <span className="font-medium text-slate-200 text-sm">
                {otherLocale === 'ar' ? 'العربية' : 'English'}
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-blue-400 focus:outline-none focus:text-blue-400"
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 border-t border-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile Language Switcher */}
            <Link
              href={otherLocaleUrl}
              className="text-slate-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-2">
                {otherLocale === 'ar' ? '🇸🇦' : '🇺🇸'}
              </span>
              {otherLocale === 'ar' ? 'العربية' : 'English'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 