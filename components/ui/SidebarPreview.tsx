import React, { useState } from 'react';
import { Sidebar } from '../patterns/sidebar';
import { Card, Stack } from './Layout';
import { Heading, Text, Badge, Icon } from './Primitives';

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const HelpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

export const SidebarPreview: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <div className="flex flex-col gap-12 w-full p-4 overflow-x-auto">
      {/* Default Sidebar */}
      <section className="space-y-4 min-w-[300px]">
        <Heading level={4}>Default Sidebar</Heading>
        <Text tone="muted">Standard enterprise dashboard layout.</Text>
        <div className="h-[500px] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden flex bg-neutral-50 dark:bg-neutral-950">
          <Sidebar>
            <div className="p-6 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">N</div>
              <span className="font-bold text-lg dark:text-white">NexusUI</span>
            </div>
            <Sidebar.Section title="Main Menu">
              <Sidebar.Item 
                icon={<HomeIcon />} 
                label="Overview" 
                active={activeItem === 'home'} 
                onClick={() => setActiveItem('home')}
              />
              <Sidebar.Item 
                icon={<ChartIcon />} 
                label="Analytics" 
                active={activeItem === 'analytics'} 
                onClick={() => setActiveItem('analytics')}
                badge={<Badge variant="primary" size="sm">New</Badge>}
              />
              <Sidebar.Item 
                icon={<UserIcon />} 
                label="Customers" 
                active={activeItem === 'customers'} 
                onClick={() => setActiveItem('customers')}
              />
            </Sidebar.Section>
            <Sidebar.Section title="System" collapsible>
              <Sidebar.Item 
                icon={<SettingsIcon />} 
                label="Settings" 
                active={activeItem === 'settings'} 
                onClick={() => setActiveItem('settings')}
              />
              <Sidebar.Item 
                icon={<HelpIcon />} 
                label="Support" 
                active={activeItem === 'help'} 
                onClick={() => setActiveItem('help')}
              />
            </Sidebar.Section>
          </Sidebar>
          <div className="p-8 flex-1">
            <h2 className="text-2xl font-bold dark:text-white">Welcome back!</h2>
            <p className="text-neutral-500">Your dashboard is looking great today.</p>
          </div>
        </div>
      </section>

      {/* Floating Variant */}
      <section className="space-y-4">
        <Heading level={4}>Floating Variant</Heading>
        <Text tone="muted">Modern detached design for SaaS apps.</Text>
        <div className="h-[400px] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden flex bg-neutral-50 dark:bg-neutral-950">
          <Sidebar variant="floating">
            <div className="p-4" />
            <Sidebar.Item icon={<HomeIcon />} label="Home" active />
            <Sidebar.Item icon={<ChartIcon />} label="Stats" />
            <Sidebar.Item icon={<SettingsIcon />} label="Config" />
          </Sidebar>
          <div className="p-8 flex-1">
            <div className="h-full border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Glassmorphism Dark Mode */}
      <section className="space-y-4">
        <Heading level={4}>Glass Variant (Dark)</Heading>
        <Text tone="muted">Premium frost effect with backdrop blur.</Text>
        <div className="h-[400px] border border-neutral-800 rounded-xl overflow-hidden flex relative" 
             style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          {/* Background decorative elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-indigo-500/20 blur-[80px] rounded-full" />
          <div className="absolute bottom-10 left-40 w-48 h-48 bg-purple-500/20 blur-[100px] rounded-full" />
          
          <Sidebar variant="glass" theme="dark">
            <div className="p-8">
              <div className="h-8 w-24 bg-white/10 rounded" />
            </div>
            <Sidebar.Item icon={<HomeIcon />} label="Dashboard" active />
            <Sidebar.Item icon={<ChartIcon />} label="Reports" />
            <Sidebar.Item icon={<UserIcon />} label="Team" />
          </Sidebar>
          <div className="p-8 flex-1 z-10">
            <div className="h-12 w-1/3 bg-white/5 rounded mb-4" />
            <div className="grid grid-cols-2 gap-4">
               <div className="h-24 bg-white/5 border border-white/10 rounded-xl" />
               <div className="h-24 bg-white/5 border border-white/10 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

       {/* Minimal Sidebar */}
       <section className="space-y-4">
        <Heading level={4}>Minimal Style (Default Collapsed)</Heading>
        <div className="h-[300px] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden flex bg-white dark:bg-neutral-900">
          <Sidebar variant="minimal" defaultCollapsed width="200px" collapsedWidth="64px">
            <div className="p-4" />
            <Sidebar.Item icon={<HomeIcon />} label="Home" />
            <Sidebar.Item icon={<ChartIcon />} label="Stats" active />
            <Sidebar.Item icon={<SettingsIcon />} label="Settings" />
          </Sidebar>
          <div className="p-8 flex-1 border-l border-neutral-100 dark:border-neutral-800">
            <Text>Compact navigation for content-first interfaces.</Text>
          </div>
        </div>
      </section>
    </div>
  );
};
