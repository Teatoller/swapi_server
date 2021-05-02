import React from "react";
import PropTypes from "prop-types";
import {SwapiMenuView} from "./SwapiMenuView/SwapiMenuView";

export const SwapiMenu = ({ setSearch, setPersonName }) => {
  const searchSpace = (event) => {
    const keyword = event.target.value;
    setSearch(keyword);
  };

  const handleSearchSpace = (event) => {
    event.preventDefault();
    const keyword = event.target.value;
    setPersonName(keyword);
  };
  return (
    <>
      <SwapiMenuView
        searchSpace={searchSpace}
        handleSearchSpace={handleSearchSpace}
      />
    </>
  );
};
SwapiMenu.propTypes = {
  setPersonName: PropTypes.func.isRequired,
  setSearch: PropTypes.bool.isRequired,
};
export default SwapiMenu;
