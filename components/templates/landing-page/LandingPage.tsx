import React from 'react';
import { LandingPageProps } from './types';
import { HeroSection } from './HeroSection';
import { FeatureSection } from './FeatureSection';
import { StatsSection } from './StatsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { PricingSection } from './PricingSection';
import { CTASection } from './CTASection';
import { FooterSection } from './FooterSection';
import './landing-page.css';

export const LandingPage: React.FC<LandingPageProps> = ({
  variant = 'default',
  theme = 'light',
  heroVariant = 'centered',
  featuresLayout = 'grid',
  pricingVariant = 'simple',
  ctaVariant = 'centered',
  heroData,
  featuresData,
  statsData,
  testimonialsData,
  pricingData,
  ctaData,
  footerData,
  showFooter = true,
  className = ''
}) => {
  const containerClass = `landing-page lp-variant-${variant} lp-theme-${theme} ${className}`;

  // Default data if none provided (for demo/placeholder purposes)
  const defaultHero = heroData || {
    title: 'Build Scalable Systems, Not Just Pages',
    subtitle: 'A strictly typed, accessibility-first React component library. No Tailwind dependencies, no Bootstrap bloat—just pure CSS Modules and robust TypeScript patterns for serious engineering teams.',
    ctaPrimary: { label: 'Explore Components' },
    ctaSecondary: { label: 'Documentation' },
    badge: 'v1.0.0 is now live!'
  };

  const defaultFeatures = featuresData || {
    title: 'Everything you need to ship fast',
    subtitle: 'Enterprise-ready components built with TypeScript and CSS Modules.',
    items: [
      { id: 1, title: 'Type Safe', description: 'Written in 100% TypeScript. Say goodbye to runtime property errors during development.' },
      { id: 2, title: 'Accessible', description: 'Compliant with WAI-ARIA standards out of the box for a better, more inclusive web.' },
      { id: 3, title: 'Performance', description: 'Zero runtime CSS injection. Ultra-lean bundles for high performance applications.' }
    ]
  };

  return (
    <div className={containerClass}>
      <HeroSection data={defaultHero} variant={heroVariant} theme={theme} />
      
      <FeatureSection data={defaultFeatures} layout={featuresLayout} theme={theme} />
      
      {statsData && (
        <StatsSection data={statsData} theme={theme} />
      )}
      
      {testimonialsData && (
        <TestimonialsSection data={testimonialsData} theme={theme} />
      )}
      
      {pricingData && (
        <PricingSection data={pricingData} variant={pricingVariant} theme={theme} />
      )}
      
      {ctaData && (
        <CTASection data={ctaData} variant={ctaVariant} theme={theme} />
      )}
      
      {showFooter && footerData && (
        <FooterSection data={footerData} theme={theme} />
      )}
    </div>
  );
};
