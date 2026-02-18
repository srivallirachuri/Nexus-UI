import React from 'react';
import { StatsData, BaseSectionProps } from './types';

interface StatsSectionProps extends BaseSectionProps {
  data: StatsData;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ 
  data, 
  className = '',
  theme = 'light'
}) => {
  return (
    <section className={`lp-section lp-section-soft ${className} ${theme === 'dark' ? 'lp-theme-dark' : ''}`}>
      <div className="lp-container">
        <div className="stats-grid">
          {data.items.map((item) => (
            <div key={item.id} className="stat-item">
              <div className="stat-value">{item.value}{item.suffix}</div>
              <div className="stat-label lp-text-muted">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
