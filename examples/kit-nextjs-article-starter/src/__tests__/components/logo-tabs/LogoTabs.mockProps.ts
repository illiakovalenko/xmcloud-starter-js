import { Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import { LogoTabsProps, LogoItemProps, LogoTabContent } from '@/components/logo-tabs/logo-tabs.props';

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

// Mock title field
export const mockTitleField: Field<string> = {
  value: 'Our Trusted Partners',
};

// Mock background image
export const mockBackgroundImage: ImageField = {
  value: {
    src: '/images/background.jpg',
    alt: 'Background',
    width: 1920,
    height: 1080,
  },
};

// Mock logo items
export const mockLogoItem1: LogoItemProps = {
  title: {
    jsonValue: {
      value: 'Brand A',
    } as Field<string>,
  },
  logo: {
    jsonValue: {
      value: {
        src: '/images/logo-brand-a.png',
        alt: 'Brand A Logo',
        width: 200,
        height: 100,
      },
    },
  },
};

export const mockLogoItem2: LogoItemProps = {
  title: {
    jsonValue: {
      value: 'Brand B',
    } as Field<string>,
  },
  logo: {
    jsonValue: {
      value: {
        src: '/images/logo-brand-b.png',
        alt: 'Brand B Logo',
        width: 200,
        height: 100,
      },
    },
  },
};

export const mockLogoItem3: LogoItemProps = {
  title: {
    jsonValue: {
      value: 'Brand C',
    } as Field<string>,
  },
  logo: {
    jsonValue: {
      value: {
        src: '/images/logo-brand-c.png',
        alt: 'Brand C Logo',
        width: 200,
        height: 100,
      },
    },
  },
};

export const mockLogoItem4: LogoItemProps = {
  title: {
    jsonValue: {
      value: 'Brand D',
    } as Field<string>,
  },
  logo: {
    jsonValue: {
      value: {
        src: '/images/logo-brand-d.png',
        alt: 'Brand D Logo',
        width: 200,
        height: 100,
      },
    },
  },
};

// Mock tab content
export const mockTabContent1: LogoTabContent = {
  heading: {
    jsonValue: {
      value: 'Experience Brand A Excellence',
    } as Field<string>,
  },
  cta: {
    jsonValue: {
      value: {
        href: '/brand-a',
        text: 'Learn More',
        title: 'Learn more about Brand A',
        target: '',
        linktype: 'internal',
      },
    },
  },
};

export const mockTabContent2: LogoTabContent = {
  heading: {
    jsonValue: {
      value: 'Discover Brand B Innovation',
    } as Field<string>,
  },
  cta: {
    jsonValue: {
      value: {
        href: '/brand-b',
        text: 'Explore Now',
        title: 'Explore Brand B',
        target: '',
        linktype: 'internal',
      },
    },
  },
};

export const mockTabContent3: LogoTabContent = {
  heading: {
    jsonValue: {
      value: 'Brand C Solutions',
    } as Field<string>,
  },
  cta: {
    jsonValue: {
      value: {
        href: '/brand-c',
        text: 'Get Started',
        title: 'Get started with Brand C',
        target: '',
        linktype: 'internal',
      },
    },
  },
};

export const mockTabContent4: LogoTabContent = {
  heading: {
    jsonValue: {
      value: 'Partner with Brand D',
    } as Field<string>,
  },
  cta: {
    jsonValue: {
      value: {
        href: '/brand-d',
        text: 'Contact Us',
        title: 'Contact Brand D',
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
      backgroundImage: {
        jsonValue: mockBackgroundImage,
      },
      logos: {
        results: [mockLogoItem1, mockLogoItem2, mockLogoItem3, mockLogoItem4],
      },
      logoTabContent: {
        results: [mockTabContent1, mockTabContent2, mockTabContent3, mockTabContent4],
      },
    },
  },
};

export const mockFieldsWithoutBackground = {
  data: {
    datasource: {
      title: {
        jsonValue: mockTitleField,
      },
      backgroundImage: {
        jsonValue: { value: undefined } as any,
      },
      logos: {
        results: [mockLogoItem1, mockLogoItem2],
      },
      logoTabContent: {
        results: [mockTabContent1, mockTabContent2],
      },
    },
  },
};

export const mockFieldsWithoutLogos = {
  data: {
    datasource: {
      title: {
        jsonValue: mockTitleField,
      },
      backgroundImage: {
        jsonValue: mockBackgroundImage,
      },
      logos: {
        results: [],
      },
      logoTabContent: {
        results: [],
      },
    },
  },
};

export const mockFieldsWithoutContent = {
  data: {
    datasource: {
      title: {
        jsonValue: mockTitleField,
      },
      backgroundImage: {
        jsonValue: mockBackgroundImage,
      },
      logos: {
        results: [mockLogoItem1, mockLogoItem2],
      },
      logoTabContent: {
        results: [],
      },
    },
  },
};

export const mockFieldsWithoutTitle = {
  data: {
    datasource: {
      title: {
        jsonValue: { value: '' } as Field<string>,
      },
      backgroundImage: {
        jsonValue: mockBackgroundImage,
      },
      logos: {
        results: [mockLogoItem1, mockLogoItem2],
      },
      logoTabContent: {
        results: [mockTabContent1, mockTabContent2],
      },
    },
  },
};

export const mockFieldsWithoutDatasource = {
  data: {},
};

// Mock params
export const mockParams = {
  colorScheme: 'primary',
  styles: 'custom-logo-tabs-style',
  RenderingIdentifier: 'logo-tabs-rendering-id',
};

export const mockParamsWithoutStyles = {
  RenderingIdentifier: 'logo-tabs-rendering-id',
};

// Complete props combinations
export const defaultProps: LogoTabsProps = {
  params: mockParams,
  fields: mockFields as any,
  rendering: { componentName: 'LogoTabs' } as any,
  isPageEditing: false,
};

export const propsWithoutBackground: LogoTabsProps = {
  params: mockParams,
  fields: mockFieldsWithoutBackground as any,
  rendering: { componentName: 'LogoTabs' } as any,
  isPageEditing: false,
};

export const propsWithoutLogos: LogoTabsProps = {
  params: mockParams,
  fields: mockFieldsWithoutLogos as any,
  rendering: { componentName: 'LogoTabs' } as any,
  isPageEditing: false,
};

export const propsWithoutContent: LogoTabsProps = {
  params: mockParams,
  fields: mockFieldsWithoutContent as any,
  rendering: { componentName: 'LogoTabs' } as any,
  isPageEditing: false,
};

export const propsWithoutTitle: LogoTabsProps = {
  params: mockParams,
  fields: mockFieldsWithoutTitle as any,
  rendering: { componentName: 'LogoTabs' } as any,
  isPageEditing: false,
};

export const propsEditing: LogoTabsProps = {
  params: mockParams,
  fields: mockFields as any,
  rendering: { componentName: 'LogoTabs' } as any,
  isPageEditing: true,
};

export const propsEditingWithoutLogos: LogoTabsProps = {
  params: mockParams,
  fields: mockFieldsWithoutLogos as any,
  rendering: { componentName: 'LogoTabs' } as any,
  isPageEditing: true,
};

export const propsWithoutDatasource: LogoTabsProps = {
  params: mockParams,
  fields: mockFieldsWithoutDatasource as any,
  rendering: { componentName: 'LogoTabs' } as any,
  isPageEditing: false,
};

export const propsWithoutFields: LogoTabsProps = {
  params: mockParams,
  fields: null as any,
  rendering: { componentName: 'LogoTabs' } as any,
  isPageEditing: false,
};

