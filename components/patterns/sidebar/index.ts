import { Sidebar as SidebarRoot } from './Sidebar';
import { SidebarItem } from './SidebarItem';
import { SidebarSection } from './SidebarSection';

export type { SidebarProps, SidebarItemProps, SidebarSectionProps } from './types';

type SidebarComponent = typeof SidebarRoot & {
  Item: typeof SidebarItem;
  Section: typeof SidebarSection;
};

const Sidebar = SidebarRoot as SidebarComponent;
Sidebar.Item = SidebarItem;
Sidebar.Section = SidebarSection;

export { Sidebar };
