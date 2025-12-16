import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSitecore } from '@sitecore-content-sdk/nextjs';
import { useSearch } from '@sitecore-content-sdk/nextjs/search';
import { cn } from 'lib/utils';
import { SearchDocument, SearchExperienceProps } from './models';
import { SearchEmptyResults } from './SearchEmptyResults';
import { SearchError } from './SearchError';
import { SearchItem } from './SearchItem';
import { SearchSkeletonItem } from './SearchSkeletonItem';
import { SearchPagination } from './SearchPagination';
import { SearchInput } from './SearchInput';
import { useEvent } from './useEvent';
import { useSearchField } from './useSearchField';
import { useParams } from './useParams';
import { DICTIONARY_KEYS, gridColsClass } from './utils';
import { useI18n } from 'next-localization';
import { useRouter } from './useRouter';

export const Default = (props: SearchExperienceProps) => {
  const { page } = useSitecore();
  const { params } = props;
  const { t } = useI18n();

  const { searchIndex, fieldsMapping } = useSearchField(props.fields.search.value);

  const { styles, id, pageSize, columns } = useParams(params);

  const { isEditing, isPreview } = page.mode;
  const [pageNumber, setPageNumber] = useState(1);
  const [inputValue, setInputValue] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchEnabled, setSearchEnabled] = useState<boolean>(false);
  const isInitializedRef = useRef<boolean>(false);

  const { total, totalPages, results, isLoading, isSuccess, isError, error } =
    useSearch<SearchDocument>({
      searchIndexId: searchIndex,
      page: pageNumber,
      pageSize,
      enabled: searchEnabled,
      query: searchQuery,
    });

  const { setRouterQuery, router } = useRouter();

  const sendEvent = useEvent({ query: searchQuery, uid: props.rendering.uid });

  useEffect(() => {
    if (isSuccess) {
      sendEvent('viewed');
    }
  }, [isSuccess, sendEvent]);

  useEffect(() => {
    if (!router.isReady) return;

    const routerQuery = (router.query.q as string) || '';

    setSearchQuery(routerQuery);

    if (!routerQuery) {
      setPageNumber(1);
    }
  }, [router.isReady, inputValue, router.query.q]);

  useEffect(() => {
    if (!router.isReady || isEditing || isPreview) return;

    if (!isInitializedRef.current) {
      // Enable the search and set the input value from the router query on initial load
      setSearchEnabled(true);
      setInputValue(router.query.q as string);
      isInitializedRef.current = true;
    }
  }, [router.isReady, router.query.q, isEditing, isPreview]);

  const onSearchChange = useCallback(
    (value: string, debounced: boolean = true) => {
      setInputValue(value);

      if (isEditing || isPreview) return;

      setRouterQuery(value, debounced);
    },
    [setRouterQuery, isEditing, isPreview]
  );

  return (
    <div className={`component search-indexing ${styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <div className="max-w-7xl mx-auto p-6">
          <div className="mb-8">
            <SearchInput value={inputValue} onChange={(value) => onSearchChange(value, true)} />

            <p className="text-gray-600 mb-6">
              {total} {t(DICTIONARY_KEYS.RESULTS_FOUND) || 'results found'}
            </p>
          </div>

          {isError && error && (
            <SearchError error={error} onTryAgain={() => onSearchChange('', false)} />
          )}

          {!isLoading && !isError && total === 0 && (
            <SearchEmptyResults
              query={searchQuery}
              onClearSearch={() => onSearchChange('', false)}
            />
          )}

          <div className={cn('grid gap-6 mb-8', gridColsClass(columns))}>
            {!isLoading &&
              results.map((result) => (
                <SearchItem
                  variant={columns === 1 ? 'list' : 'card'}
                  key={result.sc_item_id}
                  data={result}
                  mapping={fieldsMapping}
                  onClick={() => sendEvent('clicked')}
                />
              ))}

            {(((isEditing || isPreview) && total === 0) || isLoading) &&
              Array.from({ length: pageSize }).map((_, index) => (
                <SearchSkeletonItem
                  variant={params.columns === 1 ? 'list' : 'card'}
                  key={index}
                  mapping={fieldsMapping}
                />
              ))}
          </div>

          {!isLoading && !isError && results.length > 0 && (
            <SearchPagination
              currentPage={pageNumber}
              totalPages={totalPages}
              onPageChange={(page: number) => setPageNumber(page)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
