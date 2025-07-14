export type SiteMode = {
  light: string;
  dark: string;
};

export type SiteConfig = {
  siteName: string;
  darkMode: boolean;
  theme: {
    color: {
      primary: SiteMode;
      secondary: SiteMode;
    };
  },
  layout: {
    header: {
      transparent: boolean;
      hideOnScroll: boolean;
      mainNav: boolean;
      sidebarNav: boolean;
    }
  }
};
