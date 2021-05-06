/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
import React from "react";
import PropTypes from "prop-types";
import {PaginationView} from "./PaginationView/PaginationView";

export const Pagination = ({ data, setPeoplePage, peoplePage }) => {
  const handleNextPageChange = (e) => {
    e.preventDefault();
    const newUrl = JSON.stringify(data.people.next);
    const nextPageInt = newUrl.charAt(newUrl.length - 2);
    const nextPageStr = nextPageInt.toString();

    if(nextPageStr === "3"){
      const newNextPage = (parseInt(nextPageStr, 10) + 1).toString();
        setPeoplePage(newNextPage);
    } else if(nextPageStr <= "8") {
      setPeoplePage(nextPageStr);
    }
  };

  const handlePreviousPageChange = (e) => {
    e.preventDefault();
    const newUrl = JSON.stringify(data.people.previous);
    const previousPageInt = newUrl.charAt(newUrl.length - 2);
    const previousPageStr = previousPageInt.toString();

    if(previousPageStr === "3"){
      const newPreviousPage = (parseInt(previousPageStr, 10) - 1).toString();
        setPeoplePage(newPreviousPage);
    } else if(previousPageStr <= "8") {
      setPeoplePage(previousPageStr);
    }
  };
  return (
    <>
      <PaginationView
        handlePreviousPageChange={handlePreviousPageChange}
        handleNextPageChange={handleNextPageChange}
        peoplePage={peoplePage}
      />
    </>
  );
};
Pagination.propTypes = {
  setPeoplePage: PropTypes.func.isRequired,
  peoplePage: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default Pagination;
