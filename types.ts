export interface SubmenuItem {
  name: string;
  url: string;
}

export interface SubmenuColumn {
  title?: string;
  items: SubmenuItem[];
}

export interface NavItem {
  name: string;
  url: string;
  icon?: React.ReactNode;
  submenu?: SubmenuColumn[];
}

export interface HeroProps {
  id: string;
  title: string;
  subtitle: string;
  ctaLinks: { text: string; url: string; type: 'primary' | 'secondary' }[];
  image: string;
  video?: string;
  dark?: boolean;
  top?: boolean;
}

export interface PromoProps {
  id: string;
  title: string;
  subtitle: string;
  subtitle2?: string;
  ctaLinks: { text: string; url: string; type: 'primary' | 'secondary' }[];
  image: string;
  dark?: boolean;
  logo?: string;
}

export interface TVShow {
  id: string;
  title: string;
  genre: string;
  description: string;
  image: string;
}