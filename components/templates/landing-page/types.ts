import { ReactNode } from 'react';

export type LandingPageVariant = 'default' | 'minimal' | 'startup' | 'saas' | 'gradient' | 'dark';
export type HeroVariant = 'centered' | 'split' | 'image-right' | 'full-background';
export type FeaturesLayout = 'grid' | 'cards' | 'alternating' | 'minimal';
export type PricingVariant = 'simple' | 'highlighted' | 'toggle-monthly-yearly';
export type CTAVariant = 'centered' | 'banner' | 'split';
export type ThemeMode = 'light' | 'dark';

export interface BaseSectionProps {
  className?: string;
  theme?: ThemeMode;
}

export interface HeroData {
  title: ReactNode;
  subtitle?: string;
  ctaPrimary?: { label: string; onClick?: () => void; href?: string };
  ctaSecondary?: { label: string; onClick?: () => void; href?: string };
  imageSrc?: string;
  badge?: string;
}

export interface FeatureItem {
  id: string | number;
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
}

export interface FeaturesData {
  title: string;
  subtitle?: string;
  items: FeatureItem[];
}

export interface StatItem {
  id: string | number;
  label: string;
  value: string;
  suffix?: string;
}

export interface StatsData {
  items: StatItem[];
}

export interface TestimonialItem {
  id: string | number;
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  company?: string;
}

export interface TestimonialsData {
  title?: string;
  items: TestimonialItem[];
}

export interface PricingPlan {
  id: string | number;
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  ctaLabel?: string;
  isPopular?: boolean;
}

export interface PricingData {
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
}

export interface CTAData {
  title: string;
  subtitle?: string;
  primaryButton?: { label: string; onClick?: () => void; href?: string };
  secondaryButton?: { label: string; onClick?: () => void; href?: string };
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  logo?: ReactNode;
  description?: string;
  sections: FooterLinkGroup[];
  copyright?: string;
  socialLinks?: { icon: ReactNode; href: string }[];
}

export interface LandingPageProps {
  variant?: LandingPageVariant;
  theme?: ThemeMode;
  heroVariant?: HeroVariant;
  featuresLayout?: FeaturesLayout;
  pricingVariant?: PricingVariant;
  ctaVariant?: CTAVariant;
  heroData?: HeroData;
  featuresData?: FeaturesData;
  statsData?: StatsData;
  testimonialsData?: TestimonialsData;
  pricingData?: PricingData;
  ctaData?: CTAData;
  footerData?: FooterData;
  showFooter?: boolean;
  className?: string;
}
