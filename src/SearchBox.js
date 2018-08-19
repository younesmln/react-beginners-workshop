import React from "react";

// functional component (simpler abstractions, no state no lifecycle)
function SearchBox(props) {
  console.log(props);
  return (
    <div>
      <input onChange={undefined} placeholder={props.inputPlaceholder} />
      <label>{props.label}</label>
    </div>
  );
}

export default SearchBox;
