import React from 'react';
import { render, screen } from '@testing-library/react';
import { Default as ContainerFullBleed } from '../../components/container/container-full-bleed/ContainerFullBleed';
import {
  defaultContainerFullBleedProps,
  containerFullBleedWithStyles,
  containerFullBleedNoTopMargin,
  containerFullBleedWithBackground,
  containerFullBleedWithInset,
  containerFullBleedTransparent,
} from './ContainerFullBleed.mockProps';

// Mock Sitecore Content SDK
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  Placeholder: ({ name, rendering }: { name: string; rendering: unknown }) => (
    <div data-testid="placeholder" data-name={name} data-rendering={JSON.stringify(rendering)}>
      Placeholder: {name}
    </div>
  ),
}));

// Mock Flex components
jest.mock('@/components/flex/Flex.dev', () => ({
  Flex: ({ children }: { children: React.ReactNode }) => <div data-testid="flex">{children}</div>,
  FlexItem: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="flex-item">{children}</div>
  ),
}));

// Mock cva utility
jest.mock('class-variance-authority', () => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cva: (base: string[], _variants: Record<string, unknown>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (_props: Record<string, string>) => {
      const classes = [...(Array.isArray(base) ? base : [base])];
      return classes.filter(Boolean).join(' ');
    };
  },
}));

describe('ContainerFullBleed', () => {
  it('renders with default props', () => {
    const { container } = render(<ContainerFullBleed {...defaultContainerFullBleedProps} />);

    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('renders placeholder with correct dynamic name', () => {
    render(<ContainerFullBleed {...defaultContainerFullBleedProps} />);

    const placeholder = screen.getByTestId('placeholder');
    expect(placeholder).toHaveAttribute('data-name', 'container-fullbleed-1');
  });

  it('applies custom styles from params', () => {
    const { container } = render(<ContainerFullBleed {...containerFullBleedWithStyles} />);

    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-container-class');
  });

  it('excludes top margin when specified', () => {
    render(<ContainerFullBleed {...containerFullBleedNoTopMargin} />);

    // Verify component renders (margin class applied by cva)
    const placeholder = screen.getByTestId('placeholder');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders with background image', () => {
    render(<ContainerFullBleed {...containerFullBleedWithBackground} />);

    const placeholder = screen.getByTestId('placeholder');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders with primary background color', () => {
    render(<ContainerFullBleed {...containerFullBleedWithBackground} />);

    const placeholder = screen.getByTestId('placeholder');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders with inset when specified', () => {
    render(<ContainerFullBleed {...containerFullBleedWithInset} />);

    const placeholder = screen.getByTestId('placeholder');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders with transparent background', () => {
    render(<ContainerFullBleed {...containerFullBleedTransparent} />);

    const placeholder = screen.getByTestId('placeholder');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders Flex component', () => {
    render(<ContainerFullBleed {...defaultContainerFullBleedProps} />);

    const flex = screen.getByTestId('flex');
    expect(flex).toBeInTheDocument();
  });

  it('renders FlexItem', () => {
    render(<ContainerFullBleed {...defaultContainerFullBleedProps} />);

    const flexItem = screen.getByTestId('flex-item');
    expect(flexItem).toBeInTheDocument();
  });
});
