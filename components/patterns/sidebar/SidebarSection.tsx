import React, { useState } from 'react';
import { useSidebar } from './SidebarContext';
import { SidebarSectionProps } from './types';

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  children,
  collapsible = false,
  defaultExpanded = true,
  className = ''
}) => {
  const { collapsed } = useSidebar();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpand = () => {
    if (collapsible) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={`nexus-sidebar-section ${className}`}>
      {title && (
        <div 
          className="nexus-sidebar-section-header"
          onClick={toggleExpand}
          style={{ cursor: collapsible ? 'pointer' : 'default' }}
        >
          {!collapsed && <span>{title}</span>}
          {collapsed && (
            <div style={{ height: '1px', background: 'var(--sidebar-border-light)', width: '20px', margin: '10px 0' }} />
          )}
          {!collapsed && collapsible && (
            <span className="nexus-sidebar-section-header-icon" style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          )}
        </div>
      )}
      <div 
        className="nexus-sidebar-section-content"
        style={{ 
          maxHeight: (collapsible && !isExpanded) ? '0' : 'none',
          opacity: (collapsible && !isExpanded) ? '0' : '1',
          paddingTop: (collapsible && !isExpanded) ? '0' : '0.25rem'
        }}
      >
        {children}
      </div>
    </div>
  );
};
