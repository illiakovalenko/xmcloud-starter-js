import { Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import { GlobalFooterProps, FooterSocialLink } from '@/components/global-footer/global-footer.props';

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
export const mockFooterLogo: ImageField = {
  value: {
    src: '/images/footer-logo.svg',
    alt: 'Footer Logo',
    width: 121,
    height: 40,
  },
};

// Mock text fields
export const mockFooterPromoTitle: Field<string> = {
  value: 'Stay Connected',
};

export const mockFooterPromoDescription: Field<string> = {
  value: 'Subscribe to our newsletter for updates',
};

export const mockFooterCopyright: Field<string> = {
  value: '© 2024 Company Name. All rights reserved.',
};

// Mock link fields
export const mockFooterPromoLink: LinkField = {
  value: {
    href: '/newsletter',
    text: 'Subscribe Now',
    title: 'Subscribe to Newsletter',
    target: '',
    linktype: 'internal',
  },
};

// Mock social links
export const mockSocialLink1: FooterSocialLink = {
  link: {
    jsonValue: {
      value: {
        href: 'https://facebook.com',
        text: 'Facebook',
        title: 'Visit us on Facebook',
        target: '_blank',
        linktype: 'external',
      },
    },
  },
  socialIcon: {
    jsonValue: {
      value: {
        src: '/images/facebook-icon.svg',
        alt: 'Facebook',
        width: 24,
        height: 24,
      },
    },
  },
};

export const mockSocialLink2: FooterSocialLink = {
  link: {
    jsonValue: {
      value: {
        href: 'https://twitter.com',
        text: 'Twitter',
        title: 'Visit us on Twitter',
        target: '_blank',
        linktype: 'external',
      },
    },
  },
  socialIcon: {
    jsonValue: {
      value: {
        src: '/images/twitter-icon.svg',
        alt: 'Twitter',
        width: 24,
        height: 24,
      },
    },
  },
};

export const mockSocialLink3: FooterSocialLink = {
  link: {
    jsonValue: {
      value: {
        href: 'https://instagram.com',
        text: 'Instagram',
        title: 'Visit us on Instagram',
        target: '_blank',
        linktype: 'external',
      },
    },
  },
  socialIcon: {
    jsonValue: {
      value: {
        src: '/images/instagram-icon.svg',
        alt: 'Instagram',
        width: 24,
        height: 24,
      },
    },
  },
};

// Complete fields data
export const mockFields = {
  data: {
    datasource: {
      footerLogo: {
        jsonValue: mockFooterLogo,
      },
      footerPromoTitle: {
        jsonValue: mockFooterPromoTitle,
      },
      footerPromoDescription: {
        jsonValue: mockFooterPromoDescription,
      },
      footerPromoLink: {
        jsonValue: mockFooterPromoLink,
      },
      footerSocialLinks: {
        results: [mockSocialLink1, mockSocialLink2, mockSocialLink3],
      },
      footerCopyright: {
        jsonValue: mockFooterCopyright,
      },
    },
  },
};

export const mockFieldsWithoutPromoLink = {
  data: {
    datasource: {
      footerLogo: {
        jsonValue: mockFooterLogo,
      },
      footerPromoTitle: {
        jsonValue: mockFooterPromoTitle,
      },
      footerPromoDescription: {
        jsonValue: mockFooterPromoDescription,
      },
      footerPromoLink: {
        jsonValue: undefined as any,
      },
      footerSocialLinks: {
        results: [mockSocialLink1, mockSocialLink2],
      },
      footerCopyright: {
        jsonValue: mockFooterCopyright,
      },
    },
  },
};

export const mockFieldsWithoutSocialLinks = {
  data: {
    datasource: {
      footerLogo: {
        jsonValue: mockFooterLogo,
      },
      footerPromoTitle: {
        jsonValue: mockFooterPromoTitle,
      },
      footerPromoDescription: {
        jsonValue: mockFooterPromoDescription,
      },
      footerPromoLink: {
        jsonValue: mockFooterPromoLink,
      },
      footerSocialLinks: {
        results: [],
      },
      footerCopyright: {
        jsonValue: mockFooterCopyright,
      },
    },
  },
};

export const mockFieldsWithoutDatasource = {
  data: {},
};

// Complete props combinations
export const defaultProps: GlobalFooterProps = {
  params: {
    styles: 'custom-footer-style',
    RenderingIdentifier: 'footer-rendering-id',
  },
  fields: mockFields as any,
  rendering: { 
    componentName: 'GlobalFooter',
    uid: 'footer-uid',
    placeholders: {},
  } as any,
};

export const propsWithoutPromoLink: GlobalFooterProps = {
  params: {
    RenderingIdentifier: 'footer-rendering-id',
  },
  fields: mockFieldsWithoutPromoLink as any,
  rendering: { componentName: 'GlobalFooter' } as any,
};

export const propsWithoutSocialLinks: GlobalFooterProps = {
  params: {
    RenderingIdentifier: 'footer-rendering-id',
  },
  fields: mockFieldsWithoutSocialLinks as any,
  rendering: { componentName: 'GlobalFooter' } as any,
};

export const propsWithoutDatasource: GlobalFooterProps = {
  params: {
    RenderingIdentifier: 'footer-rendering-id',
  },
  fields: mockFieldsWithoutDatasource as any,
  rendering: { componentName: 'GlobalFooter' } as any,
};

export const propsWithoutFields: GlobalFooterProps = {
  params: {
    RenderingIdentifier: 'footer-rendering-id',
  },
  fields: null as any,
  rendering: { componentName: 'GlobalFooter' } as any,
};

export const propsEditing: GlobalFooterProps = {
  ...defaultProps,
};

