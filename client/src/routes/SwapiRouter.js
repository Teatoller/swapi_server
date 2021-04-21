import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import StarDetails from "../components/StarDetails";

export const SwapiRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stardetail" component={StarDetails} />
      </Switch>
    </div>
  );
};
export default SwapiRouter;
