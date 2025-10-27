import type {
  LocationSearchProps,
  DealershipFields,
} from '../../components/location-search/location-search.props';
import type { Field } from '@sitecore-content-sdk/nextjs';

// Inline utility functions
const createMockField = <T>(value: T): Field<T> => ({ value }) as unknown as Field<T>;

const mockTitleField = createMockField('Find a Dealership Near You');

const mockDealership1: DealershipFields = {
  dealershipName: { jsonValue: createMockField('Downtown Auto') },
  dealershipAddress: { jsonValue: createMockField('123 Main St') },
  dealershipCity: { jsonValue: createMockField('Atlanta') },
  dealershipState: { jsonValue: createMockField('GA') },
  dealershipZipCode: { jsonValue: createMockField('30309') },
};

const mockDealership2: DealershipFields = {
  dealershipName: { jsonValue: createMockField('Suburban Motors') },
  dealershipAddress: { jsonValue: createMockField('456 Oak Ave') },
  dealershipCity: { jsonValue: createMockField('Marietta') },
  dealershipState: { jsonValue: createMockField('GA') },
  dealershipZipCode: { jsonValue: createMockField('30062') },
};

export const defaultLocationSearchProps: LocationSearchProps = {
  rendering: { componentName: 'LocationSearch', params: {} },
  params: {},
  fields: {
    data: {
      datasource: {
        googleMapsApiKey: 'test-google-maps-api-key',
        title: { jsonValue: mockTitleField },
        defaultZipCode: '30309',
      },
      dealerships: {
        results: [mockDealership1, mockDealership2],
      },
    },
  },
  defaultZipCode: '30309',
  googleMapsApiKey: 'test-google-maps-api-key',
  isPageEditing: false,
};

export const locationSearchPropsNoResults: LocationSearchProps = {
  rendering: { componentName: 'LocationSearch', params: {} },
  params: {},
  fields: {
    data: {
      datasource: {
        googleMapsApiKey: 'test-google-maps-api-key',
        title: { jsonValue: mockTitleField },
        defaultZipCode: '00000',
      },
      dealerships: {
        results: [],
      },
    },
  },
  defaultZipCode: '00000',
  googleMapsApiKey: 'test-google-maps-api-key',
  isPageEditing: false,
};

export const locationSearchPropsMinimal: LocationSearchProps = {
  rendering: { componentName: 'LocationSearch', params: {} },
  params: {},
  fields: {
    data: {
      datasource: {
        googleMapsApiKey: '',
        title: { jsonValue: mockTitleField },
        defaultZipCode: '30309',
      },
      dealerships: {
        results: [mockDealership1],
      },
    },
  },
  defaultZipCode: '30309',
  googleMapsApiKey: '',
  isPageEditing: false,
};

export const locationSearchPropsEditing: LocationSearchProps = {
  ...defaultLocationSearchProps,
  isPageEditing: true,
};

// Mock useSitecore contexts
export const mockUseSitecoreNormal = {
  page: { mode: { isEditing: false } },
} as unknown;

export const mockUseSitecoreEditing = {
  page: { mode: { isEditing: true } },
} as unknown;
