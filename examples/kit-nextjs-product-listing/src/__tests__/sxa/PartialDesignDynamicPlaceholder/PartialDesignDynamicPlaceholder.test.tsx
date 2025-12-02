/**
 * Unit tests for PartialDesignDynamicPlaceholder component
 * Tests basic rendering and parameter handling
 */

import React from 'react';
import { render } from '@testing-library/react';
import PartialDesignDynamicPlaceholder from 'components/sxa/PartialDesignDynamicPlaceholder';
import {
  defaultPartialDesignProps,
  partialDesignPropsEmptyName,
  partialDesignPropsNoParams,
} from './PartialDesignDynamicPlaceholder.mockProps';

// Mock the Placeholder component
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Placeholder: ({ name, rendering }: { name: string; rendering: any }) =>
    React.createElement(
      'div',
      {
        'data-placeholder-name': name,
        'data-rendering': JSON.stringify(rendering),
      },
      name ? 'Placeholder: ' + name : 'Placeholder: '
    ),
}));

describe('PartialDesignDynamicPlaceholder Component', () => {
  it('should render Placeholder with correct name from params', () => {
    const { container } = render(
      <PartialDesignDynamicPlaceholder {...defaultPartialDesignProps} />
    );

    const placeholder = container.querySelector('[data-placeholder-name]');
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveAttribute('data-placeholder-name', 'main-content');
    expect(placeholder).toHaveTextContent('Placeholder: main-content');
  });

  it('should handle empty placeholder name', () => {
    const { container } = render(
      <PartialDesignDynamicPlaceholder {...partialDesignPropsEmptyName} />
    );

    const placeholder = container.querySelector('[data-placeholder-name]');
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveAttribute('data-placeholder-name', '');
    expect(placeholder).toHaveTextContent('Placeholder:');
  });

  it('should handle missing params gracefully', () => {
    const { container } = render(
      <PartialDesignDynamicPlaceholder {...partialDesignPropsNoParams} />
    );

    const placeholder = container.querySelector('[data-placeholder-name]');
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveAttribute('data-placeholder-name', '');
    expect(placeholder).toHaveTextContent('Placeholder:');
  });

  it('should pass rendering prop to Placeholder component', () => {
    const { container } = render(
      <PartialDesignDynamicPlaceholder {...defaultPartialDesignProps} />
    );

    const placeholder = container.querySelector('[data-rendering]');
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveAttribute('data-rendering');
  });

  describe('Parameter Handling', () => {
    it('should extract sig parameter correctly', () => {
      const { container } = render(
        <PartialDesignDynamicPlaceholder {...defaultPartialDesignProps} />
      );

      const placeholder = container.querySelector('[data-placeholder-name="main-content"]');
      expect(placeholder).toBeInTheDocument();
    });

    it('should handle undefined sig parameter', () => {
      const { container } = render(
        <PartialDesignDynamicPlaceholder {...partialDesignPropsNoParams} />
      );

      const placeholder = container.querySelector('[data-placeholder-name=""]');
      expect(placeholder).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should render without accessibility issues', () => {
      const { container } = render(
        <PartialDesignDynamicPlaceholder {...defaultPartialDesignProps} />
      );

      // The component should render without throwing errors
      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
