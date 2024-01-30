import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <>
        <p style={{ backgroundColor: this.props.done ? "red" : "blue" }}>
          {this.props.todo}
        </p>
        <button
          onClick={() => {
            this.props.onToggleDone(this.props.todo);
          }}
        >
          Done
        </button>
      </>
    );
  }
}

export default Todo;
