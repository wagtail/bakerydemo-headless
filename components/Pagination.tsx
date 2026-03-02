import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) {
  const pageRange = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Pagination">
      <ul className="pagination__list">
        {currentPage > 1 ? (
          <li className="page-item">
            <Link
              href={`${baseUrl}?page=${currentPage - 1}`}
              className="page-link previous arrows"
            >
              previous
            </Link>
          </li>
        ) : (
          <li className="page-item disabled">
            <span className="page-link">previous</span>
          </li>
        )}

        {pageRange.map((page) =>
          page === currentPage ? (
            <li key={page} className="page-item active">
              <span>
                {page} <span className="sr-only">(current)</span>
              </span>
            </li>
          ) : (
            <li key={page} className="page-item">
              <Link href={`${baseUrl}?page=${page}`} className="page-link">
                {page}
              </Link>
            </li>
          ),
        )}

        {currentPage < totalPages ? (
          <li className="page-item">
            <Link
              href={`${baseUrl}?page=${currentPage + 1}`}
              className="page-link next arrows"
            >
              next
            </Link>
          </li>
        ) : (
          <li className="page-item disabled">
            <span className="page-link">next</span>
          </li>
        )}
      </ul>
    </nav>
  );
}
