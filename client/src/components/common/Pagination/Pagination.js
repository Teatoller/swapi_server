import React from "react";
import PaginationView from "./PaginationView/PaginationView";

const Pagination = ({ data, setPeoplePage, peoplePage }) => {
  const handleNextPageChange = (e) => {
    e.preventDefault();
    let newUrl = JSON.stringify(data.people.next);
    let nextPageInt = newUrl.charAt(newUrl.length - 2);
    let nextPageStr = nextPageInt.toString();

    switch (nextPageStr) {
      case "1":
        setPeoplePage(nextPageStr);
        break;
      case "2":
        setPeoplePage(nextPageStr);
        break;
      case "3":
        let newNextPage = (parseInt(nextPageStr, 10) + 1).toString();
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
        console.log("Page does not exist.");
    }
  };

  const handlePreviousPageChange = (e) => {
    e.preventDefault();
    let newUrl = JSON.stringify(data.people.previous);
    let previousPageInt = newUrl.charAt(newUrl.length - 2);
    let previousPageStr = previousPageInt.toString();

    switch (previousPageStr) {
      case "1":
        setPeoplePage(previousPageStr);
        break;
      case "2":
        setPeoplePage(previousPageStr);
        break;
      case "3":
        let newPreviousPage = (parseInt(previousPageStr, 10) - 1).toString();
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
export default Pagination;
