import { HTMLAttributes, useMemo } from 'react';
import { Field } from '@sitecore-content-sdk/nextjs';
import { ItemCardFrame, ItemListFrame, SearchItemVariant } from '../SearchItemCommon';
import { SearchDocument, SearchFieldsMapping } from '../models';
import { SearchItemTitle } from './SearchItemTitle';
import { SearchItemSummary } from './SearchItemSummary';
import { SearchItemLink } from './SearchItemLink';
import { SearchItemSubTitle } from './SearchItemSubTitle';
import { SearchItemCategory } from './SearchItemCategory';

export type SearchItemFields = {
  summary?: Field<string>;
  category?: Field<string>;
  title?: Field<string>;
  subTitle?: Field<string>;
  link?: Field<string>;
};

type SearchItemProps = {
  data: SearchDocument;
  mapping: SearchFieldsMapping;
  variant?: SearchItemVariant;
  onClick: () => void;
} & HTMLAttributes<HTMLDivElement>;

const getField = (
  fields: { [key: string]: string },
  key: keyof SearchDocument
): { value: string } | undefined => {
  if (!key) return undefined;
  const k = String(key);
  if (typeof fields?.[k] !== 'string') return undefined;
  return { value: fields[k] } as { value: string };
};

export const SearchItem = ({ data, mapping, variant = 'card', onClick }: SearchItemProps) => {
  const isCard = variant === 'card';

  const fields = useMemo((): SearchItemFields => {
    const title = mapping.title ? getField(data, mapping.title) : undefined;
    return {
      title,
      subTitle: getField(data, 'Price'),
      summary: mapping.description ? getField(data, mapping.description) : undefined,
      category: mapping.type ? getField(data, mapping.type) : undefined,
      link: mapping.link ? getField(data, mapping.link) : undefined,
    };
  }, [data, mapping]);

  const components = (
    <>
      {fields.category && (
        <SearchItemCategory category={fields.category} className="line-clamp-2" />
      )}
      {fields.title && <SearchItemTitle text={fields.title} className="line-clamp-2" />}
      {fields.subTitle && <SearchItemSubTitle text={fields.subTitle} className="line-clamp-2" />}
      {fields.summary && <SearchItemSummary summary={fields.summary} className="line-clamp-3" />}
      {fields.link && <SearchItemLink link={fields.link} onClick={onClick} />}
    </>
  );

  return isCard ? (
    <ItemCardFrame>{components}</ItemCardFrame>
  ) : (
    <ItemListFrame>{components}</ItemListFrame>
  );
};
