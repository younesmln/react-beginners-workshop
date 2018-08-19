import React from "react";
import ReactDOM from "react-dom";
import SearchBox from "./SearchBox";
import List from "./List";

const root = document.getElementById("root");

function myFunc(arg) {
  console.log(arg);
}

function App() {
  return (
    <div id="test">
      {/* <SearchBox
        label="search"
        inputPlaceholder="search for something"
        onInputChange={myFunc}
      />
      <SearchBox label="search for" />
      <SearchBox />
      <SearchBox inputPlaceholder="test" /> */}
      <List items={["text1", "text2"]} />
      <List items={["todo 2", "todo 1", "dinner"]} />
    </div>
  );
}

ReactDOM.render(<App />, root);
