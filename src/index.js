import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
/* import HomePage from "./components/HomePage";
import HYFUsers from "./components/HYFUsers"; */
import { HYFUsers, HomePage, User } from "./components";
import Clock from "./components/Clock";
import "./style.css";

const root = document.getElementById("root");

function App() {
  return (
    <div id="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/users" component={HYFUsers} />
        <Route exact path="/countdown" component={Clock} />
        <Route exact path="/:username" component={User} />
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
