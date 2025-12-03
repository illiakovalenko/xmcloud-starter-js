import type {
  LogoTabsProps,
  LogoItemProps,
  LogoTabContent,
} from '@/components/logo-tabs/logo-tabs.props';

export const mockLogos: LogoItemProps[] = [
  {
    title: {
      jsonValue: {
        value: 'Brand A',
      },
    },
    logo: {
      jsonValue: {
        value: {
          src: '/logos/brand-a.svg',
          alt: 'Brand A Logo',
          width: '120',
          height: '60',
        },
      },
    },
  },
  {
    title: {
      jsonValue: {
        value: 'Brand B',
      },
    },
    logo: {
      jsonValue: {
        value: {
          src: '/logos/brand-b.svg',
          alt: 'Brand B Logo',
          width: '120',
          height: '60',
        },
      },
    },
  },
  {
    title: {
      jsonValue: {
        value: 'Brand C',
      },
    },
    logo: {
      jsonValue: {
        value: {
          src: '/logos/brand-c.svg',
          alt: 'Brand C Logo',
          width: '120',
          height: '60',
        },
      },
    },
  },
];

export const mockLogoTabContent: LogoTabContent[] = [
  {
    heading: {
      jsonValue: {
        value: 'Discover Brand A',
      },
    },
    cta: {
      jsonValue: {
        value: {
          href: '/brand-a',
          text: 'Learn More',
          linktype: 'internal',
        },
      },
    },
  },
  {
    heading: {
      jsonValue: {
        value: 'Explore Brand B',
      },
    },
    cta: {
      jsonValue: {
        value: {
          href: '/brand-b',
          text: 'View Products',
          linktype: 'internal',
        },
      },
    },
  },
  {
    heading: {
      jsonValue: {
        value: 'Experience Brand C',
      },
    },
    cta: {
      jsonValue: {
        value: {
          href: '/brand-c',
          text: 'Get Started',
          linktype: 'internal',
        },
      },
    },
  },
];

export const mockLogoTabsProps: LogoTabsProps = {
  rendering: {
    componentName: 'LogoTabs',
    dataSource: 'mock-datasource',
  },
  params: {
    colorScheme: 'primary',
  },
  fields: {
    data: {
      datasource: {
        title: {
          jsonValue: {
            value: 'Our Partner Brands',
          },
        },
        backgroundImage: {
          jsonValue: {
            value: {
              src: '/images/background.jpg',
              alt: 'Background',
              width: '1920',
              height: '1080',
            },
          },
        },
        logos: {
          results: mockLogos,
        },
        logoTabContent: {
          results: mockLogoTabContent,
        },
      },
    },
  },
};
