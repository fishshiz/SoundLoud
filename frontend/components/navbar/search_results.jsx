import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchResults extends React.Component {

    render() {
        console.log(this.props);
        return (
        <div className="search-results-div">
        <ul>
          {this.props.results.map((result, key) => (
            <Link className="search-link" key={key} to={`/artists/${result.id}`}>
              <li id="search-results-li">
              <img className="search-img" src={result.image_url}/>
              <p>{result.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
        );
    }
}