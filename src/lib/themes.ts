// Theme system with multiple color schemes
export type ThemeName = 'vscode' | 'lightSepia' |  'deepWine';

export interface Theme {
  name: ThemeName;
  displayName: string;
  colors: {
    // Backgrounds
    bgPrimary: string;
    bgHeader: string;
    bgActivityBar: string;
    bgSidebar: string;
    bgEditor: string;
    bgTab: string;
    bgHover: string;
    bgActive: string;

    // Accents
    accentPrimary: string;
    accentHover: string;
    accentActive: string;
    accentSuccess: string;
    accentWarning: string;
    accentError: string;
    accentDanger: string;

    // Text
    colorTextPrimary: string;
    colorTextSecondary: string;
    colorTextMuted: string;
    colorTextDisabled: string;

    // Syntax
    colorComment: string;
    colorKeyword: string;
    colorString: string;
    colorNumber: string;
    colorFunction: string;
    colorVariable: string;

    // Borders
    borderColor: string;
    borderSubtle: string;
  };
}

export const themes: Record<ThemeName, Theme> = {
  vscode: {
    name: 'vscode',
    displayName: 'VS Code Dark',
    colors: {
      bgPrimary: '#1e1e1e',
      bgHeader: '#1e1e1e',
      bgActivityBar: '#181818',
      bgSidebar: '#252526',
      bgEditor: '#1e1e1e',
      bgTab: '#2d2d2d',
      bgHover: 'rgba(255, 255, 255, 0.04)',
      bgActive: 'rgba(255, 255, 255, 0.08)',

      accentPrimary: '#007acc',
      accentHover: '#1e88e5',
      accentActive: '#005999',
      accentSuccess: '#4ec9b0',
      accentWarning: '#cca700',
      accentError: '#f48771',
      accentDanger: '#e51400',

      colorTextPrimary: '#078b92',
      colorTextSecondary: '#b6b5b5',
      colorTextMuted: '#ffffff',
      colorTextDisabled: '#4f4f4f',

      colorComment: '#bbe392',
      colorKeyword: '#569cd6',
      colorString: '#ce9178',
      colorNumber: '#b5cea8',
      colorFunction: '#dcdcaa',
      colorVariable: '#9cdcfe',

      borderColor: '#3c3c3c',
      borderSubtle: '#252526',
    },
  },
  deepWine: {
    name: 'deepWine',
    displayName: 'Nordic Scandi',
    colors: {
      bgPrimary: '#ffffff',
      bgHeader: '#544743',
      bgActivityBar: '#3d322e',
      bgSidebar: '#7d6f65',
      bgEditor: '#ffffff',
      bgTab: '#665950',
      bgHover: 'rgba(197, 137, 142, 0.08)',
      bgActive: 'rgba(197, 137, 142, 0.16)',

      accentPrimary: '#c5898e',
      accentHover: '#d4a5a9',
      accentActive: '#a66d72',
      accentSuccess: '#8a9a66',
      accentWarning: '#caa472',
      accentError: '#b35d5d',
      accentDanger: '#943d3d',

      colorTextPrimary: '#3d322e',
      colorTextSecondary: '#665950',
      colorTextMuted: '#96887f',
      colorTextDisabled: '#cbd1cc',

      colorComment: '#96887f',
      colorKeyword: '#c5898e',
      colorString: '#8a9a66',
      colorNumber: '#caa472',
      colorFunction: '#7d6f65',
      colorVariable: '#3d322e',

      borderColor: '#d0c6bd',
      borderSubtle: '#7d6f65',
    },
  },
  lightSepia: {
    name: 'lightSepia',
    displayName: 'Luxury Sepia',
    colors: {
      bgPrimary: '#faf6ee',
      bgHeader: '#f3ede0',
      bgActivityBar: '#362f2b',
      bgSidebar: '#f6f0e5',
      bgEditor: '#fdfbvar',
      bgTab: '#ebdcc5',
      bgHover: 'rgba(156, 114, 83, 0.06)',
      bgActive: 'rgba(156, 114, 83, 0.12)',

      accentPrimary: '#9c7253',
      accentHover: '#ba8b6a',
      accentActive: '#7d593f',
      accentSuccess: '#52796f',
      accentWarning: '#d4a373',
      accentError: '#bc4749',
      accentDanger: '#8b0000',

      colorTextPrimary: '#362f2b',
      colorTextSecondary: '#6e6159',
      colorTextMuted: '#a09287',
      colorTextDisabled: '#cbd1cc',

      colorComment: '#a09287',
      colorKeyword: '#bc4749',
      colorString: '#52796f',
      colorNumber: '#d4a373',
      colorFunction: '#9c7253',
      colorVariable: '#544741',

      borderColor: '#e8dec9',
      borderSubtle: '#f3ede0',
    },
  },
};





export function getCurrentTheme(): ThemeName {
  if (typeof window === 'undefined') return 'vscode';

  const stored = localStorage.getItem('theme');
  if (stored && stored in themes) return stored as ThemeName;

  return 'vscode';
}

export function setTheme(themeName: ThemeName): void {
  if (typeof window === 'undefined') return;

  const theme = themes[themeName];
  if (!theme) return;

  // Apply CSS variables
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    root.style.setProperty(cssVarName, value);
  });

  localStorage.setItem('theme', themeName);
  window.dispatchEvent(new CustomEvent('themechange', { detail: themeName }));
}

export function initTheme(): void {
  const theme = getCurrentTheme();
  setTheme(theme);
}
