import React, { Component } from "react";
import "./App.css";

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
      <>
        <input type="text" onInput={this.onTodoInput} />
        <button onClick={this.onAddClick}>Add</button>
        <h1>Total todos: {totalTodo}</h1>
        {todos.map((todo) => {
          return (
            <div className={todo.done ? "done" : "undone"}>
              <p onClick={() => this.onTodoToggleClick(todo.title)}>
                {todo.title}
              </p>
              <button onClick={() => this.onDeleteClick(todo.title)}>X</button>
            </div>
          );
        })}
        <button onClick={this.onDeleteAll}>Delete ALL</button>
      </>
    );
  }
}

export default App;
