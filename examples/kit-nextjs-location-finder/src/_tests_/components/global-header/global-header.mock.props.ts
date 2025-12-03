import { GlobalHeaderProps } from '@/components/global-header/global-header.props';

export const mockGlobalHeaderProps: GlobalHeaderProps = {
  isPageEditing: false,
  fields: {
    data: {
      item: {
        logo: {
          jsonValue: {
            value: {
              src: '/logo.svg',
              alt: 'Company Logo',
              width: '112',
              height: '40',
            },
          },
        },
        primaryNavigationLinks: {
          targetItems: [
            {
              link: {
                jsonValue: {
                  value: {
                    href: '/products',
                    text: 'Products',
                    linktype: 'internal',
                  },
                },
              },
              children: {
                results: [],
              },
            },
            {
              link: {
                jsonValue: {
                  value: {
                    href: '/services',
                    text: 'Services',
                    linktype: 'internal',
                  },
                },
              },
              children: {
                results: [],
              },
            },
            {
              link: {
                jsonValue: {
                  value: {
                    href: '/about',
                    text: 'About',
                    linktype: 'internal',
                  },
                },
              },
              children: {
                results: [],
              },
            },
          ],
        },
        headerContact: {
          jsonValue: {
            value: {
              href: '/contact',
              text: 'Contact Us',
              linktype: 'internal',
            },
          },
        },
        utilityNavigationLinks: {
          targetItems: [],
        },
      },
    },
  },
  params: {},
  rendering: {
    dataSource: '',
    componentName: 'GlobalHeader',
  },
};
