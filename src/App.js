import React, { Component } from "react";

class App extends Component {
  // state = { todos: ["Clean car", "Buy milk"] };
  state = { todos: [] };

  render() {
    const { todos } = this.state;

    // if (!todos.length) {
    //   return <p>No todos</p>;
    // }

    // return todos.map((todo) => {
    //   return <p>{todo}</p>;
    // });

    //ternary
    // return !todos.length ? (
    //   <p>No todos</p>
    // ) : (
    //   todos.map((todo) => {
    //     return <p>{todo}</p>;
    //   })
    // );

    return (
      <>
        {!todos.length && <p>No todos</p>}
        {todos.map((todo) => {
          return <p>{todo}</p>;
        })}
      </>
    );
  }
}

export default App;
