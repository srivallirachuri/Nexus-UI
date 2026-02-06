import React from 'react';
import { BaseProps, SpinnerProps, SkeletonProps, ProgressBarProps } from '../../types';



export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = ''
}) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4'
  };

  const colors = {
    current: 'border-current',
    primary: 'border-primary-600 text-primary-200',
    white: 'border-white text-white/30',
    neutral: 'border-neutral-600 text-neutral-200'
  };

  return (
    <div 
      className={`animate-spin rounded-full border-t-transparent ${sizes[size]} ${colors[color]} ${className}`} 
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  className = ''
}) => {
  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-md'
  };

  const styles: React.CSSProperties = {
    width: width,
    height: height
  };

  return (
    <div 
      className={`animate-pulse bg-neutral-200 dark:bg-neutral-800 ${variants[variant]} ${className}`} 
      style={styles}
    />
  );
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  variant = 'default',
  size = 'md',
  showLabel = false,
  className = ''
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const variants = {
    default: 'bg-primary-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-500',
    danger: 'bg-red-600'
  };

  const sizes = {
    sm: 'h-1',
    md: 'h-2.5',
    lg: 'h-4'
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Progress</span>
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full bg-neutral-200 rounded-full dark:bg-neutral-700 overflow-hidden ${sizes[size]}`}>
        <div 
          className={`h-full rounded-full transition-all duration-300 ${variants[variant]}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
