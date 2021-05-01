import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import HomeView from "./HomeView/HomeView";

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

  const { loading, error, data } = useQuery(PEOPLE_PERSON_DATA, {
    variables: { peoplePage, personName },
  });

  return (
    <>
      <HomeView
        setPeoplePage={setPeoplePage}
        setPersonName={setPersonName}
        search={search}
        setSearch={setSearch}
        loading={loading}
        error={error}
        data={data}
        props={props}
        peoplePage={peoplePage}
      />
    </>
  );
};
export default Home;
