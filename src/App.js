import React, { Component } from "react";
import Todo from "./components/Todo";

class App extends Component {
  state = {
    todos: [
      { title: "Clean car", done: false },
      { title: "Buy milk", done: true },
      { title: "Buy cheese", done: false },
    ],
  };

  onToggleDone = (item) => {
    console.log(item);
    const index = this.state.todos.findIndex((todo) => {
      todo.title === item;
    });
    const todos = [...this.state.todos];
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  };

  render() {
    let count = 0;
    this.state.todos.forEach((todo) => {
      if (todo.done) count++;
    });

    return (
      <>
        <p>Total tasks done: {count}</p>
        {this.state.todos.map((todo) => {
          return (
            <Todo
              todo={todo.title}
              done={todo.done}
              onToggleDone={this.onToggleDone}
            />
          );
        })}
      </>
    );
  }
}

export default App;
