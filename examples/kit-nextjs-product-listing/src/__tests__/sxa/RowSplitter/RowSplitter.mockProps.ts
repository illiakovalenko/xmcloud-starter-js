/**
 * Test fixtures and mock data for RowSplitter component
 */

import { ComponentProps } from 'lib/component-props';
import { ComponentRendering } from '@sitecore-content-sdk/nextjs';

type RowNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type RowStyles = {
  [K in `Styles${RowNumber}`]?: string;
};

interface RowSplitterProps extends ComponentProps {
  rendering: ComponentRendering;
  params: ComponentProps['params'] & RowStyles;
}

/**
 * Mock rendering object
 */
export const mockRendering: ComponentRendering = {
  componentName: 'RowSplitter',
  dataSource: '',
  uid: 'row-splitter-uid',
  placeholders: {
    'row-1-{*}': [],
    'row-2-{*}': [],
    'row-3-{*}': [],
  },
};

/**
 * Default props with 2 rows
 */
export const twoRowSplitterProps: RowSplitterProps = {
  rendering: mockRendering,
  params: {
    EnabledPlaceholders: '1,2',
    RenderingIdentifier: 'row-splitter-1',
    styles: 'custom-row-style',
    Styles1: 'row-style-1',
    Styles2: 'row-style-2',
  },
};

/**
 * Props with 3 rows
 */
export const threeRowSplitterProps: RowSplitterProps = {
  rendering: mockRendering,
  params: {
    EnabledPlaceholders: '1,2,3',
    RenderingIdentifier: 'row-splitter-3',
    styles: '',
    Styles1: '',
    Styles2: '',
    Styles3: '',
  },
};

/**
 * Props with single row
 */
export const singleRowSplitterProps: RowSplitterProps = {
  rendering: mockRendering,
  params: {
    EnabledPlaceholders: '1',
    RenderingIdentifier: 'row-splitter-single',
    styles: '',
    Styles1: 'primary-row',
  },
};

/**
 * Props with no enabled placeholders
 */
export const noRowsSplitterProps: RowSplitterProps = {
  rendering: mockRendering,
  params: {
    EnabledPlaceholders: '',
    RenderingIdentifier: 'row-splitter-empty',
    styles: '',
  },
};

/**
 * Props with missing EnabledPlaceholders
 */
export const missingPlaceholdersProps: RowSplitterProps = {
  rendering: mockRendering,
  params: {
    RenderingIdentifier: 'row-splitter-missing',
    styles: 'test-style',
  },
};
