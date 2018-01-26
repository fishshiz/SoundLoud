import React from 'react';
import SearchResults from './search_results';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { input: '' };
        this.handleChange = this.handleChange.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    handleChange(e) {
    e.preventDefault();
    if (e.target.value === '') {
        this.setState({ input: '' });
        setTimeout(() => this.props.clearSearchResults(), 100);
    }

    const newVal = e.target.value;
    this.setState({ input: newVal }, () => {
        this.props.searchDatabase(this.state.input);
    });
}

    clearState() {
        this.setState({ input: '' });
        setTimeout(() => this.props.clearSearchResults(), 200);
        // this.props.clearSearchResults();
      }

      render() {
          return (
            <form className="headerSearch">
                <input className="headerSearch__input sc-input g-all-transitions-300" onChange={this.handleChange} type="text"
                placeholder="Search"
                value={this.state.input} onBlur={this.clearState} />
                <button className="headerSearch__submit submit sc-ir" type="submit">Search</button>
                <SearchResults value={this.state.input} history={this.props.history} results={this.props.searchResults}/>
            </form>
          );
      }
}