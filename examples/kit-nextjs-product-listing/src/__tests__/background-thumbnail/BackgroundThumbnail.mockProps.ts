import React from 'react';
import type { BackgroundThumbailProps } from '../../components/background-thumbnail/BackgroundThumbnail.dev';

// Mock children element
const mockChildren = React.createElement('div', { 'data-testid': 'mock-children' }, 'Mock Child');

// Mock useSitecore context for editing mode
export const mockUseSitecoreEditing = {
  page: { mode: { isEditing: true } },
} as unknown;

// Mock useSitecore context for non-editing mode
export const mockUseSitecoreNormal = {
  page: { mode: { isEditing: false } },
} as unknown;

// Default props for testing
export const defaultBackgroundThumbnailProps: BackgroundThumbailProps = {
  children: mockChildren,
};
