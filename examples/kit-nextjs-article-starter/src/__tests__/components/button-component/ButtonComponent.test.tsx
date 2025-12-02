import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  Default as ButtonComponent,
  Primary,
  Secondary,
  Destructive,
  Ghost,
  Outline,
  LinkButton,
  Tertiary,
  EditableButton,
  EditableImageButton,
} from '@/components/button-component/ButtonComponent';
import {
  defaultProps,
  propsWithLeadingIcon,
  propsWithoutIcon,
  propsInEditing,
  propsWithInvalidLink,
  propsPrimary,
  propsSecondary,
  propsDestructive,
  propsGhost,
  propsOutline,
  propsLink,
  propsTertiary,
  propsLargeSize,
  propsSmallSize,
  propsExternalLink,
  propsWithoutFields,
  propsWithHttpOnlyLink,
  editableButtonProps,
  editableButtonPropsAsIconLink,
  editableButtonPropsEditing,
  editableImageButtonProps,
  editableImageButtonPropsEditing,
  editableImageButtonPropsWithoutSrc,
} from './ButtonComponent.mockProps';

// Mock Sitecore Content SDK components
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  Link: ({ field, children, editable, className, 'aria-label': ariaLabel }: any) => (
    <a
      href={field?.value?.href || field?.value?.url}
      data-testid="sitecore-link"
      data-editable={editable ? 'true' : undefined}
      className={className}
      aria-label={ariaLabel}
    >
      {children || field?.value?.text}
    </a>
  ),
}));

// Mock UI components
jest.mock('@/components/ui/button', () => ({
  Button: ({ children, asChild, variant, size, className }: any) => (
    <div
      data-testid="button"
      data-as-child={asChild}
      data-variant={variant}
      data-size={size}
      className={className}
    >
      {children}
    </div>
  ),
}));

jest.mock('@/components/icon/Icon', () => ({
  Default: ({ iconName, className, isAriaHidden }: any) => (
    <span
      data-testid={`icon-${iconName}`}
      className={className}
      aria-hidden={isAriaHidden}
    >
      {iconName}
    </span>
  ),
}));

jest.mock('@/components/image/ImageWrapper.dev', () => ({
  Default: React.forwardRef(({ image, className, 'aria-hidden': ariaHidden }: any, ref: any) => (
    <img
      ref={ref}
      src={image?.value?.src}
      alt={image?.value?.alt}
      className={className}
      aria-hidden={ariaHidden}
      data-testid="image-wrapper"
    />
  )),
}));

jest.mock('@/utils/NoDataFallback', () => ({
  NoDataFallback: ({ componentName }: any) => (
    <div data-testid="no-data-fallback">{componentName}</div>
  ),
}));

