import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.loggedIn) {
          this.props.history.push('/stream');
          this.props.closeModal();
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const artist = merge({}, this.state);
        this.props.processForm(artist)
        .then(() => this.props.closeModal());
    }

    handleInput(type) {
        return (e) => {
          this.setState({ [type]: e.target.value });
        };
    }

    renderErrors() {
        if(this.props.errors.length > 0) {
          return (
            <ul>
              {this.props.errors.map((error, idx) => (
                <li key={`error-${idx}`}>
                  {error}
                </li>
              ))}
            </ul>
          );
        }
      }

    render() {
        let buttonType = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';
        let nameField = this.props.formType === 'signup' ? 
          <input 
          type="text" 
          className="session-input" 
          value={this.state.name} 
          placeholder="Artist/Band name" 
          onChange={this.handleInput('name')}/> : null;

        return (
          <form className="session-form animated slideInDown" onSubmit={this.handleSubmit} >
            <input type="text" className="session-input" value={this.state.email} placeholder="Email address" onChange={this.handleInput('email')}/>
            {nameField}
            <input type="password" className="session-input" value={this.state.password} placeholder="Password" onChange={this.handleInput('password')}/>
            <button type="submit" className="session-button">{buttonType}</button>
            {this.renderErrors()}
          </form>  
        );
    }
}