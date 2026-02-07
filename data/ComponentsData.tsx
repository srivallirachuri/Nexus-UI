
import React from 'react';
import { 
  Button, Badge, Text, Heading, Icon, Avatar, Spinner, IconButton, SplitButton, HamburgerButton, Box, Flex 
} from '../components/ui/Primitives';
import { Card, Stack, Container } from '../components/ui/Layout';
import { 
  Input, Label, Checkbox, Radio, Switch, Textarea, Select, Slider, 
  FormField, SearchInput, LoginForm, SignupForm, DatePicker, TimePicker 
} from '../components/ui/Forms';
import { 
  Modal, Tooltip, Tabs, Alert, Toast, Pagination, Dropdown, Popover, Accordion, Table 
} from '../components/ui/Composite';
import { 
  Breadcrumbs, Stepper 
} from '../components/ui/Navigation';
import { Navbar } from '../components/navigation/Navbar';
import { Sidebar } from '../components/navigation/Sidebar';

import { 
  HeroSection, FeatureGrid, PricingSection, AuthLayout, DashboardLayout, Footer, Page404, ErrorPage 
} from '../components/ui/Patterns';

export type Category = 'Atomic' | 'Reusable' | 'Composite' | 'App-level';

export interface ComponentItem {
  id: string;
  name: string;
  category: Category;
  subCategory: string;
  variants: number;
  description: string;
  preview: React.ReactNode;
  code: string;
  info: string;
}

