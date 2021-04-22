import React, { useState } from "react";
import "../css/style.css";
import { useQuery, gql } from "@apollo/client";
import HomeNav from "./common/HomeNav";
import Footer from "./common/Footer";
import Pagination from "./common/Pagination";
import SwapiMenu from "./common/SwapiMenu";

const PEOPLE_RESULTS = gql`
  query GetPeopleResults {
    results {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

const Home = (props) => {
  const [activePage, setActivePage] = useState(1);
  const [itemCountPerPage] = useState(7);
  const { loading, error, data } = useQuery(PEOPLE_RESULTS);
  const [search, setSearch] = useState("");

  const searchSpace = (event) => {
    const keyword = event.target.value;
    setSearch(keyword);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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

  const stars = data.results
    .filter((data) => {
      if (search == null) return data;
      if (data.name.toLowerCase().includes(search.toLowerCase())) {
        return data;
      }
    })
    .map((item, index) => {
      return (
        <tr key={item.id}>
          <td className="peopledata text-center">{index + 1}</td>
          <td className="peopledata text-center">{item.name}</td>
          <td className="peopledata text-center">{item.height}</td>
          <td className="peopledata text-center">{item.mass}</td>
          <td className="peopledata text-center">{item.gender}</td>
          <td className="peopledata text-center">{item.homeworld}</td>
          <td className="peopledata text-center">
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
              View
            </button>
          </td>
        </tr>
      );
    });

  // Get current items
  const indexOfLastItem = activePage * itemCountPerPage;
  const indexOfFirstItem = indexOfLastItem - itemCountPerPage;
  const currentItems = stars.slice(indexOfFirstItem, indexOfLastItem);

  // Change page

  const paginate = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <HomeNav />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1 className="text-secondary">Star Wars</h1>
            <div className="mb-1">
              <SwapiMenu searchSpace={searchSpace} />
            </div>

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
                <tbody>{currentItems}</tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination
          itemCountPerPage={itemCountPerPage}
          totalItems={stars.length}
          paginate={paginate}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
