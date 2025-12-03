// Simple mock props for Container3070 component
export const mockContainer3070Props = {
  rendering: {
    componentName: 'Container3070',
    placeholders: {
      'container-thirty-left-main': [{ componentName: 'LeftComponent' }],
      'container-seventy-right-main': [{ componentName: 'RightComponent' }],
    },
  },
  params: {
    DynamicPlaceholderId: 'main',
    styles: 'custom-3070-styles',
  },
};

// Mock props with exclude top margin
export const mockContainer3070PropsNoMargin = {
  rendering: {
    componentName: 'Container3070',
    placeholders: {
      'container-thirty-left-test': [{ componentName: 'LeftComponent' }],
      'container-seventy-right-test': [{ componentName: 'RightComponent' }],
    },
  },
  params: {
    DynamicPlaceholderId: 'test',
    excludeTopMargin: '1',
    styles: 'no-margin-3070',
  },
};
