import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default as Container } from '@/components/sxa/Container';

// Mock Placeholder component
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  Placeholder: ({ name }: { name: string }) => (
    <div data-testid={`placeholder-${name}`}>Placeholder: {name}</div>
  ),
}));

describe('SXA Container', () => {
  const mockRendering = {
    componentName: 'Container',
    dataSource: '',
    uid: '123',
    params: {
      DynamicPlaceholderId: 'main-content',
      GridParameters: 'col-12',
      Styles: 'bg-white',
      RenderingIdentifier: 'container-1',
    },
  };

  it('renders container with grid parameters and styles', () => {
    const { container } = render(
      <Container rendering={mockRendering} params={mockRendering.params} />
    );

    const containerDiv = container.querySelector('.component.container-default');
    expect(containerDiv).toBeInTheDocument();
    expect(containerDiv).toHaveClass('col-12');
    expect(containerDiv).toHaveClass('bg-white');
  });

  it('renders placeholder with correct key', () => {
    const { getByTestId } = render(
      <Container rendering={mockRendering} params={mockRendering.params} />
    );

    expect(getByTestId('placeholder-container-main-content')).toBeInTheDocument();
  });

  it('applies background image when provided', () => {
    const paramsWithBackground = {
      ...mockRendering.params,
      BackgroundImage: 'mediaurl="/images/alaris-vehicle-fleet.jpg"',
    };

    const { container } = render(
      <Container rendering={mockRendering} params={paramsWithBackground} />
    );

    const bgElement = container.querySelector('.bg-cover');
    expect(bgElement).toHaveStyle({
      backgroundImage: "url('/images/alaris-vehicle-fleet.jpg')",
    });
  });
});
