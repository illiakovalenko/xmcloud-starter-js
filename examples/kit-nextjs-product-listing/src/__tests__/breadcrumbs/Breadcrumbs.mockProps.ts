import type {
  BreadcrumbsProps,
  BreadcrumbsPage,
} from '../../components/breadcrumbs/breadcrumbs.props';

// Mock breadcrumbs with ancestors
export const breadcrumbsPropsWithAncestors: BreadcrumbsProps = {
  rendering: { componentName: 'Breadcrumbs', params: {} },
  params: {},
  fields: {
    data: {
      datasource: {
        ancestors: [
          {
            name: 'Home',
            title: {
              jsonValue: { value: 'Home Page' },
            },
            navigationTitle: {
              jsonValue: { value: 'Home' },
            },
            url: { href: '/' },
          },
          {
            name: 'Products',
            title: {
              jsonValue: { value: 'Products Catalog' },
            },
            navigationTitle: {
              jsonValue: { value: 'Products' },
            },
            url: { href: '/products' },
          },
        ],
        name: 'Current Page',
      },
    },
  },
};

// Mock breadcrumbs with long name to test truncation
export const breadcrumbsPropsWithLongName: BreadcrumbsProps = {
  rendering: { componentName: 'Breadcrumbs', params: {} },
  params: {},
  fields: {
    data: {
      datasource: {
        ancestors: [
          {
            name: 'Home',
            title: {
              jsonValue: { value: 'Home Page' },
            },
            navigationTitle: {
              jsonValue: { value: 'Home' },
            },
            url: { href: '/' },
          },
        ],
        name: 'This is a very long page name that should be truncated',
      },
    },
  },
};

// Mock breadcrumbs without ancestors (home page)
export const breadcrumbsPropsNoAncestors: BreadcrumbsProps = {
  rendering: { componentName: 'Breadcrumbs', params: {} },
  params: {},
  fields: {
    data: {
      datasource: {
        ancestors: undefined as unknown as BreadcrumbsPage[],
        name: 'Home',
      },
    },
  },
};

// Mock breadcrumbs with no fields
export const breadcrumbsPropsNoFields: BreadcrumbsProps = {
  rendering: { componentName: 'Breadcrumbs', params: {} },
  params: {},
  fields: undefined as unknown as BreadcrumbsProps['fields'],
};
