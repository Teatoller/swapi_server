import React from "react";
import PropTypes from "prop-types";

export const StarDetailView = ({ name, height, mass, gender, homeworld }) => (
  <>
    <div className="container px-lg-5">
      <h4 className="text-secondary mt-1 mb-0">Star Profile</h4>
      <div className="row mx-lg-n5">
        <div className="col py-3 px-lg-5 border bg-warning font-weight-bold">
          Description
          </div>
        <div className="col py-3 px-lg-5 border bg-warning font-weight-bold">
          Details
          </div>
      </div>

      <div className="row mx-lg-n5">
        <div className="col py-3 px-lg-5 border bg-light text-muted">
          Name:
          </div>
        <div className="col py-3 px-lg-5 border bg-light">{name}</div>
      </div>

      <div className="row mx-lg-n5">
        <div className="col py-3 px-lg-5 border bg-light text-muted">
          Height:
          </div>
        <div className="col py-3 px-lg-5 border bg-light">{height}</div>
      </div>

      <div className="row mx-lg-n5">
        <div className="col py-3 px-lg-5 border bg-light text-muted">
          Mass:
          </div>
        <div className="col py-3 px-lg-5 border bg-light">{mass}</div>
      </div>

      <div className="row mx-lg-n5">
        <div className="col py-3 px-lg-5 border bg-light text-muted">
          Gender:
          </div>
        <div className="col py-3 px-lg-5 border bg-light">{gender}</div>
      </div>

      <div className="row mx-lg-n5">
        <div className="col py-3 px-lg-5 border bg-light text-muted">
          Homeworld:
          </div>
        <div className="col py-3 px-lg-5 border bg-light">
          <a href={homeworld} target="_blank" rel="noreferrer">
            {homeworld}
          </a>
        </div>
      </div>
    </div>
  </>
);
StarDetailView.propTypes = {
  name: PropTypes.bool.isRequired,
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
};
export default StarDetailView;
