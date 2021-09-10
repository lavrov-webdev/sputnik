import React from "react";

type PropsType = {
  totalItems: number,
  pageSize: number,
  paginationClickHandler: (pageNumber: number) => void,
  currentPage: number,
}

const Pagination: React.FC<PropsType> = ({
  totalItems,
  pageSize,
  paginationClickHandler,
  currentPage,
}) => {
  let pagesCount = Math.ceil(totalItems / pageSize);
  const pagesFirstToCurrent: Array<number> = [],
        pagesAfterCurrent: Array<number> = [],
        lastPages: Array<number> = [];

  for (let i = currentPage; i > currentPage - 3 && i > 0; i --) {
    pagesFirstToCurrent.push(i)
  }

  for (let i = currentPage + 1; i < currentPage + 10; i++) {
    if (i <= pagesCount) pagesAfterCurrent.push(i)
  }

  for (let i = pagesCount - 5; i <= pagesCount; i++) {
    if (i > pagesAfterCurrent[pagesAfterCurrent.length - 1]) lastPages.push(i)
  }

  let pages = [...pagesFirstToCurrent.reverse(), ...pagesAfterCurrent, ...lastPages];
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {pages.map((p) => (
          <li key={p} className={`page-item ${currentPage === p && "active"}`}>
            <a
              className="page-link"
              href="#"
              onClick={() => paginationClickHandler(p)}
            >
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination