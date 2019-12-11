import React, { useState } from "react";
import uuid from "uuid";
import Todos from "./Todos";

const Form = () => {
  const [query, setQuery] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const arrayOfTodos = [...todos, { id: uuid.v4(), title: query }];
    setTodos(arrayOfTodos);
    setQuery("");
  };

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          value={query}
          placeholder="Insert a todo here"
          onChange={event => setQuery(event.target.value)}
        />
        <button onSubmit={handleSubmit}> Add a todo </button>
      </form>
      <Todos todos={todos} />
    </>
  );
};

export default Form;
