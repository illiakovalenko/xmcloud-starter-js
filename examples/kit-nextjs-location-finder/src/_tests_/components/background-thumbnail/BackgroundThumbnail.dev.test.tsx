/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default as BackgroundThumbnail } from '../../../components/background-thumbnail/BackgroundThumbnail.dev';

//  Mock useSitecore hook
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  useSitecore: jest.fn(),
}));

const { useSitecore } = jest.requireMock('@sitecore-content-sdk/nextjs');

describe('BackgroundThumbnail Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders badge and children when in editing mode', () => {
    // Mock editing mode
    (useSitecore as jest.Mock).mockReturnValue({
      page: { mode: { isEditing: true } },
    });

    render(
      <BackgroundThumbnail>
        <div data-testid="child">Child Content</div>
      </BackgroundThumbnail>
    );

    //  Badge should appear
    expect(screen.getByText('Update Background')).toBeInTheDocument();
    //  Child should appear
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders nothing when not in editing mode', () => {
    (useSitecore as jest.Mock).mockReturnValue({
      page: { mode: { isEditing: false } },
    });

    render(
      <BackgroundThumbnail>
        <div data-testid="child">Child Content</div>
      </BackgroundThumbnail>
    );

    //  Badge should not appear
    expect(screen.queryByText('Update Background')).not.toBeInTheDocument();
    //  Child should not appear either (since returns null)
    expect(screen.queryByTestId('child')).not.toBeInTheDocument();
  });
});
