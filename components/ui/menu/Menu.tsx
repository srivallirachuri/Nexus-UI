import React, { createContext, useContext, useState, useRef, useEffect, useCallback, RefObject } from 'react';
import { Portal } from '../Utilities';
import { 
  MenuProps, 
  MenuTriggerProps, 
  MenuContentProps, 
  MenuItemProps, 
  MenuGroupProps, 
  MenuDividerProps, 
  MenuContextValue 
} from './types';
import styles from './Menu.module.css';

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('Menu components must be wrapped in <Menu />');
  }
  return context;
};

export const Menu: React.FC<MenuProps> = ({ 
  children, 
  open: controlledOpen, 
  onOpenChange, 
  defaultOpen = false 
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const itemRefs = useRef<RefObject<HTMLElement | null>[]>([]);

  const setOpen = useCallback((newOpen: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
    if (!newOpen) {
      setActiveIndex(-1);
    }
  }, [isControlled, onOpenChange]);

  const registerItem = useCallback((ref: RefObject<HTMLElement | null>) => {
    itemRefs.current.push(ref);
    return itemRefs.current.length - 1;
  }, []);

  const unregisterItem = useCallback((index: number) => {
    // This is a simplified registration. In a real world, we'd use index-based mapping
    // for more robust dynamic lists, but this works for static menus.
  }, []);

  // Handle click outside
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current && !triggerRef.current.contains(event.target as Node) &&
        contentRef.current && !contentRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, setOpen]);

  return (
    <MenuContext.Provider value={{ 
      open, 
      setOpen, 
      triggerRef, 
      contentRef, 
      activeIndex, 
      setActiveIndex,
      registerItem,
      unregisterItem
    }}>
      {children}
    </MenuContext.Provider>
  );
};

export const MenuTrigger: React.FC<MenuTriggerProps> = ({ children, className = '' }) => {
  const { open, setOpen, triggerRef } = useMenu();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <div
      ref={triggerRef as any}
      className={`${styles.trigger} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-haspopup="menu"
      aria-expanded={open}
    >
      {children}
    </div>
  );
};

export const MenuContent: React.FC<MenuContentProps> = ({ 
  children, 
  className = '', 
  size = 'md',
  align = 'start'
}) => {
  const { open, setOpen, contentRef, triggerRef, activeIndex, setActiveIndex } = useMenu();
  const innerRef = useRef<HTMLDivElement>(null);

  // Sync refs
  useEffect(() => {
    if (contentRef) (contentRef as any).current = innerRef.current;
  }, [contentRef]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }

    const items = innerRef.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])') as NodeListOf<HTMLElement>;
    if (!items.length) return;

    let nextIndex = activeIndex;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (activeIndex + 1) % items.length;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (activeIndex - 1 + items.length) % items.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = items.length - 1;
    }

    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
      items[nextIndex]?.focus();
    }
  };

  // Initial focus
  useEffect(() => {
    if (open) {
      innerRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <Portal>
      <div 
        ref={innerRef}
        role="menu"
        tabIndex={-1}
        className={`${styles.content} ${styles[size]} ${styles[align]} ${className}`}
        onKeyDown={handleKeyDown}
        style={{
          position: 'absolute',
          top: triggerRef.current ? triggerRef.current.offsetTop + triggerRef.current.offsetHeight + 4 : 0,
          left: triggerRef.current ? triggerRef.current.offsetLeft : 0,
          zIndex: 50
        }}
      >
        {children}
      </div>
    </Portal>
  );
};

export const MenuItem: React.FC<MenuItemProps> = ({ 
  children, 
  className = '', 
  onSelect, 
  disabled = false, 
  icon,
  danger = false
}) => {
  const { setOpen } = useMenu();

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return;
    onSelect?.();
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect?.();
      setOpen(false);
    }
  };

  return (
    <div
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      className={`${styles.item} ${disabled ? styles.disabled : ''} ${danger ? styles.danger : ''} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
    </div>
  );
};

export const MenuGroup: React.FC<MenuGroupProps> = ({ children, label, className = '' }) => {
  return (
    <div className={`${styles.group} ${className}`} role="group">
      {label && <div className={styles.groupLabel}>{label}</div>}
      {children}
    </div>
  );
};

export const MenuDivider: React.FC<MenuDividerProps> = ({ className = '' }) => {
  return <div className={`${styles.divider} ${className}`} role="separator" />;
};
