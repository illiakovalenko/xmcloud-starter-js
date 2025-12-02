import { ComponentRendering } from '@sitecore-content-sdk/nextjs';

export const mockSitecoreContext = {
  page: {
    mode: {
      isEditing: false,
    },
  },
};

export const mockSitecoreContextEditing = {
  page: {
    mode: {
      isEditing: true,
    },
  },
};

export const defaultProps = {
  params: {
    DynamicPlaceholderId: 'main-70',
    styles: 'custom-70-style',
    excludeTopMargin: '0',
  },
  rendering: {
    componentName: 'Container70',
    dataSource: '',
    placeholders: {
      'container-seventy-main-70': [{ componentName: 'Content' }],
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
    componentName: 'Container70',
    dataSource: '',
    placeholders: {
      'container-seventy-no-margin': [{ componentName: 'Content' }],
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
    componentName: 'Container70',
    dataSource: '',
    placeholders: {},
  } as ComponentRendering,
};

export const propsWithChildren = {
  ...defaultProps,
  children: 'Child content' as any,
};

