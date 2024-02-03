import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=999`
    );
    data.length = 30;
    data.map((item, index) => {
      item.index = index;
      item.visible = true;
      item.deleted = false;
    });
    this.setState({ characters: data });
  }

  indexFind = (index) => {
    return this.state.characters.findIndex((item) => item.index === index);
  };

  render() {
    if (!this.state.characters) {
      return <p>Loading....</p>;
    }

    return <Characters characters={this.state.characters} />;
  }
}

export default App;

/* import React, { Component } from "react";
import axios from "axios";
import Album from "./components/Album";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos`
    );
    data.length = 50;
    this.setState({ album: data });
  }

  onDeleteItem = (id) => {
    const album = [...this.state.album];
    const index = album.findIndex((item) => item.id === id);
    album.splice(index, 1);
    this.setState({ album });
  };

  render() {
    console.log(this.state);

    if (!this.state.album) {
      return <p>Loading....</p>;
    }

    return <Album album={this.state.album} onDeleteItem={this.onDeleteItem} />;
  }
}

export default App; */
