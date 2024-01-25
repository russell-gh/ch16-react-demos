import React, { Component } from "react";
import Spinner from "./components/Spinner";
import "./App.scss";
import axios from "axios";
import Interface from "./components/Interface";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=37b29f091f8754cf8600dea56dee3863`
    );
    this.setState({ weather: data });
  }

  render() {
    console.log(this.state);
    return this.state.weather ? (
      <Interface weather={this.state.weather} />
    ) : (
      <Spinner />
    );
  }
}

export default App;
