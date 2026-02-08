import React, { useState } from 'react';
import {
  LoginForm, SignupForm, ForgotPasswordForm, OTPVerification, ResetPasswordForm
} from './Forms';
import { AuthLayout } from './Patterns';
import { Button, Heading, Text, Icon } from './Primitives';
import { Alert } from './Composite';
import { Card, Stack } from './Layout';
import { Skeleton } from './Feedback';

export type AuthStep = 'login' | 'signup' | 'forgot-password' | 'otp' | 'reset-password' | 'success';

export interface AuthFlowProps {
  initialStep?: AuthStep;
  onSuccess?: (data: any) => void;
  logo?: React.ReactNode;
  isFullPage?: boolean;
  className?: string;
}

export const AuthFlow: React.FC<AuthFlowProps> = ({ 
  initialStep = 'login',
  onSuccess,
  logo,
  isFullPage = true,
  className = ''
}) => {
  const [step, setStep] = useState<AuthStep>(initialStep);
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const navigateTo = (nextStep: AuthStep) => {
    setIsTransitioning(true);
    setError(null);
    setTimeout(() => {
      setStep(nextStep);
      setIsTransitioning(false);
    }, 600);
  };

  const renderContent = () => {
    if (isTransitioning) {
      return (
        <Stack spacing={6}>
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="48px" className="mt-4" />
        </Stack>
      );
    }

    switch (step) {
      case 'login':
        return (
          <div className="space-y-6">
            <LoginForm 
              onSubmit={(data) => {
                setIsLoading(true);
                setEmail(data.email);
                // Simulate API call
                setTimeout(() => {
                  setIsLoading(false);
                  if (data.email === 'error@example.com') {
                    setError('Invalid credentials. Please check your email and password.');
                  } else {
                    navigateTo('otp');
                  }
                }, 1500);
              }} 
              onForgotPassword={() => navigateTo('forgot-password')}
              isLoading={isLoading}
              error={error || undefined}
            />
            <div className="text-center">
              <Text color="muted" className="text-sm">
                Don't have an account?{' '}
                <button onClick={() => navigateTo('signup')} className="font-medium text-primary-600 hover:text-primary-500">
                  Sign up
                </button>
              </Text>
            </div>
          </div>
        );
      case 'signup':
        return (
          <div className="space-y-6">
            <SignupForm 
              onSubmit={(data) => {
                setIsLoading(true);
                setEmail(data.email);
                setTimeout(() => {
                  setIsLoading(false);
                  navigateTo('otp');
                }, 1500);
              }} 
              isLoading={isLoading}
              error={error || undefined}
            />
            <div className="text-center">
              <Text color="muted" className="text-sm">
                Already have an account?{' '}
                <button onClick={() => navigateTo('login')} className="font-medium text-primary-600 hover:text-primary-500">
                  Sign in
                </button>
              </Text>
            </div>
          </div>
        );
      case 'forgot-password':
        return (
          <div className="space-y-6">
            <ForgotPasswordForm 
              onSubmit={(data) => {
                setIsLoading(true);
                setEmail(data.email);
                setTimeout(() => {
                  setIsLoading(false);
                  // In demo, we jump to OTP for verification
                  navigateTo('otp');
                }, 1500);
              }} 
              isLoading={isLoading}
              error={error || undefined}
            />
            <div className="text-center">
              <button onClick={() => navigateTo('login')} className="text-sm font-medium text-primary-600 hover:text-primary-500">
                Back to Sign in
              </button>
            </div>
          </div>
        );
      case 'otp':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <Text color="muted">
                We've sent a 6-digit verification code to <br />
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">{email || 'your email'}</span>
              </Text>
            </div>
            <OTPVerification 
              onComplete={(code) => {
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                  if (code === '000000') {
                    setError('Invalid verification code. Please try again.');
                  } else {
                    navigateTo('success');
                    onSuccess?.({ email, code, status: 'verified' });
                  }
                }, 1500);
              }}
              onResend={() => {
                setError(null);
                // Simulate resend
              }}
              isLoading={isLoading}
              error={error || undefined}
            />
          </div>
        );
      case 'reset-password':
        return (
          <ResetPasswordForm 
            onSubmit={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                navigateTo('success');
              }, 1500);
            }} 
            isLoading={isLoading} 
          />
        );
      case 'success':
        return (
          <div className="text-center py-8 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <Icon size="lg"><path d="M5 13l4 4L19 7" /></Icon>
            </div>
            <Heading level={2} className="mb-2">Success!</Heading>
            <Text color="muted" className="mb-10 px-4">Your account has been verified successfully. You can now continue to use all features.</Text>
            <Button fullWidth onClick={() => navigateTo('login')}>
              Go to Dashboard
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  const getHeaderInfo = () => {
    switch (step) {
      case 'login': return { title: 'Welcome Back', subtitle: 'Sign in to your account' };
      case 'signup': return { title: 'Create Account', subtitle: 'Join our community today' };
      case 'forgot-password': return { title: 'Forgot Password', subtitle: 'Reset your security credentials' };
      case 'otp': return { title: 'Verify Email', subtitle: 'Enter the code sent to your email' };
      case 'success': return { title: '', subtitle: '' };
      default: return { title: 'Authentication', subtitle: '' };
    }
  };

  const header = getHeaderInfo();

  return (
    <AuthLayout
      title={header.title}
      subtitle={header.subtitle}
      isFullPage={isFullPage}
      className={className}
      logo={logo || (
        <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/20">
          <Icon size="md">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </Icon>
        </div>
      )}
    >
      {renderContent()}
    </AuthLayout>
  );
};
