import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { input: '' };
        this.handleChange = this.handleChange.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    handleChange(e) {
    e.preventDefault();

    const newVal = e.target.value;
    this.setState({ input: newVal }, () => {
        this.props.searchDatabase(this.state.input);
    });
}

    clearState() {
        this.setState({ searchVal: '' });
      }

      render() {
          return (
              <div>
            <input onChange={this.handleChange} type="text"
            placeholder="Search for a song, artist, or album"
            value={this.state.input}></input>
          
            </div>
          );
      }
}