import React from "react";
import HomeNav from "../components/common/HomeNav";
import Footer from "../components/common/Footer";

const Error404 = ({ error }) => {
  return (
    <>
      <HomeNav />
      <div className="alert alert-danger">
        <h3>Oops!!!</h3>
        <p>Refresh the page to continue.</p>
        <p className="text-right font-italic">`Error! ${error.message}`</p>
      </div>
      <Footer />
    </>
  );
};
export default Error404;
