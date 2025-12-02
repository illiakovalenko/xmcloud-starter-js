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
    DynamicPlaceholderId: 'main-7030',
    styles: 'custom-7030-style',
    excludeTopMargin: '0',
  },
  rendering: {
    componentName: 'Container7030',
    dataSource: '',
    placeholders: {
      'container-seventy-left-main-7030': [{ componentName: 'LeftContent' }],
      'container-thirty-right-main-7030': [{ componentName: 'RightContent' }],
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
    componentName: 'Container7030',
    dataSource: '',
    placeholders: {
      'container-seventy-left-no-margin': [{ componentName: 'LeftContent' }],
      'container-thirty-right-no-margin': [{ componentName: 'RightContent' }],
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
    componentName: 'Container7030',
    dataSource: '',
    placeholders: {},
  } as ComponentRendering,
};

export const propsWithOnlyLeftPlaceholder = {
  params: {
    DynamicPlaceholderId: 'left-only',
    styles: '',
    excludeTopMargin: '0',
  },
  rendering: {
    componentName: 'Container7030',
    dataSource: '',
    placeholders: {
      'container-seventy-left-left-only': [{ componentName: 'LeftContent' }],
    },
  } as ComponentRendering,
};

export const propsWithOnlyRightPlaceholder = {
  params: {
    DynamicPlaceholderId: 'right-only',
    styles: '',
    excludeTopMargin: '0',
  },
  rendering: {
    componentName: 'Container7030',
    dataSource: '',
    placeholders: {
      'container-thirty-right-right-only': [{ componentName: 'RightContent' }],
    },
  } as ComponentRendering,
};

