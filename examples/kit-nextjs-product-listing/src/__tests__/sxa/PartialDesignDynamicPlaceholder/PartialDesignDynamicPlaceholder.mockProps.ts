/**
 * Test fixtures and mock data for PartialDesignDynamicPlaceholder component
 */

import type { ComponentProps } from 'lib/component-props';

/**
 * Base mock data for PartialDesignDynamicPlaceholder component
 */
export const mockPartialDesignData = {
  placeholderName: 'main-content',
  emptyPlaceholderName: '',
};

/**
 * Mock rendering object
 */
export const mockRenderingWithName = {
  componentName: 'PartialDesignDynamicPlaceholder',
  params: {
    sig: mockPartialDesignData.placeholderName,
  },
};

/**
 * Mock rendering object with empty name
 */
export const mockRenderingEmptyName = {
  componentName: 'PartialDesignDynamicPlaceholder',
  params: {
    sig: mockPartialDesignData.emptyPlaceholderName,
  },
};

/**
 * Mock rendering object without params
 */
export const mockRenderingNoParams = {
  componentName: 'PartialDesignDynamicPlaceholder',
  params: {},
};

/**
 * Default props for PartialDesignDynamicPlaceholder component testing
 */
export const defaultPartialDesignProps: ComponentProps = {
  rendering: mockRenderingWithName,
  params: {},
};

/**
 * Props with empty placeholder name
 */
export const partialDesignPropsEmptyName: ComponentProps = {
  rendering: mockRenderingEmptyName,
  params: {},
};

/**
 * Props with no params
 */
export const partialDesignPropsNoParams: ComponentProps = {
  rendering: mockRenderingNoParams,
  params: {},
};
