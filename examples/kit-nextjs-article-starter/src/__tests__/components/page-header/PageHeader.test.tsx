import React from 'react';
import { render, screen } from '@testing-library/react';
import { Default as PageHeader } from '@/components/page-header/PageHeader';
import {
  defaultProps,
  propsPrimaryColorScheme,
  propsSecondaryColorScheme,
  propsWithDarkIcon,
  propsWithoutVideo,
  propsWithoutLogos,
  propsWithPageTitle,
  propsWithoutSubtitle,
  propsWithoutFields,
} from './PageHeader.mockProps';

// Mock dependencies
jest.mock('@/lib/utils', () => ({
  cn: (...args: any[]) => {
    return args
      .flat(2)
      .filter(Boolean)
      .map((arg) => {
        if (typeof arg === 'string') return arg;
        if (typeof arg === 'object' && !Array.isArray(arg)) {
          return Object.entries(arg)
            .filter(([, value]) => Boolean(value))
            .map(([key]) => key)
            .join(' ');
        }
        return '';
      })
      .filter(Boolean)
      .join(' ')
      .trim();
  },
}));

jest.mock('class-variance-authority', () => ({
  cva: (base: string, config: any) => {
    return (props: any) => {
      let classes = base;
      if (config?.variants && props) {
        Object.keys(props).forEach((key) => {
          if (config.variants[key] && config.variants[key][props[key]]) {
            classes += ' ' + config.variants[key][props[key]];
          }
        });
      }
      return classes;
    };
  },
}));

jest.mock('@sitecore-content-sdk/nextjs', () => ({
  Text: ({ field, tag, className }: any) => {
    const Tag = tag || 'span';
    return React.createElement(Tag, { className }, field?.value || '');
  },
  RichText: ({ field, className }: any) =>
    React.createElement('div', {
      className,
      dangerouslySetInnerHTML: { __html: field?.value || '' },
    }),
  useSitecore: () => ({
    page: {
      mode: {
        isEditing: false,
      },
    },
  }),
}));

jest.mock('@/components/image/ImageWrapper.dev', () => ({
  Default: ({ image }: any) => (
    <div data-testid="image-wrapper">
      <img src={image?.value?.src} alt={image?.value?.alt} />
    </div>
  ),
}));

jest.mock('@/components/animated-section/AnimatedSection.dev', () => ({
  Default: ({ children, className }: any) => (
    <div data-testid="animated-section" className={className}>
      {children}
    </div>
  ),
}));

jest.mock('@/components/video/Video', () => ({
  VideoBase: ({ fields, params, playButtonClassName }: any) => (
    <div data-testid="video-component" data-dark-icon={params?.darkPlayIcon}>
      <img src={fields?.image?.value?.src} alt={fields?.image?.value?.alt} />
      <a href={fields?.video?.value?.href} className={playButtonClassName}>
        Play
      </a>
    </div>
  ),
}));

jest.mock('@/utils/NoDataFallback', () => ({
  NoDataFallback: ({ componentName }: any) => (
    <div data-testid="no-data-fallback">{componentName}</div>
  ),
}));

