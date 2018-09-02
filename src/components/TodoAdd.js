import React from "react";

function TodoAdd(props) {
  return (
    <div className="todo-add">
      <input
        type="text"
        onChange={e => {
          const input = e.target;
          const newValue = input.value;
          props.onChange(newValue);
        }}
        value={props.value}
      />
      <button onClick={props.onButtonClick}>add Todo</button>
    </div>
  );
}

export default TodoAdd;
