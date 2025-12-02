import { ComponentRendering } from '@sitecore-content-sdk/nextjs';

export const mockSitecoreContext = {
  page: { mode: { isEditing: false } },
};

export const mockSitecoreContextEditing = {
  page: { mode: { isEditing: true } },
};

export const defaultProps = {
  params: {
    DynamicPlaceholderId: 'main-25',
    styles: 'custom-style',
    excludeTopMargin: '0',
  },
  rendering: {
    componentName: 'Container25252525',
    dataSource: '',
    placeholders: {
      'container-25-one-main-25': [{ componentName: 'Col1' }],
      'container-25-two-main-25': [{ componentName: 'Col2' }],
      'container-25-three-main-25': [{ componentName: 'Col3' }],
      'container-25-four-main-25': [{ componentName: 'Col4' }],
    },
  } as ComponentRendering,
  children: undefined as any,
};

export const propsWithExcludeTopMargin = {
  params: {
    DynamicPlaceholderId: 'no-margin',
    styles: '',
    excludeTopMargin: '1',
  },
  rendering: {
    componentName: 'Container25252525',
    dataSource: '',
    placeholders: {
      'container-25-one-no-margin': [{ componentName: 'Col1' }],
      'container-25-two-no-margin': [{ componentName: 'Col2' }],
      'container-25-three-no-margin': [{ componentName: 'Col3' }],
      'container-25-four-no-margin': [{ componentName: 'Col4' }],
    },
  } as ComponentRendering,
  children: undefined as any,
};

export const propsWithEmptyPlaceholders = {
  params: {
    DynamicPlaceholderId: 'empty',
    styles: '',
    excludeTopMargin: '0',
  },
  rendering: {
    componentName: 'Container25252525',
    dataSource: '',
    placeholders: {},
  } as ComponentRendering,
  children: undefined as any,
};

