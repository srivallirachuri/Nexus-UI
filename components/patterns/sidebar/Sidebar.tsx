import React, { useState, useEffect, useRef } from 'react';
import { SidebarProvider } from './SidebarContext';
import { SidebarProps } from './types';
import './sidebar.css';

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  collapsible = true,
  defaultCollapsed = false,
  collapsed: controlledCollapsed,
  onCollapseChange,
  width = '260px',
  collapsedWidth = '80px',
  theme = 'light',
  showExpandOnHover = false
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const [isHovered, setIsHovered] = useState(false);
  const isControlled = controlledCollapsed !== undefined;
  const collapsed = isControlled ? controlledCollapsed : internalCollapsed;

  const handleToggle = () => {
    const nextValue = !collapsed;
    if (!isControlled) {
      setInternalCollapsed(nextValue);
    }
    onCollapseChange?.(nextValue);
  };

  const actualWidth = collapsed 
    ? (showExpandOnHover && isHovered ? width : collapsedWidth)
    : width;

  return (
    <SidebarProvider
      variant={variant}
      size={size}
      theme={theme}
      collapsed={collapsed && !(showExpandOnHover && isHovered)}
      setCollapsed={handleToggle}
      isHovered={isHovered}
    >
      <aside
        className={`nexus-sidebar nexus-sidebar-variant-${variant} ${theme === 'dark' ? 'dark' : ''} ${
          collapsed ? 'nexus-sidebar-collapsed' : ''
        } ${className}`}
        style={{ 
          width: actualWidth,
          minWidth: actualWidth,
          maxWidth: actualWidth
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {collapsible && (
          <button 
            className="nexus-sidebar-toggle"
            onClick={handleToggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}
        <div className="nexus-sidebar-content" style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          {children}
        </div>
      </aside>
    </SidebarProvider>
  );
};
