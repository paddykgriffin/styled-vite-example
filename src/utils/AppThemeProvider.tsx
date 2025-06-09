import siteConfig from '@/site-config';
import { colorSchemes } from '@/store/features/themeSlice';
import { useAppSelector } from '@/store/hooks';
import { store } from '@/store/store';
import Color from 'color';
import type React from 'react';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function AppThemeProvider({ children }: Props) {
  const { colorScheme } = useAppSelector(state => state.theme);
  const { theme } = siteConfig;

  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode && siteConfig.darkMode ? 'dark' : 'light');

  useEffect(() => {
    let newMode: 'light' | 'dark';
    if (colorScheme === colorSchemes.system) {
      newMode = prefersDarkMode ? 'dark' : 'light';
    } else {
      newMode = colorScheme;
    }

    if (mode !== newMode && siteConfig.darkMode) {
      setMode(newMode as 'light' | 'dark');
    }
  }, [colorScheme, prefersDarkMode, mode]);

  const changeSystemThemeListener = useCallback((e: MediaQueryListEvent) => {
    if (store.getState().theme.colorScheme === colorSchemes.system && siteConfig.darkMode) {
      setMode(e.matches ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    const darkThemeSystem = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeSystem.addEventListener('change', changeSystemThemeListener);
    return () => darkThemeSystem.removeEventListener('change', changeSystemThemeListener);
  }, [changeSystemThemeListener]);

  useLayoutEffect(() => {
    const themeColor = theme.color.primary[mode];

    const hslColor = Color(themeColor).hsl().string();

    const hslArray = hslColor.replace(/hsl|\(|\)|,/g, '').split(' ');

    hslArray[0] = `${parseFloat(hslArray[0]).toFixed(1)}`;

    document.documentElement.style.setProperty('--theme-primary', hslArray.join(' '));
  }, [mode, theme]);

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return <>{children}</>;
}
