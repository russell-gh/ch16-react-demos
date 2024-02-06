import React, { Component } from "react";
import Joi from "joi";

class App extends Component {
  state = {};

  schema = {
    name: Joi.string().min(3).max(10),
    username: Joi.string().min(5),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  };

  onUserInput = async (e) => {
    const userInput = { ...this.state.userInput };
    userInput[e.target.id] = e.target.value;

    this.setState({ userInput }); //async

    const _joiInstance = Joi.object(this.schema);

    //
    try {
      await _joiInstance.validateAsync(this.state.userInput);
      this.setState({ errors: undefined });
    } catch (e) {
      console.log(e);

      const errorsMod = {};
      e.details.forEach((error) => {
        errorsMod[error.context.key] = error.message;
      });

      this.setState({ errors: errorsMod });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onInput={this.onUserInput}>
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
            <p>{this.state.errors && this.state.errors.name}</p>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
            <p>{this.state.errors && this.state.errors.email}</p>
          </div>
          <div>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
            <p>{this.state.errors && this.state.errors.username}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
