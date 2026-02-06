import React from 'react';
import { Menu, MenuTrigger, MenuContent, MenuItem, MenuGroup, MenuDivider } from './Menu';
import { Icon } from '../Primitives';

export const MenuExample = () => {
  return (
    <div className="flex gap-8 items-start p-12 bg-neutral-100 dark:bg-neutral-900 rounded-xl min-h-[400px]">
      {/* Standard Menu */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-neutral-500">Standard Menu</h3>
        <Menu>
          <MenuTrigger>
            Open Menu
            <Icon size="xs"><path d="M19 9l-7 7-7-7" /></Icon>
          </MenuTrigger>
          <MenuContent>
            <MenuItem onSelect={() => console.log('Profile')}>Profile</MenuItem>
            <MenuItem onSelect={() => console.log('Billing')}>Billing</MenuItem>
            <MenuItem onSelect={() => console.log('Settings')}>Settings</MenuItem>
            <MenuDivider />
            <MenuItem danger onSelect={() => console.log('Logout')}>Logout</MenuItem>
          </MenuContent>
        </Menu>
      </div>

      {/* Grouped Menu with Icons */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-neutral-500">Grouped with Icons</h3>
        <Menu>
          <MenuTrigger>
            Actions
            <Icon size="xs"><path d="M19 9l-7 7-7-7" /></Icon>
          </MenuTrigger>
          <MenuContent size="md">
            <MenuGroup label="Application">
              <MenuItem 
                icon={<Icon size="xs"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></Icon>}
                onSelect={() => console.log('Home')}
              >
                Home
              </MenuItem>
              <MenuItem 
                icon={<Icon size="xs"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14" /></Icon>}
                onSelect={() => console.log('Analytics')}
              >
                Analytics
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup label="Danger Zone">
              <MenuItem 
                danger 
                icon={<Icon size="xs"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></Icon>}
                onSelect={() => console.log('Delete')}
              >
                Delete Account
              </MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      </div>

      {/* Small Variant */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-neutral-500">Size Variant (sm)</h3>
        <Menu>
          <MenuTrigger>Small Menu</MenuTrigger>
          <MenuContent size="sm">
            <MenuItem>Edit</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem disabled>Paste</MenuItem>
          </MenuContent>
        </Menu>
      </div>
    </div>
  );
};
