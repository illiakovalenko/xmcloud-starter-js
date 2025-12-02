import { Field } from '@sitecore-content-sdk/nextjs';
import { GqlFieldString } from '@/types/gql.props';

// Mock breadcrumb pages
export const mockAncestorHome = {
  name: 'Home',
  title: {
    jsonValue: {
      value: 'Home Page',
    } as Field<string>,
  } as GqlFieldString,
  navigationTitle: {
    jsonValue: {
      value: 'Home',
    } as Field<string>,
  } as GqlFieldString,
  url: {
    href: '/',
    text: 'Home',
    linktype: 'internal',
  },
};

export const mockAncestorArticles = {
  name: 'Articles',
  title: {
    jsonValue: {
      value: 'Articles Page',
    } as Field<string>,
  } as GqlFieldString,
  navigationTitle: {
    jsonValue: {
      value: 'Articles',
    } as Field<string>,
  } as GqlFieldString,
  url: {
    href: '/articles',
    text: 'Articles',
    linktype: 'internal',
  },
};

export const mockAncestorTechnology = {
  name: 'Technology',
  title: {
    jsonValue: {
      value: 'Technology Category',
    } as Field<string>,
  } as GqlFieldString,
  navigationTitle: {
    jsonValue: {
      value: 'Tech',
    } as Field<string>,
  } as GqlFieldString,
  url: {
    href: '/articles/technology',
    text: 'Technology',
    linktype: 'internal',
  },
};

export const mockAncestorWithoutNavigationTitle = {
  name: 'No Nav Title',
  title: {
    jsonValue: {
      value: 'Page Without Nav Title',
    } as Field<string>,
  } as GqlFieldString,
  navigationTitle: {
    jsonValue: {
      value: '', // Empty string instead of null
    } as Field<string>,
  } as GqlFieldString,
  url: {
    href: '/page',
    text: 'Page',
    linktype: 'internal',
  },
};

export const mockAncestorWithoutUrl = {
  name: 'No URL',
  title: {
    jsonValue: {
      value: 'Page Without URL',
    } as Field<string>,
  } as GqlFieldString,
  navigationTitle: {
    jsonValue: {
      value: 'No URL',
    } as Field<string>,
  } as GqlFieldString,
  url: {
    href: '',
    text: '',
    linktype: '',
  },
};

// Mock fields
export const mockFieldsDefault = {
  data: {
    datasource: {
      ancestors: [mockAncestorHome, mockAncestorArticles, mockAncestorTechnology],
      name: 'Current Page Title',
    },
  },
};

export const mockFieldsWithLongName = {
  data: {
    datasource: {
      ancestors: [mockAncestorHome],
      name: 'This is a very long page title that should be truncated to fit within 25 characters',
    },
  },
};

export const mockFieldsWithoutAncestors = {
  data: {
    datasource: {
      ancestors: undefined as any, // undefined instead of empty array
      name: 'Current Page',
    },
  },
};

export const mockFieldsWithSingleAncestor = {
  data: {
    datasource: {
      ancestors: [mockAncestorHome],
      name: 'Current Page',
    },
  },
};

export const mockFieldsWithMixedTitles = {
  data: {
    datasource: {
      ancestors: [
        mockAncestorHome,
        mockAncestorWithoutNavigationTitle,
        mockAncestorWithoutUrl,
      ],
      name: 'Current Page',
    },
  },
};

export const mockFieldsEmptyAncestors = {
  data: {
    datasource: {
      ancestors: undefined as any, // undefined instead of empty array
      name: 'Current Page',
    },
  },
};

// Complete props combinations
export const defaultProps = {
  params: {},
  fields: mockFieldsDefault,
  rendering: { componentName: 'Breadcrumbs' } as any,
};

export const propsWithLongName = {
  params: {},
  fields: mockFieldsWithLongName,
  rendering: { componentName: 'Breadcrumbs' } as any,
};

export const propsWithoutAncestors = {
  params: {},
  fields: mockFieldsWithoutAncestors,
  rendering: { componentName: 'Breadcrumbs' } as any,
};

export const propsWithSingleAncestor = {
  params: {},
  fields: mockFieldsWithSingleAncestor,
  rendering: { componentName: 'Breadcrumbs' } as any,
};

export const propsWithMixedTitles = {
  params: {},
  fields: mockFieldsWithMixedTitles,
  rendering: { componentName: 'Breadcrumbs' } as any,
};

export const propsEmptyAncestors = {
  params: {},
  fields: mockFieldsEmptyAncestors,
  rendering: { componentName: 'Breadcrumbs' } as any,
};

export const propsWithoutFields = {
  params: {},
  fields: null as any,
  rendering: { componentName: 'Breadcrumbs' } as any,
};

