import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul>
      {props.items.length < 1
        ? "no items"
        : props.items.map(todo => (
            <TodoItem
              changeStatus={props.changeStatus}
              key={todo.id}
              id={todo.id}
              text={todo.description}
              done={todo.done}
            />
          ))}
    </ul>
  );
}

export default TodoList;
