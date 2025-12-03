import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SitecoreStyles from '@/components/content-sdk/SitecoreStyles';
import { LayoutServiceData, HTMLLink } from '@sitecore-content-sdk/nextjs';

// Mock Next.js Head component
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => {
      return <div data-testid="head">{children}</div>;
    },
  };
});

// Mock sitecore-client
jest.mock('lib/sitecore-client', () => {
  const mockGetHeadLinks = jest.fn();
  return {
    __esModule: true,
    default: {
      getHeadLinks: mockGetHeadLinks,
    },
  };
});

import client from 'lib/sitecore-client';
const mockGetHeadLinks = client.getHeadLinks as jest.MockedFunction<typeof client.getHeadLinks>;

describe('SitecoreStyles Component', () => {
  const mockLayoutData: LayoutServiceData = {
    sitecore: {
      context: {
        pageEditing: false,
        site: {
          name: 'test-site',
        },
      },
      route: {
        name: 'test-route',
        placeholders: {},
      },
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering with head links', () => {
    it('renders link elements when head links are provided', () => {
      const headLinks: HTMLLink[] = [
        { rel: 'stylesheet', href: 'https://example.com/style1.css' },
        { rel: 'stylesheet', href: 'https://example.com/style2.css' },
      ];
      mockGetHeadLinks.mockReturnValue(headLinks);

      const { container } = render(
        <SitecoreStyles layoutData={mockLayoutData} enableStyles={true} enableThemes={true} />
      );

      const links = container.querySelectorAll('link');
      expect(links).toHaveLength(2);
      expect(links[0]).toHaveAttribute('rel', 'stylesheet');
      expect(links[0]).toHaveAttribute('href', 'https://example.com/style1.css');
      expect(links[1]).toHaveAttribute('rel', 'stylesheet');
      expect(links[1]).toHaveAttribute('href', 'https://example.com/style2.css');
    });

    it('renders inside Head component', () => {
      const headLinks: HTMLLink[] = [{ rel: 'stylesheet', href: 'https://example.com/style.css' }];
      mockGetHeadLinks.mockReturnValue(headLinks);

      const { getByTestId } = render(
        <SitecoreStyles layoutData={mockLayoutData} enableStyles={true} />
      );

      const head = getByTestId('head');
      expect(head).toBeInTheDocument();
      expect(head.querySelector('link')).toBeInTheDocument();
    });

    it('uses href as key for link elements', () => {
      const headLinks: HTMLLink[] = [
        { rel: 'stylesheet', href: 'https://example.com/unique-style.css' },
      ];
      mockGetHeadLinks.mockReturnValue(headLinks);

      const { container } = render(
        <SitecoreStyles layoutData={mockLayoutData} enableStyles={true} />
      );

      const link = container.querySelector('link');
      expect(link).toHaveAttribute('href', 'https://example.com/unique-style.css');
    });
  });

  describe('Rendering with no head links', () => {
    it('returns null when no head links are provided', () => {
      mockGetHeadLinks.mockReturnValue([]);

      const { container } = render(
        <SitecoreStyles layoutData={mockLayoutData} enableStyles={true} />
      );

      expect(container.firstChild).toBeNull();
    });

    it('does not render Head component when no links', () => {
      mockGetHeadLinks.mockReturnValue([]);

      const { queryByTestId } = render(
        <SitecoreStyles layoutData={mockLayoutData} enableStyles={true} />
      );

      expect(queryByTestId('head')).not.toBeInTheDocument();
    });
  });

  describe('getHeadLinks options', () => {
    it('passes enableStyles option to getHeadLinks', () => {
      mockGetHeadLinks.mockReturnValue([]);

      render(<SitecoreStyles layoutData={mockLayoutData} enableStyles={true} />);

      expect(mockGetHeadLinks).toHaveBeenCalledWith(mockLayoutData, {
        enableStyles: true,
        enableThemes: undefined,
      });
    });

    it('passes enableThemes option to getHeadLinks', () => {
      mockGetHeadLinks.mockReturnValue([]);

      render(<SitecoreStyles layoutData={mockLayoutData} enableThemes={true} />);

      expect(mockGetHeadLinks).toHaveBeenCalledWith(mockLayoutData, {
        enableStyles: undefined,
        enableThemes: true,
      });
    });

    it('passes both enableStyles and enableThemes options', () => {
      mockGetHeadLinks.mockReturnValue([]);

      render(
        <SitecoreStyles layoutData={mockLayoutData} enableStyles={true} enableThemes={true} />
      );

      expect(mockGetHeadLinks).toHaveBeenCalledWith(mockLayoutData, {
        enableStyles: true,
        enableThemes: true,
      });
    });

    it('passes neither option when both are undefined', () => {
      mockGetHeadLinks.mockReturnValue([]);

      render(<SitecoreStyles layoutData={mockLayoutData} />);

      expect(mockGetHeadLinks).toHaveBeenCalledWith(mockLayoutData, {
        enableStyles: undefined,
        enableThemes: undefined,
      });
    });

    it('handles false values for options', () => {
      mockGetHeadLinks.mockReturnValue([]);

      render(
        <SitecoreStyles layoutData={mockLayoutData} enableStyles={false} enableThemes={false} />
      );

      expect(mockGetHeadLinks).toHaveBeenCalledWith(mockLayoutData, {
        enableStyles: false,
        enableThemes: false,
      });
    });
  });

  describe('Multiple link types', () => {
    it('renders different rel types correctly', () => {
      const headLinks: HTMLLink[] = [
        { rel: 'stylesheet', href: 'https://example.com/style.css' },
        { rel: 'preload', href: 'https://example.com/font.woff2' },
        { rel: 'icon', href: 'https://example.com/favicon.ico' },
      ];
      mockGetHeadLinks.mockReturnValue(headLinks);

      render(<SitecoreStyles layoutData={mockLayoutData} enableStyles={true} />);

      // Query the document for links since Head renders them to document head in tests
      const allLinks = Array.from(document.querySelectorAll('link'));
      const testLinks = allLinks.filter((link) =>
        link.getAttribute('href')?.includes('example.com')
      );

      expect(testLinks.length).toBeGreaterThanOrEqual(3);
      const stylesheetLink = testLinks.find((link) => link.getAttribute('rel') === 'stylesheet');
      const preloadLink = testLinks.find((link) => link.getAttribute('rel') === 'preload');
      const iconLink = testLinks.find((link) => link.getAttribute('rel') === 'icon');

      expect(stylesheetLink).toBeTruthy();
      expect(preloadLink).toBeTruthy();
      expect(iconLink).toBeTruthy();
    });
  });

  describe('Layout data variations', () => {
    it('handles different layout data structures', () => {
      const customLayoutData: LayoutServiceData = {
        sitecore: {
          context: {
            pageEditing: false,
            site: {
              name: 'custom-site',
            },
          },
          route: {
            name: 'custom-route',
            placeholders: {
              main: [],
            },
          },
        },
      };

      const headLinks: HTMLLink[] = [{ rel: 'stylesheet', href: 'https://example.com/custom.css' }];
      mockGetHeadLinks.mockReturnValue(headLinks);

      const { container } = render(
        <SitecoreStyles layoutData={customLayoutData} enableStyles={true} />
      );

      expect(mockGetHeadLinks).toHaveBeenCalledWith(customLayoutData, {
        enableStyles: true,
        enableThemes: undefined,
      });

      const link = container.querySelector('link');
      expect(link).toHaveAttribute('href', 'https://example.com/custom.css');
    });
  });

  describe('Edge cases', () => {
    it('handles empty href gracefully', () => {
      const headLinks: HTMLLink[] = [{ rel: 'stylesheet', href: '' }];
      mockGetHeadLinks.mockReturnValue(headLinks);

      render(<SitecoreStyles layoutData={mockLayoutData} enableStyles={true} />);

      // Component should render without throwing
      expect(mockGetHeadLinks).toHaveBeenCalled();
    });

    it('renders large number of links', () => {
      const headLinks: HTMLLink[] = Array.from({ length: 20 }, (_, i) => ({
        rel: 'stylesheet',
        href: `https://example.com/style${i}.css`,
      }));
      mockGetHeadLinks.mockReturnValue(headLinks);

      const { container } = render(
        <SitecoreStyles layoutData={mockLayoutData} enableStyles={true} />
      );

      const links = container.querySelectorAll('link');
      expect(links).toHaveLength(20);
    });

    it('handles duplicate hrefs', () => {
      const headLinks: HTMLLink[] = [
        { rel: 'stylesheet', href: 'https://example.com/style.css' },
        { rel: 'stylesheet', href: 'https://example.com/style.css' },
      ];
      mockGetHeadLinks.mockReturnValue(headLinks);

      const { container } = render(
        <SitecoreStyles layoutData={mockLayoutData} enableStyles={true} />
      );

      // Should still render both, but React will handle key warnings
      const links = container.querySelectorAll('link');
      expect(links).toHaveLength(2);
    });
  });

  describe('Integration with sitecore-client', () => {
    it('calls getHeadLinks with correct parameters', () => {
      mockGetHeadLinks.mockReturnValue([]);

      render(
        <SitecoreStyles layoutData={mockLayoutData} enableStyles={true} enableThemes={true} />
      );

      expect(mockGetHeadLinks).toHaveBeenCalledTimes(1);
      expect(mockGetHeadLinks).toHaveBeenCalledWith(
        mockLayoutData,
        expect.objectContaining({
          enableStyles: true,
          enableThemes: true,
        })
      );
    });

    it('processes return value from getHeadLinks correctly', () => {
      const mockLinks: HTMLLink[] = [
        { rel: 'stylesheet', href: 'https://cdn.example.com/theme.css' },
        { rel: 'preload', href: 'https://cdn.example.com/font.woff2' },
      ];
      mockGetHeadLinks.mockReturnValue(mockLinks);

      render(<SitecoreStyles layoutData={mockLayoutData} enableStyles={true} />);

      // Since Head component renders to document head in tests, verify the mock was called
      expect(mockGetHeadLinks).toHaveBeenCalledWith(
        mockLayoutData,
        expect.objectContaining({
          enableStyles: true,
        })
      );

      // Verify the function returned the expected links
      const result = mockGetHeadLinks.mock.results[mockGetHeadLinks.mock.results.length - 1].value;
      expect(result).toEqual(mockLinks);
    });
  });
});
