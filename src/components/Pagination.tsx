import { StyledPagination } from '@/styles';
import { useCallback, useState } from 'react';
import locale from 'rc-pagination/lib/locale/en_US';
import { NextIcon, PrevIcon } from '@/components';
import 'twin.macro';

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  total: number;
};
export default function Pagination({ page, setPage, total }: PaginationProps) {
  const [pageSize] = useState(20);
  const handlePagination = useCallback(
    (cursor) => {
      setPage(cursor);
    },
    [page],
  );
  return (
    <div tw="mt-24 max-w-max mx-auto">
      <StyledPagination
        current={page}
        total={total}
        pageSize={pageSize}
        onChange={handlePagination}
        showLessItems
        showTitle
        showSizeChanger={false}
        locale={locale}
        prevIcon={PrevIcon}
        nextIcon={NextIcon}
      />
    </div>
  );
}
