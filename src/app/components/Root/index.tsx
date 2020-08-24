import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Routes from "app/components/Routes";
import Menu from "modules/main/components/Menu";
import './index.scss';

export default function Root() {
    return (
      <Router>
        <div className="p-h_m">
          <Menu />
          <div className="root__content">
            <Routes />
          </div>
        </div>
      </Router>
    );
}
