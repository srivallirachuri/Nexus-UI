import React, { useState } from 'react';
import { PricingData, PricingVariant, BaseSectionProps } from './types';

interface PricingSectionProps extends BaseSectionProps {
  data: PricingData;
  variant?: PricingVariant;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ 
  data, 
  variant = 'simple',
  className = '',
  theme = 'light'
}) => {
  const { title, subtitle, plans } = data;
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className={`lp-section ${className} ${theme === 'dark' ? 'lp-theme-dark' : ''}`}>
      <div className="lp-container">
        <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="lp-h2">{title}</h2>
          {subtitle && <p className="lp-lead" style={{ margin: '0 auto' }}>{subtitle}</p>}
          
          {variant === 'toggle-monthly-yearly' && (
            <div className="flex items-center justify-center gap-4 mt-8" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
              <span className={!isYearly ? 'lp-text-main' : 'lp-text-muted'} style={{ fontWeight: !isYearly ? 600 : 400 }}>Monthly</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                style={{ 
                  width: '3.5rem', 
                  height: '2rem', 
                  borderRadius: '1rem', 
                  background: 'var(--lp-primary)', 
                  position: 'relative',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <div style={{ 
                  width: '1.5rem', 
                  height: '1.5rem', 
                  borderRadius: '50%', 
                  background: 'white', 
                  position: 'absolute',
                  top: '0.25rem',
                  left: isYearly ? '1.75rem' : '0.25rem',
                  transition: 'left 0.2s'
                }} />
              </button>
              <span className={isYearly ? 'lp-text-main' : 'lp-text-muted'} style={{ fontWeight: isYearly ? 600 : 400 }}>Yearly <span style={{ color: 'var(--lp-primary)', fontSize: '0.75rem' }}>-20%</span></span>
            </div>
          )}
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.isPopular ? 'pricing-card-popular' : ''}`}>
              {plan.isPopular && <div className="lp-badge" style={{ position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)', marginBottom: 0 }}>Most Popular</div>}
              <h3 className="lp-h3" style={{ marginBottom: '0.5rem' }}>{plan.name}</h3>
              {plan.description && <p className="lp-text-muted">{plan.description}</p>}
              <div className="pricing-price">
                ${isYearly ? (parseFloat(plan.price) * 0.8 * 12).toFixed(0) : plan.price}
                <span className="lp-text-muted" style={{ fontSize: '1rem', fontWeight: 400 }}>/{isYearly ? 'yr' : plan.period || 'mo'}</span>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`lp-btn ${plan.isPopular ? 'lp-btn-primary' : 'lp-btn-secondary'}`}
                style={{ width: '100%' }}
              >
                {plan.ctaLabel || 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
