import { ReactNode, RefObject } from 'react';
import { BaseProps } from '@/types';

export type MenuSize = 'sm' | 'md';

export interface MenuProps extends BaseProps {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

export interface MenuTriggerProps extends BaseProps {
  children: ReactNode;
  asChild?: boolean;
}

export interface MenuContentProps extends BaseProps {
  children: ReactNode;
  size?: MenuSize;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

export interface MenuItemProps extends BaseProps {
  children: ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  danger?: boolean;
}

export interface MenuGroupProps extends BaseProps {
  children: ReactNode;
  label?: string;
}

export interface MenuDividerProps extends BaseProps {
  className?: string;
}

export interface MenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: RefObject<HTMLElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  registerItem: (ref: RefObject<HTMLElement | null>) => number;
  unregisterItem: (index: number) => void;
}
