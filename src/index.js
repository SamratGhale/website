import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Blog } from "./components/Blog";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/blog" exact component={Blog} />
        <Route path="/" exact component={App} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
