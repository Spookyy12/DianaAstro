export interface Service {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  price?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ZodiacSign {
  name: string;
  dateRange: string;
  element: string;
  traits: string[];
  horoscope: string;
}