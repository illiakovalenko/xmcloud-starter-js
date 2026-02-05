import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FEAASScripts from '@/components/content-sdk/FEAASScripts';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    const { unoptimized, alt = '', src, ...rest } = props;
    // Convert empty string src to undefined to avoid React warning
    const srcProp = src === '' ? undefined : src;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        {...rest}
        src={srcProp as string | undefined}
        alt={alt as string}
        data-testid="next-image"
        data-unoptimized={unoptimized ? 'true' : 'false'}
      />
    );
  },
}));

// Mock FEAAS
jest.mock('@sitecore-feaas/clientside/react', () => ({
  setElementImplementation: jest.fn(),
}));

import * as FEAAS from '@sitecore-feaas/clientside/react';
const mockSetElementImplementation = FEAAS.setElementImplementation as jest.MockedFunction<
  typeof FEAAS.setElementImplementation
>;

// Mock next.config
jest.mock('../../../../next.config', () => ({
  __esModule: true,
  default: {
    images: {
      domains: ['example.com', 'test.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*.cloudinary.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn.example.com',
        },
      ],
    },
  },
}));

describe('FEAASScripts Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders without crashing', () => {
      const { container } = render(<FEAASScripts />);
      expect(container).toBeInTheDocument();
    });

    it('renders an empty fragment', () => {
      const { container } = render(<FEAASScripts />);
      expect(container.firstChild).toBeNull();
    });
  });

  describe('FEAAS Element Implementation', () => {
    it('registers img element implementation with FEAAS', () => {
      render(<FEAASScripts />);

      expect(mockSetElementImplementation).toHaveBeenCalledWith('img', expect.any(Function));
    });

    it('img implementation renders Next.js Image component', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;
      const attributes = {
        src: 'https://example.com/image.jpg',
        alt: 'Test Image',
        children: null,
        className: 'test-class',
        id: 'test-id',
      };

      const { container } = render(imgImplementation(attributes));
      const img = container.querySelector('[data-testid="next-image"]');

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
      expect(img).toHaveAttribute('alt', 'Test Image');
      expect(img).toHaveAttribute('height', '1920');
      expect(img).toHaveAttribute('width', '1200');
    });

    it('img implementation passes through additional attributes', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;
      const attributes = {
        src: '/image.jpg',
        alt: 'Test',
        children: null,
        className: 'custom-class',
        id: 'custom-id',
        'data-custom': 'value',
      };

      const { container } = render(imgImplementation(attributes));
      const img = container.querySelector('[data-testid="next-image"]');

      expect(img).toHaveAttribute('class', 'custom-class');
      expect(img).toHaveAttribute('id', 'custom-id');
      expect(img).toHaveAttribute('data-custom', 'value');
    });

    it('img implementation excludes children attribute', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;
      const attributes = {
        src: '/image.jpg',
        alt: 'Test',
        children: 'Should not appear',
      };

      const { container } = render(imgImplementation(attributes));
      const img = container.querySelector('[data-testid="next-image"]');

      expect(img).not.toHaveAttribute('children');
    });
  });

  describe('Image Optimization Logic', () => {
    it('optimizes images from configured domains', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;

      // Test domain from images.domains
      const { container } = render(
        imgImplementation({
          src: 'https://example.com/image.jpg',
          alt: 'Test',
          children: null,
        })
      );

      const img = container.querySelector('[data-testid="next-image"]');
      expect(img).toHaveAttribute('data-unoptimized', 'false');
    });

    it('optimizes images matching remote patterns', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;

      // Test pattern matching *.cloudinary.com
      const { container } = render(
        imgImplementation({
          src: 'https://res.cloudinary.com/image.jpg',
          alt: 'Test',
          children: null,
        })
      );

      const img = container.querySelector('[data-testid="next-image"]');
      expect(img).toHaveAttribute('data-unoptimized', 'false');
    });

    it('optimizes images matching exact hostname in remote patterns', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;

      // Test exact hostname match
      const { container } = render(
        imgImplementation({
          src: 'https://cdn.example.com/image.jpg',
          alt: 'Test',
          children: null,
        })
      );

      const img = container.querySelector('[data-testid="next-image"]');
      expect(img).toHaveAttribute('data-unoptimized', 'false');
    });

    it('does not optimize images from unconfigured domains', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;

      // Test domain not in config
      const { container } = render(
        imgImplementation({
          src: 'https://unknown-domain.com/image.jpg',
          alt: 'Test',
          children: null,
        })
      );

      const img = container.querySelector('[data-testid="next-image"]');
      expect(img).toHaveAttribute('data-unoptimized', 'true');
    });

    it('optimizes relative path images', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;

      // Test relative path
      const { container } = render(
        imgImplementation({
          src: '/images/local-image.jpg',
          alt: 'Test',
          children: null,
        })
      );

      const img = container.querySelector('[data-testid="next-image"]');
      expect(img).toHaveAttribute('data-unoptimized', 'false');
    });

    it('handles protocol mismatch correctly', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;

      // Test http protocol when pattern expects https
      const { container } = render(
        imgImplementation({
          src: 'http://res.cloudinary.com/image.jpg',
          alt: 'Test',
          children: null,
        })
      );

      const img = container.querySelector('[data-testid="next-image"]');
      // Should be unoptimized because protocol doesn't match
      expect(img).toHaveAttribute('data-unoptimized', 'true');
    });
  });

  describe('Regex Conversion', () => {
    it('handles wildcard patterns correctly', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;

      // Test wildcard subdomain
      const results = [
        'https://sub1.cloudinary.com/image.jpg',
        'https://sub2.cloudinary.com/image.jpg',
        'https://anything.cloudinary.com/image.jpg',
      ];

      results.forEach((src) => {
        const { container } = render(
          imgImplementation({
            src,
            alt: 'Test',
            children: null,
          })
        );

        const img = container.querySelector('[data-testid="next-image"]');
        expect(img).not.toHaveAttribute('unoptimized', 'true');
      });
    });

    it('does not match partial hostnames', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;

      // Should not match because hostname doesn't end with .cloudinary.com
      const { container } = render(
        imgImplementation({
          src: 'https://cloudinary.com.fake.com/image.jpg',
          alt: 'Test',
          children: null,
        })
      );

      const img = container.querySelector('[data-testid="next-image"]');
      expect(img).toHaveAttribute('data-unoptimized', 'true');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty src gracefully', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;

      expect(() => {
        render(
          imgImplementation({
            src: '',
            alt: 'Empty src',
            children: null,
          })
        );
      }).not.toThrow();
    });

    it('handles malformed URLs gracefully', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;

      // Should not throw error for malformed URL
      expect(() => {
        render(
          imgImplementation({
            src: 'not-a-valid-url',
            alt: 'Invalid URL',
            children: null,
          })
        );
      }).not.toThrow();
    });

    it('sets fixed dimensions for all images', () => {
      render(<FEAASScripts />);

      const imgImplementation = mockSetElementImplementation.mock.calls[0][1] as (
        attrs: Record<string, unknown>
      ) => React.ReactElement;
      const { container } = render(
        imgImplementation({
          src: '/image.jpg',
          alt: 'Test',
          children: null,
        })
      );

      const img = container.querySelector('[data-testid="next-image"]');
      expect(img).toHaveAttribute('height', '1920');
      expect(img).toHaveAttribute('width', '1200');
    });
  });
});
