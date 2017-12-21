import React from 'react';
import merge from 'lodash/merge';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const artist = merge({}, this.state);
        this.props.processForm(artist)
        .then(() => this.props.hideModal());
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    render() {
        let buttonType = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';

        return (
          <form className="session-form animated slideInDown" onSubmit={this.handleSubmit} >
            <input type="text" className="modal-input" value={this.state.email} placeholder="Email address" onChange={this.handleChange('email')}/>
            <input type="text" className="modal-input" value={this.state.name} placeholder="Artist/Band name" onChange={this.handleChange('name')}/>
            <input type="password" className="modal-input" value={this.state.password} placeholder="Password" onChange={this.handleChange('password')}/>
            <button type="submit">{buttonType}</button>
          </form>  
        );
    }
}