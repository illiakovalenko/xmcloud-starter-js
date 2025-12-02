// Mock data for PartialDesignDynamicPlaceholder component testing

// Mock props with signature
export const mockPartialDesignProps = {
  rendering: {
    componentName: 'PartialDesignDynamicPlaceholder',
    dataSource: '',
    uid: 'partialdesign-uid',
    params: {
      sig: 'header-partial',
    },
  },
  params: {
    styles: 'partialdesign-styles',
    RenderingIdentifier: 'partialdesign-test-id',
  },
};

// Mock props with different signature
export const mockPartialDesignPropsFooter = {
  rendering: {
    componentName: 'PartialDesignDynamicPlaceholder',
    dataSource: '',
    uid: 'partialdesign-footer-uid',
    params: {
      sig: 'footer-partial',
    },
  },
  params: {
    styles: 'footer-styles',
    RenderingIdentifier: 'partialdesign-footer-id',
  },
};

// Mock props with complex signature
export const mockPartialDesignPropsComplex = {
  rendering: {
    componentName: 'PartialDesignDynamicPlaceholder',
    dataSource: '',
    uid: 'partialdesign-complex-uid',
    params: {
      sig: 'main-content-{*}',
    },
  },
  params: {
    styles: 'complex-styles',
    RenderingIdentifier: 'partialdesign-complex-id',
  },
};

// Mock props with no signature
export const mockPartialDesignPropsNoSig = {
  rendering: {
    componentName: 'PartialDesignDynamicPlaceholder',
    dataSource: '',
    uid: 'partialdesign-nosig-uid',
    params: {},
  },
  params: {
    styles: 'nosig-styles',
    RenderingIdentifier: 'partialdesign-nosig-id',
  },
};

// Mock props with empty signature
export const mockPartialDesignPropsEmpty = {
  rendering: {
    componentName: 'PartialDesignDynamicPlaceholder',
    dataSource: '',
    uid: 'partialdesign-empty-uid',
    params: {
      sig: '',
    },
  },
  params: {
    styles: 'empty-styles',
    RenderingIdentifier: 'partialdesign-empty-id',
  },
};

