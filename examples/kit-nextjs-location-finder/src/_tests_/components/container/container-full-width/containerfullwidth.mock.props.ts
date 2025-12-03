// Simple mock props for ContainerFullWidth component
export const mockContainerFullWidthProps = {
  rendering: {
    componentName: 'ContainerFullWidth',
    placeholders: {
      'container-fullwidth-main': [{ componentName: 'SampleComponent' }],
    },
  },
  params: {
    DynamicPlaceholderId: 'main',
    styles: 'custom-fullwidth-styles',
  },
};

// Mock props with exclude top margin
export const mockContainerFullWidthPropsNoMargin = {
  rendering: {
    componentName: 'ContainerFullWidth',
    placeholders: {
      'container-fullwidth-test': [{ componentName: 'SampleComponent' }],
    },
  },
  params: {
    DynamicPlaceholderId: 'test',
    excludeTopMargin: '1',
    styles: 'no-margin-fullwidth',
  },
};

// Mock props for empty container
export const mockContainerFullWidthPropsEmpty = {
  rendering: {
    componentName: 'ContainerFullWidth',
    placeholders: {},
  },
  params: {
    DynamicPlaceholderId: 'empty',
  },
};
