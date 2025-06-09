export interface MenuItem {
  title: string;
  path: string;
  target?: string;
}

export const FooterMenuLinks: Array<MenuItem> = [
  {
    title: 'Privacy Statement',
    path: '/',
  },
  {
    title: 'Terms & Conditions',
    path: '/',
  },
  {
    title: 'Cookie Policy',
    path: '/',
  },
];
