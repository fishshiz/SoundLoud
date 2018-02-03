import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.nameOrTitle = this.nameOrTitle.bind(this);
    this.icon = this.icon.bind(this);
    this.path = this.path.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      selected: null
    };
  }

  componentDidMount() {
    const body = document.getElementById("body");
    body.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    let liSelected;
    if (e.keyCode === 38) {
      if (this.state.selected === null) {
        this.setState({ selected: 0 });
        liSelected = document.querySelector(
          `li[data-key="${this.state.selected}"]`
        );
        liSelected.classList.add("selected-li");
      } else {
        liSelected = document.querySelector(
          `li[data-key="${this.state.selected}"]`
        );
        liSelected.classList.remove("selected-li");
        if (this.state.selected > 0) {
          this.setState({ selected: (this.state.selected -= 1) });
        } else {
          this.setState({ selected: this.props.results.length - 1 });
        }
        liSelected = document.querySelector(
          `li[data-key="${this.state.selected}"]`
        );
        liSelected.classList.add("selected-li");
      }
    } else if (e.keyCode === 40) {
      if (this.state.selected === null) {
        this.setState({ selected: 0 });
        liSelected = document.querySelector(
          `li[data-key="${this.state.selected}"]`
        );
        liSelected.classList.add("selected-li");
      } else {
        liSelected = document.querySelector(
          `li[data-key="${this.state.selected}"]`
        );
        liSelected.classList.remove("selected-li");
        if (this.state.selected === this.props.results.length - 1) {
          this.setState({ selected: 0 });
        } else {
          this.setState({ selected: (this.state.selected += 1) });
        }
        liSelected = document.querySelector(
          `li[data-key="${this.state.selected}"]`
        );
        liSelected.classList.add("selected-li");
      }
    } else if (e.keyCode === 13) {
      this.props.history.push(
        `${this.path(this.props.results[this.state.selected])}`
      );
    }
  }

  nameOrTitle(result) {
    if (result.name) {
      return result.name;
    } else {
      return result.title;
    }
  }

  path(result) {
    if (result.name) {
      return `/artists/${result.id}`;
    } else {
      return `/tracks/${result.id}`;
    }
  }

  icon(result) {
    if (result.name) {
      return <i className="fa fa-user" aria-hidden="true" />;
    } else {
      return <i className="fa fa-music" aria-hidden="true" />;
    }
  }
  // Add blur on component did mount.

  render() {
    return (
      <ul className="dropdownMenu g-z-index-header-menu">
        {this.props.results.map((result, key) => (
          <li id="search-results-li" key={key} data-key={key}>
            <Link className="search-link" to={this.path(result)}>
              <div className="img-name-search">
                <img className="search-img" src={result.image_url} />
                <div className="name-search">{this.nameOrTitle(result)}</div>
              </div>
              <div className="search-icon">{this.icon(result)}</div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
