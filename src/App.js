import React, { Component } from "react";

class App extends Component {
  state = { todos: ["Clean car", "Buy bread", "Feed fish"] };

  onTodoInput = (e) => {
    this.setState({ todoInput: e.target.value });
  };

  onAddClick = () => {
    const todos = [...this.state.todos];
    todos.push(this.state.todoInput);
    this.setState({ todos });
  };

  render() {
    console.log(this.state);
    const { todos } = this.state;

    return (
      <>
        <input type="text" onInput={this.onTodoInput} />
        <button onClick={this.onAddClick}>Add</button>
        {todos.map((todo) => {
          return <p>{todo}</p>;
        })}
      </>
    );
  }
}

export default App;
