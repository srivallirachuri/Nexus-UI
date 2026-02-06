import React, { ReactNode } from 'react';
import { Heading, Text, Button, Icon, Box } from './Primitives';
import { Card, Container, Stack } from './Layout';
import { Navbar } from '../navigation/Navbar';
import { Sidebar } from '../navigation/Sidebar';

// --- Auth Layout ---
export const AuthLayout: React.FC<{
  children: ReactNode;
  backgroundImage?: string;
  logo?: ReactNode;
  title?: string;
  subtitle?: string;
}> = ({ children, backgroundImage, logo, title, subtitle }) => {
  return (
    <div className="min-h-screen flex bg-neutral-50 dark:bg-neutral-950">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 lg:w-[480px]">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mb-8">
             {logo}
             {title && <Heading level={2} className="mt-6">{title}</Heading>}
             {subtitle && <Text color="muted" className="mt-2">{subtitle}</Text>}
          </div>
          {children}
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={backgroundImage || "https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80"}
          alt="Authorization Background"
        />
        <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply" />
      </div>
    </div>
  );
};

// --- Dashboard Layout ---
export const DashboardLayout: React.FC<{
  children: ReactNode;
  sidebar?: ReactNode;
  navbar?: ReactNode;
}> = ({ children, sidebar, navbar }) => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {navbar}
      <div className="flex pt-16 h-screen overflow-hidden">
        {sidebar || <Sidebar />}
        <main className="flex-1 relative overflow-y-auto focus:outline-none lg:ml-64">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// --- Hero Section ---
export const HeroSection: React.FC<{
  title: string;
  subtitle: string;
  ctaPrimary?: ReactNode;
  ctaSecondary?: ReactNode;
  image?: string;
}> = ({ title, subtitle, ctaPrimary, ctaSecondary, image }) => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-neutral-900 pt-16 pb-32">
       <Container size="lg" className="relative z-10">
         <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <Heading level={1} className="tracking-tight text-4xl sm:text-5xl md:text-6xl text-neutral-900 dark:text-neutral-100">
                {title}
              </Heading>
              <Text size="lg" color="muted" className="mt-6">
                {subtitle}
              </Text>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex gap-4">
                {ctaPrimary}
                {ctaSecondary}
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
               <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden">
                 <img className="w-full" src={image || "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"} alt="Hero" />
               </div>
            </div>
         </div>
       </Container>
    </div>
  );
};

// --- Feature Grid ---
export const FeatureGrid: React.FC<{
  title: string;
  subtitle?: string;
  features: { title: string; description: string; icon: ReactNode }[];
}> = ({ title, subtitle, features }) => {
  return (
    <div className="py-12 bg-neutral-50 dark:bg-neutral-950">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} className="text-primary-600 dark:text-primary-400">Features</Heading>
          <Heading level={2} className="mt-2 text-3xl font-extrabold text-neutral-900 dark:text-white">{title}</Heading>
          {subtitle && <Text size="xl" color="muted" className="mt-4 max-w-2xl mx-auto">{subtitle}</Text>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="pt-6">
              <div className="flow-root bg-white dark:bg-neutral-900 rounded-lg px-6 pb-8 h-full border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg text-white">
                    {feature.icon}
                  </div>
                  <Heading level={3} className="mt-8 text-lg font-medium">{feature.title}</Heading>
                  <Text color="muted" className="mt-5">{feature.description}</Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

// --- Pricing Section ---
export const PricingSection: React.FC<{
  title: string;
  plans: { name: string; price: string; features: string[]; cta: string; recommended?: boolean }[];
}> = ({ title, plans }) => {
  return (
    <div className="py-24 bg-white dark:bg-neutral-900">
       <Container>
         <div className="text-center">
            <Heading level={2} className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">{title}</Heading>
         </div>
         <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`relative p-8 bg-white dark:bg-neutral-900 border rounded-2xl shadow-sm flex flex-col ${plan.recommended ? 'border-primary-500 ring-2 ring-primary-500' : 'border-neutral-200 dark:border-neutral-800'}`}>
                 <div className="flex-1">
                   <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{plan.name}</h3>
                   <p className="mt-4 flex items-baseline text-neutral-900 dark:text-neutral-100">
                     <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                     <span className="ml-1 text-xl font-semibold text-neutral-500">/mo</span>
                   </p>
                   <ul className="mt-6 space-y-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex">
                           <Icon size="sm" className="text-primary-500 flex-shrink-0"><path d="M5 13l4 4L19 7"/></Icon>
                           <span className="ml-3 text-neutral-500 dark:text-neutral-400">{feature}</span>
                        </li>
                      ))}
                   </ul>
                 </div>
                 <Button className="mt-8 w-full" variant={plan.recommended ? 'primary' : 'outline'}>{plan.cta}</Button>
              </div>
            ))}
         </div>
       </Container>
    </div>
  );
};

// --- Footer ---
export const Footer: React.FC<{
  links: { title: string; items: string[] }[];
  socials?: ReactNode;
}> = ({ links, socials }) => {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <Container className="py-12 md:py-16 lg:py-20">
         <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700" />
                 <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">Nexus UI</span>
               </div>
               <Text color="muted" className="text-sm max-w-xs">Making the web look better, one component at a time.</Text>
               <div className="flex space-x-6">{socials}</div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                 {links.slice(0, 2).map((col, i) => (
                   <div key={i} className="mt-12 md:mt-0">
                      <h3 className="text-sm font-semibold text-neutral-400 tracking-wider uppercase">{col.title}</h3>
                      <ul className="mt-4 space-y-4">
                         {col.items.map((item, j) => (
                           <li key={j}><a href="#" className="text-base text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition">{item}</a></li>
                         ))}
                      </ul>
                   </div>
                 ))}
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                 {links.slice(2, 4).map((col, i) => (
                   <div key={i} className="mt-12 md:mt-0">
                      <h3 className="text-sm font-semibold text-neutral-400 tracking-wider uppercase">{col.title}</h3>
                      <ul className="mt-4 space-y-4">
                         {col.items.map((item, j) => (
                           <li key={j}><a href="#" className="text-base text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition">{item}</a></li>
                         ))}
                      </ul>
                   </div>
                 ))}
              </div>
            </div>
         </div>
      </Container>
    </footer>
  );
};

// --- 404 Page ---
export const Page404: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col justify-center items-center pb-24 px-4">
       <h1 className="text-9xl font-extrabold text-primary-200 dark:text-primary-900/30 tracking-widest">404</h1>
       <div className="absolute bg-primary-600 text-white px-2 text-sm rounded rotate-12">Page Not Found</div>
       <Heading level={2} className="mt-8">Whoops! Nothing to see here.</Heading>
       <Text className="mt-4" color="muted">The page you are looking for might have been removed or unavailable.</Text>
       <Button className="mt-8" size="lg">Go Home</Button>
    </div>
  );
};

// --- Error Page ---
export const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col justify-center items-center pb-24 px-4">
       <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-8">
         <Icon size="xl"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></Icon>
       </div>
       <Heading level={2}>Something went wrong</Heading>
       <Text className="mt-4 text-center max-w-md" color="muted">We apologize for the inconvenience. Please try again later or contact support if the problem persists.</Text>
       <div className="flex gap-4 mt-8">
         <Button variant="outline">Contact Support</Button>
         <Button>Try Again</Button>
       </div>
    </div>
  );
};
