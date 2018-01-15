import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.nameOrTitle = this.nameOrTitle.bind(this);
        this.icon = this.icon.bind(this);
        this.path = this.path.bind(this);
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
            return <i className="fa fa-user" aria-hidden="true"></i>;
        } else {
            return <i className="fa fa-music" aria-hidden="true"></i>;
        }
    }
    // Add blur on component did mount.

    render() {
        return (
        <ul className="dropdownMenu g-z-index-header-menu">
          {this.props.results.map((result, key) => (
              <li id="search-results-li" key={key}>
                <Link className="search-link" to={this.path(result)}>
                    <div className="img-name-search">
                        <img className="search-img" src={result.image_url}/>
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