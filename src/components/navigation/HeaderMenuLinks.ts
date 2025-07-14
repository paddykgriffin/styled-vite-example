export interface MenuItem {
  title: string;
  path: string;
  target?: string;
}

export const HeaderMenuLinks: Array<MenuItem> = [
  {
    title: 'Equipment',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/',
  },
];
