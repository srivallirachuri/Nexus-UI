import React, { createContext, useContext, useState, useEffect } from 'react';
import { SidebarContextValue, SidebarProps, SidebarVariant, SidebarSize, SidebarTheme } from './types';

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

export const SidebarProvider: React.FC<SidebarProps & { isHovered: boolean; collapsed: boolean; setCollapsed: (val: boolean) => void }> = ({
  children,
  variant = 'default',
  size = 'md',
  theme = 'light',
  collapsed,
  setCollapsed,
  isHovered
}) => {
  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        setCollapsed,
        variant,
        size,
        theme,
        isHovered
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a Sidebar component');
  }
  return context;
};
