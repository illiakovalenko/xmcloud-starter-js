import { useCallback } from 'react';
import { useRouter as useNextRouter } from 'next/router';
import { useDebouncedCallback } from './useDebounce';

export const useRouter = () => {
  const router = useNextRouter();
  const setRouterQuery = useCallback(
    (value: string) => {
      if (value) {
        router.query.q = value;
      } else {
        delete router.query.q;
      }

      // Construct the URL with current pathname to avoid exposing rewrites
      const currentPath = router.asPath.split('?')[0];
      const queryString = router.query.q ? `?q=${router.query.q}` : '';
      const asPath = currentPath + queryString;

      router.replace({ query: router.query }, asPath, { shallow: true });
    },
    [router]
  );

  const debouncedSetRouterQuery = useDebouncedCallback(setRouterQuery);

  const setQuery = useCallback(
    (value: string, debounced: boolean = true) => {
      if (debounced) {
        debouncedSetRouterQuery(value);
      } else {
        setRouterQuery(value);
      }
    },
    [debouncedSetRouterQuery, setRouterQuery]
  );

  return { setRouterQuery: setQuery, router };
};
