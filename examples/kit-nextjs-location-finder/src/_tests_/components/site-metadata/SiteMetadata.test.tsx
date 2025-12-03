import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default as SiteMetadata } from '@/components/site-metadata/SiteMetadata';

// Mock Next.js Head component to capture rendered elements
jest.mock('next/head', () => {
  const MockHead = ({ children }: { children: React.ReactNode }) => {
    // Create a function that processes React elements into HTML-like structure
    const processChildren = (child: React.ReactNode): string => {
      if (typeof child === 'string') return child;
      if (typeof child === 'number') return child.toString();
      if (!child) return '';

      if (React.isValidElement(child)) {
        const { type, props } = child;
        const tagName = typeof type === 'string' ? type : 'div';

        // Handle self-closing tags
        if (['meta', 'link'].includes(tagName)) {
          const attrs = Object.entries(props as Record<string, unknown>)
            .filter(([key]) => key !== 'children')
            .map(([key, value]) => `${key}="${value}"`)
            .join(' ');
          return `<${tagName} ${attrs} />`;
        }

        // Handle regular tags with content
        const content = (props as { children?: React.ReactNode }).children
          ? processChildren((props as { children?: React.ReactNode }).children)
          : '';
        return `<${tagName}>${content}</${tagName}>`;
      }

      if (Array.isArray(child)) {
        return child.map(processChildren).join('');
      }

      return '';
    };

    const htmlContent = Array.isArray(children)
      ? children.map(processChildren).join('')
      : processChildren(children);

    return <div data-testid="head-mock" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };
  MockHead.displayName = 'MockHead';
  return MockHead;
});

// Test props use type assertions for edge case testing where invalid data is intentionally passed

describe('SiteMetadata Component', () => {
  const mockRendering = { componentName: 'SiteMetadata' };

  it('renders with complete metadata fields', () => {
    const props = {
      fields: {
        title: { value: 'Page Title' },
        metadataTitle: { value: 'Meta Title' },
        metadataKeywords: { value: 'keyword1, keyword2, keyword3' },
        metadataDescription: { value: 'Page meta description for SEO' },
      },
      params: {},
      rendering: mockRendering,
    };

    const { container } = render(<SiteMetadata {...props} />);
    const headMock = container.querySelector('[data-testid="head-mock"]');

    expect(headMock).toBeInTheDocument();
    // Check if title is rendered within the head mock
    expect(headMock?.textContent).toContain('Meta Title');
    // Verify meta tags are rendered within the head mock
    expect(headMock?.innerHTML).toContain('name="keywords"');
    expect(headMock?.innerHTML).toContain('name="description"');
    expect(headMock?.innerHTML).toContain('name="viewport"');
    expect(headMock?.innerHTML).toContain('rel="preconnect"');
  });

  it('uses title when metadataTitle is not provided', () => {
    const props = {
      fields: {
        title: { value: 'Fallback Title' },
        metadataKeywords: { value: 'keywords' },
        metadataDescription: { value: 'description' },
      },
      params: {},
      rendering: mockRendering,
    };

    const { container } = render(<SiteMetadata {...props} />);
    const headMock = container.querySelector('[data-testid="head-mock"]');

    expect(headMock).toBeInTheDocument();
    expect(headMock?.textContent).toContain('Fallback Title');
  });

  it('does not render meta tags when keywords and description are empty', () => {
    const props = {
      fields: {
        title: { value: 'Title Only' },
        metadataKeywords: { value: '' },
        metadataDescription: { value: '' },
      },
      params: {},
      rendering: mockRendering,
    };

    const { container } = render(<SiteMetadata {...props} />);
    const headMock = container.querySelector('[data-testid="head-mock"]');

    expect(headMock?.innerHTML).not.toContain('name="keywords"');
    expect(headMock?.innerHTML).not.toContain('name="description"');
  });

  it('handles missing optional fields gracefully', () => {
    const props = {
      fields: {
        title: { value: 'Minimal Title' },
      },
      params: {},
      rendering: mockRendering,
    };

    const { container } = render(<SiteMetadata {...props} />);
    const headMock = container.querySelector('[data-testid="head-mock"]');

    expect(headMock).toBeInTheDocument();
    expect(headMock?.textContent).toContain('Minimal Title');
  });

  it('renders all required HTML meta tags with correct attributes', () => {
    const props = {
      fields: {
        metadataTitle: { value: 'SEO Title' },
        metadataKeywords: { value: 'seo, react, testing' },
        metadataDescription: { value: 'SEO optimized description' },
      },
      params: {},
      rendering: mockRendering,
    };

    const { container } = render(<SiteMetadata {...props} />);

    const headMock = container.querySelector('[data-testid="head-mock"]');

    expect(headMock?.innerHTML).toContain('content="seo, react, testing"');
    expect(headMock?.innerHTML).toContain('content="SEO optimized description"');
    expect(headMock?.innerHTML).toContain('content="width=device-width, initial-scale=1"');
    expect(headMock?.innerHTML).toContain('href="https://fonts.googleapis.com"');
  });

  it('handles empty field values correctly', () => {
    const props = {
      fields: {
        title: { value: undefined },
        metadataTitle: { value: undefined },
        metadataKeywords: { value: undefined },
        metadataDescription: { value: undefined },
      },
      params: {},
      rendering: mockRendering,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => render(<SiteMetadata {...(props as any)} />)).not.toThrow();
  });
});
