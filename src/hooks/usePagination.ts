import { useState } from "react";

function usePagination<T = any>(items: Array<T>, itemsPerPage: number) {
  let totalPages = Math.max(Math.ceil(items.length / itemsPerPage), 1);
  const [currentPage, setPage] = useState(1);
  let currentPageItems: Readonly<Array<T>>;

  {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    currentPageItems = items.slice(startIndex, endIndex);
  }

  return {
    currentPage,
    setPage,
    totalPages,
    currentPageItems,
  };
}

export default usePagination;
