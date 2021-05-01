/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import PropTypes from "prop-types";
import {Spinner} from "../../../../../Spinner/Spinner";

export const PeopleQueryFunc = ({
  loading,
  data,
  search,
  handleDetailView,
}) => (
    <>
      {loading ? (
        <Spinner />
      ) : (
        (data.people.allResults || data.person.Results)
          .filter((datas) => {
            if (search == null) return datas;
            if (datas.name.toLowerCase().includes(search.toLowerCase())) {
              return datas;
            }
          })
          .map((item, index) => (
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
                    <i className="bi bi-binoculars" aria-label="View" />
                  </button>
                </td>
              </tr>
            ))
      )}
    </>
  );
  PeopleQueryFunc.propTypes = {
    loading: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired,
    handleDetailView: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
  };
export default PeopleQueryFunc;
