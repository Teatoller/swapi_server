import Error from "../../../../../errorHandling/Error";
import PeopleQueryFunc from "./PeopleQueryFunc/PeopleQueryFunc";

export const PeopleQueryView = ({
  error,
  loading,
  data,
  search,
  handleDetailView,
}) => {
  return (
    <>
      {error ? (
        <Error error={error} />
      ) : (
        <div className="table-responsive">
          <table className="table table-sm table-md table-striped table-hover table-bordered text-secondary">
            <thead>
              <tr>
                <th>#</th>
                <th scope="col">Name</th>
                <th scope="col">Height</th>
                <th scope="col">Mass</th>
                <th scope="col">Gender</th>
                <th scope="col">Homeworld</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <PeopleQueryFunc
                loading={loading}
                data={data}
                handleDetailView={handleDetailView}
                search={search}
              />
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default PeopleQueryView;
