import React, { useState, useEffect } from "react";
import Footer from "../common/Footer/Footer";
import {HomeNav} from "../common/HomeNav/HomeNav";
import {StarDetailView} from "./StarDetailView/StarDetailView";

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
      <StarDetailView
        name={name}
        height={height}
        mass={mass}
        gender={gender}
        homeworld={homeworld}
      />
      <Footer />
    </div>
  );
};
export default StarDetails;
