import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default as Title } from '@/components/sxa/Title';

// Mock Sitecore SDK
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  useSitecore: jest.fn(() => ({
    page: {
      mode: {
        isNormal: true,
        isEditing: false,
      },
      layout: {
        sitecore: {
          route: {
            fields: {
              pageTitle: {
                value: 'Alaris Emergency Vehicles',
              },
            },
          },
        },
      },
    },
  })),
  Text: jest.fn(({ field }) => <span data-testid="text-field">{field?.value}</span>),
  Link: jest.fn(({ field, children }) => (
    <a href={field?.value?.href} data-testid="link-field">
      {children}
    </a>
  )),
}));

describe('SXA Title', () => {
  const mockFields = {
    data: {
      datasource: {
        url: {
          path: '/vehicles/ambulances',
          siteName: 'alaris',
        },
        field: {
          jsonValue: {
            value: 'Advanced Ambulance Fleet',
          },
        },
      },
      contextItem: {
        url: {
          path: '',
          siteName: '',
        },
        field: {
          jsonValue: {
            value: '',
          },
        },
      },
    },
  };

  it('renders title with link in normal mode', () => {
    render(<Title params={{ styles: '', RenderingIdentifier: 'title-1' }} fields={mockFields} />);

    expect(screen.getByTestId('link-field')).toBeInTheDocument();
    expect(screen.getByTestId('text-field')).toHaveTextContent('Alaris Emergency Vehicles');
  });

  it('applies custom styles and rendering identifier', () => {
    const { container } = render(
      <Title
        params={{ styles: 'text-center font-bold', RenderingIdentifier: 'vehicle-title' }}
        fields={mockFields}
      />
    );

    const titleDiv = container.querySelector('.component.title');
    expect(titleDiv).toHaveClass('text-center', 'font-bold');
    expect(titleDiv).toHaveAttribute('id', 'vehicle-title');
  });

  it('renders with context item when datasource is not available', () => {
    const fieldsWithContextItem = {
      data: {
        datasource: null,
        contextItem: {
          url: {
            path: '/vehicles/fire-trucks',
            siteName: 'alaris',
          },
          field: {
            jsonValue: {
              value: 'Fire Truck Specifications',
            },
          },
        },
      },
    };

    render(
      <Title
        params={{ styles: '', RenderingIdentifier: 'title-2' }}
        // @ts-expect-error Testing fallback behavior with null datasource
        fields={fieldsWithContextItem}
      />
    );

    expect(screen.getByTestId('link-field')).toHaveAttribute('href', '/vehicles/fire-trucks');
  });
});
