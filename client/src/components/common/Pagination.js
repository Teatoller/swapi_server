import React from "react";
import PropTypes from "prop-types";

const Pagination = ({
  page,
  handleNextPageChange,
  handlePreviousPageChange,
}) => {
  return (
    <>
      <nav aria-label="Page navigation">
        {/* <ul className="pagination pagination-sm justify-content-center">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <Link onClick={() => paginate(number)} href="!#" className="page-link">
                {number}
              </Link>
            </li>
          ))}
        </ul> */}
        <ul className="pagination pagination-sm justify-content-center">
          <li className="page-item">
            <button
              onClick={handlePreviousPageChange}
              type="button"
              className="btn btn-primary m-1"
            >
              <i
                className="bi bi-chevron-double-left"
                aria-label="Previous Page"
              ></i>
            </button>
          </li>
          <li className="page-item">
            <button type="button" className="btn btn-primary m-1">
              {page}
            </button>
          </li>
          <li className="page-item">
            <button
              onClick={handleNextPageChange}
              type="button"
              className="btn btn-primary m-1"
            >
              <i
                className="bi bi-chevron-double-right"
                aria-label="Next Page"
              ></i>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
Pagination.propTypes = {
  itemCountPerPage: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