// Mock window.matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe('PageHeader Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic rendering', () => {
    it('should render with all fields', () => {
      render(<PageHeader {...defaultProps} />);

      expect(screen.getByText('Custom Header Title')).toBeInTheDocument();
      expect(screen.getByTestId('video-component')).toBeInTheDocument();
      expect(screen.getByText('Trusted by industry leaders')).toBeInTheDocument();
    });

    it('should render as section element', () => {
      const { container } = render(<PageHeader {...defaultProps} />);

      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should render title in h1 tag', () => {
      const { container } = render(<PageHeader {...defaultProps} />);

      const heading = container.querySelector('h1');
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Custom Header Title');
    });

    it('should render subtitle as RichText', () => {
      const { container } = render(<PageHeader {...defaultProps} />);

      expect(container.textContent).toContain(
        'Discover innovative solutions that transform your business'
      );
    });

    it('should render video component when video URL is provided', () => {
      render(<PageHeader {...defaultProps} />);

      const videoComponent = screen.getByTestId('video-component');
      expect(videoComponent).toBeInTheDocument();
    });

    it('should render partner logos', () => {
      const { container } = render(<PageHeader {...defaultProps} />);

      const images = container.querySelectorAll('img');
      const logos = Array.from(images).filter((img) =>
        img.getAttribute('alt')?.includes('Partner Logo')
      );
      expect(logos.length).toBe(3);
    });
  });

  describe('Component structure', () => {
    it('should apply container classes', () => {
      const { container } = render(<PageHeader {...defaultProps} />);

      const section = container.querySelector('section');
      expect(section).toHaveClass('@container', 'my-10', 'flex', 'flex-col');
    });

    it('should render grid layout', () => {
      const { container } = render(<PageHeader {...defaultProps} />);

      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1');
    });

    it('should render animated sections', () => {
      render(<PageHeader {...defaultProps} />);

      const animatedSections = screen.getAllByTestId('animated-section');
      expect(animatedSections.length).toBeGreaterThan(0);
    });
  });

  describe('Color schemes', () => {
    it('should apply default color scheme', () => {
      const { container } = render(<PageHeader {...defaultProps} />);

      const section = container.querySelector('section');
      expect(section).not.toHaveClass('bg-primary', 'bg-secondary');
    });

    it('should apply primary color scheme', () => {
      const { container } = render(<PageHeader {...propsPrimaryColorScheme} />);

      const section = container.querySelector('section');
      expect(section).toHaveClass('bg-primary', 'text-primary-foreground');
    });

    it('should apply secondary color scheme', () => {
      const { container } = render(<PageHeader {...propsSecondaryColorScheme} />);

      const section = container.querySelector('section');
      expect(section).toHaveClass('bg-secondary', 'text-secondary-foreground');
    });
  });

  describe('Video and image rendering', () => {
    it('should render video component with dark play icon when specified', () => {
      render(<PageHeader {...propsWithDarkIcon} />);

      const videoComponent = screen.getByTestId('video-component');
      expect(videoComponent).toHaveAttribute('data-dark-icon', '1');
    });

    it('should render image wrapper when no video URL is provided', () => {
      render(<PageHeader {...propsWithoutVideo} />);

      expect(screen.queryByTestId('video-component')).not.toBeInTheDocument();
      const imageWrappers = screen.getAllByTestId('image-wrapper');
      expect(imageWrappers.length).toBeGreaterThan(0);
    });

    it('should render image with proper attributes', () => {
      const { container } = render(<PageHeader {...propsWithoutVideo} />);

      const img = container.querySelector('img[alt="Page Header Image"]');
      expect(img).toHaveAttribute('src', '/images/page-header.jpg');
    });
  });

  describe('Title handling', () => {
    it('should prioritize pageHeaderTitle over pageTitle', () => {
      const { container } = render(<PageHeader {...defaultProps} />);

      const heading = container.querySelector('h1');
      expect(heading).toHaveTextContent('Custom Header Title');
      expect(heading).not.toHaveTextContent('Welcome to Our Platform');
    });

    it('should fallback to pageTitle when pageHeaderTitle is not available', () => {
      const { container } = render(<PageHeader {...propsWithPageTitle} />);

      const heading = container.querySelector('h1');
      expect(heading).toHaveTextContent('Welcome to Our Platform');
    });
  });

  describe('Optional fields', () => {
    it('should render without logos section', () => {
      render(<PageHeader {...propsWithoutLogos} />);

      expect(screen.getByText('Custom Header Title')).toBeInTheDocument();
      expect(screen.queryByText('Trusted by industry leaders')).not.toBeInTheDocument();
    });

    it('should render without subtitle', () => {
      render(<PageHeader {...propsWithoutSubtitle} />);

      expect(screen.getByText('Custom Header Title')).toBeInTheDocument();
      const { container } = render(<PageHeader {...propsWithoutSubtitle} />);
      expect(container.textContent).not.toContain('Discover innovative solutions');
    });
  });

  describe('Edge cases', () => {
    it('should render NoDataFallback when fields is null', () => {
      render(<PageHeader {...propsWithoutFields} />);

      const fallback = screen.getByTestId('no-data-fallback');
      expect(fallback).toBeInTheDocument();
      expect(fallback).toHaveTextContent('PageHeader');
    });

    it('should render NoDataFallback when fields is undefined', () => {
      const propsWithUndefinedFields = {
        ...defaultProps,
        fields: undefined as any,
      };

      render(<PageHeader {...propsWithUndefinedFields} />);

      const fallback = screen.getByTestId('no-data-fallback');
      expect(fallback).toBeInTheDocument();
    });
  });

  describe('Logo rendering', () => {
    it('should render logo text', () => {
      render(<PageHeader {...defaultProps} />);

      expect(screen.getByText('Trusted by industry leaders')).toBeInTheDocument();
    });

    it('should render all partner logos', () => {
      const { container } = render(<PageHeader {...defaultProps} />);

      const logoImages = Array.from(container.querySelectorAll('img')).filter((img) =>
        img.getAttribute('alt')?.includes('Partner Logo')
      );

      expect(logoImages).toHaveLength(3);
      expect(logoImages[0]).toHaveAttribute('src', '/images/logo-1.png');
      expect(logoImages[1]).toHaveAttribute('src', '/images/logo-2.png');
      expect(logoImages[2]).toHaveAttribute('src', '/images/logo-3.png');
    });

    it('should render logos in flex container', () => {
      const { container } = render(<PageHeader {...defaultProps} />);

      const logoContainer = container.querySelector('.flex.flex-nowrap');
      expect(logoContainer).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should render title with semantic h1 tag', () => {
      const { container } = render(<PageHeader {...defaultProps} />);

      const heading = container.querySelector('h1');
      expect(heading).toBeInTheDocument();
    });

    it('should render images with alt text', () => {
      const { container } = render(<PageHeader {...defaultProps} />);

      const images = container.querySelectorAll('img');
      images.forEach((img) => {
        expect(img).toHaveAttribute('alt');
      });
    });
  });

  describe('Reduced motion', () => {
    it('should detect prefers-reduced-motion media query', () => {
      const matchMediaMock = jest.fn().mockImplementation((query) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));

      window.matchMedia = matchMediaMock;

      render(<PageHeader {...defaultProps} />);

      expect(matchMediaMock).toHaveBeenCalledWith('(prefers-reduced-motion: reduce)');
    });
  });
});

