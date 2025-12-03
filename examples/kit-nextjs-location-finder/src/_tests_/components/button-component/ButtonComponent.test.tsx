import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Default as Button,
  ButtonComponentProps,
} from '@/components/button-component/ButtonComponent';

//  Mocks
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  Link: ({
    field,
    children,
    ...props
  }: React.PropsWithChildren<{ field?: { value?: { href?: string; text?: string } } }> &
    React.ComponentProps<'a'>) => (
    <a href={field?.value?.href} {...props}>
      {children || field?.value?.text}
    </a>
  ),
}));

jest.mock('@/components/icon/Icon', () => ({
  Default: ({
    iconName,
    className,
    isAriaHidden,
  }: {
    iconName: string;
    className?: string;
    isAriaHidden?: boolean;
  }) => (
    <span data-testid="icon" className={className} aria-hidden={isAriaHidden}>
      {iconName}
    </span>
  ),
}));

jest.mock('@/components/image/ImageWrapper.dev', () => ({
  Default: ({
    image,
    className,
    'aria-hidden': ariaHidden,
  }: {
    image?: { value?: { src?: string } };
    className?: string;
    'aria-hidden'?: boolean;
  }) => <img src={image?.value?.src} alt="" className={className} aria-hidden={ariaHidden} />,
}));

jest.mock('@/utils/NoDataFallback', () => ({
  NoDataFallback: ({ componentName }: { componentName: string }) => (
    <div data-testid="no-data">No data for {componentName}</div>
  ),
}));

jest.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: React.PropsWithChildren<React.ComponentProps<'button'>>) => (
    <button {...props}>{children}</button>
  ),
}));

// ----------------------
//  Mock Data
// ----------------------
const mockRendering = { componentName: 'Button' };
const mockParams = {
  size: 'md',
  iconPosition: 'leading',
  iconClassName: 'icon-class',
  isPageEditing: false,
};

const mockFields = {
  buttonLink: {
    value: {
      text: 'Click Me',
      href: '/click',
      linktype: 'internal',
    },
  },
  icon: { value: 'arrow-right' },
  isAriaHidden: true,
};

const mockProps = {
  rendering: mockRendering,
  params: mockParams,
  fields: mockFields,
} as unknown as ButtonComponentProps;

// ----------------------
// 🧪 Tests
// ----------------------
describe('Button Component', () => {
  it('renders button with link and icon when not editing', () => {
    render(<Button {...mockProps} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders editable link when editing', () => {
    const props = {
      ...mockProps,
      params: { ...mockParams, isPageEditing: true },
    } as unknown as ButtonComponentProps;
    render(<Button {...props} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('does not render button if link is invalid and not editing', () => {
    const props = {
      ...mockProps,
      fields: {
        buttonLink: {
          value: {
            text: '',
            href: 'http://',
          },
        },
      },
    };
    const { container } = render(<Button {...props} />);
    expect(container).toBeEmptyDOMElement();
  });
});
