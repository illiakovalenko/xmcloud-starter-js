import { LinkField, ImageField } from '@sitecore-content-sdk/nextjs';
import { IconName } from '@/enumerations/Icon.enum';
import { ButtonVariants, ButtonSize } from '@/enumerations/ButtonStyle.enum';
import { IconPosition } from '@/enumerations/IconPosition.enum';

// Mock link fields
export const mockButtonLink: LinkField = {
  value: {
    href: '/test-page',
    text: 'Click Me',
    linktype: 'internal',
    url: '/test-page',
  },
};

export const mockExternalButtonLink: LinkField = {
  value: {
    href: 'https://example.com',
    text: 'External Link',
    linktype: 'external',
    url: 'https://example.com',
  },
};

export const mockButtonLinkWithoutText: LinkField = {
  value: {
    href: '/test-page',
    text: '',
    linktype: 'internal',
    url: '/test-page',
  },
};

export const mockButtonLinkWithoutHref: LinkField = {
  value: {
    href: '',
    text: 'No Href',
    linktype: 'internal',
    url: '',
  },
};

export const mockButtonLinkHttpOnly: LinkField = {
  value: {
    href: 'http://',
    text: 'Invalid Link',
    linktype: 'internal',
    url: 'http://',
  },
};

// Mock image field for EditableImageButton
export const mockIconImage: ImageField = {
  value: {
    src: '/test-icon.svg',
    alt: 'Test Icon',
    width: 24,
    height: 24,
  },
};

export const mockIconImageWithoutSrc: ImageField = {
  value: {
    src: '',
    alt: 'No Icon',
    width: 24,
    height: 24,
  },
};

// Mock fields - Default component
export const mockFieldsDefault = {
  buttonLink: mockButtonLink,
  icon: {
    value: IconName.ARROW_RIGHT,
  },
  isAriaHidden: true,
};

export const mockFieldsWithLeadingIcon = {
  buttonLink: mockButtonLink,
  icon: {
    value: IconName.ARROW_LEFT,
  },
  isAriaHidden: true,
};

export const mockFieldsWithoutIcon = {
  buttonLink: mockButtonLink,
  isAriaHidden: true,
};

export const mockFieldsWithInvalidLink = {
  buttonLink: mockButtonLinkWithoutText,
  icon: {
    value: IconName.ARROW_RIGHT,
  },
  isAriaHidden: true,
};

export const mockFieldsExternalLink = {
  buttonLink: mockExternalButtonLink,
  icon: {
    value: IconName.EXTERNAL,
  },
  isAriaHidden: true,
};

// Mock params
export const mockParamsDefault = {
  size: ButtonSize.DEFAULT,
  iconPosition: IconPosition.TRAILING,
  iconClassName: 'h-5 w-5',
};

export const mockParamsLeadingIcon = {
  size: ButtonSize.DEFAULT,
  iconPosition: IconPosition.LEADING,
  iconClassName: 'h-5 w-5',
};

export const mockParamsEditing = {
  size: ButtonSize.DEFAULT,
  iconPosition: IconPosition.TRAILING,
  iconClassName: 'h-5 w-5',
  isPageEditing: true,
} as any;

export const mockParamsLarge = {
  size: ButtonSize.LG,
  iconPosition: IconPosition.TRAILING,
  iconClassName: 'h-6 w-6',
};

export const mockParamsSmall = {
  size: ButtonSize.SM,
  iconPosition: IconPosition.TRAILING,
  iconClassName: 'h-4 w-4',
};

// Complete props combinations - Default component
export const defaultProps = {
  fields: mockFieldsDefault,
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsWithLeadingIcon = {
  fields: mockFieldsWithLeadingIcon,
  params: mockParamsLeadingIcon,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsWithoutIcon = {
  fields: mockFieldsWithoutIcon,
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsInEditing = {
  fields: mockFieldsDefault,
  params: mockParamsEditing,
  rendering: { componentName: 'ButtonComponent' } as any,
};

export const propsWithInvalidLink = {
  fields: mockFieldsWithInvalidLink,
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsPrimary = {
  fields: mockFieldsDefault,
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsSecondary = {
  fields: mockFieldsDefault,
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsDestructive = {
  fields: mockFieldsDefault,
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsGhost = {
  fields: mockFieldsDefault,
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsOutline = {
  fields: mockFieldsDefault,
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsLink = {
  fields: mockFieldsDefault,
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsTertiary = {
  fields: mockFieldsDefault,
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsLargeSize = {
  fields: mockFieldsDefault,
  params: mockParamsLarge,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsSmallSize = {
  fields: mockFieldsDefault,
  params: mockParamsSmall,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsExternalLink = {
  fields: mockFieldsExternalLink,
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsWithoutFields = {
  fields: null as any,
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

export const propsWithHttpOnlyLink = {
  fields: {
    buttonLink: mockButtonLinkHttpOnly,
  },
  params: mockParamsDefault,
  rendering: { componentName: 'ButtonComponent' } as any,
  isPageEditing: false,
};

// Props for EditableButton
export const editableButtonProps = {
  buttonLink: mockButtonLink,
  icon: {
    value: IconName.ARROW_RIGHT,
  },
  variant: ButtonVariants.PRIMARY,
  size: ButtonSize.DEFAULT,
  iconPosition: IconPosition.TRAILING,
  iconClassName: 'h-5 w-5',
  isAriaHidden: true,
  className: 'custom-class',
  isPageEditing: false,
  asIconLink: false,
};

export const editableButtonPropsAsIconLink = {
  ...editableButtonProps,
  asIconLink: true,
};

export const editableButtonPropsEditing = {
  ...editableButtonProps,
  isPageEditing: true,
};

// Props for EditableImageButton
export const editableImageButtonProps = {
  buttonLink: mockButtonLink,
  icon: mockIconImage,
  variant: ButtonVariants.PRIMARY,
  size: ButtonSize.DEFAULT,
  iconPosition: IconPosition.TRAILING,
  iconClassName: 'h-6 w-6',
  isAriaHidden: true,
  className: 'custom-class',
  isPageEditing: false,
  asIconLink: false,
};

export const editableImageButtonPropsEditing = {
  ...editableImageButtonProps,
  isPageEditing: true,
};

export const editableImageButtonPropsWithoutIcon = {
  ...editableImageButtonProps,
  icon: undefined,
};

export const editableImageButtonPropsWithoutSrc = {
  ...editableImageButtonProps,
  icon: mockIconImageWithoutSrc,
};

