import React from "react";
import Chart from 'modules/chart/components/Chart';
import {
 Route, Switch, useParams, useRouteMatch,
} from "react-router-dom";
import About from "modules/about/components/About";
import Page from "modules/common/components/Page";


function Home() {
    const match = useRouteMatch();

    return (
      <Page title="Home">
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h1 className="p-h_m p-t_l">Topic</h1>
          </Route>
        </Switch>
      </Page>
    );
}

function Topic() {
    const { topicId } = useParams();
    return (
      <h3>
        Requested topic ID:
        {topicId}
      </h3>
    );
}

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chart" component={Chart} />
        <Route path="/about" component={About} />
      </Switch>
    )
}
