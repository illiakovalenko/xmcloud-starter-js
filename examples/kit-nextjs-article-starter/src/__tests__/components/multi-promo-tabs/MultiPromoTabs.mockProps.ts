import { Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import { MultiPromoTabsProps, MultiPromoTabsFields } from '@/components/multi-promo-tabs/multi-promo-tabs.props';

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

// Mock text fields
export const mockTitleField: Field<string> = {
  value: 'Explore Our Collections',
};

export const mockDroplistLabelField: Field<string> = {
  value: 'Choose a category',
};

// Mock tab items
export const mockTabItem1: MultiPromoTabsFields = {
  title: {
    jsonValue: {
      value: 'Electronics',
    } as Field<string>,
  },
  image1: {
    jsonValue: {
      value: {
        src: '/images/electronics-1.jpg',
        alt: 'Electronics 1',
        width: 400,
        height: 300,
      },
    },
  },
  link1: {
    jsonValue: {
      value: {
        href: '/electronics/product-1',
        text: 'View Product 1',
        title: 'View Electronics Product 1',
        target: '',
        linktype: 'internal',
      },
    },
  },
  image2: {
    jsonValue: {
      value: {
        src: '/images/electronics-2.jpg',
        alt: 'Electronics 2',
        width: 400,
        height: 300,
      },
    },
  },
  link2: {
    jsonValue: {
      value: {
        href: '/electronics/product-2',
        text: 'View Product 2',
        title: 'View Electronics Product 2',
        target: '',
        linktype: 'internal',
      },
    },
  },
};

export const mockTabItem2: MultiPromoTabsFields = {
  title: {
    jsonValue: {
      value: 'Fashion',
    } as Field<string>,
  },
  image1: {
    jsonValue: {
      value: {
        src: '/images/fashion-1.jpg',
        alt: 'Fashion 1',
        width: 400,
        height: 300,
      },
    },
  },
  link1: {
    jsonValue: {
      value: {
        href: '/fashion/product-1',
        text: 'Shop Fashion 1',
        title: 'Shop Fashion Product 1',
        target: '',
        linktype: 'internal',
      },
    },
  },
  image2: {
    jsonValue: {
      value: {
        src: '/images/fashion-2.jpg',
        alt: 'Fashion 2',
        width: 400,
        height: 300,
      },
    },
  },
  link2: {
    jsonValue: {
      value: {
        href: '/fashion/product-2',
        text: 'Shop Fashion 2',
        title: 'Shop Fashion Product 2',
        target: '',
        linktype: 'internal',
      },
    },
  },
};

export const mockTabItem3: MultiPromoTabsFields = {
  title: {
    jsonValue: {
      value: 'Home & Garden',
    } as Field<string>,
  },
  image1: {
    jsonValue: {
      value: {
        src: '/images/home-1.jpg',
        alt: 'Home & Garden 1',
        width: 400,
        height: 300,
      },
    },
  },
  link1: {
    jsonValue: {
      value: {
        href: '/home/product-1',
        text: 'Explore Home 1',
        title: 'Explore Home Product 1',
        target: '',
        linktype: 'internal',
      },
    },
  },
  image2: {
    jsonValue: {
      value: {
        src: '/images/home-2.jpg',
        alt: 'Home & Garden 2',
        width: 400,
        height: 300,
      },
    },
  },
  link2: {
    jsonValue: {
      value: {
        href: '/home/product-2',
        text: 'Explore Home 2',
        title: 'Explore Home Product 2',
        target: '',
        linktype: 'internal',
      },
    },
  },
};

// Complete fields data
export const mockFields = {
  data: {
    datasource: {
      title: {
        jsonValue: mockTitleField,
      },
      droplistLabel: {
        jsonValue: mockDroplistLabelField,
      },
      children: {
        results: [mockTabItem1, mockTabItem2, mockTabItem3],
      },
    },
  },
};

export const mockFieldsWithoutDroplistLabel = {
  data: {
    datasource: {
      title: {
        jsonValue: mockTitleField,
      },
      children: {
        results: [mockTabItem1, mockTabItem2],
      },
    },
  },
};

export const mockFieldsWithoutTitle = {
  data: {
    datasource: {
      droplistLabel: {
        jsonValue: mockDroplistLabelField,
      },
      children: {
        results: [mockTabItem1],
      },
    },
  },
};

export const mockFieldsWithoutChildren = {
  data: {
    datasource: {
      title: {
        jsonValue: mockTitleField,
      },
      droplistLabel: {
        jsonValue: mockDroplistLabelField,
      },
    },
  },
};

export const mockFieldsWithEmptyChildren = {
  data: {
    datasource: {
      title: {
        jsonValue: mockTitleField,
      },
      droplistLabel: {
        jsonValue: mockDroplistLabelField,
      },
      children: {
        results: [],
      },
    },
  },
};

export const mockFieldsWithoutDatasource = {
  data: {},
};

// Mock params
export const mockParams = {
  styles: 'custom-multi-promo-tabs-style',
  RenderingIdentifier: 'multi-promo-tabs-rendering-id',
};

// Complete props combinations
export const defaultProps: MultiPromoTabsProps = {
  params: mockParams,
  fields: mockFields as any,
  rendering: { componentName: 'MultiPromoTabs' } as any,
  isPageEditing: false,
};

export const propsWithoutDroplistLabel: MultiPromoTabsProps = {
  params: mockParams,
  fields: mockFieldsWithoutDroplistLabel as any,
  rendering: { componentName: 'MultiPromoTabs' } as any,
  isPageEditing: false,
};

export const propsWithoutTitle: MultiPromoTabsProps = {
  params: mockParams,
  fields: mockFieldsWithoutTitle as any,
  rendering: { componentName: 'MultiPromoTabs' } as any,
  isPageEditing: false,
};

export const propsWithoutChildren: MultiPromoTabsProps = {
  params: mockParams,
  fields: mockFieldsWithoutChildren as any,
  rendering: { componentName: 'MultiPromoTabs' } as any,
  isPageEditing: false,
};

export const propsWithEmptyChildren: MultiPromoTabsProps = {
  params: mockParams,
  fields: mockFieldsWithEmptyChildren as any,
  rendering: { componentName: 'MultiPromoTabs' } as any,
  isPageEditing: false,
};

export const propsWithoutDatasource: MultiPromoTabsProps = {
  params: mockParams,
  fields: mockFieldsWithoutDatasource as any,
  rendering: { componentName: 'MultiPromoTabs' } as any,
  isPageEditing: false,
};

export const propsWithoutFields: MultiPromoTabsProps = {
  params: mockParams,
  fields: null as any,
  rendering: { componentName: 'MultiPromoTabs' } as any,
  isPageEditing: false,
};

export const propsEditing: MultiPromoTabsProps = {
  params: mockParams,
  fields: mockFields as any,
  rendering: { componentName: 'MultiPromoTabs' } as any,
  isPageEditing: true,
};

