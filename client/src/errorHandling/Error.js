import React from "react";

const Error404 = ({ error }) => {
  return (
    <>
      <div className="alert alert-danger">
        <h3>Oops!!!</h3>
        <p>Refresh the page to continue.</p>
        <p className="text-right font-italic">`Error! ${error.message}`</p>
      </div>
    </>
  );
};
export default Error404;
