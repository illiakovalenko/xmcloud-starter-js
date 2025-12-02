import React from 'react';
import { render, screen } from '@testing-library/react';
import { Default as SubscriptionBanner } from '@/components/subscription-banner/SubscriptionBanner';
import {
  defaultProps,
  propsWithoutDescription,
  propsMinimal,
  propsWithEmptyTitle,
  propsWithoutFields,
  propsWithUndefinedFields,
} from './SubscriptionBanner.mockProps';

// Mock next-localization
jest.mock('next-localization', () => ({
  useI18n: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'Demo1_SubscriptionBanner_ButtonLabel': 'Subscribe',
        'Demo1_SubscriptionBanner_EmailFieldPlaceholder': 'Enter your email address',
        'Demo1_SubscriptionBanner_SuccessMessage': 'Thank you for subscribing!',
        'Demo1_SubscriptionBanner_EmailFormatError': 'Invalid email format',
      };
      return translations[key] || key;
    },
  }),
}));

// Mock Sitecore Content SDK
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  Text: ({ field, tag, className }: any) => {
    const Tag = tag || 'span';
    return React.createElement(Tag, { className, 'data-testid': 'text-field' }, field?.value || '');
  },
}));

// Mock react-hook-form
jest.mock('react-hook-form', () => ({
  useForm: () => ({
    handleSubmit: (fn: any) => (e: any) => {
      e.preventDefault();
      fn({ email: 'test@example.com' });
    },
    control: {},
    reset: jest.fn(),
    formState: { errors: {} },
  }),
}));

// Mock UI components
jest.mock('@/components/ui/form', () => ({
  Form: ({ children }: any) => <div data-testid="form">{children}</div>,
  FormField: ({ render }: any) =>
    render({
      field: {
        value: '',
        onChange: jest.fn(),
        onBlur: jest.fn(),
        name: 'email',
        ref: jest.fn(),
      },
    }),
  FormItem: ({ children, className }: any) => (
    <div className={className} data-testid="form-item">
      {children}
    </div>
  ),
  FormControl: ({ children }: any) => <div data-testid="form-control">{children}</div>,
  FormMessage: ({ children, className }: any) => (
    <div className={className} data-testid="form-message">
      {children}
    </div>
  ),
}));

jest.mock('@/components/ui/input', () => ({
  Input: ({ type, placeholder, disabled, className, ...props }: any) => (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
      data-testid="email-input"
      {...props}
    />
  ),
}));

jest.mock('@/components/ui/button', () => ({
  Button: ({ children, type, disabled, className }: any) => (
    <button
      type={type}
      disabled={disabled}
      className={className}
      data-testid="submit-button"
    >
      {children}
    </button>
  ),
}));

