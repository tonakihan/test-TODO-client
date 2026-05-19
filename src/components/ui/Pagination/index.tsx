import { Pagination as MuiPagination } from "@mui/material";
import type { UsePaginationReturn } from "../../../types/usePagination";
import styles from "./Pagination.module.css";

interface PaginationProps {
  pagination: Omit<UsePaginationReturn, "currentPageItems">;
}

function Pagination({
  pagination: { currentPage, setPage, totalPages },
}: PaginationProps) {
  return (
    <MuiPagination
      className={styles.center}
      variant="outlined"
      count={totalPages}
      page={currentPage}
      onChange={(_e, page) => setPage(page)}
    ></MuiPagination>
  );
}

export default Pagination;
