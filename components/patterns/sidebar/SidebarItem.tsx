import React from 'react';
import { useSidebar } from './SidebarContext';
import { SidebarItemProps } from './types';

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  disabled,
  badge,
  onClick,
  className = '',
  id
}) => {
  const { collapsed } = useSidebar();

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  return (
    <div
      id={id}
      className={`nexus-sidebar-item ${active ? 'nexus-sidebar-item-active' : ''} ${
        disabled ? 'nexus-sidebar-item-disabled' : ''
      } ${className}`}
      onClick={handleClick}
      role="menuitem"
      aria-selected={active}
      aria-disabled={disabled}
      title={collapsed && typeof label === 'string' ? label : undefined}
    >
      {icon && <div className="nexus-sidebar-item-icon">{icon}</div>}
      
      {!collapsed && (
        <span className="nexus-sidebar-item-label">{label}</span>
      )}

      {!collapsed && badge && (
        <div className="nexus-sidebar-item-badge">
          {badge}
        </div>
      )}
    </div>
  );
};
