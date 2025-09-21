/** @format */

import * as React from "react";
import Pagination from "@mui/material/Pagination";

export default function PaginationRounded({ page, setPage }) {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        color="primary"
      />
    </>
  );
}
