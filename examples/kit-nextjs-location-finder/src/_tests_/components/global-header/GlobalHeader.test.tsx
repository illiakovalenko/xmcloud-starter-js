import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Default as GlobalHeader,
  Centered as GlobalHeaderCentered,
} from '@/components/global-header/GlobalHeader';
import { mockGlobalHeaderProps } from './global-header.mock.props';

// Mock Sitecore SDK
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  useSitecore: jest.fn(() => ({
    page: {
      mode: {
        isEditing: false,
        isPreview: false,
        isNormal: true,
      },
    },
  })),
}));

// Mock child components
jest.mock('@/components/global-header/GlobalHeaderDefault.dev', () => ({
  GlobalHeaderDefault: ({ isPageEditing }: { isPageEditing: boolean }) => (
    <header data-testid="global-header-default">
      GlobalHeaderDefault - {isPageEditing ? 'Editing' : 'Normal'}
    </header>
  ),
}));

jest.mock('@/components/global-header/GlobalHeaderCentered.dev', () => ({
  GlobalHeaderCentered: ({ isPageEditing }: { isPageEditing: boolean }) => (
    <header data-testid="global-header-centered">
      GlobalHeaderCentered - {isPageEditing ? 'Editing' : 'Normal'}
    </header>
  ),
}));

describe('GlobalHeader Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the default variant without crashing', () => {
    render(<GlobalHeader {...mockGlobalHeaderProps} />);
    expect(screen.getByTestId('global-header-default')).toBeInTheDocument();
    expect(screen.getByText(/Normal/)).toBeInTheDocument();
  });

  it('passes isPageEditing prop correctly in editing mode', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { useSitecore } = require('@sitecore-content-sdk/nextjs');
    useSitecore.mockReturnValue({
      page: {
        mode: {
          isEditing: true,
          isPreview: false,
          isNormal: false,
        },
      },
    });

    render(<GlobalHeader {...mockGlobalHeaderProps} />);
    expect(screen.getByText(/Editing/)).toBeInTheDocument();
  });

  it('renders the centered variant correctly', () => {
    render(<GlobalHeaderCentered {...mockGlobalHeaderProps} />);
    expect(screen.getByTestId('global-header-centered')).toBeInTheDocument();
  });
});
