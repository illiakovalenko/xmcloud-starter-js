import { HTMLAttributes } from 'react';
import { cn } from 'lib/utils';

export type SearchItemVariant = 'card' | 'list';

type ItemListFrameProps = HTMLAttributes<HTMLDivElement>;

export const ItemListFrame = ({ className, children, ...props }: ItemListFrameProps) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer md:h-57',
        className
      )}
      {...props}
    >
      <div className={cn('flex flex-col md:flex-row w-full h-full')}>
        <div className="p-6 md:flex-1">{children}</div>
      </div>
    </div>
  );
};

type ItemCardFrameProps = HTMLAttributes<HTMLDivElement>;

export const ItemCardFrame = ({ className, children, ...props }: ItemCardFrameProps) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer',
        className
      )}
      {...props}
    >
      <div className="p-6">{children}</div>
    </div>
  );
};
