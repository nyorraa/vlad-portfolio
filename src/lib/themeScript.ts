import { themes } from './themes';

/**
 * Generates inline script for theme initialization.
 * This script runs synchronously before page render to prevent theme flashing.
 */
export function generateThemeScript(): string {
  const themesObject = JSON.stringify(
    Object.fromEntries(
      Object.entries(themes).map(([key, theme]) => [key, theme.colors])
    ),
    null,
    2
  );

  return `
    (function() {
      const themes = ${themesObject};

      const stored = localStorage.getItem('theme') || 'vscode';
      const theme = themes[stored] || themes.vscode;

      document.documentElement.setAttribute('data-theme', stored);

      const root = document.documentElement;
      Object.entries(theme).forEach(([key, value]) => {
        const cssVarName = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(cssVarName, value);
      });
    })();
  `.trim();
}
