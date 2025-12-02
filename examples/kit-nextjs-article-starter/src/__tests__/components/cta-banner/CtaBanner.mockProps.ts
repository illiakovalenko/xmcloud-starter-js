import { Field, LinkField } from '@sitecore-content-sdk/nextjs';
import { ColorSchemeLimited as ColorScheme } from '@/enumerations/ColorSchemeLimited.enum';

// Mock text fields
export const mockTitleField: Field<string> = {
  value: 'Ready to Get Started?',
};

export const mockDescriptionField: Field<string> = {
  value: 'Join thousands of satisfied customers and transform your business today.',
};

export const mockEmptyTitleField: Field<string> = {
  value: '',
};

export const mockEmptyDescriptionField: Field<string> = {
  value: '',
};

// Mock link field
export const mockLinkField: LinkField = {
  value: {
    href: '/contact',
    text: 'Contact Us',
    linktype: 'internal',
    url: '/contact',
  },
};

export const mockExternalLinkField: LinkField = {
  value: {
    href: 'https://example.com/signup',
    text: 'Sign Up Now',
    linktype: 'external',
    url: 'https://example.com/signup',
  },
};

export const mockEmptyLinkField: LinkField = {
  value: {
    href: '',
    text: '',
    linktype: 'internal',
    url: '',
  },
};

// Mock fields
export const mockFieldsDefault = {
  titleRequired: mockTitleField,
  descriptionOptional: mockDescriptionField,
  linkOptional: mockLinkField,
};

export const mockFieldsWithoutDescription = {
  titleRequired: mockTitleField,
  linkOptional: mockLinkField,
};

export const mockFieldsWithoutLink = {
  titleRequired: mockTitleField,
  descriptionOptional: mockDescriptionField,
};

export const mockFieldsWithEmptyLink = {
  titleRequired: mockTitleField,
  descriptionOptional: mockDescriptionField,
  linkOptional: mockEmptyLinkField,
};

export const mockFieldsWithExternalLink = {
  titleRequired: mockTitleField,
  descriptionOptional: mockDescriptionField,
  linkOptional: mockExternalLinkField,
};

export const mockFieldsMinimal = {
  titleRequired: mockTitleField,
};

export const mockFieldsWithEmptyValues = {
  titleRequired: mockEmptyTitleField,
  descriptionOptional: mockEmptyDescriptionField,
  linkOptional: mockLinkField,
};

// Mock params
export const mockParamsDefault = {
  colorScheme: 'default' as any, // Use string value instead of enum
};

export const mockParamsPrimary = {
  colorScheme: ColorScheme.PRIMARY,
};

export const mockParamsSecondary = {
  colorScheme: ColorScheme.SECONDARY,
};

export const mockParamsWithoutColorScheme = {};

// Complete props combinations
export const defaultProps = {
  fields: mockFieldsDefault,
  params: mockParamsDefault,
  rendering: { componentName: 'CtaBanner' } as any,
};

export const propsWithoutDescription = {
  fields: mockFieldsWithoutDescription,
  params: mockParamsDefault,
  rendering: { componentName: 'CtaBanner' } as any,
};

export const propsWithoutLink = {
  fields: mockFieldsWithoutLink,
  params: mockParamsDefault,
  rendering: { componentName: 'CtaBanner' } as any,
};

export const propsWithEmptyLink = {
  fields: mockFieldsWithEmptyLink,
  params: mockParamsDefault,
  rendering: { componentName: 'CtaBanner' } as any,
};

export const propsWithExternalLink = {
  fields: mockFieldsWithExternalLink,
  params: mockParamsDefault,
  rendering: { componentName: 'CtaBanner' } as any,
};

export const propsMinimal = {
  fields: mockFieldsMinimal,
  params: mockParamsDefault,
  rendering: { componentName: 'CtaBanner' } as any,
};

export const propsWithEmptyValues = {
  fields: mockFieldsWithEmptyValues,
  params: mockParamsDefault,
  rendering: { componentName: 'CtaBanner' } as any,
};

export const propsWithPrimaryColorScheme = {
  fields: mockFieldsDefault,
  params: mockParamsPrimary,
  rendering: { componentName: 'CtaBanner' } as any,
};

export const propsWithSecondaryColorScheme = {
  fields: mockFieldsDefault,
  params: mockParamsSecondary,
  rendering: { componentName: 'CtaBanner' } as any,
};

export const propsWithoutColorScheme = {
  fields: mockFieldsDefault,
  params: mockParamsWithoutColorScheme,
  rendering: { componentName: 'CtaBanner' } as any,
};

export const propsWithoutFields = {
  fields: null as any,
  params: mockParamsDefault,
  rendering: { componentName: 'CtaBanner' } as any,
};

