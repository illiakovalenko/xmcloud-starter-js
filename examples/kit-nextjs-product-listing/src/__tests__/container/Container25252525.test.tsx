import React from 'react';
import { render, screen } from '@testing-library/react';
import { Default as Container25252525 } from '../../components/container/container-25252525/Container25252525';
import {
  defaultContainer25252525Props,
  container25252525WithStyles,
  container25252525NoTopMargin,
  container25252525WithContent,
} from './Container25252525.mockProps';

// Mock Sitecore Content SDK
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  Placeholder: ({ name, rendering }: { name: string; rendering: unknown }) => (
    <div data-testid="placeholder" data-name={name} data-rendering={JSON.stringify(rendering)}>
      Placeholder: {name}
    </div>
  ),
  useSitecore: () => ({
    page: {
      mode: {
        isEditing: false,
      },
    },
  }),
}));

// Mock cn utility
jest.mock('@/lib/utils', () => ({
  cn: jest.fn((...classes) => {
    return classes
      .filter(Boolean)
      .map((c) => {
        if (typeof c === 'string') return c;
        if (typeof c === 'object' && c !== null) {
          return Object.keys(c)
            .filter((k) => c[k])
            .join(' ');
        }
        return '';
      })
      .filter(Boolean)
      .join(' ');
  }),
}));

// Mock container utility functions
jest.mock('@/components/container/container.util', () => ({
  getContainerPlaceholderProps: (key: string, params: Record<string, string>) => ({
    dynamicKey: `${key}-dynamic`,
    genericKey: key,
    fragment: params.fragment || 'default',
  }),
  isContainerPlaceholderEmpty: (
    rendering: unknown,
    _placeholderProps: unknown,
    content: unknown
  ) => {
    return (
      !content &&
      (!rendering || !(rendering as { placeholders?: Record<string, unknown[]> }).placeholders)
    );
  },
}));

describe('Container25252525', () => {
  it('renders with default props', () => {
    const { container } = render(<Container25252525 {...defaultContainer25252525Props} />);

    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('container--25252525');
  });

  it('renders four placeholders with correct names', () => {
    render(<Container25252525 {...defaultContainer25252525Props} />);

    const placeholders = screen.getAllByTestId('placeholder');
    expect(placeholders).toHaveLength(4);
    expect(placeholders[0]).toHaveAttribute('data-name', 'container-25-one-dynamic');
    expect(placeholders[1]).toHaveAttribute('data-name', 'container-25-two-dynamic');
    expect(placeholders[2]).toHaveAttribute('data-name', 'container-25-three-dynamic');
    expect(placeholders[3]).toHaveAttribute('data-name', 'container-25-four-dynamic');
  });

  it('applies custom styles from params', () => {
    const { container } = render(<Container25252525 {...container25252525WithStyles} />);

    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-container-class');
  });

  it('excludes top margin when specified', () => {
    const { container } = render(<Container25252525 {...container25252525NoTopMargin} />);

    const section = container.querySelector('section');
    expect(section).toHaveClass('mt-0');
  });

  it('includes top margin by default', () => {
    const { container } = render(<Container25252525 {...defaultContainer25252525Props} />);

    const section = container.querySelector('section');
    expect(section).toHaveClass('mt-10');
  });

  it('renders with content in all four placeholders', () => {
    render(<Container25252525 {...container25252525WithContent} />);

    const placeholders = screen.getAllByTestId('placeholder');
    expect(placeholders).toHaveLength(4);
  });

  it('has correct data-class-change attribute', () => {
    const { container } = render(<Container25252525 {...defaultContainer25252525Props} />);

    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('applies correct container class name', () => {
    const { container } = render(<Container25252525 {...defaultContainer25252525Props} />);

    const section = container.querySelector('section');
    expect(section).toHaveClass('container--25252525');
  });

  it('uses max-w-[1760px] wrapper class', () => {
    const { container } = render(<Container25252525 {...defaultContainer25252525Props} />);

    const wrapper = container.querySelector('.max-w-\\[1760px\\]');
    expect(wrapper).toBeInTheDocument();
  });

  it('renders flex container with wrap enabled', () => {
    const { container } = render(<Container25252525 {...defaultContainer25252525Props} />);

    const flexContainer = container.querySelector('.flex.flex-wrap');
    expect(flexContainer).toBeInTheDocument();
  });

  it('renders columns with lg:w-1/4 (25%) basis', () => {
    const { container } = render(<Container25252525 {...defaultContainer25252525Props} />);

    const columns = container.querySelectorAll('.lg\\:w-1\\/4');
    expect(columns).toHaveLength(4);
  });
});
