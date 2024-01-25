import React, { Component } from "react";
import "./App.css";
import Interface from "./components/Interface";

class App extends Component {
  state = {
    todos: [
      { title: "Clean car", done: false },
      { title: "Clean bike", done: true },
      { title: "Buy milk", done: false },
    ],
  };

  onTodoInput = (e) => {
    this.setState({ todoInput: e.target.value });
  };

  onAddClick = () => {
    const isDuplicate = this.state.todos.some((todo) => {
      return todo.title === this.state.todoInput;
    });

    if (isDuplicate) {
      return;
    }

    const todos = [...this.state.todos];
    todos.push({ title: this.state.todoInput, todo: false });
    this.setState({ todos });
  };

  onDeleteClick = (title) => {
    const todos = [...this.state.todos];
    const indexOf = todos.findIndex((todo) => todo.title === title);
    console.log(indexOf);
    todos.splice(indexOf, 1);
    this.setState({ todos });
  };

  onTodoToggleClick = (title) => {
    console.log(title);
    const todos = [...this.state.todos];
    const indexOf = todos.findIndex((todo) => todo.title === title);
    todos[indexOf].done = !todos[indexOf].done; // makes done opposite of itself
    this.setState({ todos });
  };

  onDeleteAll = () => {
    this.setState({ todos: [] });
  };

  render() {
    console.log(this.state);
    const { todos } = this.state;

    let totalTodo = 0;
    todos.forEach((todo) => {
      if (!todo.done) {
        totalTodo++;
      }
    });

    return (
      <Interface
        totalTodo={totalTodo}
        onTodoInput={this.onTodoInput}
        onAddClick={this.onAddClick}
        todos={this.state.todos}
        onTodoToggleClick={this.onTodoToggleClick}
        onDeleteClick={this.onDeleteClick}
        onDeleteAll={this.onDeleteAll}
      />
    );
  }
}

export default App;
