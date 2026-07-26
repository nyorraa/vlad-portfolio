import { translations, type Language, type Translations } from './translations';

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en;
}

// НОВАЯ ФУНКЦИЯ: читать cookie на сервере
export function getLanguageFromCookie(cookieHeader?: string): Language | null {
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(';');
  const langCookie = cookies.find(c => c.trim().startsWith('language='));

  if (langCookie) {
    const lang = langCookie.split('=')[1].trim();
    if (lang === 'ru' || lang === 'en') return lang as Language;
  }

  return null;
}

export function getCurrentLanguage(cookieHeader?: string): Language {
  // 1. Browser-side
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language');
    if (stored === 'ru' || stored === 'en') return stored;

    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('ru') ? 'ru' : 'en';
  }

  // 2. Server-side: читаем cookie
  const fromCookie = getLanguageFromCookie(cookieHeader);
  if (fromCookie) return fromCookie;

  return 'en';
}

export function setLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;

  // Сохраняем в localStorage И cookie
  localStorage.setItem('language', lang);
  document.cookie = `language=${lang}; path=/; max-age=31536000; SameSite=Lax`;

  window.dispatchEvent(new CustomEvent('languagechange', { detail: lang }));
}