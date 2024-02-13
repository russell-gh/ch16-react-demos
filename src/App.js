import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./components/Todo";
import Controls from "./components/Controls";

const App = () => {
  const [todos, setTodos] = useState();
  const [search, setSearch] = useState("");

  const getTodos = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );

    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const onInput = (e) => {
    setSearch(e.target.value);
  };

  //quit if no data
  if (!todos) {
    return <p>Loading...</p>;
  }

  const filtered = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Controls onInput={onInput} />
      {filtered.map((todo) => {
        return <Todo {...todo} />;
      })}
    </>
  );
};

export default App;
