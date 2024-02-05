import React, { Component } from "react";
class Header extends Component {
  render() {
    let navClick = this.props.navClick;
    let counts = this.props.counts;

    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div>SIMPSONS QUOTES</div>
          <div>
            <input
              onInput={this.props.filter}
              type="text"
              placeholder="Search.."
            />
            <button id="all" onClick={navClick}>
              Quotes
            </button>
            <button id="liked" onClick={navClick}>
              Liked
            </button>
            <button id="deleted" onClick={navClick}>
              Deleted
            </button>
          </div>

          <div>
            <label htmlFor="sort">Sort By: </label>

            <select
              name="sort"
              id="sortType"
              value={this.props.sortType}
              onChange={this.props.sortBy}
            >
              <option value="0">Character Name</option>
              <option value="1">Quote Length</option>
            </select>
            <select
              name="sort"
              id="sortDirection"
              value={this.props.sortDirection}
              onChange={this.props.sortBy}
            >
              <option value="0">Ascending</option>
              <option value="1">Descending</option>
            </select>
          </div>
          <div>
            Showing{" "}
            {counts.view == "all"
              ? counts.all - counts.deleted - counts.notVisible
              : counts[counts.view] - counts.notVisible}
            {" of "}
            {counts.view}
          </div>
        </div>
      </>
    );
  }
}

export default Header;
