import React from "react";
import Error from "../../../../errorHandling/Error";
import Spinner from "../../../Spinner/Spinner";

export const PeopleQuery = ({ props, error, loading, data, search }) => {
  const handleDetailView = (e) => {
    const { history } = props;

    e.preventDefault();
    const attribute = e.currentTarget;
    const starName = attribute.getAttribute("starName");
    localStorage.setItem("starName", starName);
    const starHeight = attribute.getAttribute("starHeight");
    localStorage.setItem("starHeight", starHeight);
    const starMass = attribute.getAttribute("starMass");
    localStorage.setItem("starMass", starMass);
    const starGender = attribute.getAttribute("starGender");
    localStorage.setItem("starGender", starGender);
    const starhomeworld = attribute.getAttribute("starhomeworld");
    localStorage.setItem("starhomeworld", starhomeworld);

    history.push("/stardetail");
  };
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
              {loading ? (
                <Spinner />
              ) : (
                (data.people.allResults || data.person.Results)
                  .filter((data) => {
                    if (search == null) return data;
                    if (
                      data.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return data;
                    }
                  })
                  .map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td className="peopledata text-center p-1">
                          {index + 1}
                        </td>
                        <td className="peopledata text-center p-1">
                          {item.name}
                        </td>
                        <td className="peopledata text-center p-1">
                          {item.height}
                        </td>
                        <td className="peopledata text-center p-1">
                          {item.mass}
                        </td>
                        <td className="peopledata text-center p-1">
                          {item.gender}
                        </td>
                        <td className="peopledata homeworld text-decoration-none text-center p-1">
                          <a
                            href={item.homeworld}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.homeworld}
                          </a>
                        </td>
                        <td className="peopledata text-center p-1">
                          <button
                            className="btn btn-sm btn-primary"
                            type="button"
                            starName={item.name}
                            starHeight={item.height}
                            starMass={item.mass}
                            starGender={item.gender}
                            starhomeworld={item.homeworld}
                            onClick={handleDetailView}
                          >
                            <i
                              className="bi bi-binoculars"
                              aria-label="View"
                            ></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default PeopleQuery;
