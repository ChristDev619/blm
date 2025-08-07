'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface LanguageSwitcherProps {
  locale: string;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Get the path without the locale
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  
  // Determine the other locale
  const otherLocale = locale === 'en' ? 'ar' : 'en';
  
  // Construct the URL for the other locale
  const otherLocaleUrl = `/${otherLocale}${pathWithoutLocale}`;

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 z-40">
      <Link
        href={otherLocaleUrl}
        className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
      >
        <span className="mr-2 text-lg">
          {otherLocale === 'ar' ? '🇸🇦' : '🇸🇪'}
        </span>
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {otherLocale === 'ar' ? 'العربية' : 'English'}
        </span>
      </Link>
    </div>
  );
} 