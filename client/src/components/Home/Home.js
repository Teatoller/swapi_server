import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import HomeNav from "../common/HomeNav";
import Footer from "../common/Footer";

import Error from "../../errorHandling/Error";
import Spinner from "../Spinner/Spinner";

export const PEOPLE_PERSON_DATA = gql`
  query Query($peoplePage: String!, $personName: String) {
    people(page: $peoplePage) {
      page
      next
      previous
      allResults {
        name
        height
        mass
        gender
        homeworld
      }
    }
    person(name: $personName) {
      Results {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;

const Home = (props) => {
  const [peoplePage, setPeoplePage] = useState("1");
  const [personName, setPersonName] = useState("");
  const [search, setSearch] = useState("");

  const searchSpace = (event) => {
    const keyword = event.target.value;
    setSearch(keyword);
  };

  const handleSearchSpace = (event) => {
    event.preventDefault();
    const keyword = event.target.value;
    setPersonName(keyword);
  };

  const handleNextPageChange = (e) => {
    e.preventDefault();
    let newUrl = JSON.stringify(data.people.next);
    let nextPageInt = newUrl.charAt(newUrl.length - 2);
    let nextPageStr = nextPageInt.toString();

    switch (nextPageStr) {
      case "1":
        setPeoplePage(nextPageStr);
        break;
      case "2":
        setPeoplePage(nextPageStr);
        break;
      case "3":
        let newNextPage = (parseInt(nextPageStr, 10) + 1).toString();
        setPeoplePage(newNextPage);
        break;
      case "4":
        setPeoplePage(nextPageStr);
        break;
      case "5":
        setPeoplePage(nextPageStr);
        break;
      case "6":
        setPeoplePage(nextPageStr);
        break;
      case "7":
        setPeoplePage(nextPageStr);
        break;
      case "8":
        setPeoplePage(nextPageStr);
        break;
      default:
        console.log("Page does not exist.");
    }
  };

  const handlePreviousPageChange = (e) => {
    e.preventDefault();
    let newUrl = JSON.stringify(data.people.previous);
    let previousPageInt = newUrl.charAt(newUrl.length - 2);
    let previousPageStr = previousPageInt.toString();

    switch (previousPageStr) {
      case "1":
        setPeoplePage(previousPageStr);
        break;
      case "2":
        setPeoplePage(previousPageStr);
        break;
      case "3":
        let newPreviousPage = (parseInt(previousPageStr, 10) - 1).toString();
        setPeoplePage(newPreviousPage);
        break;
      case "4":
        setPeoplePage(previousPageStr);
        break;
      case "5":
        setPeoplePage(previousPageStr);
        break;
      case "6":
        setPeoplePage(previousPageStr);
        break;
      case "7":
        setPeoplePage(previousPageStr);
        break;
      case "8":
        setPeoplePage(previousPageStr);
        break;
      default:
        return "Page does not exist.";
    }
  };

  // const { loading, error, data } = useQuery(PEOPLE_PERSON_DATA, {
  //   variables: { peoplePage, personName },
  // });

  const { loading, error, data } = useQuery(PEOPLE_PERSON_DATA, {
    variables: { peoplePage, personName },
  });

  // useEffect(() => {
  //   SwapiData()
  // }, [SwapiData]);

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
      <HomeNav />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h4 className="text-secondary mt-1 mb-0">Star Wars People</h4>
            <div className="mb-0">
              <div className="d-inline p-1 bg-light text-white">
                <form class="form-inline my-2 my-lg-0">
                  <input
                    className="border border-info rounded w-25 text-muted text-center"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => searchSpace(e)}
                  />
                  <button className="border border-info rounded bg-primary m-1" onClick={handleSearchSpace} type="button">
                    <i className="bi bi-search text-white"></i>
                  </button>
                </form>
              </div>
            </div>

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
                            data.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
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
          </div>
        </div>

        <nav aria-label="Page navigation example ">
          <ul className="pagination position-relative justify-content-center mb-5">
            <li className="page-item">
              <button
                type="button"
                onClick={handlePreviousPageChange}
                className="page-link"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            <li className="page-item">
              <button type="button" className="page-link">
                {peoplePage}
              </button>
            </li>
            <li className="page-item">
              <button
                type="button"
                onClick={handleNextPageChange}
                className="page-link"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </>
  );
};
export default Home;
