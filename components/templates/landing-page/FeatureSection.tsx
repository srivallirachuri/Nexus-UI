import React from 'react';
import { FeaturesData, FeaturesLayout, BaseSectionProps } from './types';

interface FeatureSectionProps extends BaseSectionProps {
  data: FeaturesData;
  layout?: FeaturesLayout;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  data, 
  layout = 'grid',
  className = '',
  theme = 'light'
}) => {
  const { title, subtitle, items } = data;
  
  return (
    <section className={`lp-section ${className} ${theme === 'dark' ? 'lp-theme-dark' : ''}`}>
      <div className="lp-container">
        <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="lp-h2">{title}</h2>
          {subtitle && <p className="lp-lead" style={{ margin: '0 auto' }}>{subtitle}</p>}
        </div>

        <div className={`feature-${layout}`}>
          {items.map((item) => (
            <div key={item.id} className="feature-card">
              {item.icon && <div className="feature-icon">{item.icon}</div>}
              <h3 className="lp-h3">{item.title}</h3>
              <p className="lp-text-muted" style={{ color: 'var(--lp-text-muted)' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
