import React from "react";
import ReactDOM from "react-dom";
import GiphySearch from "./components/GiphySearch";
import "./style.css";

const root = document.getElementById("root");

function App() {
  return (
    <div id="app">
      <GiphySearch />
    </div>
  );
}

ReactDOM.render(<App />, root);