describe('SubscriptionBanner Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic rendering', () => {
    it('should render subscription banner with all fields', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      expect(screen.getByText('Subscribe to Our Newsletter')).toBeInTheDocument();
      expect(
        screen.getByText('Get the latest updates delivered directly to your inbox')
      ).toBeInTheDocument();
      expect(screen.getByTestId('email-input')).toBeInTheDocument();
      expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });

    it('should render title in h2 tag', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      const title = screen.getByText('Subscribe to Our Newsletter');
      expect(title.tagName).toBe('H2');
    });

    it('should render description in p tag', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      const description = screen.getByText(
        'Get the latest updates delivered directly to your inbox'
      );
      expect(description.tagName).toBe('P');
    });

    it('should render form with email input', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      const emailInput = screen.getByTestId('email-input');
      expect(emailInput).toHaveAttribute('type', 'email');
      expect(emailInput).toHaveAttribute('placeholder', 'Enter your email address');
    });

    it('should render submit button with correct text', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      const submitButton = screen.getByTestId('submit-button');
      expect(submitButton).toHaveTextContent('Subscribe');
    });
  });

  describe('Optional fields handling', () => {
    it('should render without description field', () => {
      render(<SubscriptionBanner {...propsWithoutDescription} />);

      expect(screen.getByText('Subscribe to Our Newsletter')).toBeInTheDocument();
      expect(
        screen.queryByText('Get the latest updates delivered directly to your inbox')
      ).not.toBeInTheDocument();
      expect(screen.getByTestId('email-input')).toBeInTheDocument();
    });

    it('should render with only required fields', () => {
      render(<SubscriptionBanner {...propsMinimal} />);

      expect(screen.getByText('Subscribe to Our Newsletter')).toBeInTheDocument();
      expect(screen.getByTestId('email-input')).toBeInTheDocument();
      expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });

    it('should handle empty title value', () => {
      render(<SubscriptionBanner {...propsWithEmptyTitle} />);

      const textFields = screen.getAllByTestId('text-field');
      const emptyTitle = textFields.find((el) => el.textContent === '');
      expect(emptyTitle).toBeInTheDocument();
    });
  });

  describe('Component structure', () => {
    it('should render correct DOM structure', () => {
      const { container } = render(<SubscriptionBanner {...defaultProps} />);

      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
      expect(section).toHaveClass('mx-auto', 'w-full', 'px-4', 'py-16', 'text-center');
    });

    it('should apply correct title classes', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      const title = screen.getByText('Subscribe to Our Newsletter');
      expect(title).toHaveClass(
        'text-primary',
        'font-heading',
        'mb-6',
        'font-normal',
        'leading-tight',
        'tracking-tight'
      );
    });

    it('should apply correct description classes', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      const description = screen.getByText(
        'Get the latest updates delivered directly to your inbox'
      );
      expect(description).toHaveClass('font-body', 'text-secondary-foreground', 'mb-12', 'text-lg');
    });

    it('should apply correct form container classes', () => {
      const { container } = render(<SubscriptionBanner {...defaultProps} />);

      const form = container.querySelector('form');
      expect(form).toHaveClass(
        'mx-auto',
        'flex',
        'max-w-md',
        'flex-col',
        'items-center',
        'justify-center',
        'gap-6'
      );
    });

    it('should apply correct input classes', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      const input = screen.getByTestId('email-input');
      expect(input).toHaveClass('border-input', 'w-full', 'flex-1', 'rounded-full', 'px-6', 'py-3');
    });

    it('should apply correct button classes', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      const button = screen.getByTestId('submit-button');
      expect(button).toHaveClass('flex-1', 'rounded-full', 'px-8', 'py-2.5');
    });
  });

  describe('Form functionality', () => {
    it('should have submit button type', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      const submitButton = screen.getByTestId('submit-button');
      expect(submitButton).toHaveAttribute('type', 'submit');
    });

    it('should render form with correct structure', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      expect(screen.getByTestId('form')).toBeInTheDocument();
      expect(screen.getByTestId('form-item')).toBeInTheDocument();
      expect(screen.getByTestId('form-control')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should render email input with correct type', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      const emailInput = screen.getByTestId('email-input');
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    it('should have proper form structure', () => {
      const { container } = render(<SubscriptionBanner {...defaultProps} />);

      const form = container.querySelector('form');
      expect(form).toBeInTheDocument();
    });
  });

  describe('Responsive layout', () => {
    it('should apply responsive container classes', () => {
      const { container } = render(<SubscriptionBanner {...defaultProps} />);

      const innerContainer = container.querySelector('.max-w-5xl');
      expect(innerContainer).toBeInTheDocument();
      expect(innerContainer).toHaveClass('@container', 'mx-auto');
    });

    it('should apply responsive form container classes', () => {
      const { container } = render(<SubscriptionBanner {...defaultProps} />);

      const form = container.querySelector('form');
      expect(form).toHaveClass('max-w-md');
    });
  });

  describe('Edge cases and fallbacks', () => {
    it('should handle null fields gracefully', () => {
      render(<SubscriptionBanner {...propsWithoutFields} />);

      // Component should still render the form structure
      expect(screen.getByTestId('email-input')).toBeInTheDocument();
      expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });

    it('should handle undefined fields gracefully', () => {
      render(<SubscriptionBanner {...propsWithUndefinedFields} />);

      // Component should still render the form structure
      expect(screen.getByTestId('email-input')).toBeInTheDocument();
      expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });
  });

  describe('Internationalization', () => {
    it('should use translated placeholder text', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      const input = screen.getByTestId('email-input');
      expect(input).toHaveAttribute('placeholder', 'Enter your email address');
    });

    it('should use translated button text', () => {
      render(<SubscriptionBanner {...defaultProps} />);

      const button = screen.getByTestId('submit-button');
      expect(button).toHaveTextContent('Subscribe');
    });
  });
});

