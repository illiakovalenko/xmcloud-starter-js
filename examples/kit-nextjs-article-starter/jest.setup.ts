import '@testing-library/jest-dom';
import React from 'react';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return React.createElement('img', props);
  },
}));

// Mock Sitecore Content SDK components
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  RichText: jest.fn(({ field }: { field: any }) => {
    return React.createElement('div', { 'data-testid': 'rich-text-content' }, field?.value || 'No content');
  }),
  Field: ({ field }: { field: any }) => {
    return React.createElement('span', {}, field?.value || '');
  },
}));

// Mock utility functions
jest.mock('@/lib/utils', () => ({
  cn: (...classes: (string | undefined)[]) => {
    return classes.filter(Boolean).join(' ');
  },
}));

// Mock NoDataFallback component
jest.mock('@/utils/NoDataFallback', () => ({
  NoDataFallback: ({ componentName }: { componentName: string }) => 
    React.createElement('div', { 'data-testid': 'no-data-fallback' }, 
      `${componentName} requires a datasource item assigned.`
    ),
}));

// Suppress expected console errors in tests
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
  // Suppress specific React warnings that are expected in tests
  console.error = (...args: any[]) => {
    const message = typeof args[0] === 'string' ? args[0] : args[0]?.toString() || '';
    
    // Suppress specific expected warnings
    if (
      message.includes('An empty string') ||
      message.includes('was not wrapped in act') ||
      message.includes('Each child in a list should have a unique') ||
      message.includes('Not implemented: navigation') ||
      message.includes('Warning: ReactDOM.render')
    ) {
      return;
    }
    
    originalError.call(console, ...args);
  };

  console.warn = (...args: any[]) => {
    const message = typeof args[0] === 'string' ? args[0] : args[0]?.toString() || '';
    
    // Suppress specific expected warnings
    if (
      message.includes('was not wrapped in act') ||
      message.includes('Not implemented')
    ) {
      return;
    }
    
    originalWarn.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
});

