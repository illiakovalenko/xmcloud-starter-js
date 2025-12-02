import { ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import { GlobalHeaderProps } from '@/components/global-header/global-header.props';

// Mock page data for useSitecore hook
export const mockPageData = {
  page: {
    mode: {
      isEditing: false,
    },
  },
};

export const mockPageDataEditing = {
  page: {
    mode: {
      isEditing: true,
    },
  },
};

// Mock logo field
export const mockLogo: ImageField = {
  value: {
    src: '/images/header-logo.svg',
    alt: 'Company Logo',
    width: 164,
    height: 40,
  },
};

// Mock navigation links
export const mockNavLink1: LinkField = {
  value: {
    href: '/about',
    text: 'About',
    title: 'About Us',
    target: '',
    linktype: 'internal',
  },
};

export const mockNavLink2: LinkField = {
  value: {
    href: '/services',
    text: 'Services',
    title: 'Our Services',
    target: '',
    linktype: 'internal',
  },
};

export const mockNavLink3: LinkField = {
  value: {
    href: '/blog',
    text: 'Blog',
    title: 'Read our blog',
    target: '',
    linktype: 'internal',
  },
};

export const mockNavLink4: LinkField = {
  value: {
    href: '/contact',
    text: 'Contact',
    title: 'Contact Us',
    target: '',
    linktype: 'internal',
  },
};

// Mock header contact link
export const mockHeaderContact: LinkField = {
  value: {
    href: '/get-started',
    text: 'Get Started',
    title: 'Get Started',
    target: '',
    linktype: 'internal',
  },
};

// Complete fields data
export const mockFields = {
  data: {
    item: {
      logo: {
        jsonValue: mockLogo,
      },
      children: {
        results: [
          { link: { jsonValue: mockNavLink1 } },
          { link: { jsonValue: mockNavLink2 } },
          { link: { jsonValue: mockNavLink3 } },
          { link: { jsonValue: mockNavLink4 } },
        ],
      },
      headerContact: {
        jsonValue: mockHeaderContact,
      },
    },
  },
};

export const mockFieldsWithoutLogo = {
  data: {
    item: {
      logo: {
        jsonValue: { value: undefined } as any,
      },
      children: {
        results: [
          { link: { jsonValue: mockNavLink1 } },
          { link: { jsonValue: mockNavLink2 } },
        ],
      },
      headerContact: {
        jsonValue: mockHeaderContact,
      },
    },
  },
};

export const mockFieldsWithoutLinks = {
  data: {
    item: {
      logo: {
        jsonValue: mockLogo,
      },
      children: {
        results: [],
      },
      headerContact: {
        jsonValue: mockHeaderContact,
      },
    },
  },
};

export const mockFieldsWithoutContact = {
  data: {
    item: {
      logo: {
        jsonValue: mockLogo,
      },
      children: {
        results: [
          { link: { jsonValue: mockNavLink1 } },
          { link: { jsonValue: mockNavLink2 } },
        ],
      },
      headerContact: {
        jsonValue: { value: undefined } as any,
      },
    },
  },
};

export const mockFieldsWithEmptyItem = {
  data: {
    item: {
      logo: {
        jsonValue: undefined as any,
      },
      children: {
        results: [] as any,
      },
      headerContact: {
        jsonValue: undefined as any,
      },
    },
  },
};

// Complete props combinations
export const defaultProps: GlobalHeaderProps = {
  params: {
    styles: 'custom-header-style',
    RenderingIdentifier: 'header-rendering-id',
  },
  fields: mockFields as any,
  rendering: { 
    componentName: 'GlobalHeader',
    uid: 'header-uid',
  } as any,
};

export const propsWithoutLogo: GlobalHeaderProps = {
  params: {
    RenderingIdentifier: 'header-rendering-id',
  },
  fields: mockFieldsWithoutLogo as any,
  rendering: { componentName: 'GlobalHeader' } as any,
};

export const propsWithoutLinks: GlobalHeaderProps = {
  params: {
    RenderingIdentifier: 'header-rendering-id',
  },
  fields: mockFieldsWithoutLinks as any,
  rendering: { componentName: 'GlobalHeader' } as any,
};

export const propsWithoutContact: GlobalHeaderProps = {
  params: {
    RenderingIdentifier: 'header-rendering-id',
  },
  fields: mockFieldsWithoutContact as any,
  rendering: { componentName: 'GlobalHeader' } as any,
};

export const propsWithEmptyItem: GlobalHeaderProps = {
  params: {
    RenderingIdentifier: 'header-rendering-id',
  },
  fields: mockFieldsWithEmptyItem as any,
  rendering: { componentName: 'GlobalHeader' } as any,
};

export const propsWithoutFields: GlobalHeaderProps = {
  params: {
    RenderingIdentifier: 'header-rendering-id',
  },
  fields: null as any,
  rendering: { componentName: 'GlobalHeader' } as any,
};

export const propsEditing: GlobalHeaderProps = {
  ...defaultProps,
};

