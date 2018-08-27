import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/Clock";
import "./style.css";

const root = document.getElementById("root");

function App() {
  return (
    <div id="app">
      <Clock completed={false} />
    </div>
  );
}

ReactDOM.render(<App />, root);
