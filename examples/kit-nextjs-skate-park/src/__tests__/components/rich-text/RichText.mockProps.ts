// Mock data for RichText component testing

// Mock props with rich text content
export const mockRichTextProps = {
  rendering: {
    componentName: 'RichText',
    dataSource: '',
    uid: 'richtext-uid',
  },
  params: {
    styles: 'richtext-styles',
    RenderingIdentifier: 'richtext-test-id',
  },
  fields: {
    Text: {
      value: '<p>This is <strong>bold</strong> text with <em>emphasis</em>.</p>',
    },
  },
};

// Mock props with simple text
export const mockRichTextPropsSimple = {
  rendering: {
    componentName: 'RichText',
    dataSource: '',
    uid: 'richtext-simple-uid',
  },
  params: {
    styles: 'simple-styles',
    RenderingIdentifier: 'richtext-simple-id',
  },
  fields: {
    Text: {
      value: '<p>Simple paragraph text.</p>',
    },
  },
};

// Mock props with empty text
export const mockRichTextPropsEmpty = {
  rendering: {
    componentName: 'RichText',
    dataSource: '',
    uid: 'richtext-empty-uid',
  },
  params: {
    styles: 'empty-styles',
    RenderingIdentifier: 'richtext-empty-id',
  },
  fields: {
    Text: {
      value: '',
    },
  },
};

// Mock props with no fields (should show empty hint)
export const mockRichTextPropsNoFields = {
  rendering: {
    componentName: 'RichText',
    dataSource: '',
    uid: 'richtext-no-fields-uid',
  },
  params: {
    styles: 'no-fields-styles',
    RenderingIdentifier: 'richtext-no-fields-id',
  },
} as any;

