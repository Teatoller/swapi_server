import React from "react";
import { Link } from "react-router-dom";

export const StarNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stardetail">Star Profile</Link>
        </li>
      </ul>
    </nav>
  );
};
export default StarNav;
