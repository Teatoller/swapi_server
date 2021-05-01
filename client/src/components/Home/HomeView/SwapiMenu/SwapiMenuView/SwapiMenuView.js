export const SwapiMenuView = ({ searchSpace, handleSearchSpace }) => {
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
export default SwapiMenuView;
