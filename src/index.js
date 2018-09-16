import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
/* import HomePage from "./components/HomePage";
import HYFUsers from "./components/HYFUsers"; */
import { HYFUsers, HomePage } from "./components";
import "./style.css";

const root = document.getElementById("root");

function App() {
  return (
    <div id="app">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/users" component={HYFUsers} />
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