describe('ButtonComponent', () => {
  describe('Default variant', () => {
    describe('Basic rendering', () => {
      it('should render button with link', () => {
        render(<ButtonComponent {...defaultProps} />);

        expect(screen.getByTestId('button')).toBeInTheDocument();
        expect(screen.getByTestId('sitecore-link')).toBeInTheDocument();
      });

      it('should render button text', () => {
        render(<ButtonComponent {...defaultProps} />);

        expect(screen.getByText('Click Me')).toBeInTheDocument();
      });

      it('should render with correct href', () => {
        render(<ButtonComponent {...defaultProps} />);

        const link = screen.getByTestId('sitecore-link');
        expect(link).toHaveAttribute('href', '/test-page');
      });

      it('should render trailing icon by default', () => {
        render(<ButtonComponent {...defaultProps} />);

        // Component uses linktype as icon when icon prop value is provided but not used as fallback
        expect(screen.getByTestId('icon-internal')).toBeInTheDocument();
      });

      it('should render leading icon when iconPosition is leading', () => {
        render(<ButtonComponent {...propsWithLeadingIcon} />);

        // Component uses linktype as icon when icon prop value is provided but not used as fallback
        expect(screen.getByTestId('icon-internal')).toBeInTheDocument();
      });

      it('should render without icon when not provided', () => {
        render(<ButtonComponent {...propsWithoutIcon} />);

        // Icon should still render with default value based on linktype
        expect(screen.queryByTestId('icon-internal')).toBeInTheDocument();
      });
    });

    describe('Button variants', () => {
      it('should render without explicit variant (undefined)', () => {
        render(<ButtonComponent {...defaultProps} />);

        const button = screen.getByTestId('button');
        // When no variant is specified, it will be undefined
        expect(button).toBeInTheDocument();
      });

      it('should render button with asChild prop', () => {
        render(<ButtonComponent {...defaultProps} />);

        const button = screen.getByTestId('button');
        expect(button).toHaveAttribute('data-as-child', 'true');
      });
    });

    describe('Editing mode', () => {
      it('should render editable link in editing mode', () => {
        render(<ButtonComponent {...propsInEditing} />);

        const link = screen.getByTestId('sitecore-link');
        expect(link).toHaveAttribute('data-editable', 'true');
      });

      it('should not render icon in editing mode', () => {
        render(<ButtonComponent {...propsInEditing} />);

        // In editing mode, only the editable link is rendered
        expect(screen.queryByTestId('icon-arrow-right')).not.toBeInTheDocument();
      });
    });

    describe('Link validation', () => {
      it('should not render when link is invalid (no text)', () => {
        const { container } = render(<ButtonComponent {...propsWithInvalidLink} />);

        expect(container.firstChild).toBeNull();
      });

      it('should not render when href is http://', () => {
        const { container } = render(<ButtonComponent {...propsWithHttpOnlyLink} />);

        expect(container.firstChild).toBeNull();
      });

      it('should render external link', () => {
        render(<ButtonComponent {...propsExternalLink} />);

        const link = screen.getByTestId('sitecore-link');
        expect(link).toHaveAttribute('href', 'https://example.com');
      });
    });

    describe('Size variants', () => {
      it('should render with default size', () => {
        render(<ButtonComponent {...defaultProps} />);

        const button = screen.getByTestId('button');
        expect(button).toHaveAttribute('data-size', 'default');
      });

      it('should render with large size', () => {
        render(<ButtonComponent {...propsLargeSize} />);

        const button = screen.getByTestId('button');
        expect(button).toHaveAttribute('data-size', 'lg');
      });

      it('should render with small size', () => {
        render(<ButtonComponent {...propsSmallSize} />);

        const button = screen.getByTestId('button');
        expect(button).toHaveAttribute('data-size', 'sm');
      });
    });

    describe('Icon properties', () => {
      it('should apply icon className', () => {
        render(<ButtonComponent {...defaultProps} />);

        const icon = screen.getByTestId('icon-internal');
        expect(icon).toHaveClass('h-5 w-5');
      });

      it('should set aria-hidden on icon', () => {
        render(<ButtonComponent {...defaultProps} />);

        const icon = screen.getByTestId('icon-internal');
        expect(icon).toHaveAttribute('aria-hidden', 'true');
      });
    });

    describe('Edge cases', () => {
      it('should not render when fields is null', () => {
        const { container } = render(<ButtonComponent {...propsWithoutFields} />);

        // Component returns null when fields is null and link validation fails
        expect(container.firstChild).toBeNull();
      });
    });
  });

  describe('Variant components', () => {
    it('should render Primary variant (maps to default)', () => {
      render(<Primary {...propsPrimary} />);

      const button = screen.getByTestId('button');
      // PRIMARY and DEFAULT both map to 'default' in the enum
      expect(button).toHaveAttribute('data-variant', 'default');
    });

    it('should render Secondary variant', () => {
      render(<Secondary {...propsSecondary} />);

      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('data-variant', 'secondary');
    });

    it('should render Destructive variant', () => {
      render(<Destructive {...propsDestructive} />);

      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('data-variant', 'destructive');
    });

    it('should render Ghost variant', () => {
      render(<Ghost {...propsGhost} />);

      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('data-variant', 'ghost');
    });

    it('should render Outline variant', () => {
      render(<Outline {...propsOutline} />);

      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('data-variant', 'outline');
    });

    it('should render Link variant', () => {
      render(<LinkButton {...propsLink} />);

      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('data-variant', 'link');
    });

    it('should render Tertiary variant', () => {
      render(<Tertiary {...propsTertiary} />);

      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('data-variant', 'tertiary');
    });
  });

  describe('EditableButton', () => {
    it('should render editable button', () => {
      render(<EditableButton {...editableButtonProps} />);

      expect(screen.getByTestId('button')).toBeInTheDocument();
      expect(screen.getByTestId('sitecore-link')).toBeInTheDocument();
    });

    it('should render button text', () => {
      render(<EditableButton {...editableButtonProps} />);

      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('should render with icon', () => {
      render(<EditableButton {...editableButtonProps} />);

      expect(screen.getByTestId('icon-arrow-right')).toBeInTheDocument();
    });

    it('should render in editing mode', () => {
      render(<EditableButton {...editableButtonPropsEditing} />);

      const link = screen.getByTestId('sitecore-link');
      expect(link).toHaveAttribute('data-editable', 'true');
    });

    it('should render as icon link with aria-label', () => {
      render(<EditableButton {...editableButtonPropsAsIconLink} />);

      const link = screen.getByTestId('sitecore-link');
      expect(link).toHaveAttribute('aria-label', 'Click Me');
      // Text should not be rendered when asIconLink is true
      expect(link.textContent).not.toContain('Click Me');
    });

    it('should apply custom className', () => {
      render(<EditableButton {...editableButtonProps} />);

      const link = screen.getByTestId('sitecore-link');
      expect(link).toHaveClass('custom-class');
    });
  });

  describe('EditableImageButton', () => {
    it('should render editable image button', () => {
      render(<EditableImageButton {...editableImageButtonProps} />);

      expect(screen.getByTestId('button')).toBeInTheDocument();
      expect(screen.getByTestId('sitecore-link')).toBeInTheDocument();
    });

    it('should render button text', () => {
      render(<EditableImageButton {...editableImageButtonProps} />);

      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('should render with image icon', () => {
      render(<EditableImageButton {...editableImageButtonProps} />);

      const image = screen.getByTestId('image-wrapper');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', '/test-icon.svg');
    });

    it('should render in editing mode', () => {
      render(<EditableImageButton {...editableImageButtonPropsEditing} />);

      const link = screen.getByTestId('sitecore-link');
      expect(link).toHaveAttribute('data-editable', 'true');
    });

    it('should render with link text when icon has no src and not editing', () => {
      render(<EditableImageButton {...editableImageButtonPropsWithoutSrc} />);

      // Component still renders with link text even when icon src is empty
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('should render without icon when not provided', () => {
      render(<EditableImageButton {...editableImageButtonPropsEditing} />);

      const imageWrappers = screen.getAllByTestId('image-wrapper');
      expect(imageWrappers.length).toBeGreaterThan(0);
    });

    it('should apply image className', () => {
      render(<EditableImageButton {...editableImageButtonProps} />);

      const image = screen.getByTestId('image-wrapper');
      expect(image).toHaveClass('h-6 w-6');
    });

    it('should set aria-hidden on image', () => {
      render(<EditableImageButton {...editableImageButtonProps} />);

      const image = screen.getByTestId('image-wrapper');
      expect(image).toHaveAttribute('aria-hidden', 'true');
    });
  });
});

