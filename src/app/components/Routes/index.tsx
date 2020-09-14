import React from "react";
import Chart from 'modules/chart/components/Chart';
import {
 Route, Switch, Redirect,
} from "react-router-dom";
import About from "modules/about/components/About";
import Tracker from "modules/tracker/components/Tracker";


export default function Routes() {
    return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/tracker" />
        </Route>
        <Route path="/tracker" component={Tracker} />
        <Route path="/chart" component={Chart} />
        <Route path="/about" component={About} />
      </Switch>
    )
}
