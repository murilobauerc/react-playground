import React from "react";

const Todos = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  );
};

export default Todos;
