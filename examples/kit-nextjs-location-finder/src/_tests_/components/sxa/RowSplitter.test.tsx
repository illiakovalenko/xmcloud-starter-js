import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default as RowSplitter } from '@/components/sxa/RowSplitter';

// Mock Placeholder component
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  Placeholder: ({ name }: { name: string }) => (
    <div data-testid={`placeholder-${name}`}>Placeholder: {name}</div>
  ),
}));

describe('SXA RowSplitter', () => {
  const mockRendering = {
    componentName: 'RowSplitter',
    dataSource: '',
    uid: '123',
  };

  it('renders rows with specified styles', () => {
    const params = {
      EnabledPlaceholders: '1,2,3',
      Styles1: 'vehicle-hero-section',
      Styles2: 'vehicle-specs-section',
      Styles3: 'vehicle-cta-section',
      RenderingIdentifier: 'row-splitter-1',
      styles: 'vehicle-page-layout',
    };

    const { container, getByTestId } = render(
      <RowSplitter rendering={mockRendering} params={params} />
    );

    const splitterDiv = container.querySelector('.row-splitter');
    expect(splitterDiv).toBeInTheDocument();
    expect(splitterDiv).toHaveClass('vehicle-page-layout');

    expect(getByTestId('placeholder-row-1-{*}')).toBeInTheDocument();
    expect(getByTestId('placeholder-row-2-{*}')).toBeInTheDocument();
    expect(getByTestId('placeholder-row-3-{*}')).toBeInTheDocument();
  });

  it('renders only enabled rows', () => {
    const params = {
      EnabledPlaceholders: '1,3',
      Styles1: 'header-row',
      Styles3: 'footer-row',
      RenderingIdentifier: 'row-splitter-2',
      styles: '',
    };

    const { getByTestId, queryByTestId } = render(
      <RowSplitter rendering={mockRendering} params={params} />
    );

    expect(getByTestId('placeholder-row-1-{*}')).toBeInTheDocument();
    expect(queryByTestId('placeholder-row-2-{*}')).not.toBeInTheDocument();
    expect(getByTestId('placeholder-row-3-{*}')).toBeInTheDocument();
  });

  it('applies container-fluid to each row section', () => {
    const params = {
      EnabledPlaceholders: '1,2',
      Styles1: 'ambulance-section bg-white',
      Styles2: 'fire-truck-section bg-gray',
      RenderingIdentifier: 'vehicle-rows',
      styles: '',
    };

    const { container } = render(<RowSplitter rendering={mockRendering} params={params} />);

    const rowContainers = container.querySelectorAll('.container-fluid');
    expect(rowContainers).toHaveLength(2);
    expect(rowContainers[0]).toHaveClass('ambulance-section', 'bg-white');
    expect(rowContainers[1]).toHaveClass('fire-truck-section', 'bg-gray');
  });
});
