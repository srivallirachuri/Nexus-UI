import React, { useState, useEffect } from 'react';
import { BreadcrumbsProps, StepperProps } from '../../types';
import { Icon, Text } from './Primitives';
import { Input } from './Forms';

// --- Breadcrumbs ---
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, separator, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-neutral-400 select-none">
                {separator || <Icon size="sm"><path d="M9 5l7 7-7 7" /></Icon>}
              </span>
            )}
            {item.href ? (
              <a 
                href={item.href} 
                className={`text-sm font-medium transition-colors ${item.isCurrent ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'}`}
                aria-current={item.isCurrent ? 'page' : undefined}
              >
                {item.label}
              </a>
            ) : (
               <span className={`text-sm font-medium ${item.isCurrent ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-500'}`}>
                 {item.label}
               </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// --- Stepper ---
export const Stepper: React.FC<StepperProps> = ({ steps, orientation = 'horizontal', className = '' }) => {
  return (
    <div className={`flex ${orientation === 'vertical' ? 'flex-col gap-8' : 'items-center w-full'} ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className={`flex ${orientation === 'vertical' ? 'gap-4' : 'flex-1 items-center'} relative`}>
          <div className="flex flex-col items-center z-10">
             <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
               step.status === 'complete' 
                 ? 'bg-primary-600 border-primary-600 text-white' 
                 : step.status === 'current'
                   ? 'border-primary-600 text-primary-600'
                   : 'border-neutral-300 dark:border-neutral-700 text-neutral-400'
             }`}>
               {step.status === 'complete' ? (
                 <Icon size="sm"><path d="M5 13l4 4L19 7" /></Icon>
               ) : (
                 <span className="text-sm font-bold">{index + 1}</span>
               )}
             </div>
          </div>
          
          <div className={`ml-4 ${orientation === 'vertical' ? '' : 'absolute top-10 left-1/2 -translate-x-1/2 w-48 text-center'}`}>
             <div className={`text-sm font-semibold ${step.status === 'upcoming' ? 'text-neutral-500' : 'text-primary-900 dark:text-primary-100'}`}>
               {step.title}
             </div>
             {step.description && (
               <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                 {step.description}
               </div>
             )}
          </div>

          {index < steps.length - 1 && orientation === 'horizontal' && (
            <div className={`flex-1 h-0.5 mx-4 ${step.status === 'complete' ? 'bg-primary-600' : 'bg-neutral-200 dark:bg-neutral-800'}`} />
          )}

           {index < steps.length - 1 && orientation === 'vertical' && (
            <div className={`absolute left-4 top-8 bottom-[-32px] w-0.5 -ml-px ${step.status === 'complete' ? 'bg-primary-600' : 'bg-neutral-200 dark:bg-neutral-800'}`} />
          )}
        </div>
      ))}
    </div>
  );
};

// --- Command Palette ---
export const CommandPalette: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  items: { 
    group: string; 
    items: { icon?: React.ReactNode; label: string; shortcut?: string; onClick: () => void }[] 
  }[];
}> = ({ isOpen, onClose, items }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredItems = items.map(group => ({
    ...group,
    items: group.items.filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
  })).filter(group => group.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-white dark:bg-neutral-900 rounded-xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 animate-in fade-in zoom-in-95 duration-100">
        <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center gap-3">
          <Icon size="sm" className="text-neutral-400"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>
          <input 
            autoFocus
            type="text" 
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent border-none outline-none text-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs text-neutral-500 font-mono">ESC</div>
        </div>
        <div className="max-h-[60vh] overflow-y-auto py-2">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-neutral-500">No results found.</div>
          ) : (
             filteredItems.map((group, i) => (
                <div key={i}>
                  <div className="px-4 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider bg-neutral-50/50 dark:bg-neutral-900/50">{group.group}</div>
                  {group.items.map((item, j) => (
                    <button 
                      key={j}
                      onClick={() => { item.onClick(); onClose(); }}
                      className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-primary-50 dark:hover:bg-primary-900/10 text-neutral-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      {item.shortcut && (
                        <span className="text-xs text-neutral-400 group-hover:text-primary-500 font-mono">{item.shortcut}</span>
                      )}
                    </button>
                  ))}
                </div>
             ))
          )}
        </div>
      </div>
    </div>
  );
};
