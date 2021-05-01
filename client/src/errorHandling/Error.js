import React from "react";
import PropTypes from "prop-types";

const Error404 = ({ error }) => (
    <>
      <div className="alert alert-danger">
        <h3>Oops!!!</h3>
        <p>Refresh the page to continue.</p>
        <p className="text-right font-italic">`Error! ${error.message}`</p>
      </div>
    </>
  );
  Error404.propTypes = {
    error: PropTypes.string.isRequired,
  };
export default Error404;
