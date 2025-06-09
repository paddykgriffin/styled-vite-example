import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setThemeMode, type colorSchemes } from '@/store/features/themeSlice';

const useCurrentTheme = () => {
  const dispatch = useAppDispatch();
  const colorScheme = useAppSelector(state => state.theme.colorScheme);

  const currentTheme: 'dark' | 'light' =
    colorScheme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : colorScheme;

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    dispatch(setThemeMode(newTheme as colorSchemes));
  };
  return { currentTheme, toggleTheme };
};

export default useCurrentTheme;
