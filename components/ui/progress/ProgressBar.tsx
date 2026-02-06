import React, { forwardRef } from 'react';
import styles from './ProgressBar.module.css';
import { ProgressBarProps } from '../../../types';

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(({
  value = 0,
  max = 100,
  variant = 'default',
  size = 'md',
  showLabel = false,
  indeterminate = false,
  label,
  labelPosition = 'top',
  className = '',
  ...props
}, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const labelContent = (
    <div className={styles.labelContainer}>
      {label && <span className={styles.label}>{label}</span>}
      {showLabel && !indeterminate && (
        <span className={styles.value}>{Math.round(percentage)}%</span>
      )}
    </div>
  );

  return (
    <div className={`${styles.container} ${styles[labelPosition]} ${className}`} ref={ref} {...props}>
      {labelPosition === 'top' && (showLabel || label) && labelContent}
      <div 
        className={`${styles.progressBar} ${styles[size]} ${styles[variant]} ${indeterminate ? styles.indeterminate : ''}`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={indeterminate ? undefined : value}
      >
        <div 
          className={styles.indicator} 
          style={{ width: indeterminate ? '50%' : `${percentage}%` }}
        />
      </div>
      {labelPosition === 'right' && (showLabel || label) && labelContent}
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';
