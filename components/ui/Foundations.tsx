
import React from 'react';
import { BaseProps } from '../../types';
import { Card, Stack } from './Layout';
import { Heading, Text } from './Primitives';

export interface FoundationProps extends BaseProps {
  title?: string;
  description?: string;
}

export const ColorPalette: React.FC<FoundationProps> = ({ className = '', title, description }) => {
  const colors = [
    { name: 'Primary', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'], class: 'bg-primary' },
    { name: 'Neutral', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'], class: 'bg-neutral' },
    { name: 'Red', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'], class: 'bg-red' },
  ];

  return (
    <div className={`space-y-12 w-full ${className}`}>
      {(title || description) && (
        <div className="space-y-2">
          {title && <Heading level={3}>{title}</Heading>}
          {description && <Text color="muted">{description}</Text>}
        </div>
      )}
      {colors.map((color) => (
        <div key={color.name} className="space-y-4">
          <Heading level={4}>{color.name}</Heading>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4">
            {color.shades.map((shade) => (
              <div key={shade} className="space-y-2">
                <div className={`h-12 w-full rounded-md border border-neutral-200 dark:border-neutral-800 ${color.class}-${shade}`} />
                <div className="flex flex-col">
                  <span className="text-xs font-medium">{shade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const TypographyScale: React.FC<FoundationProps> = ({ className = '', title, description }) => {
  const scales = [
    { name: 'Heading 1', size: '4xl/5xl', weight: 'Extrabold', class: 'text-4xl lg:text-5xl font-extrabold' },
    { name: 'Heading 2', size: '3xl', weight: 'Bold', class: 'text-3xl font-bold' },
    { name: 'Heading 3', size: '2xl', weight: 'Bold', class: 'text-2xl font-bold' },
    { name: 'Heading 4', size: 'xl', weight: 'Semibold', class: 'text-xl font-semibold' },
    { name: 'Body Large', size: 'lg', weight: 'Normal', class: 'text-lg font-normal' },
    { name: 'Body Base', size: 'base', weight: 'Normal', class: 'text-base font-normal' },
    { name: 'Body Small', size: 'sm', weight: 'Normal', class: 'text-sm font-normal' },
    { name: 'Caption', size: 'xs', weight: 'Medium', class: 'text-xs font-medium' },
  ];

  return (
    <div className={`space-y-8 w-full ${className}`}>
      {(title || description) && (
        <div className="space-y-2 pb-4">
          {title && <Heading level={3}>{title}</Heading>}
          {description && <Text color="muted">{description}</Text>}
        </div>
      )}
      {scales.map((s) => (
        <div key={s.name} className="flex flex-col md:flex-row md:items-center gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-6">
          <div className="w-40 flex-shrink-0">
            <span className="text-xs font-mono text-neutral-500 uppercase">{s.name}</span>
            <div className="text-xs text-neutral-400 mt-1">{s.size} / {s.weight}</div>
          </div>
          <div className={`flex-1 ${s.class} truncate`}>
            The quick brown fox jumps over the lazy dog
          </div>
        </div>
      ))}
    </div>
  );
};

export const SpacingScale: React.FC<FoundationProps> = ({ className = '', title, description }) => {
  const scale = [
    { name: '0.5', px: '2px', class: 'w-0.5' },
    { name: '1', px: '4px', class: 'w-1' },
    { name: '2', px: '8px', class: 'w-2' },
    { name: '3', px: '12px', class: 'w-3' },
    { name: '4', px: '16px', class: 'w-4' },
    { name: '6', px: '24px', class: 'w-6' },
    { name: '8', px: '32px', class: 'w-8' },
    { name: '10', px: '40px', class: 'w-10' },
    { name: '12', px: '48px', class: 'w-12' },
    { name: '16', px: '64px', class: 'w-16' },
  ];

  return (
    <div className={`space-y-6 w-full ${className}`}>
      {(title || description) && (
        <div className="space-y-2 mb-8">
          {title && <Heading level={3}>{title}</Heading>}
          {description && <Text color="muted">{description}</Text>}
        </div>
      )}
      {scale.map((item) => (
        <div key={item.name} className="flex items-center gap-4">
          <div className="w-12 text-xs font-mono text-neutral-500">{item.name}</div>
          <div className="w-16 text-xs text-neutral-400">{item.px}</div>
          <div className={`h-4 bg-primary-500 rounded-sm ${item.class}`} />
        </div>
      ))}
    </div>
  );
};

export const DesignTokens: React.FC<FoundationProps> = ({ className = '', title, description }) => {
  const radios = [
    { name: 'none', px: '0px', class: 'rounded-none' },
    { name: 'sm', px: '2px', class: 'rounded-sm' },
    { name: 'md', px: '6px', class: 'rounded-md' },
    { name: 'lg', px: '8px', class: 'rounded-lg' },
    { name: 'xl', px: '12px', class: 'rounded-xl' },
    { name: '2xl', px: '16px', class: 'rounded-2xl' },
    { name: '3xl', px: '24px', class: 'rounded-3xl' },
    { name: 'full', px: '9999px', class: 'rounded-full' },
  ];

  const shadows = [
    { name: 'sm', class: 'shadow-sm' },
    { name: 'md', class: 'shadow-md' },
    { name: 'lg', class: 'shadow-lg' },
    { name: 'xl', class: 'shadow-xl' },
  ];

  return (
    <div className={`space-y-12 w-full ${className}`}>
      {(title || description) && (
        <div className="space-y-2">
          {title && <Heading level={3}>{title}</Heading>}
          {description && <Text color="muted">{description}</Text>}
        </div>
      )}
      <div className="space-y-4">
        <Heading level={4}>Border Radius</Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {radios.map((r) => (
            <div key={r.name} className="flex flex-col items-center">
              <div className={`w-24 h-24 bg-primary-100 border-2 border-primary-500 ${r.class} flex items-center justify-center mb-2`} />
              <div className="font-mono text-xs">{r.name}</div>
              <div className="text-xs text-neutral-500">{r.px}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <Heading level={4}>Shadows</Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {shadows.map((s) => (
            <div key={s.name} className="flex flex-col items-center">
              <div className={`w-24 h-24 bg-white rounded-lg ${s.class} flex items-center justify-center mb-2`} />
              <div className="font-mono text-xs">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const MotionTokens: React.FC<FoundationProps> = ({ className = '', title, description }) => {
  const durations = [
    { name: '75', ms: '75ms', class: 'duration-75' },
    { name: '100', ms: '100ms', class: 'duration-100' },
    { name: '150', ms: '150ms', class: 'duration-150' },
    { name: '200', ms: '200ms', class: 'duration-200' },
    { name: '300', ms: '300ms', class: 'duration-300' },
    { name: '500', ms: '500ms', class: 'duration-500' },
    { name: '700', ms: '700ms', class: 'duration-700' },
    { name: '1000', ms: '1000ms', class: 'duration-1000' },
  ];

  const easings = [
    { name: 'linear', class: 'ease-linear' },
    { name: 'in', class: 'ease-in' },
    { name: 'out', class: 'ease-out' },
    { name: 'in-out', class: 'ease-in-out' },
  ];

  return (
    <div className={`space-y-12 w-full ${className}`}>
      {(title || description) && (
        <div className="space-y-2">
          {title && <Heading level={3}>{title}</Heading>}
          {description && <Text color="muted">{description}</Text>}
        </div>
      )}
      <div className="space-y-4">
        <Heading level={4}>Durations</Heading>
        <div className="grid gap-2">
          {durations.map((d) => (
            <div key={d.name} className="flex items-center gap-4">
              <div className="w-16 font-mono text-xs text-neutral-500">{d.ms}</div>
              <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div className={`h-full bg-primary-500 w-0 animate-expand ${d.class}`} 
                     style={{ animation: `expand 2s infinite alternate ${d.class}` }} />
              </div>
              <style>{`
                @keyframes expand { from { width: 0; } to { width: 100%; } }
              `}</style>
            </div>
          ))}
        </div>
      </div>

       <div className="space-y-4">
        <Heading level={4}>Easings</Heading>
         <div className="grid gap-4">
          {easings.map((e) => (
            <div key={e.name} className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-mono font-medium">{e.name}</span>
              </div>
              <div className="relative h-2 bg-neutral-100 rounded-full">
                 <div 
                   className={`absolute top-0 left-0 w-4 h-4 -mt-1 bg-primary-500 rounded-full ${e.class}`}
                   style={{ animation: `slide 2s infinite alternate ${e.class}` }}
                 />
              </div>
              <style>{`
                @keyframes slide { from { left: 0; } to { left: 100%; } }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CSSReset: React.FC<FoundationProps> = ({ className = '', title, description }) => {
  const features = [
    { title: 'Box Sizing', desc: 'Sets box-sizing to border-box globally.' },
    { title: 'Border Reset', desc: 'Removes default border styles and colors.' },
    { title: 'Typography', desc: 'Normalizes line-height and font-smoothing.' },
    { title: 'Spacing', desc: 'Removes default margins from body.' },
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      {(title || description) && (
        <div className="space-y-2">
          {title && <Heading level={3}>{title}</Heading>}
          {description && <Text color="muted">{description}</Text>}
        </div>
      )}
      <div className="prose dark:prose-invert max-w-none">
        <Text>
          We use a customized version of modern-normalize content-box reset. 
          This is automatically included in the global stylesheet.
        </Text>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((f) => (
          <Card key={f.title} className="p-4 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <Text weight="bold" className="mb-1">{f.title}</Text>
            <Text size="sm" color="muted">{f.desc}</Text>
          </Card>
        ))}
      </div>

      <div className="mt-4 p-4 bg-black rounded-md overflow-x-auto border border-neutral-800">
        <pre className="text-xs font-mono text-white">
{`/* Global CSS Reset Snippet */
*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  font-family: ui-sans-serif, system-ui;
}`}
        </pre>
      </div>
    </div>
  );
};

export const ThemeProviderInfo: React.FC<FoundationProps> = ({ className = '', title, description }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {(title || description) && (
        <div className="space-y-2">
          {title && <Heading level={3}>{title}</Heading>}
          {description && <Text color="muted">{description}</Text>}
        </div>
      )}
       <div className="prose dark:prose-invert max-w-none">
        <Text>
           The ThemeProvider component wraps your application and provides the active theme context.
           It handles system preference matching and manual theme toggling.
        </Text>
      </div>

      <div className="p-6 rounded-xl border-2 border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4 p-1 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <div className="px-4 py-2 rounded-md bg-primary-100 text-primary-700 font-medium text-sm">Light</div>
            <div className="px-4 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-500 font-medium text-sm">Dark</div>
            <div className="px-4 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-500 font-medium text-sm">System</div>
          </div>
          <Card className="w-full max-w-sm p-4 bg-white dark:bg-neutral-800 shadow-xl">
             <div className="h-4 w-2/3 bg-neutral-100 dark:bg-neutral-700 rounded mb-3 animate-pulse" />
             <div className="h-4 w-full bg-neutral-100 dark:bg-neutral-700 rounded mb-3 animate-pulse" />
             <div className="h-10 w-full bg-primary-500 rounded animate-pulse" />
          </Card>
          <Text size="xs" color="muted" className="italic">Visual representation of theme switching concepts.</Text>
        </div>
      </div>

       <Card className="bg-black border-neutral-800 shadow-inner overflow-hidden">
         <div className="p-4 border-b border-neutral-800">
            <Heading level={4} className="text-white">Root Configuration</Heading>
         </div>
         <pre className="text-xs font-mono text-white overflow-x-auto p-4">
{`import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider 
      defaultTheme="system" 
      storageKey="nexus-ui-theme"
    >
      <LayoutContainer />
    </ThemeProvider>\n  );\n}`}
         </pre>
       </Card>
    </div>
  );
};
