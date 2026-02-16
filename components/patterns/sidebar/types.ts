import { ReactNode } from 'react';

export type SidebarVariant = 'default' | 'minimal' | 'floating' | 'glass';
export type SidebarSize = 'sm' | 'md' | 'lg';
export type SidebarTheme = 'light' | 'dark';

export interface SidebarProps {
  children?: ReactNode;
  variant?: SidebarVariant;
  size?: SidebarSize;
  className?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  collapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
  width?: string | number;
  collapsedWidth?: string | number;
  theme?: SidebarTheme;
  showExpandOnHover?: boolean;
}

export interface SidebarItemProps {
  icon?: ReactNode;
  label: ReactNode;
  active?: boolean;
  disabled?: boolean;
  badge?: ReactNode;
  onClick?: () => void;
  className?: string;
  id?: string;
}

export interface SidebarSectionProps {
  title?: ReactNode;
  children?: ReactNode;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  className?: string;
}

export interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  variant: SidebarVariant;
  size: SidebarSize;
  theme: SidebarTheme;
  isHovered: boolean;
}
