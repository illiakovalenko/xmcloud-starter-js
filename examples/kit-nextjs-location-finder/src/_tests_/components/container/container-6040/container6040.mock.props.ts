// Simple mock props for Container6040 component
export const mockContainer6040Props = {
  rendering: {
    componentName: 'Container6040',
    placeholders: {
      'container-sixty-left-main': [{ componentName: 'LeftComponent' }],
      'container-forty-right-main': [{ componentName: 'RightComponent' }],
    },
  },
  params: {
    DynamicPlaceholderId: 'main',
    styles: 'custom-6040-styles',
  },
};

// Mock props with exclude top margin
export const mockContainer6040PropsNoMargin = {
  rendering: {
    componentName: 'Container6040',
    placeholders: {
      'container-sixty-left-test': [{ componentName: 'LeftComponent' }],
      'container-forty-right-test': [{ componentName: 'RightComponent' }],
    },
  },
  params: {
    DynamicPlaceholderId: 'test',
    excludeTopMargin: '1',
    styles: 'no-margin-6040',
  },
};
