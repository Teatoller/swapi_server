import React from "react";
import Spinner from "../../../../../Spinner/Spinner";

export const PeopleQueryFunc = ({
  loading,
  data,
  search,
  handleDetailView,
}) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        (data.people.allResults || data.person.Results)
          .filter((data) => {
            if (search == null) return data;
            if (data.name.toLowerCase().includes(search.toLowerCase())) {
              return data;
            }
          })
          .map((item, index) => {
            return (
              <tr key={item.id}>
                <td className="peopledata text-center p-1">{index + 1}</td>
                <td className="peopledata text-center p-1">{item.name}</td>
                <td className="peopledata text-center p-1">{item.height}</td>
                <td className="peopledata text-center p-1">{item.mass}</td>
                <td className="peopledata text-center p-1">{item.gender}</td>
                <td className="peopledata homeworld text-decoration-none text-center p-1">
                  <a href={item.homeworld} target="_blank" rel="noreferrer">
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
                    <i className="bi bi-binoculars" aria-label="View"></i>
                  </button>
                </td>
              </tr>
            );
          })
      )}
    </>
  );
};
export default PeopleQueryFunc;
