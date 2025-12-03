import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PartialDesignDynamicPlaceholder from '@/components/sxa/PartialDesignDynamicPlaceholder';

// Mock Placeholder component
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  Placeholder: ({ name, rendering }: { name: string; rendering: { uid: string } }) => (
    <div data-testid={`placeholder-${name}`} data-rendering-id={rendering.uid}>
      Dynamic Placeholder: {name}
    </div>
  ),
}));

describe('SXA PartialDesignDynamicPlaceholder', () => {
  it('renders dynamic placeholder with signature', () => {
    const mockRendering = {
      componentName: 'PartialDesignDynamicPlaceholder',
      dataSource: '',
      uid: 'dynamic-123',
      params: {
        sig: 'vehicle-showcase-{*}',
      },
    };

    const { getByTestId } = render(
      <PartialDesignDynamicPlaceholder rendering={mockRendering} params={{}} />
    );

    const placeholder = getByTestId('placeholder-vehicle-showcase-{*}');
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveTextContent('Dynamic Placeholder: vehicle-showcase-{*}');
    expect(placeholder).toHaveAttribute('data-rendering-id', 'dynamic-123');
  });

  it('renders empty placeholder when signature is not provided', () => {
    const mockRendering = {
      componentName: 'PartialDesignDynamicPlaceholder',
      dataSource: '',
      uid: 'dynamic-456',
      params: {
        sig: '',
      },
    };

    const { getByTestId } = render(
      <PartialDesignDynamicPlaceholder rendering={mockRendering} params={{}} />
    );

    const placeholder = getByTestId('placeholder-');
    expect(placeholder).toBeInTheDocument();
  });

  it('passes rendering context to placeholder', () => {
    const mockRendering = {
      componentName: 'PartialDesignDynamicPlaceholder',
      dataSource: '/sitecore/content/vehicles',
      uid: 'dynamic-789',
      params: {
        sig: 'ambulance-variants-{*}',
      },
    };

    const { getByTestId } = render(
      <PartialDesignDynamicPlaceholder rendering={mockRendering} params={{}} />
    );

    const placeholder = getByTestId('placeholder-ambulance-variants-{*}');
    expect(placeholder).toHaveAttribute('data-rendering-id', 'dynamic-789');
  });
});
