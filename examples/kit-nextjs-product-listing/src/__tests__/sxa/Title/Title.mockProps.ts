/**
 * Test fixtures and mock data for Title component
 */

import type { LinkField, TextField } from '@sitecore-content-sdk/nextjs';

interface TitleFields {
  data: {
    datasource: {
      url: {
        path: string;
        siteName: string;
      };
      field: {
        jsonValue: {
          value: string;
          metadata?: { [key: string]: unknown };
        };
      };
    };
    contextItem: {
      url: {
        path: string;
        siteName: string;
      };
      field: {
        jsonValue: {
          value: string;
          metadata?: { [key: string]: unknown };
        };
      };
    };
  };
}

type TitleProps = {
  params: { [key: string]: string };
  fields: TitleFields;
};

/**
 * Base mock data for Title component
 */
export const mockTitleData = {
  basicTitle: 'Sample Page Title',
  emptyTitle: '',
  longTitle: 'This is a very long page title that might be used for SEO purposes',
  specialCharsTitle: 'Title with & special <characters>',
};

/**
 * Mock datasource with title
 */
export const mockDatasourceWithTitle = {
  url: {
    path: '/sample-page',
    siteName: 'website',
  },
  field: {
    jsonValue: {
      value: mockTitleData.basicTitle,
    },
  },
};

/**
 * Mock datasource without title
 */
export const mockDatasourceWithoutTitle = {
  url: {
    path: '/another-page',
    siteName: 'website',
  },
  field: {
    jsonValue: {
      value: '',
    },
  },
};

/**
 * Mock page title field
 */
export const mockPageTitleField: TextField = {
  value: mockTitleData.basicTitle,
};

/**
 * Mock empty page title field
 */
export const mockEmptyPageTitleField: TextField = {
  value: '',
};

/**
 * Mock link field
 */
export const mockLinkField: LinkField = {
  value: {
    href: '/sample-page',
    title: mockTitleData.basicTitle,
  },
};

/**
 * Default props for Title component testing
 */
export const defaultTitleProps: TitleProps = {
  params: {
    RenderingIdentifier: 'title-1',
    styles: 'title-styles',
  },
  fields: {
    data: {
      datasource: mockDatasourceWithTitle,
      contextItem: mockDatasourceWithTitle,
    },
  },
};

/**
 * Props with empty title
 */
export const titlePropsEmptyTitle: TitleProps = {
  params: {
    RenderingIdentifier: 'title-2',
    styles: 'title-styles',
  },
  fields: {
    data: {
      datasource: mockDatasourceWithoutTitle,
      contextItem: mockDatasourceWithoutTitle,
    },
  },
};

/**
 * Props with minimal parameters
 */
export const titlePropsMinimal: TitleProps = {
  params: {},
  fields: {
    data: {
      datasource: mockDatasourceWithTitle,
      contextItem: mockDatasourceWithTitle,
    },
  },
};

/**
 * Props with null fields (edge case)
 */
export const titlePropsNullFields: TitleProps = {
  params: {
    RenderingIdentifier: 'title-3',
    styles: 'title-styles',
  },
  fields: null as unknown as TitleFields,
};

/**
 * Props with special characters in title
 */
export const titlePropsSpecialChars: TitleProps = {
  params: {
    RenderingIdentifier: 'title-4',
    styles: 'title-styles',
  },
  fields: {
    data: {
      datasource: {
        ...mockDatasourceWithTitle,
        field: {
          jsonValue: {
            value: mockTitleData.specialCharsTitle,
          },
        },
      },
      contextItem: {
        ...mockDatasourceWithTitle,
        field: {
          jsonValue: {
            value: mockTitleData.specialCharsTitle,
          },
        },
      },
    },
  },
};

/**
 * Mock Sitecore context for normal mode
 */
export const mockSitecoreContextNormal = {
  page: {
    layout: {
      sitecore: {
        route: {
          fields: {
            pageTitle: mockPageTitleField,
          },
        },
      },
    },
    mode: {
      isNormal: true,
      isEditing: false,
      isPreview: false,
    },
    locale: 'en',
  },
};

/**
 * Mock Sitecore context for editing mode
 */
export const mockSitecoreContextEditing = {
  page: {
    layout: {
      sitecore: {
        route: {
          fields: {
            pageTitle: mockPageTitleField,
          },
        },
      },
    },
    mode: {
      isNormal: false,
      isEditing: true,
      isPreview: false,
    },
    locale: 'en',
  },
};

/**
 * Mock Sitecore context for editing mode with empty title
 */
export const mockSitecoreContextEditingEmpty = {
  page: {
    layout: {
      sitecore: {
        route: {
          fields: {
            pageTitle: mockEmptyPageTitleField,
          },
        },
      },
    },
    mode: {
      isNormal: false,
      isEditing: true,
      isPreview: false,
    },
    locale: 'en',
  },
};
