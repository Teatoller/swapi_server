import React from "react";
import SwapiMenuView from "./SwapiMenuView/SwapiMenuView";

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
export default SwapiMenu;
