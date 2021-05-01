import React from "react";
import PeopleQueryView from "./PeopleQueryView/PeopleQueryView";

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
      <PeopleQueryView
        error={error}
        loading={loading}
        data={data}
        search={search}
        handleDetailView={handleDetailView}
      />
    </>
  );
};
export default PeopleQuery;
