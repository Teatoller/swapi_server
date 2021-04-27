import React, { useState } from "react";
import "../../css/style.css";
import { useQuery, gql } from "@apollo/client";
import HomeNav from "../common/HomeNav";
import Footer from "../common/Footer";
import Pagination from "../common/Pagination";

import Error from "../../errorHandling/Error";
import Spinner from "../Spinner/Spinner";
import HomeView from "./HomeView/HomeView";

export const PEOPLE = gql`
  query getPeople($page: String!) {
    people(page: $page) {
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
  }
`;

const Home = (props) => {
  const [page, setPage] = useState("1");
  const [search, setSearch] = useState("");

  const searchSpace = (event) => {
    const keyword = event.target.value;
    setSearch(keyword);
  };

  const { loading, error, data } = useQuery(PEOPLE, {
    variables: { page },
  });

  const handleNextPageChange = (e) => {
    e.preventDefault();
    let newUrl = JSON.stringify(data.people.next);
    let nextPageInt = newUrl.charAt(newUrl.length - 2);
    let nextPageStr = nextPageInt.toString();

    switch (nextPageStr) {
      case "1":
        setPage(nextPageStr);
        break;
      case "2":
        setPage(nextPageStr);
        break;
      case "3":
        let newNextPage = (parseInt(nextPageStr, 10) + 1).toString();
        setPage(newNextPage);
        break;
      case "4":
        setPage(nextPageStr);
        break;
      case "5":
        setPage(nextPageStr);
        break;
      case "6":
        setPage(nextPageStr);
        break;
      case "7":
        setPage(nextPageStr);
        break;
      case "8":
        setPage(nextPageStr);
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
        setPage(previousPageStr);
        break;
      case "2":
        setPage(previousPageStr);
        break;
      case "3":
        let newPreviousPage = (parseInt(previousPageStr, 10) - 1).toString();
        setPage(newPreviousPage);
        break;
      case "4":
        setPage(previousPageStr);
        break;
      case "5":
        setPage(previousPageStr);
        break;
      case "6":
        setPage(previousPageStr);
        break;
      case "7":
        setPage(previousPageStr);
        break;
      case "8":
        setPage(previousPageStr);
        break;
      default:
        return "Page does not exist.";
    }
  };

  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;

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

  const stars = data.people.allResults
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
    });

  return (
    <>
      <HomeNav />
      <div className="container">
        <HomeView stars={stars} searchSpace={searchSpace} />
        <Pagination
          page={page}
          handleNextPageChange={handleNextPageChange}
          handlePreviousPageChange={handlePreviousPageChange}
        />
        <Footer />
      </div>
    </>
  );
};

export default Home;
