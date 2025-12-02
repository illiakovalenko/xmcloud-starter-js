import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { useSitecore } from '@sitecore-content-sdk/nextjs';
import * as ProductListing from '@/components/product-listing/ProductListing';

/* eslint-disable @typescript-eslint/no-explicit-any */

// Mock Sitecore SDK
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  useSitecore: jest.fn(),
}));

// Mock variant components
jest.mock('@/components/product-listing/ProductListingDefault.dev', () => ({
  ProductListingDefault: (props: { isPageEditing?: boolean }) => (
    <div data-testid="product-listing-default" data-editing={props.isPageEditing?.toString()}>
      ProductListingDefault
    </div>
  ),
}));

jest.mock('@/components/product-listing/ProductListingThreeUp.dev', () => ({
  ProductListingThreeUp: (props: { isPageEditing?: boolean }) => (
    <div data-testid="product-listing-three-up" data-editing={props.isPageEditing?.toString()}>
      ProductListingThreeUp
    </div>
  ),
}));

jest.mock('@/components/product-listing/ProductListingSlider.dev', () => ({
  ProductListingSlider: (props: { isPageEditing?: boolean }) => (
    <div data-testid="product-listing-slider" data-editing={props.isPageEditing?.toString()}>
      ProductListingSlider
    </div>
  ),
}));

const mockUseSitecore = useSitecore as jest.MockedFunction<typeof useSitecore>;

describe('ProductListing Variants', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockProps: any = {
    rendering: {
      uid: 'test-uid',
      componentName: 'ProductListing',
      dataSource: 'test-datasource',
    },
    params: {},
    fields: {
      data: {
        datasource: {
          title: { jsonValue: { value: 'Test Title' } },
          viewAllLink: { jsonValue: { value: { href: '/products', text: 'View All' } } },
          products: {
            targetItems: [
              {
                id: 'product-1',
                name: 'Product 1',
              },
            ],
          },
        },
      },
    },
    isPageEditing: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Default variant', () => {
    it('renders ProductListingDefault when not in editing mode', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: false,
          },
        },
      } as any);

      const { getByTestId } = render(<ProductListing.Default {...mockProps} />);

      expect(getByTestId('product-listing-default')).toBeInTheDocument();
      expect(getByTestId('product-listing-default')).toHaveAttribute('data-editing', 'false');
    });

    it('renders ProductListingDefault when in editing mode', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: true,
          },
        },
      } as any);

      const { getByTestId } = render(<ProductListing.Default {...mockProps} />);

      expect(getByTestId('product-listing-default')).toBeInTheDocument();
      expect(getByTestId('product-listing-default')).toHaveAttribute('data-editing', 'true');
    });

    it('passes all props to ProductListingDefault', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: false,
          },
        },
      } as any);

      const { getByTestId } = render(<ProductListing.Default {...mockProps} />);

      expect(getByTestId('product-listing-default')).toBeInTheDocument();
    });

    it('calls useSitecore to get page mode', () => {
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: false,
          },
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any);

      render(<ProductListing.Default {...mockProps} />);

      expect(mockUseSitecore).toHaveBeenCalled();
    });
  });

  describe('ThreeUp variant', () => {
    it('renders ProductListingThreeUp when not in editing mode', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: false,
          },
        },
      } as any);

      const { getByTestId } = render(<ProductListing.ThreeUp {...mockProps} />);

      expect(getByTestId('product-listing-three-up')).toBeInTheDocument();
      expect(getByTestId('product-listing-three-up')).toHaveAttribute('data-editing', 'false');
    });

    it('renders ProductListingThreeUp when in editing mode', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: true,
          },
        },
      } as any);

      const { getByTestId } = render(<ProductListing.ThreeUp {...mockProps} />);

      expect(getByTestId('product-listing-three-up')).toBeInTheDocument();
      expect(getByTestId('product-listing-three-up')).toHaveAttribute('data-editing', 'true');
    });

    it('passes all props to ProductListingThreeUp', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: false,
          },
        },
      } as any);

      const { getByTestId } = render(<ProductListing.ThreeUp {...mockProps} />);

      expect(getByTestId('product-listing-three-up')).toBeInTheDocument();
    });

    it('calls useSitecore to get page mode', () => {
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: false,
          },
        },
      } as any);

      render(<ProductListing.ThreeUp {...mockProps} />);

      expect(mockUseSitecore).toHaveBeenCalled();
    });
  });

  describe('Slider variant', () => {
    it('renders ProductListingSlider when not in editing mode', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: false,
          },
        },
      } as any);

      const { getByTestId } = render(<ProductListing.Slider {...mockProps} />);

      expect(getByTestId('product-listing-slider')).toBeInTheDocument();
      expect(getByTestId('product-listing-slider')).toHaveAttribute('data-editing', 'false');
    });

    it('renders ProductListingSlider when in editing mode', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: true,
          },
        },
      } as any);

      const { getByTestId } = render(<ProductListing.Slider {...mockProps} />);

      expect(getByTestId('product-listing-slider')).toBeInTheDocument();
      expect(getByTestId('product-listing-slider')).toHaveAttribute('data-editing', 'true');
    });

    it('passes all props to ProductListingSlider', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: false,
          },
        },
      } as any);

      const { getByTestId } = render(<ProductListing.Slider {...mockProps} />);

      expect(getByTestId('product-listing-slider')).toBeInTheDocument();
    });

    it('calls useSitecore to get page mode', () => {
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: false,
          },
        },
      } as any);

      render(<ProductListing.Slider {...mockProps} />);

      expect(mockUseSitecore).toHaveBeenCalled();
    });
  });

  describe('Integration with useSitecore', () => {
    it('correctly extracts isPageEditing from Sitecore context for all variants', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mockSitecoreContext: any = {
        page: {
          mode: {
            isEditing: true,
          },
        },
      };

      mockUseSitecore.mockReturnValue(mockSitecoreContext);

      const { getByTestId: getDefaultTestId } = render(<ProductListing.Default {...mockProps} />);
      const { getByTestId: getThreeUpTestId } = render(<ProductListing.ThreeUp {...mockProps} />);
      const { getByTestId: getSliderTestId } = render(<ProductListing.Slider {...mockProps} />);

      expect(getDefaultTestId('product-listing-default')).toHaveAttribute('data-editing', 'true');
      expect(getThreeUpTestId('product-listing-three-up')).toHaveAttribute('data-editing', 'true');
      expect(getSliderTestId('product-listing-slider')).toHaveAttribute('data-editing', 'true');
    });

    it('handles different editing states correctly', () => {
      // Test editing mode
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: true,
          },
        },
      } as any);

      const { getByTestId: getEditingTestId } = render(<ProductListing.Default {...mockProps} />);
      expect(getEditingTestId('product-listing-default')).toHaveAttribute('data-editing', 'true');

      // Clean up before rendering in non-editing mode
      cleanup();

      // Test non-editing mode
      mockUseSitecore.mockReturnValue({
        page: {
          mode: {
            isEditing: false,
          },
        },
      } as any);

      const { getByTestId: getNonEditingTestId } = render(
        <ProductListing.Default {...mockProps} />
      );
      expect(getNonEditingTestId('product-listing-default')).toHaveAttribute(
        'data-editing',
        'false'
      );
    });
  });
});
