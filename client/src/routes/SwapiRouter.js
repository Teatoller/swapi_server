import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import {StarDetails} from "../components/StarDetail/StarDetails";

export const SwapiRouter = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stardetail" component={StarDetails} />
      </Switch>
    </div>
  );
export default SwapiRouter;
