import enMessages from '../messages/en.json';
import arMessages from '../messages/ar.json';

const messages = {
  en: enMessages,
  ar: arMessages,
};

export function getTranslation(locale: string, key: string): string {
  const localeMessages = messages[locale as keyof typeof messages];
  if (!localeMessages) return key;
  
  const keys = key.split('.');
  let value: any = localeMessages;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

export function getTranslationArray(locale: string, key: string): string[] {
  const localeMessages = messages[locale as keyof typeof messages];
  if (!localeMessages) return [];
  
  const keys = key.split('.');
  let value: any = localeMessages;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return [];
    }
  }
  
  return Array.isArray(value) ? value : [];
} 