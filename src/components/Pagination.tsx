import { StyledPagination } from '@/styles';
import { useCallback, useState } from 'react';
import locale from 'rc-pagination/lib/locale/en_US';
import 'twin.macro';

function NextIcon() {
  return (
    <button aria-label="next page" type="button">
      <svg width="11" height="18" aria-hidden="true" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.280029 2.68875L6.57753 9L0.280029 15.3113L2.21878 17.25L10.4688 9L2.21878 0.75L0.280029 2.68875Z" fill="#FF0040" />
      </svg>
    </button>
  );
}
function PrevIcon() {
  return (
    <button aria-label="prev page" type="button">
      <svg width="11" height="18" aria-hidden="true" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.72 2.68875L4.42247 9L10.72 15.3113L8.78122 17.25L0.53122 9L8.78122 0.75L10.72 2.68875Z" fill="#FF0040" />
      </svg>
    </button>
  );
}
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
