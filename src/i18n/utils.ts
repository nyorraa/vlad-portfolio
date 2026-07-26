import { translations, type Language, type Translations } from './translations';

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en;
}

export function getCurrentLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  const stored = localStorage.getItem('language');
  if (stored === 'ru' || stored === 'en') return stored;

  // Auto-detect browser language
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('ru') ? 'ru' : 'en';
}

export function setLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', lang);
  window.dispatchEvent(new CustomEvent('languagechange', { detail: lang }));
}
