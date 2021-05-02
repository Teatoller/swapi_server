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

    switch (nextPageStr) {
      case "1":
        setPeoplePage(nextPageStr);
        break;
      case "2":
        setPeoplePage(nextPageStr);
        break;
      case "3":
        const newNextPage = (parseInt(nextPageStr, 10) + 1).toString();
        setPeoplePage(newNextPage);
        break;
      case "4":
        setPeoplePage(nextPageStr);
        break;
      case "5":
        setPeoplePage(nextPageStr);
        break;
      case "6":
        setPeoplePage(nextPageStr);
        break;
      case "7":
        setPeoplePage(nextPageStr);
        break;
      case "8":
        setPeoplePage(nextPageStr);
        break;
      default:
        return ("Page does not exist.");
    }
  };

  const handlePreviousPageChange = (e) => {
    e.preventDefault();
    const newUrl = JSON.stringify(data.people.previous);
    const previousPageInt = newUrl.charAt(newUrl.length - 2);
    const previousPageStr = previousPageInt.toString();

    switch (previousPageStr) {
      case "1":
        setPeoplePage(previousPageStr);
        break;
      case "2":
        setPeoplePage(previousPageStr);
        break;
      case "3":
        const newPreviousPage = (parseInt(previousPageStr, 10) - 1).toString();
        setPeoplePage(newPreviousPage);
        break;
      case "4":
        setPeoplePage(previousPageStr);
        break;
      case "5":
        setPeoplePage(previousPageStr);
        break;
      case "6":
        setPeoplePage(previousPageStr);
        break;
      case "7":
        setPeoplePage(previousPageStr);
        break;
      case "8":
        setPeoplePage(previousPageStr);
        break;
      default:
        return "Page does not exist.";
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
