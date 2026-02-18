import React from 'react';
import { FooterData, BaseSectionProps } from './types';

interface FooterSectionProps extends BaseSectionProps {
  data: FooterData;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ 
  data, 
  className = '',
  theme = 'light'
}) => {
  const { logo, description, sections, copyright, socialLinks } = data;

  return (
    <footer className={`lp-section lp-section-soft ${className} ${theme === 'dark' ? 'lp-theme-dark' : ''}`} style={{ paddingBottom: '3rem' }}>
      <div className="lp-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '1.5rem' }}>{logo || <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>Nexus UI</div>}</div>
            <p className="lp-text-muted" style={{ maxWidth: '300px' }}>{description || 'Premium modular components for modern react applications.'}</p>
            {socialLinks && (
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                {socialLinks.map((link, i) => (
                  <a key={i} href={link.href} className="lp-text-muted">{link.icon}</a>
                ))}
              </div>
            )}
          </div>
          
          {sections.map((section, i) => (
            <div key={i}>
              <h4 style={{ fontWeight: 700, marginBottom: '1.5rem' }}>{section.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.links.map((link, j) => (
                  <li key={j} style={{ marginBottom: '0.75rem' }}>
                    <a href={link.href} className="lp-text-muted" style={{ textDecoration: 'none' }}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div style={{ borderTop: '1px solid var(--lp-border)', paddingTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <p className="lp-text-muted" style={{ fontSize: '0.875rem' }}>{copyright || `© ${new Date().getFullYear()} Nexus UI. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
};
