import { Field, ImageField } from '@sitecore-content-sdk/nextjs';
import { ImageProps } from '@/components/image/image.props';

// Mock image fields
export const mockImageField: ImageField = {
  value: {
    src: '/images/sample-image.jpg',
    alt: 'Sample Image',
    width: 800,
    height: 600,
  },
};

export const mockImageFieldWithoutAlt: ImageField = {
  value: {
    src: '/images/sample-image-no-alt.jpg',
    alt: '',
    width: 1200,
    height: 800,
  },
};

export const mockImageFieldLarge: ImageField = {
  value: {
    src: '/images/large-image.jpg',
    alt: 'Large Image',
    width: 1920,
    height: 1080,
  },
};

// Mock caption field
export const mockCaptionField: Field<string> = {
  value: 'This is a beautiful image caption',
};

export const mockEmptyCaptionField: Field<string> = {
  value: '',
};

// Complete fields data
export const mockFields = {
  image: mockImageField,
  caption: mockCaptionField,
};

export const mockFieldsWithoutCaption = {
  image: mockImageField,
};

export const mockFieldsWithEmptyCaption = {
  image: mockImageField,
  caption: mockEmptyCaptionField,
};

export const mockFieldsWithoutAlt = {
  image: mockImageFieldWithoutAlt,
  caption: mockCaptionField,
};

export const mockFieldsLargeImage = {
  image: mockImageFieldLarge,
  caption: mockCaptionField,
};

// Mock params
export const mockParams = {
  styles: 'custom-image-style',
  RenderingIdentifier: 'image-rendering-id',
};

export const mockParamsWithoutStyles = {
  RenderingIdentifier: 'image-rendering-id',
};

// Complete props combinations
export const defaultProps: ImageProps = {
  params: mockParams,
  fields: mockFields,
  rendering: { componentName: 'Image' } as any,
};

export const propsWithoutCaption: ImageProps = {
  params: mockParams,
  fields: mockFieldsWithoutCaption,
  rendering: { componentName: 'Image' } as any,
};

export const propsWithEmptyCaption: ImageProps = {
  params: mockParams,
  fields: mockFieldsWithEmptyCaption,
  rendering: { componentName: 'Image' } as any,
};

export const propsWithoutAlt: ImageProps = {
  params: mockParams,
  fields: mockFieldsWithoutAlt,
  rendering: { componentName: 'Image' } as any,
};

export const propsWithLargeImage: ImageProps = {
  params: mockParams,
  fields: mockFieldsLargeImage,
  rendering: { componentName: 'Image' } as any,
};

export const propsWithoutStyles: ImageProps = {
  params: mockParamsWithoutStyles,
  fields: mockFields,
  rendering: { componentName: 'Image' } as any,
};

export const propsWithoutFields: ImageProps = {
  params: mockParams,
  fields: undefined as any,
  rendering: { componentName: 'Image' } as any,
};

