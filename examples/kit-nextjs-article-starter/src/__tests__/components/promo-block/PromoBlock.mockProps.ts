import { Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import { PromoBlockProps } from '@/components/promo-block/promo-block.props';

// Mock text fields
export const mockHeadingField: Field<string> = {
  value: 'Discover Premium Quality',
};

export const mockDescriptionField: Field<string> = {
  value: '<p>Experience the finest craftsmanship with our exclusive collection of premium products.</p>',
};

// Mock image field
export const mockImageField: ImageField = {
  value: {
    src: '/images/promo-image.jpg',
    alt: 'Premium Product',
    width: 1920,
    height: 1080,
  },
};

// Mock link field
export const mockLinkField: LinkField = {
  value: {
    href: '/shop/premium',
    text: 'Shop Now',
    title: 'Shop Premium Products',
    target: '',
    linktype: 'internal',
  },
};

// Complete fields data
export const mockFields = {
  heading: mockHeadingField,
  description: mockDescriptionField,
  image: mockImageField,
  link: mockLinkField,
};

export const mockFieldsWithoutLink = {
  heading: mockHeadingField,
  description: mockDescriptionField,
  image: mockImageField,
};

export const mockFieldsWithoutDescription = {
  heading: mockHeadingField,
  description: { value: '' } as Field<string>,
  image: mockImageField,
  link: mockLinkField,
};

// Mock params - Orientations
export const mockParamsImageLeft = {
  orientation: 'imageLeft',
  variation: 'default',
  RenderingIdentifier: 'promo-block-rendering-id',
};

export const mockParamsImageRight = {
  orientation: 'imageRight',
  variation: 'default',
  RenderingIdentifier: 'promo-block-rendering-id',
};

// Mock params - Variations
export const mockParamsVersionTwo = {
  orientation: 'imageLeft',
  variation: 'versionTwo',
  RenderingIdentifier: 'promo-block-rendering-id',
};

export const mockParamsVersionTwoImageRight = {
  orientation: 'imageRight',
  variation: 'versionTwo',
  RenderingIdentifier: 'promo-block-rendering-id',
};

export const mockParamsDefault = {
  RenderingIdentifier: 'promo-block-rendering-id',
};

// Complete props combinations
export const defaultProps: PromoBlockProps = {
  params: mockParamsImageLeft,
  fields: mockFields,
  rendering: { componentName: 'PromoBlock' } as any,
};

export const propsImageRight: PromoBlockProps = {
  params: mockParamsImageRight,
  fields: mockFields,
  rendering: { componentName: 'PromoBlock' } as any,
};

export const propsVersionTwo: PromoBlockProps = {
  params: mockParamsVersionTwo,
  fields: mockFields,
  rendering: { componentName: 'PromoBlock' } as any,
};

export const propsVersionTwoImageRight: PromoBlockProps = {
  params: mockParamsVersionTwoImageRight,
  fields: mockFields,
  rendering: { componentName: 'PromoBlock' } as any,
};

export const propsWithoutLink: PromoBlockProps = {
  params: mockParamsImageLeft,
  fields: mockFieldsWithoutLink,
  rendering: { componentName: 'PromoBlock' } as any,
};

export const propsWithoutDescription: PromoBlockProps = {
  params: mockParamsImageLeft,
  fields: mockFieldsWithoutDescription,
  rendering: { componentName: 'PromoBlock' } as any,
};

export const propsWithoutParams: PromoBlockProps = {
  params: mockParamsDefault,
  fields: mockFields,
  rendering: { componentName: 'PromoBlock' } as any,
};

export const propsWithoutFields: PromoBlockProps = {
  params: mockParamsImageLeft,
  fields: null as any,
  rendering: { componentName: 'PromoBlock' } as any,
};

