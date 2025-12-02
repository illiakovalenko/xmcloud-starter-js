import { Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import { PromoAnimatedProps } from '@/components/promo-animated/promo-animated.props';

// Mock image field
export const mockImageField: ImageField = {
  value: {
    src: '/images/promo-animated.jpg',
    alt: 'Promo Animated Image',
    width: 452,
    height: 452,
  },
};

// Mock title field
export const mockTitleField: Field<string> = {
  value: 'Discover Excellence',
};

// Mock description field
export const mockDescriptionField: Field<string> = {
  value: '<p>Experience the finest quality with our exclusive collection of premium products designed for excellence.</p>',
};

// Mock primary link field
export const mockPrimaryLinkField: LinkField = {
  value: {
    href: '/shop/premium',
    text: 'Shop Now',
    title: 'Shop Premium Products',
    target: '',
    linktype: 'internal',
  },
};

// Mock secondary link field
export const mockSecondaryLinkField: LinkField = {
  value: {
    href: '/learn-more',
    text: 'Learn More',
    title: 'Learn more about our products',
    target: '',
    linktype: 'internal',
  },
};

// Complete fields data
export const mockFields = {
  image: mockImageField,
  title: mockTitleField,
  description: mockDescriptionField,
  primaryLink: mockPrimaryLinkField,
  secondaryLink: mockSecondaryLinkField,
};

export const mockFieldsWithoutDescription = {
  image: mockImageField,
  title: mockTitleField,
  primaryLink: mockPrimaryLinkField,
  secondaryLink: mockSecondaryLinkField,
};

export const mockFieldsWithoutLinks = {
  image: mockImageField,
  title: mockTitleField,
  description: mockDescriptionField,
};

export const mockFieldsWithoutPrimaryLink = {
  image: mockImageField,
  title: mockTitleField,
  description: mockDescriptionField,
  secondaryLink: mockSecondaryLinkField,
};

export const mockFieldsWithoutSecondaryLink = {
  image: mockImageField,
  title: mockTitleField,
  description: mockDescriptionField,
  primaryLink: mockPrimaryLinkField,
};

// Mock params
export const mockParamsDefault = {
  colorScheme: 'default',
  styles: '',
  RenderingIdentifier: 'promo-animated-rendering-id',
};

export const mockParamsPrimary = {
  colorScheme: 'primary',
  styles: 'custom-promo-style',
  RenderingIdentifier: 'promo-animated-rendering-id',
};

export const mockParamsSecondary = {
  colorScheme: 'secondary',
  styles: '',
  RenderingIdentifier: 'promo-animated-rendering-id',
};

export const mockParamsWithCustomStyles = {
  colorScheme: 'default',
  styles: 'position-center',
  RenderingIdentifier: 'promo-animated-rendering-id',
};

export const mockParamsWithPositionRight = {
  colorScheme: 'default',
  styles: 'position-right',
  RenderingIdentifier: 'promo-animated-rendering-id',
};

// Complete props combinations
export const defaultProps: PromoAnimatedProps = {
  params: mockParamsDefault,
  fields: mockFields,
  rendering: { componentName: 'PromoAnimated' } as any,
  isPageEditing: false,
};

export const propsEditing: PromoAnimatedProps = {
  params: mockParamsDefault,
  fields: mockFields,
  rendering: { componentName: 'PromoAnimated' } as any,
  isPageEditing: true,
};

export const propsPrimaryColorScheme: PromoAnimatedProps = {
  params: mockParamsPrimary,
  fields: mockFields,
  rendering: { componentName: 'PromoAnimated' } as any,
  isPageEditing: false,
};

export const propsSecondaryColorScheme: PromoAnimatedProps = {
  params: mockParamsSecondary,
  fields: mockFields,
  rendering: { componentName: 'PromoAnimated' } as any,
  isPageEditing: false,
};

export const propsWithoutDescription: PromoAnimatedProps = {
  params: mockParamsDefault,
  fields: mockFieldsWithoutDescription,
  rendering: { componentName: 'PromoAnimated' } as any,
  isPageEditing: false,
};

export const propsWithoutLinks: PromoAnimatedProps = {
  params: mockParamsDefault,
  fields: mockFieldsWithoutLinks,
  rendering: { componentName: 'PromoAnimated' } as any,
  isPageEditing: false,
};

export const propsWithoutPrimaryLink: PromoAnimatedProps = {
  params: mockParamsDefault,
  fields: mockFieldsWithoutPrimaryLink,
  rendering: { componentName: 'PromoAnimated' } as any,
  isPageEditing: false,
};

export const propsWithoutSecondaryLink: PromoAnimatedProps = {
  params: mockParamsDefault,
  fields: mockFieldsWithoutSecondaryLink,
  rendering: { componentName: 'PromoAnimated' } as any,
  isPageEditing: false,
};

export const propsWithCustomStyles: PromoAnimatedProps = {
  params: mockParamsWithCustomStyles,
  fields: mockFields,
  rendering: { componentName: 'PromoAnimated' } as any,
  isPageEditing: false,
};

export const propsWithPositionRight: PromoAnimatedProps = {
  params: mockParamsWithPositionRight,
  fields: mockFields,
  rendering: { componentName: 'PromoAnimated' } as any,
  isPageEditing: false,
};

export const propsWithoutFields: PromoAnimatedProps = {
  params: mockParamsDefault,
  fields: null as any,
  rendering: { componentName: 'PromoAnimated' } as any,
  isPageEditing: false,
};


