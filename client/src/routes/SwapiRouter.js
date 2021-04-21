import React from 'react'
import { Switch, Route} from "react-router-dom";
import About from "../App"
import Users from "../App"
import Home from "../App"

export const SwapiRouter=() =>{
    return (
        <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    )
}
export default SwapiRouter