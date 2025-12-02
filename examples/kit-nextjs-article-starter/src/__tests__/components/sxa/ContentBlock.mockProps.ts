import { Field } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';

// Mock rendering data
export const mockRendering = {
  componentName: 'ContentBlock',
  dataSource: 'test-datasource',
  uid: 'test-uid',
};

// Mock params data
export const mockParams = {
  RenderingIdentifier: 'content-block-rendering-id',
  styles: 'custom-content-style',
};

// Mock fields data
export const mockFields = {
  heading: {
    value: 'Test Heading',
    editable: 'Test Heading',
  } as Field<string>,
  content: {
    value: '<p>This is test content with <strong>bold</strong> text.</p>',
    editable: '<p>This is test content with <strong>bold</strong> text.</p>',
  } as Field<string>,
};

export const mockFieldsWithEmptyHeading = {
  heading: {
    value: '',
    editable: '',
  } as Field<string>,
  content: {
    value: '<p>This is test content.</p>',
    editable: '<p>This is test content.</p>',
  } as Field<string>,
};

export const mockFieldsWithEmptyContent = {
  heading: {
    value: 'Test Heading',
    editable: 'Test Heading',
  } as Field<string>,
  content: {
    value: '',
    editable: '',
  } as Field<string>,
};

export const mockFieldsWithComplexContent = {
  heading: {
    value: 'Complex Content Heading',
    editable: 'Complex Content Heading',
  } as Field<string>,
  content: {
    value: `
      <h2>Subheading</h2>
      <p>Paragraph with <em>italic</em> and <strong>bold</strong> text.</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
      <blockquote>This is a quote</blockquote>
    `,
    editable: `
      <h2>Subheading</h2>
      <p>Paragraph with <em>italic</em> and <strong>bold</strong> text.</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
      <blockquote>This is a quote</blockquote>
    `,
  } as Field<string>,
};

// Complete props combinations
export const defaultProps: ComponentProps & { fields: typeof mockFields } = {
  rendering: mockRendering,
  params: mockParams,
  fields: mockFields,
};

export const propsWithEmptyHeading: ComponentProps & { fields: typeof mockFieldsWithEmptyHeading } = {
  rendering: mockRendering,
  params: mockParams,
  fields: mockFieldsWithEmptyHeading,
};

export const propsWithEmptyContent: ComponentProps & { fields: typeof mockFieldsWithEmptyContent } = {
  rendering: mockRendering,
  params: mockParams,
  fields: mockFieldsWithEmptyContent,
};

export const propsWithComplexContent: ComponentProps & { fields: typeof mockFieldsWithComplexContent } = {
  rendering: mockRendering,
  params: mockParams,
  fields: mockFieldsWithComplexContent,
};

