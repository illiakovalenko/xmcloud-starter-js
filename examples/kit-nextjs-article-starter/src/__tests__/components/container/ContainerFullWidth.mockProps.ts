import { ComponentRendering } from '@sitecore-content-sdk/nextjs';

export const mockSitecoreContext = {
  page: {
    mode: {
      isEditing: false,
      isPreview: false,
    },
  },
};

export const mockSitecoreContextEditing = {
  page: {
    mode: {
      isEditing: true,
      isPreview: false,
    },
  },
};

export const defaultProps = {
  params: {
    DynamicPlaceholderId: 'main-fullwidth',
    styles: 'custom-fullwidth-style',
    excludeTopMargin: '0',
  },
  rendering: {
    componentName: 'ContainerFullWidth',
    dataSource: '',
    placeholders: {
      'container-fullwidth-main-fullwidth': [
        {
          componentName: 'Content',
        },
      ],
    },
  } as ComponentRendering,
};

export const propsWithExcludeTopMargin = {
  params: {
    DynamicPlaceholderId: 'no-margin',
    styles: '',
    excludeTopMargin: '1',
  },
  rendering: {
    componentName: 'ContainerFullWidth',
    dataSource: '',
    placeholders: {
      'container-fullwidth-no-margin': [
        {
          componentName: 'Content',
        },
      ],
    },
  } as ComponentRendering,
};

export const propsWithEmptyPlaceholders = {
  params: {
    DynamicPlaceholderId: 'empty',
    styles: '',
    excludeTopMargin: '0',
  },
  rendering: {
    componentName: 'ContainerFullWidth',
    dataSource: '',
    placeholders: {},
  } as ComponentRendering,
};

export const propsWithChildren = {
  ...defaultProps,
  children: 'Test child content' as any,
};

export const propsWithoutDynamicId = {
  params: {
    DynamicPlaceholderId: '',
    styles: 'test-style',
    excludeTopMargin: '0',
  },
  rendering: {
    componentName: 'ContainerFullWidth',
    dataSource: '',
    placeholders: {
      'container-fullwidth-': [
        {
          componentName: 'Content',
        },
      ],
    },
  } as ComponentRendering,
};