export const components: ComponentItem[] = [
  // --- ATOMIC (Foundation / Primitives) ---
  {
    id: 'button',
    name: 'Button',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 8,
    description: 'Interactive buttons for actions and triggers.',
    preview: <Button>Primary Action</Button>,
    code: '<Button variant="primary">Click Me</Button>',
    info: 'Buttons are the primary way users interact with the app.'
  },
  {
    id: 'input',
    name: 'Input',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 4,
    description: 'Text inputs for user data entry.',
    preview: <div className="w-full px-4"><div className="h-10 border rounded px-3 flex items-center text-sm text-neutral-400 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">Placeholder...</div></div>,
    code: '<Input placeholder="Enter text..." />',
    info: 'Standard text input field.'
  },
  {
    id: 'label',
    name: 'Label',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 2,
    description: 'Text labels for form elements.',
    preview: <Label>Field Label</Label>,
    code: '<Label>Username</Label>',
    info: 'Used to provide titles for form controls.'
  },
  {
    id: 'badge',
    name: 'Badge',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 9,
    description: 'Status indicators and labels.',
    preview: <Badge variant="success">Active</Badge>,
    code: '<Badge variant="success">Active</Badge>',
    info: 'Small visual indicators for status or tags.'
  },
  {
    id: 'avatar',
    name: 'Avatar',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 5,
    description: 'Visual representation of a user.',
    preview: <Avatar />,
    code: '<Avatar src="/user.jpg" />',
    info: 'Displays user profile photos or initials.'
  },
  {
    id: 'spinner',
    name: 'Spinner',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 4,
    description: 'Indicates loading state.',
    preview: <Spinner />,
    code: '<Spinner size="md" />',
    info: 'Used when content is being fetched or processed.'
  },
  {
    id: 'divider',
    name: 'Divider',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 2,
    description: 'Visual separator between sections.',
    preview: <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800" />,
    code: '<Divider />',
    info: 'Separates content blocks visually.'
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 3,
    description: 'Toggleable selection box.',
    preview: <Checkbox label="Remember me" />,
    code: '<Checkbox label="Option" />',
    info: 'Allows selection of one or more items.'
  },
  {
    id: 'radio',
    name: 'Radio',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 3,
    description: 'Single selection from a group.',
    preview: <Radio label="Choose this" />,
    code: '<Radio label="Option" />',
    info: 'Selection of a single item from a set.'
  },
  {
    id: 'switch',
    name: 'Switch',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 3,
    description: 'On/Off toggle control.',
    preview: <Switch checked={true} onChange={() => {}} />,
    code: '<Switch label="Toggle" />',
    info: 'Used for binary settings.'
  },
  {
    id: 'text',
    name: 'Text',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 7,
    description: 'Body text and small copy.',
    preview: <Text>Sample body text</Text>,
    code: '<Text size="base">Hello World</Text>',
    info: 'Base component for all interface text.'
  },
  {
    id: 'heading',
    name: 'Heading',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 6,
    description: 'Page and section titles.',
    preview: <Heading level={3}>Section Title</Heading>,
    code: '<Heading level={1}>Main Page Header</Heading>',
    info: 'Uses semantic H1-H6 tags.'
  },

  // --- REUSABLE (Molecules) ---
  {
    id: 'input-field',
    name: 'InputField',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 5,
    description: 'Input combined with label and error.',
    preview: <div className="w-full max-w-sm"><Input label="Email Address" placeholder="alex@example.com" /></div>,
    code: '<Input label="Email" placeholder="Enter email" />',
    info: 'A complete form field with label support.'
  },
  {
    id: 'search-bar',
    name: 'SearchBar',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 3,
    description: 'Enhanced input for searching.',
    preview: <div className="w-full max-w-sm"><SearchInput placeholder="Search components..." /></div>,
    code: '<SearchInput placeholder="Search..." />',
    info: 'Includes search icon and clear functionality.'
  },
  {
    id: 'tabs',
    name: 'Tabs',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 3,
    description: 'Organize content into views.',
    preview: <div className="flex gap-2 border-b w-full px-2"><div className="border-b-2 border-primary-500 px-2 py-1 text-xs font-bold">Tab 1</div><div className="px-2 py-1 text-xs text-neutral-400">Tab 2</div></div>,
    code: '<Tabs items={items} />',
    info: 'Switcher for tabbed content.'
  },
  {
    id: 'card',
    name: 'Card',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 6,
    description: 'Container for grouped content.',
    preview: <Card className="p-4"><Heading level={5}>Card Title</Heading><Text size="sm">Content goes here.</Text></Card>,
    code: '<Card>Content</Card>',
    info: 'Standard layout container.'
  },
  {
    id: 'modal',
    name: 'Modal',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 5,
    description: 'Dialog overlays.',
    preview: <div className="border rounded-lg p-4 bg-white dark:bg-neutral-900 border-primary-500 shadow-lg scale-90 w-full"><Heading level={5}>Modal Title</Heading><div className="h-10 mt-2 bg-neutral-100 dark:bg-neutral-800 rounded" /></div>,
    code: '<Modal isOpen={true}>Content</Modal>',
    info: 'Focuses user attention on a specific task.'
  },
  {
    id: 'alert',
    name: 'Alert',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 4,
    description: 'Feedback messages.',
    preview: <div className="w-full px-4"><div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded p-2 text-xs">Note: Success notification.</div></div>,
    code: '<Alert variant="info">Message</Alert>',
    info: 'Shows status updates or warnings.'
  },

  // --- COMPOSITE (Organisms / Patterns) ---
  {
    id: 'navbar',
    name: 'Navbar',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    variants: 2,
    description: 'Top-level navigation header.',
    preview: <div className="w-full h-12 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded flex items-center px-4 justify-between scale-90"><div className="w-8 h-8 bg-primary-600 rounded" /><div className="flex gap-2"><div className="w-10 h-2 bg-neutral-200 dark:bg-neutral-700 rounded" /><div className="w-10 h-2 bg-neutral-200 dark:bg-neutral-700 rounded" /></div></div>,
    code: '<Navbar />',
    info: 'Complete responsive navigation bar.'
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    variants: 2,
    description: 'Vertical application menu.',
    preview: <div className="w-20 h-32 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded p-2 flex flex-col gap-2 scale-90"><div className="h-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded" /><div className="h-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded" /><div className="h-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded" /></div>,
    code: '<Sidebar />',
    info: 'Side navigation system with categories.'
  },
  {
    id: 'hero-section',
    name: 'Hero Section',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    variants: 3,
    description: 'Main landing page header.',
    preview: <div className="text-center py-6 scale-90 border rounded bg-neutral-50 dark:bg-neutral-900 w-full"><Heading level={3}>Title</Heading><Button className="mt-2" size="sm">Get Started</Button></div>,
    code: '<HeroSection />',
    info: 'Premium hero section with CTA.'
  },

  // --- APP-LEVEL (Templates / Pages) ---
  {
    id: 'login-page',
    name: 'Login Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    variants: 2,
    description: 'Full authentication screen.',
    preview: <div className="flex justify-center scale-75 border rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-2xl"><LoginForm /></div>,
    code: '<AuthLayout><LoginForm /></AuthLayout>',
    info: 'A complete login flow template.'
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    variants: 2,
    description: 'Modern product homepage.',
    preview: <div className="scale-[0.4] origin-top border rounded-2xl overflow-hidden bg-white dark:bg-neutral-950 w-full h-[300px]"><Navbar onToggleDarkMode={() => {}} isDarkMode={false} /><div className="pt-20 text-center"><Heading level={1}>Better UI</Heading></div></div>,
    code: '<LandingPage />',
    info: 'Multi-section landing page template.'
  }
];
