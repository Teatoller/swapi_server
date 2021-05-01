import React from "react";

export const PaginationView = ({
  handlePreviousPageChange,
  handleNextPageChange,
  peoplePage,
}) => {
  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination position-relative justify-content-center mb-5">
        <li className="page-item">
          <button
            type="button"
            onClick={handlePreviousPageChange}
            className="page-link"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li className="page-item">
          <button type="button" className="page-link">
            {peoplePage}
          </button>
        </li>
        <li className="page-item">
          <button
            type="button"
            onClick={handleNextPageChange}
            className="page-link"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default PaginationView;
