export interface NavItem {
  path: string;
  label: string;
  isHome?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Beranda', isHome: true },
  { path: '/materi-1', label: 'Materi 1' },
  { path: '/materi-2', label: 'Materi 2' },
  { path: '/materi-3', label: 'Materi 3' },
  { path: '/materi-4', label: 'Materi 4' },
  { path: '/materi-5', label: 'Materi 5' },
  { path: '/materi-6', label: 'Materi 6' },
  { path: '/materi-7', label: 'Materi 7' },
  { path: '/materi-8', label: 'Materi 8' },
  { path: '/materi-9', label: 'Materi 9' },
];