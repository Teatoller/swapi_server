import React from "react";
import SwapiMenu from "../../common/SwapiMenu";

export const HomeView = ({ stars, searchSpace }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <h4 className="text-secondary m-0">Star Wars People</h4>
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
              <tbody>{stars}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeView;
