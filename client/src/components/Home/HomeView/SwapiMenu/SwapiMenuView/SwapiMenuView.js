import React from "react";
import PropTypes from "prop-types";

export const SwapiMenuView = ({ searchSpace, handleSearchSpace }) => (
    <>
      <div className="mb-0">
        <div className="d-inline p-1 bg-light text-white">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="border border-info rounded w-25 text-muted text-center"
              type="text"
              placeholder="Search"
              onChange={(e) => searchSpace(e)}
            />
            <button
              className="border border-info rounded bg-primary m-1"
              onClick={handleSearchSpace}
              type="button"
            >
              <i className="bi bi-search text-white" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
  SwapiMenuView.propTypes = {
    handleSearchSpace: PropTypes.func.isRequired,
    searchSpace: PropTypes.func.isRequired,
  };
export default SwapiMenuView;
