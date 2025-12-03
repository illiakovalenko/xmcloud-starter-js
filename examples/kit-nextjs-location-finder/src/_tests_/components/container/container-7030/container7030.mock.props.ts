// Simple mock props for Container7030 component
export const mockContainer7030Props = {
  rendering: {
    componentName: 'Container7030',
    placeholders: {
      'container-seventy-left-main': [{ componentName: 'LeftComponent' }],
      'container-thirty-right-main': [{ componentName: 'RightComponent' }],
    },
  },
  params: {
    DynamicPlaceholderId: 'main',
    styles: 'custom-7030-styles',
  },
};

// Mock props with exclude top margin
export const mockContainer7030PropsNoMargin = {
  rendering: {
    componentName: 'Container7030',
    placeholders: {
      'container-seventy-left-test': [{ componentName: 'LeftComponent' }],
      'container-thirty-right-test': [{ componentName: 'RightComponent' }],
    },
  },
  params: {
    DynamicPlaceholderId: 'test',
    excludeTopMargin: '1',
    styles: 'no-margin-7030',
  },
};

// Mock props for empty container
export const mockContainer7030PropsEmpty = {
  rendering: {
    componentName: 'Container7030',
    placeholders: {},
  },
  params: {
    DynamicPlaceholderId: 'empty',
  },
};
