import { ComponentRendering } from '@sitecore-content-sdk/nextjs';

// Default props with sig parameter
export const defaultProps = {
  rendering: {
    componentName: 'PartialDesignDynamicPlaceholder',
    dataSource: '',
    params: {
      sig: 'main-content-dynamic',
    },
  } as ComponentRendering,
};

// Props with different sig
export const propsWithCustomSig = {
  rendering: {
    componentName: 'PartialDesignDynamicPlaceholder',
    dataSource: '',
    params: {
      sig: 'sidebar-content-{*}',
    },
  } as ComponentRendering,
};

// Props with complex sig pattern
export const propsWithComplexSig = {
  rendering: {
    componentName: 'PartialDesignDynamicPlaceholder',
    dataSource: '',
    params: {
      sig: 'dynamic-placeholder-{GUID}-{*}',
    },
  } as ComponentRendering,
};

// Props with empty sig
export const propsWithEmptySig = {
  rendering: {
    componentName: 'PartialDesignDynamicPlaceholder',
    dataSource: '',
    params: {
      sig: '',
    },
  } as ComponentRendering,
};

// Props without sig parameter
export const propsWithoutSig = {
  rendering: {
    componentName: 'PartialDesignDynamicPlaceholder',
    dataSource: '',
    params: {},
  } as ComponentRendering,
};

// Props with undefined params
export const propsWithUndefinedParams = {
  rendering: {
    componentName: 'PartialDesignDynamicPlaceholder',
    dataSource: '',
    params: undefined,
  } as any,
};

// Props with null rendering
export const propsWithNullRendering = {
  rendering: null as any,
};

// Props with numeric sig
export const propsWithNumericSig = {
  rendering: {
    componentName: 'PartialDesignDynamicPlaceholder',
    dataSource: '',
    params: {
      sig: 'placeholder-123',
    },
  } as ComponentRendering,
};

