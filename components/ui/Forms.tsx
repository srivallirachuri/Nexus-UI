import React, { useState } from 'react';
import { BaseProps, InputProps, CheckboxProps, SwitchProps, TextareaProps, SelectProps, RadioProps, SliderProps } from '../../types';
import { Button, Heading, Text, Icon, Box } from './Primitives';
import { Stack, Card } from './Layout';

// Note: InputProps is now defined in types.ts

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`
          block w-full px-3 py-2 bg-white dark:bg-neutral-900 border rounded-md shadow-sm transition duration-200
          placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
          disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-neutral-800'}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      {helperText && !error && <p className="text-xs text-neutral-500 mt-1">{helperText}</p>}
    </div>
  );
};

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  rows = 4,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={`
          block w-full px-3 py-2 bg-white dark:bg-neutral-900 border rounded-md shadow-sm transition duration-200
          placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
          disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-neutral-800'}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      {helperText && !error && <p className="text-xs text-neutral-500 mt-1">{helperText}</p>}
    </div>
  );
};

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  options,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <select
        id={id}
        className={`
          block w-full px-3 py-2 bg-white dark:bg-neutral-900 border rounded-md shadow-sm transition duration-200
          focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
          disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-neutral-800'}
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      {helperText && !error && <p className="text-xs text-neutral-500 mt-1">{helperText}</p>}
    </div>
  );
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        className={`
          h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500
          dark:border-neutral-700 dark:bg-neutral-900
          ${className}
        `}
        {...props}
      />
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

export const Radio: React.FC<RadioProps> = ({
  label,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id={id}
        className={`
          h-4 w-4 border-neutral-300 text-primary-600 focus:ring-primary-500
          dark:border-neutral-700 dark:bg-neutral-900
          ${className}
        `}
        {...props}
      />
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label
}) => {
  return (
    <div className="flex items-center space-x-3">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`
          relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          ${checked ? 'bg-primary-600' : 'bg-neutral-200 dark:bg-neutral-700'}
        `}
      >
        <span
          className={`
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
            ${checked ? 'translate-x-5' : 'translate-x-0'}
          `}
        />
      </button>
      {label && <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</span>}
    </div>
  );
};

export const Slider: React.FC<SliderProps> = ({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</label>
          <span className="text-sm text-neutral-500">{value}</span>
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700 accent-primary-600"
        {...props}
      />
    </div>
  );
};

// --- Form Building Blocks ---

export const Label: React.FC<{ htmlFor?: string; children: React.ReactNode; required?: boolean }> = ({ htmlFor, children, required }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
);

export const ErrorMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
    <Icon size="sm"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></Icon>
    {children}
  </p>
);

export const FormField: React.FC<{ label?: string; htmlFor?: string; error?: string; required?: boolean; children: React.ReactNode }> = ({ label, htmlFor, error, required, children }) => (
  <div className="w-full">
    {label && <Label htmlFor={htmlFor} required={required}>{label}</Label>}
    {children}
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </div>
);

export const FormWrapper: React.FC<{ onSubmit: (e: React.FormEvent) => void; children: React.ReactNode; className?: string }> = ({ onSubmit, children, className = '' }) => (
  <form 
    onSubmit={(e) => { e.preventDefault(); onSubmit(e); }} 
    className={`space-y-6 ${className}`}
  >
    {children}
  </form>
);

// --- Authentication Forms ---

export const LoginForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => onSubmit({ email, password });

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormField label="Email" htmlFor="login-email" required>
        <Input id="login-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </FormField>
      <FormField label="Password" htmlFor="login-password" required>
        <Input id="login-password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </FormField>
      <div className="flex items-center justify-between">
        <Checkbox label="Remember me" id="remember-me" />
        <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">Forgot password?</a>
      </div>
      <Button type="submit" fullWidth>Sign in</Button>
    </FormWrapper>
  );
};

export const SignupForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => onSubmit({ name, email, password });

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormField label="Full Name" htmlFor="signup-name" required>
        <Input id="signup-name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
      </FormField>
      <FormField label="Email" htmlFor="signup-email" required>
        <Input id="signup-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </FormField>
      <FormField label="Password" htmlFor="signup-password" required>
        <Input id="signup-password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </FormField>
      <Button type="submit" fullWidth>Create Account</Button>
    </FormWrapper>
  );
};

export const ForgotPasswordForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  return (
    <FormWrapper onSubmit={() => onSubmit({ email })}>
      <Text color="muted" className="mb-4 text-sm">Enter your email address and we'll send you a link to reset your password.</Text>
      <FormField label="Email" htmlFor="forgot-email" required>
        <Input id="forgot-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </FormField>
      <Button type="submit" fullWidth>Send Reset Link</Button>
      <div className="text-center mt-4">
        <a href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Back to login</a>
      </div>
    </FormWrapper>
  );
};

export const ResetPasswordForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <FormWrapper onSubmit={() => onSubmit({ password, confirmPassword })}>
      <FormField label="New Password" htmlFor="reset-password" required>
        <Input id="reset-password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </FormField>
      <FormField label="Confirm Password" htmlFor="reset-confirm" required>
        <Input id="reset-confirm" type="password" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </FormField>
      <Button type="submit" fullWidth>Reset Password</Button>
    </FormWrapper>
  );
};

// --- Specialized Inputs ---

export const OTPVerification: React.FC<{ length?: number; onComplete: (code: string) => void }> = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const inputs = React.useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (newOtp.join('').length === length) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={(ref) => inputs.current[index] = ref}
          className="w-10 h-12 text-center text-xl font-bold bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export const PasswordStrengthMeter: React.FC<{ password: string }> = ({ password }) => {
  const getStrength = (pass: string) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length > 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return Math.min(score, 4);
  };

  const strength = getStrength(password);
  const colors = ['bg-neutral-200', 'bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  const labels = ['Empty', 'Weak', 'Fair', 'Good', 'Strong'];

  return (
    <div className="space-y-2 mt-2">
      <div className="flex gap-1 h-1.5">
        {[1, 2, 3, 4].map((level) => (
          <div 
            key={level} 
            className={`flex-1 rounded-full transition-colors duration-300 ${level <= strength ? colors[strength] : 'bg-neutral-200 dark:bg-neutral-800'}`} 
          />
        ))}
      </div>
      <p className="text-xs text-right text-neutral-500">{labels[strength]}</p>
    </div>
  );
};

export const FileUpload: React.FC<{ label?: string; accept?: string }> = ({ label = "Upload file", accept }) => {
  return (
    <div className="w-full">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-neutral-300 dark:border-neutral-700 border-dashed rounded-lg cursor-pointer bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Icon size="md" className="text-neutral-400 mb-2"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></Icon>
          <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{accept ? `Accepts ${accept}` : 'Any file type'}</p>
        </div>
        <input type="file" className="hidden" accept={accept} />
      </label>
    </div>
  );
};

export const DatePicker: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <Input 
      label={label} 
      type="date" 
      className="appearance-none" 
      icon={<Icon size="sm"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></Icon>} 
    />
  );
};

export const TimePicker: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <Input 
      label={label} 
      type="time" 
      className="appearance-none"
      icon={<Icon size="sm"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>} 
    />
  );
};

export const SearchInput: React.FC<{ placeholder?: string; onSearch: (val: string) => void }> = ({ placeholder = "Search...", onSearch }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
         <Icon size="sm" className="text-neutral-400"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md leading-5 bg-white dark:bg-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition duration-150 ease-in-out"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

