import React from 'react';
import { Button } from '../ui/Primitives';

const navItems = [
  {
    title: 'Foundations',
    items: [
      { name: 'Colors', id: 'colors' },
      { name: 'Typography Scale', id: 'typography-scale' },
      { name: 'Spacing', id: 'spacing' },
      { name: 'Design Tokens', id: 'design-tokens' },
      { name: 'Motion', id: 'motion' },
      { name: 'CSS Reset', id: 'css-reset' },
      { name: 'Theme Provider', id: 'theme-provider' },
    ]
  },
  {
    title: 'Primitives',
    items: [
      { name: 'Button', id: 'button' },
      { name: 'Text', id: 'text' },
      { name: 'Heading', id: 'heading' },
      { name: 'Badge', id: 'badge' },
      { name: 'Avatar', id: 'avatar' },
      { name: 'Box', id: 'box' },
      { name: 'Flex', id: 'flex' },
      { name: 'Icon', id: 'icon' },
    ]
  },
  {
    title: 'Layout',
    items: [
      { name: 'Container', id: 'container' },
      { name: 'Card', id: 'card' },
      { name: 'Stack', id: 'stack' },
    ]
  },
  {
    title: 'Forms (Basic)',
    items: [
      { name: 'Input', id: 'input' },
      { name: 'Textarea', id: 'textarea' },
      { name: 'Select', id: 'select' },
      { name: 'Checkbox', id: 'checkbox' },
      { name: 'Radio', id: 'radio' },
      { name: 'Switch', id: 'switch' },
      { name: 'Slider', id: 'slider' },
    ]
  },
  {
    title: 'Forms & Auth',
    items: [
      { name: 'Form Wrapper', id: 'form-wrapper' },
      { name: 'Login Form', id: 'login-form' },
      { name: 'Signup Form', id: 'signup-form' },
      { name: 'Forgot Password', id: 'forgot-password' },
      { name: 'Reset Password', id: 'reset-password' },
      { name: 'OTP Verification', id: 'otp-verification' },
      { name: 'Password Strength', id: 'password-strength' },
      { name: 'File Upload', id: 'file-upload' },
      { name: 'Date & Time', id: 'date-time-picker' },
      { name: 'Search Input', id: 'search-input' },
    ]
  },
  {
    title: 'Composite',
    items: [
      { name: 'Modal', id: 'modal' },
      { name: 'Drawer', id: 'drawer' },
      { name: 'Tooltip', id: 'tooltip' },
      { name: 'Popover', id: 'popover' },
      { name: 'Tabs', id: 'tabs' },
      { name: 'Accordion', id: 'accordion' },
      { name: 'Dropdown', id: 'dropdown' },
      { name: 'Table', id: 'table' },
      { name: 'Pagination', id: 'pagination' },
      { name: 'Alert', id: 'alert' },
      { name: 'Toast', id: 'toast' },
      { name: 'Notification Banner', id: 'notification-banner' },
      { name: 'Empty State', id: 'empty-state' },
    ]
  },
  {
    title: 'Navigation',
    items: [
      { name: 'Breadcrumbs', id: 'breadcrumbs' },
      { name: 'Stepper', id: 'stepper' },
      { name: 'Command Palette', id: 'command-palette' },
    ]
  },
  {
    title: 'Patterns',
    items: [
      { name: 'Auth Layout', id: 'auth-layout' },
      { name: 'Dashboard Layout', id: 'dashboard-layout' },
      { name: 'Hero Section', id: 'hero-section' },
      { name: 'Feature Grid', id: 'feature-grid' },
      { name: 'Pricing Section', id: 'pricing-section' },
      { name: 'Footer', id: 'footer' },
      { name: '404 Page', id: '404-page' },
      { name: 'Error Page', id: 'error-page' },
    ]
  },
  {
    title: 'Utilities',
    items: [
      { name: 'Theme Toggle', id: 'theme-toggle' },
      { name: 'Copy To Clipboard', id: 'copy-to-clipboard' },
      { name: 'Code Block', id: 'code-block' },
      { name: 'Portal', id: 'portal' },
      { name: 'Responsive Visibility', id: 'responsive-visibility' },
      { name: 'Visually Hidden', id: 'visually-hidden' },
      { name: 'Focus Trap', id: 'focus-trap' },
    ]
  },
  {
    title: 'Feedback',
    items: [
      { name: 'Spinner', id: 'spinner' },
      { name: 'Skeleton', id: 'skeleton' },
      { name: 'Progress', id: 'progress' },
    ]
  },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 h-screen fixed overflow-y-auto">
      <div className="p-6">
        <nav className="space-y-8">
          {navItems.map((section) => (
            <div key={section.title}>
              <h5 className="mb-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                {section.title}
              </h5>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#/docs/${item.id}`}
                      className="block px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};
