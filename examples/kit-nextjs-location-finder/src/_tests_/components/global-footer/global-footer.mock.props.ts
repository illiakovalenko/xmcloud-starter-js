import { GlobalFooterProps } from '@/components/global-footer/global-footer.props';

export const mockFooterNavigationLinks = [
  {
    link: {
      jsonValue: {
        value: {
          href: '/about',
          text: 'About Us',
          linktype: 'internal',
          url: '/about',
          anchor: '',
          target: '',
        },
      },
    },
  },
  {
    link: {
      jsonValue: {
        value: {
          href: '/contact',
          text: 'Contact',
          linktype: 'internal',
          url: '/contact',
          anchor: '',
          target: '',
        },
      },
    },
  },
  {
    link: {
      jsonValue: {
        value: {
          href: '/careers',
          text: 'Careers',
          linktype: 'internal',
          url: '/careers',
          anchor: '',
          target: '',
        },
      },
    },
  },
];

export const mockSocialLinks = [
  {
    link: {
      jsonValue: {
        value: {
          href: 'https://facebook.com',
          text: 'Facebook',
          linktype: 'external',
          url: 'https://facebook.com',
          anchor: '',
          target: '_blank',
        },
      },
    },
    socialIcon: {
      jsonValue: {
        value: {
          src: '/facebook-icon.svg',
          alt: 'Facebook',
          width: '24',
          height: '24',
        },
      },
    },
  },
  {
    link: {
      jsonValue: {
        value: {
          href: 'https://twitter.com',
          text: 'Twitter',
          linktype: 'external',
          url: 'https://twitter.com',
          anchor: '',
          target: '_blank',
        },
      },
    },
    socialIcon: {
      jsonValue: {
        value: {
          src: '/twitter-icon.svg',
          alt: 'Twitter',
          width: '24',
          height: '24',
        },
      },
    },
  },
];

export const mockGlobalFooterProps: GlobalFooterProps = {
  rendering: {
    componentName: 'GlobalFooter',
  },
  params: {},
  fields: {
    data: {
      datasource: {
        footerNavLinks: {
          results: mockFooterNavigationLinks,
        },
        socialLinks: {
          results: mockSocialLinks,
        },
        tagline: {
          jsonValue: {
            value: 'Building the future together',
          },
        },
        emailSubscriptionTitle: {
          jsonValue: {
            value: 'Subscribe to our newsletter',
          },
        },
        footerCopyright: {
          jsonValue: {
            value: '© 2024 Alaris. All rights reserved.',
          },
        },
      },
    },
    dictionary: {
      FOOTER_EmailSubmitLabel: 'Subscribe',
      FOOTER_EmailPlaceholder: 'Enter your email',
      FOOTER_EmailErrorMessage: 'Please enter a valid email address',
      FOOTER_EmailSuccessMessage: 'Thank you for subscribing!',
    },
  },
  isPageEditing: false,
};

export const mockGlobalFooterPropsEditing: GlobalFooterProps = {
  ...mockGlobalFooterProps,
  isPageEditing: true,
};

export const mockEmptyGlobalFooterProps: GlobalFooterProps = {
  rendering: {
    componentName: 'GlobalFooter',
  },
  params: {},
  fields: {
    data: {
      datasource: {
        footerNavLinks: {
          results: [],
        },
        socialLinks: {
          results: [],
        },
      },
    },
    dictionary: {
      FOOTER_EmailSubmitLabel: 'Subscribe',
      FOOTER_EmailPlaceholder: 'Enter your email',
      FOOTER_EmailErrorMessage: 'Please enter a valid email address',
      FOOTER_EmailSuccessMessage: 'Thank you for subscribing!',
    },
  },
  isPageEditing: false,
};
