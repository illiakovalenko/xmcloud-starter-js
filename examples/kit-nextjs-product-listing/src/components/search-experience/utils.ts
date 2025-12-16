/**
 * The default debounce time for the search experience
 */
export const DEBOUNCE_TIME = 400;

/**
 * The default page size for the search experience
 */
export const DEFAULT_PAGE_SIZE = 6;

/**
 * Returns the grid class for the number of columns
 * @param value - The number of columns to return the grid class for
 * @returns The grid class for the number of columns
 */
export const gridColsClass = (value = 3): string => {
  const cols = Number(value) || 3;
  const map: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
  };

  const baseClass = map[Math.max(1, Math.min(cols, 3))];

  // Always use 1 column on mobile, then apply the configured columns from md breakpoint
  return `grid-cols-1 md:${baseClass}`;
};

export const DICTIONARY_KEYS = {
  RESULTS_FOUND: 'results found',
  NO_RESULTS_FOUND: 'No results found',
  TRY_ADJUSTING_YOUR_SEARCH: 'Try adjusting your search',
  CLEAR_SEARCH: 'Clear search',
  SOMETHING_WENT_WRONG: 'Something went wrong',
  TRY_AGAIN: 'Try again',
  LOAD_MORE: 'Load more',
  SEARCH_INPUT_PLACEHOLDER: 'Search items...',
  PREVIOUS_PAGE: 'Previous',
  NEXT_PAGE: 'Next',
  READ_MORE: 'Read More',
};
