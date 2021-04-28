import React from "react";

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
export default SwapiMenu;
