import React from 'react';
import { CTAData, CTAVariant, BaseSectionProps } from './types';

interface CTASectionProps extends BaseSectionProps {
  data: CTAData;
  variant?: CTAVariant;
}

export const CTASection: React.FC<CTASectionProps> = ({ 
  data, 
  variant = 'centered',
  className = '',
  theme = 'light'
}) => {
  const { title, subtitle, primaryButton, secondaryButton } = data;
  
  return (
    <section className={`lp-section ${className} ${theme === 'dark' ? 'lp-theme-dark' : ''}`}>
      <div className="lp-container">
        <div className={`cta-banner ${theme === 'dark' ? 'lp-theme-dark' : ''}`}>
          <h2 className="lp-h2" style={{ color: 'inherit' }}>{title}</h2>
          {subtitle && <p className="lp-lead" style={{ marginLeft: 'auto', marginRight: 'auto', color: 'rgba(255,255,255,0.9)' }}>{subtitle}</p>}
          
          <div className="flex gap-4 mt-8" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {primaryButton && (
              <button 
                className="lp-btn"
                style={{ background: 'white', color: 'var(--lp-primary)' }}
                onClick={primaryButton.onClick}
              >
                {primaryButton.label}
              </button>
            )}
            {secondaryButton && (
              <button 
                className="lp-btn"
                style={{ background: 'rgba(0,0,0,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.label}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
