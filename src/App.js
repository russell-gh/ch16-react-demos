import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import Header from "./components/Header";

class App extends Component {
  state = {
    all: [],
    liked: [],
    deleted: [],
    view: "",
    sortType: 2,
    sortDirection: 0,
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=45`
    );
    data.map((item, index) => {
      item.index = index;
      item.visible = true;
      item.liked = false;
      item.deleted = false;
      item.highlight = {
        nameStart: -1,
        quoteStart: -1,
        strLength: -1,
      };
    });
    this.setState({ all: data, view: "all" });
  }

  changeView = (event) => {
    this.setState({ view: event.target.id });
  };

  sortBy = (event) => {
    let temp = { ...this.state };
    let el = event.target;
    temp[el.id] = el.selectedIndex;
    temp = this.sortDo(temp);
    this.setState(temp);
  };

  sortDo = (temp) => {
    let view = temp.view;
    let type = temp.sortType;
    let dir = temp.sortDirection;
    let sort = temp[view];
    sort.sort((a, b) => {
      if (type == 0) {
        if (a.character < b.character) {
          return dir == 1 ? 1 : -1;
        } else if (a.character > b.character) {
          return dir == 1 ? -1 : 1;
        } else {
          return 0;
        }
      } else {
        if (a.quote.length < b.quote.length) {
          return dir == 1 ? 1 : -1;
        } else if (a.quote.length > b.quote.length) {
          return dir == 1 ? -1 : 1;
        } else {
          return 0;
        }
      }
    });
    return temp;
  };

  filterBar = (ev) => {
    let str = ev.target.value.toString().toLowerCase();
    let temp = [...this.state[this.state.view]];
    temp.forEach((item) => {
      let name = item.character.toLowerCase();
      let quote = item.quote.toLowerCase();
      quote = `"${quote}"`;
      let nameStart = name.search(str);
      let quoteStart = quote.search(str);
      if (str != "") {
        item.highlight = {
          nameStart: nameStart,
          quoteStart: quoteStart,
          strLength: str.length - 1,
        };
        item.highlight.nameStart != -1 || item.highlight.quoteStart != -1
          ? (item.visible = true)
          : (item.visible = false);
      } else {
        item.highlight = {
          nameStart: -1,
          quoteStart: -1,
          strLength: -1,
        };
        item.visible = true;
      }
    });
    this.setState({ [this.state.view]: temp });
  };

  toggleLikeDelete = (index, view) => {
    let all = [...this.state.all];
    let id = this.indexFind(index, all);
    all[id][view] = !all[id][view];
    let temp = [];
    all.forEach((item) => (item[view] ? temp.push(item) : null));
    this.setState({ all: all, [view]: temp });
  };

  indexFind = (index, arr) => {
    return arr.findIndex((item) => item.index === index);
  };

  render() {
    let state = this.state;
    let view = state.view;

    if (!view) {
      return <p>Loading....</p>;
    }

    let counts = {
      all: state.all.length,
      liked: state.liked.length,
      deleted: state.deleted.length,
      notVisible: state[view].reduce((acc, cur) => {
        return (acc += cur.visible ? 0 : 1);
      }, 0),
      view: view,
    };

    return (
      <>
        <Header
          key={state.index}
          counts={counts}
          sortType={state.sortType}
          sortDirection={state.sortDirection}
          characters={state[view]}
          navClick={this.changeView}
          filter={this.filterBar}
          sortBy={this.sortBy}
        />
        <Characters
          key={state.index}
          characters={state[view]}
          view={view}
          toggleLikeDelete={this.toggleLikeDelete}
        />
      </>
    );
  }
}

export default App;
