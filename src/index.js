import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, Switch } from "react-router-dom";
import { Blog } from "./components/Blog";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <div>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/blog" exact component={Blog} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById("root")
);
