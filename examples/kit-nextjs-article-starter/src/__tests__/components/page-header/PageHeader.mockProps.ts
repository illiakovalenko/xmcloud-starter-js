import { Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import { PageHeaderProps } from '@/components/page-header/page-header.props';

// Mock image field
export const mockImageField: ImageField = {
  value: {
    src: '/images/page-header.jpg',
    alt: 'Page Header Image',
    width: 547,
    height: 400,
  },
};

// Mock video field
export const mockVideoField: LinkField = {
  value: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    text: 'Watch Video',
    title: 'Watch our video',
    target: '_blank',
    linktype: 'external',
  },
};

// Mock title fields
export const mockPageTitleField: Field<string> = {
  value: 'Welcome to Our Platform',
};

export const mockPageHeaderTitleField: Field<string> = {
  value: 'Custom Header Title',
};

// Mock subtitle field
export const mockPageSubtitleField: Field<string> = {
  value: '<p>Discover innovative solutions that transform your business with cutting-edge technology and expert guidance.</p>',
};

// Mock logo text field
export const mockLogoTextField: Field<string> = {
  value: 'Trusted by industry leaders',
};

// Mock logo images
export const mockLogo1: ImageField = {
  value: {
    src: '/images/logo-1.png',
    alt: 'Partner Logo 1',
    width: 150,
    height: 50,
  },
};

export const mockLogo2: ImageField = {
  value: {
    src: '/images/logo-2.png',
    alt: 'Partner Logo 2',
    width: 150,
    height: 50,
  },
};

export const mockLogo3: ImageField = {
  value: {
    src: '/images/logo-3.png',
    alt: 'Partner Logo 3',
    width: 150,
    height: 50,
  },
};

// Complete fields data with all options
export const mockFields = {
  data: {
    datasource: {
      imageRequired: {
        jsonValue: mockImageField,
      },
      videoOptional: {
        jsonValue: mockVideoField,
      },
      logoText: {
        jsonValue: mockLogoTextField,
      },
      children: {
        results: [
          { image: { jsonValue: mockLogo1 } },
          { image: { jsonValue: mockLogo2 } },
          { image: { jsonValue: mockLogo3 } },
        ],
      },
    },
    externalFields: {
      pageTitle: {
        jsonValue: mockPageTitleField,
      },
      pageHeaderTitle: {
        jsonValue: mockPageHeaderTitleField,
      },
      pageSubtitle: {
        jsonValue: mockPageSubtitleField,
      },
    },
  },
};

// Fields without video (image only)
export const mockFieldsWithoutVideo = {
  data: {
    datasource: {
      imageRequired: {
        jsonValue: mockImageField,
      },
      logoText: {
        jsonValue: mockLogoTextField,
      },
      children: {
        results: [
          { image: { jsonValue: mockLogo1 } },
          { image: { jsonValue: mockLogo2 } },
        ],
      },
    },
    externalFields: {
      pageTitle: {
        jsonValue: mockPageTitleField,
      },
      pageHeaderTitle: {
        jsonValue: mockPageHeaderTitleField,
      },
      pageSubtitle: {
        jsonValue: mockPageSubtitleField,
      },
    },
  },
};

// Fields without logos
export const mockFieldsWithoutLogos = {
  data: {
    datasource: {
      imageRequired: {
        jsonValue: mockImageField,
      },
      videoOptional: {
        jsonValue: mockVideoField,
      },
      logoText: {
        jsonValue: mockLogoTextField,
      },
    },
    externalFields: {
      pageTitle: {
        jsonValue: mockPageTitleField,
      },
      pageHeaderTitle: {
        jsonValue: mockPageHeaderTitleField,
      },
      pageSubtitle: {
        jsonValue: mockPageSubtitleField,
      },
    },
  },
};

// Fields with pageTitle instead of pageHeaderTitle
export const mockFieldsWithPageTitle = {
  data: {
    datasource: {
      imageRequired: {
        jsonValue: mockImageField,
      },
      videoOptional: {
        jsonValue: mockVideoField,
      },
    },
    externalFields: {
      pageTitle: {
        jsonValue: mockPageTitleField,
      },
      pageSubtitle: {
        jsonValue: mockPageSubtitleField,
      },
    },
  },
};

// Fields without subtitle
export const mockFieldsWithoutSubtitle = {
  data: {
    datasource: {
      imageRequired: {
        jsonValue: mockImageField,
      },
    },
    externalFields: {
      pageTitle: {
        jsonValue: mockPageTitleField,
      },
      pageHeaderTitle: {
        jsonValue: mockPageHeaderTitleField,
      },
    },
  },
};

// Mock params
export const mockParamsDefault = {
  colorScheme: 'default',
  darkPlayIcon: '0',
  RenderingIdentifier: 'page-header-rendering-id',
};

export const mockParamsPrimary = {
  colorScheme: 'primary',
  darkPlayIcon: '0',
  RenderingIdentifier: 'page-header-rendering-id',
};

export const mockParamsSecondary = {
  colorScheme: 'secondary',
  darkPlayIcon: '1',
  RenderingIdentifier: 'page-header-rendering-id',
};

export const mockParamsWithDarkIcon = {
  colorScheme: 'default',
  darkPlayIcon: '1',
  RenderingIdentifier: 'page-header-rendering-id',
};

// Complete props combinations
export const defaultProps: PageHeaderProps = {
  params: mockParamsDefault,
  fields: mockFields as any,
  rendering: { componentName: 'PageHeader' } as any,
};

export const propsPrimaryColorScheme: PageHeaderProps = {
  params: mockParamsPrimary,
  fields: mockFields as any,
  rendering: { componentName: 'PageHeader' } as any,
};

export const propsSecondaryColorScheme: PageHeaderProps = {
  params: mockParamsSecondary,
  fields: mockFields as any,
  rendering: { componentName: 'PageHeader' } as any,
};

export const propsWithDarkIcon: PageHeaderProps = {
  params: mockParamsWithDarkIcon,
  fields: mockFields as any,
  rendering: { componentName: 'PageHeader' } as any,
};

export const propsWithoutVideo: PageHeaderProps = {
  params: mockParamsDefault,
  fields: mockFieldsWithoutVideo as any,
  rendering: { componentName: 'PageHeader' } as any,
};

export const propsWithoutLogos: PageHeaderProps = {
  params: mockParamsDefault,
  fields: mockFieldsWithoutLogos as any,
  rendering: { componentName: 'PageHeader' } as any,
};

export const propsWithPageTitle: PageHeaderProps = {
  params: mockParamsDefault,
  fields: mockFieldsWithPageTitle as any,
  rendering: { componentName: 'PageHeader' } as any,
};

export const propsWithoutSubtitle: PageHeaderProps = {
  params: mockParamsDefault,
  fields: mockFieldsWithoutSubtitle as any,
  rendering: { componentName: 'PageHeader' } as any,
};

export const propsWithoutFields: PageHeaderProps = {
  params: mockParamsDefault,
  fields: null as any,
  rendering: { componentName: 'PageHeader' } as any,
};


