import React from "react";
import PropTypes from "prop-types";

export const SwapiMenu = (props) => {
  const { searchSpace } = props;
  return (
    <>
      <div className="d-inline p-2 bg-light text-white">
        <input
          className="border border-info rounded w-25 text-muted text-center"
          type="text"
          placeholder="Search"
          onChange={(e) => searchSpace(e)}
        />
      </div>
    </>
  );
};
SwapiMenu.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchSpace: PropTypes.func.isRequired,
};
export default SwapiMenu;
