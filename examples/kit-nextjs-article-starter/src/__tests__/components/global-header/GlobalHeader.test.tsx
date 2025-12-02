import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Default as GlobalHeader } from '@/components/global-header/GlobalHeader';
import {
  defaultProps,
  propsWithoutLogo,
  propsWithoutLinks,
  propsWithoutContact,
  propsWithEmptyItem,
  mockPageData,
  mockPageDataEditing,
} from './GlobalHeader.mockProps';

// Mock the cn utility
jest.mock('@/lib/utils', () => ({
  cn: (...args: any[]) => {
    return args
      .flat()
      .filter(Boolean)
      .map((arg) => {
        if (typeof arg === 'string') return arg;
        if (typeof arg === 'object') {
          return Object.keys(arg)
            .filter((key) => arg[key])
            .join(' ');
        }
        return '';
      })
      .join(' ')
      .trim();
  },
}));

// Mock the useSitecore hook
const mockUseSitecore = jest.fn();
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  useSitecore: () => mockUseSitecore(),
  Link: ({ field, children }: any) => {
    if (!field?.value?.href) return null;
    return React.createElement('a', { href: field.value.href }, field.value.text || children);
  },
  Image: ({ field, className }: any) => {
    if (!field?.value?.src) return null;
    return React.createElement('img', {
      src: field.value.src,
      alt: field.value.alt,
      className,
      'data-testid': 'header-logo-image',
    });
  },
}));

// Mock Next.js Link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => {
    return React.createElement('a', { href }, children);
  },
}));

