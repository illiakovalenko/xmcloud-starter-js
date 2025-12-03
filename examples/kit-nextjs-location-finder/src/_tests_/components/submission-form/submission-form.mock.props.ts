import type { SubmissionFormProps } from '@/components/submission-form/submission-form.props';

export const mockSubmissionFormProps: SubmissionFormProps = {
  rendering: {
    componentName: 'SubmissionForm',
    dataSource: 'mock-datasource',
  },
  params: {},
  fields: {
    title: {
      value: 'Request a Vehicle Quote',
    },
  },
  isPageEditing: false,
};

export const mockSubmissionFormPropsDemo: SubmissionFormProps = {
  rendering: {
    componentName: 'SubmissionForm',
    dataSource: 'mock-datasource',
  },
  params: {
    styles: 'position-center',
  },
  fields: {
    title: {
      value: 'Schedule Your Vehicle Demo',
    },
  },
  isPageEditing: false,
};

export const mockSubmissionFormPropsContact: SubmissionFormProps = {
  rendering: {
    componentName: 'SubmissionForm',
    dataSource: 'mock-datasource',
  },
  params: {
    styles: 'position-right',
  },
  fields: {
    title: {
      value: 'Contact Our Fleet Specialists',
    },
  },
  isPageEditing: false,
};
