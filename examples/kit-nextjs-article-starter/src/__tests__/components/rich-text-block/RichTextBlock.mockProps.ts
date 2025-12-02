import { RichTextBlockProps } from '@/components/rich-text-block/rich-text-block.props';

// Mock rendering data
export const mockRendering = {
  componentName: 'RichTextBlock',
  dataSource: 'test-datasource',
};

// Mock params data
export const mockParams = {
  RenderingIdentifier: 'test-rendering-id',
  styles: 'custom-styles',
};

// Mock params without styles
export const mockParamsWithoutStyles = {
  RenderingIdentifier: 'test-rendering-id',
  styles: undefined as any,
};

// Mock params without ID
export const mockParamsWithoutId = {
  RenderingIdentifier: undefined as any,
  styles: 'custom-styles',
};

// Mock params with multiple styles
export const mockParamsWithMultipleStyles = {
  RenderingIdentifier: 'test-rendering-id',
  styles: 'custom-style-1 custom-style-2',
};

// Mock fields data
export const mockFields = {
  text: {
    value: '<p>This is a test rich text content</p>',
  },
};

// Mock fields with empty text
export const mockFieldsWithEmptyText = {
  text: {
    value: '',
  },
};

// Mock fields with undefined text
export const mockFieldsWithUndefinedText = {
  text: {
    value: undefined as any,
  },
};

// Mock fields with complex HTML content
export const mockFieldsWithComplexHtml = {
  text: {
    value: `
      <h1>Title</h1>
      <p>Paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    `,
  },
};

// Complete mock props for different scenarios
export const defaultProps: RichTextBlockProps = {
  fields: mockFields,
  rendering: mockRendering,
  params: mockParams,
};

export const propsWithoutFields: RichTextBlockProps = {
  fields: undefined as any,
  rendering: mockRendering,
  params: mockParams,
};

export const propsWithNullFields: RichTextBlockProps = {
  fields: null as any,
  rendering: mockRendering,
  params: mockParams,
};

export const propsWithoutStyles: RichTextBlockProps = {
  fields: mockFields,
  rendering: mockRendering,
  params: mockParamsWithoutStyles,
};

export const propsWithoutId: RichTextBlockProps = {
  fields: mockFields,
  rendering: mockRendering,
  params: mockParamsWithoutId,
};

export const propsWithEmptyText: RichTextBlockProps = {
  fields: mockFieldsWithEmptyText,
  rendering: mockRendering,
  params: mockParams,
};

export const propsWithUndefinedText: RichTextBlockProps = {
  fields: mockFieldsWithUndefinedText,
  rendering: mockRendering,
  params: mockParams,
};

export const propsWithComplexHtml: RichTextBlockProps = {
  fields: mockFieldsWithComplexHtml,
  rendering: mockRendering,
  params: mockParams,
};

export const propsWithMultipleStyles: RichTextBlockProps = {
  fields: mockFields,
  rendering: mockRendering,
  params: mockParamsWithMultipleStyles,
};

