import React from 'react';
import { TestimonialsData, BaseSectionProps } from './types';

interface TestimonialsSectionProps extends BaseSectionProps {
  data: TestimonialsData;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  data, 
  className = '',
  theme = 'light'
}) => {
  return (
    <section className={`lp-section ${className} ${theme === 'dark' ? 'lp-theme-dark' : ''}`}>
      <div className="lp-container">
        {data.title && (
          <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="lp-h2">{data.title}</h2>
          </div>
        )}
        
        <div className="testimonials-grid">
          {data.items.map((item) => (
            <div key={item.id} className="testimonial-card">
              <p className="lp-lead" style={{ fontSize: '1.125rem', fontStyle: 'italic' }}>"{item.quote}"</p>
              <div className="testimonial-author">
                {item.avatar && (
                  <img src={item.avatar} alt={item.author} className="testimonial-avatar" />
                )}
                <div>
                  <div style={{ fontWeight: 700 }}>{item.author}</div>
                  <div className="lp-text-muted" style={{ fontSize: '0.875rem' }}>
                    {item.role}{item.company ? ` at ${item.company}` : ''}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