// Mock the Logo component
jest.mock('@/components/logo/Logo.dev', () => ({
  Default: ({ logo, className }: any) => (
    <div data-testid="logo-component" className={className}>
      <img src={logo?.value?.src} alt={logo?.value?.alt} />
    </div>
  ),
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    header: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('header', { ...props, ref }, children)
    ),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock lucide-react
jest.mock('lucide-react', () => ({
  Menu: () => React.createElement('div', { 'data-testid': 'menu-icon' }, 'Menu'),
}));

// Mock UI components
jest.mock('@/components/ui/navigation-menu', () => ({
  NavigationMenu: ({ children }: any) => (
    <nav data-testid="navigation-menu">{children}</nav>
  ),
  NavigationMenuList: ({ children }: any) => <ul data-testid="nav-menu-list">{children}</ul>,
  NavigationMenuItem: ({ children }: any) => <li data-testid="nav-menu-item">{children}</li>,
}));

jest.mock('@/components/ui/button', () => ({
  Button: React.forwardRef(
    ({ children, variant, size, asChild, className, onClick, ...props }: any, ref: any) => {
      const buttonProps = {
        ...props,
        ref,
        className,
        onClick,
        'data-variant': variant,
        'data-size': size,
        'data-as-child': asChild,
      };
      return React.createElement('button', buttonProps, children);
    }
  ),
}));

jest.mock('@/components/ui/sheet', () => ({
  Sheet: ({ children, open, onOpenChange }: any) => (
    <div data-testid="sheet" data-open={open}>
      {children}
    </div>
  ),
  SheetTrigger: React.forwardRef(({ children, asChild, ...props }: any, ref: any) =>
    React.createElement('div', { ...props, ref, 'data-testid': 'sheet-trigger' }, children)
  ),
  SheetContent: ({ children, side }: any) => (
    <div data-testid="sheet-content" data-side={side}>
      {children}
    </div>
  ),
}));

describe('GlobalHeader Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseSitecore.mockReturnValue(mockPageData);
    
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });

    // Mock addEventListener
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');
  });

  describe('Basic rendering', () => {
    it('should render header with all fields in normal mode', () => {
      render(<GlobalHeader {...defaultProps} />);

      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByTestId('logo-component')).toBeInTheDocument();
      expect(screen.getByTestId('navigation-menu')).toBeInTheDocument();
    });

    it('should render header as a header element', () => {
      const { container } = render(<GlobalHeader {...defaultProps} />);

      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('sticky', 'top-0', 'z-50');
    });

    it('should render logo in Link component when not editing', () => {
      render(<GlobalHeader {...defaultProps} />);

      const logo = screen.getByTestId('logo-component');
      expect(logo).toBeInTheDocument();
      
      const logoLink = logo.closest('a');
      expect(logoLink).toHaveAttribute('href', '/');
    });

    it('should render logo as Image when in editing mode', () => {
      mockUseSitecore.mockReturnValue(mockPageDataEditing);
      render(<GlobalHeader {...defaultProps} />);

      expect(screen.getByTestId('header-logo-image')).toBeInTheDocument();
    });

    it('should not render logo link when logo value is missing', () => {
      render(<GlobalHeader {...propsWithoutLogo} />);

      expect(screen.queryByTestId('logo-component')).not.toBeInTheDocument();
    });
  });

  describe('Desktop navigation', () => {
    it('should render all navigation links', () => {
      render(<GlobalHeader {...defaultProps} />);

      // Links appear in both desktop and mobile navigation
      expect(screen.getAllByText('About').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Blog').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
    });

    it('should render navigation links with correct hrefs', () => {
      const { container } = render(<GlobalHeader {...defaultProps} />);

      const aboutLinks = screen.getAllByText('About');
      const servicesLinks = screen.getAllByText('Services');
      
      const aboutLink = aboutLinks[0].closest('a');
      const servicesLink = servicesLinks[0].closest('a');
      
      expect(aboutLink).toHaveAttribute('href', '/about');
      expect(servicesLink).toHaveAttribute('href', '/services');
    });

    it('should render navigation with ghost button variant', () => {
      const { container } = render(<GlobalHeader {...defaultProps} />);

      const buttons = container.querySelectorAll('[data-variant="ghost"]');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('should render header contact CTA button', () => {
      render(<GlobalHeader {...defaultProps} />);

      const ctaButtons = screen.getAllByText('Get Started');
      expect(ctaButtons.length).toBeGreaterThanOrEqual(1);
      
      // Check desktop CTA
      const ctaLink = ctaButtons[0].closest('a');
      expect(ctaLink).toHaveAttribute('href', '/get-started');
    });

    it('should not render CTA when headerContact is missing', () => {
      render(<GlobalHeader {...propsWithoutContact} />);

      expect(screen.queryByText('Get Started')).not.toBeInTheDocument();
    });

    it('should handle empty navigation links', () => {
      render(<GlobalHeader {...propsWithoutLinks} />);

      expect(screen.getByTestId('navigation-menu')).toBeInTheDocument();
      expect(screen.queryByText('About')).not.toBeInTheDocument();
    });
  });

  describe('Mobile navigation', () => {
    it('should render mobile menu trigger', () => {
      render(<GlobalHeader {...defaultProps} />);

      expect(screen.getByTestId('sheet-trigger')).toBeInTheDocument();
      expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
    });

    it('should render Sheet component for mobile menu', () => {
      render(<GlobalHeader {...defaultProps} />);

      expect(screen.getByTestId('sheet')).toBeInTheDocument();
      expect(screen.getByTestId('sheet-content')).toBeInTheDocument();
    });

    it('should render Sheet content on the right side', () => {
      render(<GlobalHeader {...defaultProps} />);

      const sheetContent = screen.getByTestId('sheet-content');
      expect(sheetContent).toHaveAttribute('data-side', 'right');
    });

    it('should render navigation links in mobile menu', () => {
      render(<GlobalHeader {...defaultProps} />);

      // All links appear twice - once in desktop nav, once in mobile nav
      const aboutLinks = screen.getAllByText('About');
      expect(aboutLinks.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Editing mode behavior', () => {
    it('should render Sitecore Link components in editing mode', () => {
      mockUseSitecore.mockReturnValue(mockPageDataEditing);
      render(<GlobalHeader {...defaultProps} />);

      // In editing mode, links are rendered differently
      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByTestId('header-logo-image')).toBeInTheDocument();
    });

    it('should render CTA with Sitecore Link in editing mode', () => {
      mockUseSitecore.mockReturnValue(mockPageDataEditing);
      render(<GlobalHeader {...defaultProps} />);

      const ctaButtons = screen.getAllByText('Get Started');
      expect(ctaButtons.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Scroll behavior', () => {
    it('should add scroll event listener on mount', () => {
      render(<GlobalHeader {...defaultProps} />);

      expect(window.addEventListener).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        { passive: true }
      );
    });

    it('should remove scroll event listener on unmount', () => {
      const { unmount } = render(<GlobalHeader {...defaultProps} />);

      unmount();

      expect(window.removeEventListener).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function)
      );
    });
  });

  describe('Component structure', () => {
    it('should apply container query classes', () => {
      const { container } = render(<GlobalHeader {...defaultProps} />);

      const header = container.querySelector('header');
      expect(header).toHaveClass('@container');
    });

    it('should apply correct height class', () => {
      const { container } = render(<GlobalHeader {...defaultProps} />);

      const header = container.querySelector('header');
      expect(header).toHaveClass('h-[96px]');
    });

    it('should apply responsive padding classes', () => {
      const { container } = render(<GlobalHeader {...defaultProps} />);

      const innerContainer = container.querySelector('.px-4');
      expect(innerContainer).toBeInTheDocument();
      expect(innerContainer).toHaveClass('@xl:px-8', 'max-w-screen-xl');
    });

    it('should apply sticky positioning', () => {
      const { container } = render(<GlobalHeader {...defaultProps} />);

      const header = container.querySelector('header');
      expect(header).toHaveClass('sticky', 'top-0', 'z-50');
    });
  });

  describe('Edge cases and fallbacks', () => {
    it('should handle undefined fields gracefully', () => {
      const propsWithUndefinedFields = {
        ...defaultProps,
        fields: undefined as any,
      };

      render(<GlobalHeader {...propsWithUndefinedFields} />);

      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('should handle empty item data', () => {
      render(<GlobalHeader {...propsWithEmptyItem} />);

      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.queryByTestId('logo-component')).not.toBeInTheDocument();
    });

    it('should handle missing children results', () => {
      const propsWithoutChildren = {
        ...defaultProps,
        fields: {
          data: {
            item: {
              logo: defaultProps.fields.data.item.logo,
              children: {} as any,
              headerContact: defaultProps.fields.data.item.headerContact,
            },
          },
        },
      };

      render(<GlobalHeader {...propsWithoutChildren} />);

      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.queryByText('About')).not.toBeInTheDocument();
    });
  });

  describe('CSS classes and styling', () => {
    it('should apply background and border classes', () => {
      const { container } = render(<GlobalHeader {...defaultProps} />);

      const header = container.querySelector('header');
      expect(header).toHaveClass('bg-background', 'border-b');
    });

    it('should apply responsive flex classes to desktop nav', () => {
      const { container } = render(<GlobalHeader {...defaultProps} />);

      // Check for the class by looking at the element's className
      const desktopNav = Array.from(container.querySelectorAll('div')).find(
        (div) => div.className && div.className.includes('@lg:flex')
      );
      expect(desktopNav).toBeTruthy();
    });

    it('should hide mobile nav on large screens', () => {
      const { container } = render(<GlobalHeader {...defaultProps} />);

      // Check for the class by looking at the element's className
      const mobileNav = Array.from(container.querySelectorAll('div')).find(
        (div) => div.className && div.className.includes('@lg:hidden')
      );
      expect(mobileNav).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should render header with banner role', () => {
      render(<GlobalHeader {...defaultProps} />);

      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('should provide sr-only text for menu button', () => {
      const { container } = render(<GlobalHeader {...defaultProps} />);

      const srText = container.querySelector('.sr-only');
      expect(srText).toBeInTheDocument();
      expect(srText).toHaveTextContent('Toggle menu');
    });

    it('should render navigation as nav element', () => {
      render(<GlobalHeader {...defaultProps} />);

      expect(screen.getByTestId('navigation-menu')).toBeInTheDocument();
    });
  });
});

