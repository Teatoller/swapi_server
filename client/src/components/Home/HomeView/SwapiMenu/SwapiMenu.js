import React from "react";

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
      <div className="mb-0">
        <div className="d-inline p-1 bg-light text-white">
          <form class="form-inline my-2 my-lg-0">
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
              <i className="bi bi-search text-white"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SwapiMenu;
