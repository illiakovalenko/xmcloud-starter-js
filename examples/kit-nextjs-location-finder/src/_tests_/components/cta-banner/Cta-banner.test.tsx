import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default as CtaBanner } from '@/components/cta-banner/CtaBanner';

// Component-specific mocks (Sitecore components are already mocked globally)
// Override if needed for specific testing requirements

// Component-specific mocks
jest.mock('@/components/animated-section/AnimatedSection.dev', () => {
  const AnimatedSection = ({ children }: React.PropsWithChildren) => (
    <div data-testid="animated-section">{children}</div>
  );
  AnimatedSection.displayName = 'MockAnimatedSection';
  return { Default: AnimatedSection };
});

describe('CtaBanner Component', () => {
  const mockProps = {
    fields: {
      titleRequired: { value: 'CTA Title' },
      descriptionOptional: { value: 'CTA Description' },
      linkOptional: { value: { href: '/cta-link', text: 'Click Here' } },
    },
    params: {
      colorScheme: 'primary' as const,
    },
    rendering: { componentName: 'CtaBanner' },
  };

  it('renders title, description, and link correctly', () => {
    render(<CtaBanner {...mockProps} />);
    expect(screen.getByText('CTA Title')).toBeInTheDocument();
    expect(screen.getByText('CTA Description')).toBeInTheDocument();
    expect(screen.getByText('Click Here')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/cta-link');
  });

  it('renders fallback when no fields are provided', () => {
    const emptyProps = {
      fields: undefined,
      params: {},
      rendering: { componentName: 'CtaBanner' },
    };
    render(<CtaBanner {...emptyProps} />);
    expect(screen.getByTestId('no-data-fallback')).toBeInTheDocument();
  });

  it('does not render link if linkOptional is missing', () => {
    const propsWithoutLink = {
      ...mockProps,
      fields: {
        titleRequired: mockProps.fields.titleRequired,
        descriptionOptional: mockProps.fields.descriptionOptional,
        // linkOptional is intentionally omitted
      },
    };
    render(<CtaBanner {...propsWithoutLink} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
