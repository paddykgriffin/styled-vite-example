import { SiteConfig } from './types/site-config-types';

const siteConfig: SiteConfig = {
  siteName: 'Site Boilerplate',
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
};

export default siteConfig;
