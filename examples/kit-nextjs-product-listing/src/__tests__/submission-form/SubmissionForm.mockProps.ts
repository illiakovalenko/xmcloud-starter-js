/* eslint-disable */
import { Field } from '@sitecore-content-sdk/nextjs';
import { SubmissionFormProps } from '../../components/submission-form/submission-form.props';

// Inline utility functions
const createMockField = <T>(value: T): Field<T> => ({ value }) as unknown as Field<T>;

// Mock useSitecore contexts
export const mockUseSitecoreNormal = {
  page: { mode: { isEditing: false } },
} as unknown;

export const mockUseSitecoreEditing = {
  page: { mode: { isEditing: true } },
} as unknown;

// Default submission form props
export const defaultSubmissionFormProps: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'position-left',
  },
  fields: {
    title: createMockField('Get Started with SYNC Audio'),
  },
};

// Props for centered variant
export const submissionFormPropsCentered: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'position-center custom-styling',
  },
  fields: {
    title: createMockField('Join the SYNC Community'),
  },
};

// Props with custom position styles
export const submissionFormPropsCustomPosition: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'position-right bg-primary text-white',
  },
  fields: {
    title: createMockField('Contact Our Audio Experts'),
  },
};

// Props without position styles (should default)
export const submissionFormPropsNoPosition: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'custom-background rounded-corners',
  },
  fields: {
    title: createMockField('Connect with SYNC'),
  },
};

// Props with no styles parameter
export const submissionFormPropsNoStyles: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {},
  fields: {
    title: createMockField('Simple Form Title'),
  },
};

// Props with empty title
export const submissionFormPropsEmptyTitle: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'position-left',
  },
  fields: {
    title: createMockField(''),
  },
};

// Props with no title field
export const submissionFormPropsNoTitle: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'position-center',
  },
  fields: {} as any,
};

// Props with no fields (should show fallback)
export const submissionFormPropsNoFields: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'position-left',
  },
  fields: null as any,
};

// Props with long title text
export const submissionFormPropsLongTitle: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'position-center complex-styling with-multiple-classes',
  },
  fields: {
    title: createMockField(
      'Experience Premium Audio Excellence with SYNC Professional Equipment - Connect with Our Expert Team for Personalized Recommendations'
    ),
  },
};

// Props with special characters
export const submissionFormPropsSpecialChars: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'position-left "quoted-class" & special/chars',
  },
  fields: {
    title: createMockField('SYNC™ Àudio - Jóin Öur Prémium Cömmunity & Gët Ëxclusive Àccess'),
  },
};

// Props for testing different positions
export const submissionFormPropsPositionLeft: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'position-left bg-background',
  },
  fields: {
    title: createMockField('Left Aligned Form'),
  },
};

export const submissionFormPropsPositionCenter: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'position-center bg-secondary',
  },
  fields: {
    title: createMockField('Center Aligned Form'),
  },
};

export const submissionFormPropsPositionRight: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'position-right bg-accent',
  },
  fields: {
    title: createMockField('Right Aligned Form'),
  },
};

// Props with undefined fields
export const submissionFormPropsUndefinedTitle: SubmissionFormProps = {
  rendering: { componentName: 'SubmissionForm' },
  params: {
    styles: 'position-left',
  },
  fields: {
    title: undefined as any,
  },
};
