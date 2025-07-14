import { SiteConfig } from './types/site-config-types';

const siteConfig: SiteConfig = {
  siteName: 'Paddy Hiker',
  darkMode: true,
  theme: {
    color: {
      primary: {
        light: 'red',
        dark: 'black',
      },
      secondary: {
        light: 'orange',
        dark: 'yellow',
      },
    },
  },
  layout: {
    header: {
      transparent: true,
      hideOnScroll: false,
      mainNav: true,
      sidebarNav: true
    }
  }
};

export default siteConfig;
