import { Field, LinkField, ImageField } from '@sitecore-content-sdk/nextjs';
import { TextBannerProps } from '@/components/text-banner/text-banner.props';

// Mock fields
export const mockHeading: Field<string> = {
  value: 'Welcome to Our Platform',
};

export const mockDescription: Field<string> = {
  value: 'Discover amazing features and benefits that will transform your experience',
};

export const mockLink: LinkField = {
  value: {
    href: '/learn-more',
    text: 'Learn More',
    linktype: 'internal',
    url: '/learn-more',
  },
};

export const mockLink2: LinkField = {
  value: {
    href: '/get-started',
    text: 'Get Started',
    linktype: 'internal',
    url: '/get-started',
  },
};

export const mockImage: ImageField = {
  value: {
    src: '/images/banner-background.jpg',
    alt: 'Banner Background',
    width: 1920,
    height: 600,
  },
};

// Default props with all fields
export const defaultProps: TextBannerProps = {
  fields: {
    heading: mockHeading,
    description: mockDescription,
    link: mockLink,
    link2: mockLink2,
    image: mockImage,
  },
  params: {
    theme: 'primary',
  },
  rendering: { componentName: 'TextBanner' } as any,
};

// Props without image
export const propsWithoutImage: TextBannerProps = {
  fields: {
    heading: mockHeading,
    description: mockDescription,
    link: mockLink,
    link2: mockLink2,
  },
  params: {
    theme: 'primary',
  },
  rendering: { componentName: 'TextBanner' } as any,
};

// Props with single link
export const propsWithSingleLink: TextBannerProps = {
  fields: {
    heading: mockHeading,
    description: mockDescription,
    link: mockLink,
  },
  params: {},
  rendering: { componentName: 'TextBanner' } as any,
};

// Props without links
export const propsWithoutLinks: TextBannerProps = {
  fields: {
    heading: mockHeading,
    description: mockDescription,
  },
  params: {},
  rendering: { componentName: 'TextBanner' } as any,
};

// Props without description
export const propsWithoutDescription: TextBannerProps = {
  fields: {
    heading: mockHeading,
    link: mockLink,
  },
  params: {},
  rendering: { componentName: 'TextBanner' } as any,
};

// Props with theme variants
export const propsWithSecondaryTheme: TextBannerProps = {
  fields: {
    heading: mockHeading,
    description: mockDescription,
    link: mockLink,
  },
  params: {
    theme: 'secondary',
  },
  rendering: { componentName: 'TextBanner' } as any,
};

export const propsWithDarkTheme: TextBannerProps = {
  fields: {
    heading: mockHeading,
    description: mockDescription,
    link: mockLink,
  },
  params: {
    theme: 'dark',
  },
  rendering: { componentName: 'TextBanner' } as any,
};

export const propsWithLightTheme: TextBannerProps = {
  fields: {
    heading: mockHeading,
    description: mockDescription,
    link: mockLink,
  },
  params: {
    theme: 'light',
  },
  rendering: { componentName: 'TextBanner' } as any,
};

export const propsWithMutedTheme: TextBannerProps = {
  fields: {
    heading: mockHeading,
    description: mockDescription,
    link: mockLink,
  },
  params: {
    theme: 'muted',
  },
  rendering: { componentName: 'TextBanner' } as any,
};

export const propsWithAccentTheme: TextBannerProps = {
  fields: {
    heading: mockHeading,
    description: mockDescription,
    link: mockLink,
  },
  params: {
    theme: 'accent',
  },
  rendering: { componentName: 'TextBanner' } as any,
};

// Props with exclude top margin
export const propsWithExcludeTopMargin: TextBannerProps = {
  fields: {
    heading: mockHeading,
    description: mockDescription,
    link: mockLink,
  },
  params: {
    excludeTopMargin: '1',
  },
  rendering: { componentName: 'TextBanner' } as any,
};

// Props with custom styles
export const propsWithCustomStyles: TextBannerProps = {
  fields: {
    heading: mockHeading,
    description: mockDescription,
    link: mockLink,
  },
  params: {
    styles: 'custom-banner-styles',
  },
  rendering: { componentName: 'TextBanner' } as any,
};

// Props with empty heading
export const propsWithEmptyHeading: TextBannerProps = {
  fields: {
    heading: { value: '' },
    description: mockDescription,
    link: mockLink,
  },
  params: {},
  rendering: { componentName: 'TextBanner' } as any,
};

// Props without fields (null scenario)
export const propsWithoutFields: TextBannerProps = {
  fields: null as any,
  params: {},
  rendering: { componentName: 'TextBanner' } as any,
};

// Props with undefined fields
export const propsWithUndefinedFields: TextBannerProps = {
  fields: undefined as any,
  params: {},
  rendering: { componentName: 'TextBanner' } as any,
};

// Props for editing mode
export const propsInEditingMode: TextBannerProps = {
  fields: {
    heading: mockHeading,
    description: mockDescription,
    link: mockLink,
    link2: mockLink2,
  },
  params: {},
  isPageEditing: true,
  rendering: { componentName: 'TextBanner' } as any,
};

