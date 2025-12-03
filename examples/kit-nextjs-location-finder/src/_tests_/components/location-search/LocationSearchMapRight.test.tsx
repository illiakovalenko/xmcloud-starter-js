import React from 'react';
import { render } from '@testing-library/react';
import { LocationSearchMapRight } from '@/components/location-search/LocationSearchMapRight.dev';
import { mockLocationSearchProps } from './location-search.mock.props';

// Mock dependencies
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  Text: jest.fn(({ field, tag = 'span', className }) =>
    React.createElement(tag, { className }, field?.value || '')
  ),
}));

jest.mock('@/hooks/use-zipcode', () => ({
  useZipcode: jest.fn(() => ({
    zipcode: '30303',
    loading: false,
    error: null,
    showModal: false,
    fetchZipcode: jest.fn(),
    updateZipcode: jest.fn(),
    closeModal: jest.fn(),
  })),
}));

jest.mock('@/hooks/use-match-media', () => ({
  useMatchMedia: jest.fn(() => false),
}));

jest.mock('@/components/location-search/LocationSearchItem.dev', () => ({
  LocationSearchItem: jest.fn(() => <div data-testid="location-search-item">Item</div>),
}));

jest.mock('@/components/location-search/GoogleMap.dev', () => ({
  GoogleMap: jest.fn(() => <div data-testid="google-map">Map</div>),
}));

jest.mock('@/components/zipcode-modal/zipcode-modal.dev', () => ({
  ZipcodeModal: jest.fn(() => <div data-testid="zipcode-modal">Modal</div>),
}));

jest.mock('@/components/animated-section/AnimatedSection.dev', () => ({
  Default: jest.fn(({ children }) => <div data-testid="animated-section">{children}</div>),
}));

jest.mock('@/utils/NoDataFallback', () => ({
  NoDataFallback: jest.fn(() => <div data-testid="no-data-fallback">No Data</div>),
}));

jest.mock('@/components/ui/button', () => ({
  Button: jest.fn(({ children }) => <button data-testid="button">{children}</button>),
}));

jest.mock('@/lib/utils', () => ({
  cn: jest.fn((...args) => args.filter(Boolean).join(' ')),
}));

describe('LocationSearchMapRight', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'test-api-key';
  });

  it('renders component with title', () => {
    const { getByText } = render(<LocationSearchMapRight {...mockLocationSearchProps} />);

    expect(getByText('Find a Dealership Near You')).toBeInTheDocument();
  });

  it('renders Google Map component', () => {
    const { getByTestId } = render(<LocationSearchMapRight {...mockLocationSearchProps} />);

    expect(getByTestId('google-map')).toBeInTheDocument();
  });

  it('renders animated section wrapper', () => {
    const { getAllByTestId } = render(<LocationSearchMapRight {...mockLocationSearchProps} />);

    const animatedSections = getAllByTestId('animated-section');
    expect(animatedSections.length).toBeGreaterThan(0);
    expect(animatedSections[0]).toBeInTheDocument();
  });
});
