import React from 'react';
import { HeroData, HeroVariant, BaseSectionProps } from './types';

interface HeroSectionProps extends BaseSectionProps {
  data: HeroData;
  variant?: HeroVariant;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  data, 
  variant = 'centered',
  className = '',
  theme = 'light'
}) => {
  const { title, subtitle, ctaPrimary, ctaSecondary, imageSrc, badge } = data;
  
  const containerClass = `lp-section ${variant === 'centered' ? 'hero-centered' : 'hero-split'} ${className} ${theme === 'dark' ? 'lp-theme-dark' : ''}`;

  return (
    <section className={containerClass}>
      <div className="lp-container">
        <div className="hero-content">
          {badge && <span className="lp-badge">{badge}</span>}
          <h1 className="lp-h1">{title}</h1>
          {subtitle && <p className="lp-lead">{subtitle}</p>}
          
          <div className="flex gap-4 mt-8" style={{ display: 'flex', gap: '1rem', justifyContent: variant === 'centered' ? 'center' : 'flex-start' }}>
            {ctaPrimary && (
              <a 
                href={ctaPrimary.href || '#'} 
                className="lp-btn lp-btn-primary"
                onClick={ctaPrimary.onClick}
              >
                {ctaPrimary.label}
              </a>
            )}
            {ctaSecondary && (
              <a 
                href={ctaSecondary.href || '#'} 
                className="lp-btn lp-btn-secondary"
                onClick={ctaSecondary.onClick}
              >
                {ctaSecondary.label}
              </a>
            )}
          </div>
        </div>
        
        {(variant === 'split' || variant === 'image-right') && imageSrc && (
          <div className="hero-media mt-12 lg:mt-0">
            <img src={imageSrc} alt="Hero" className="hero-image" />
          </div>
        )}
      </div>
    </section>
  );
};
