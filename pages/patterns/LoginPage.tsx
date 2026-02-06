
import React, { useState } from 'react';
import { Card, Stack, Container } from '../../components/ui/Layout';
import { Heading, Text, Button } from '../../components/ui/Primitives';
import { Input, Checkbox } from '../../components/ui/Forms';

export const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center p-4 bg-neutral-50 dark:bg-neutral-950">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl mb-4 shadow-lg shadow-primary-500/20">
            <div className="w-6 h-6 bg-white rounded rotate-45" />
          </div>
          <Heading level={2} className="mb-2">Welcome back</Heading>
          <Text color="muted">Enter your credentials to access your account</Text>
        </div>

        <Card padding="lg" className="shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input 
              label="Email" 
              type="email" 
              placeholder="name@company.com" 
              required 
              id="email"
            />
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Password</label>
                <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-700">Forgot?</a>
              </div>
              <Input type="password" placeholder="••••••••" required id="password" />
            </div>

            <Checkbox label="Remember me for 30 days" id="remember" />

            <Button type="submit" fullWidth disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Signing in...
                </span>
              ) : 'Sign in'}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-200 dark:border-neutral-800"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-neutral-900 px-2 text-neutral-500">Or continue with</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="secondary" className="w-full">Google</Button>
              <Button variant="secondary" className="w-full">GitHub</Button>
            </div>
          </form>
        </Card>

        <p className="mt-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-primary-600 hover:text-primary-700">Start 14-day free trial</a>
        </p>
      </div>
    </div>
  );
};
