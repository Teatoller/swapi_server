import React, { useState, useEffect } from "react";
import Footer from "./common/Footer";
import HomeNav from "./common/HomeNav";

export const StarDetails = () => {
  const [name, setName] = useState("");
  const [mass, setMass] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [homeworld, setHomeworld] = useState([]);

  const getStarData = () => {
    const starName = localStorage.getItem("starName");
    const starHeight = localStorage.getItem("starHeight");
    const starMass = localStorage.getItem("starMass");
    const starGender = localStorage.getItem("starGender");
    const starhomeworld = localStorage.getItem("starhomeworld");

    setName(starName);
    setHeight(starHeight);
    setMass(starMass);
    setGender(starGender);
    setHomeworld(starhomeworld);
  };

  useEffect(() => {
    setTimeout(() => getStarData(), 100);
  }, []);

  return (
    <div>
      <HomeNav />
      
      <div className="container px-lg-5">
      <h1>Star Profile</h1>
      <div className="row mx-lg-n5">
          <div className="col py-3 px-lg-5 border bg-light">
            Description
          </div>
          <div className="col py-3 px-lg-5 border bg-light">
            Details
          </div>
        </div>

        <div className="row mx-lg-n5">
          <div className="col py-3 px-lg-5 border bg-light">
            Name:
          </div>
          <div className="col py-3 px-lg-5 border bg-light">
            {name}
          </div>
        </div>

        <div className="row mx-lg-n5">
          <div className="col py-3 px-lg-5 border bg-light">
            Height:
          </div>
          <div className="col py-3 px-lg-5 border bg-light">
            {height}
          </div>
        </div>

        <div className="row mx-lg-n5">
          <div className="col py-3 px-lg-5 border bg-light">
            Mass:
          </div>
          <div className="col py-3 px-lg-5 border bg-light">
            {mass}
          </div>
        </div>

        <div className="row mx-lg-n5">
          <div className="col py-3 px-lg-5 border bg-light">
            Gender:
          </div>
          <div className="col py-3 px-lg-5 border bg-light">
            {gender}
          </div>
        </div>

        <div className="row mx-lg-n5">
          <div className="col py-3 px-lg-5 border bg-light">
            Homeworld:
          </div>
          <div className="col py-3 px-lg-5 border bg-light">
          <a href={homeworld} target="_blank" rel="noreferrer">
              {homeworld}
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default StarDetails;
