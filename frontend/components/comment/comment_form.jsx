import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            body: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const comment = this.state;
        this.props.postComment(comment, this.props.trackId).then(this.setState({body: ''}));
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    render() {

        return (
          <form className="listenEngagement__commentForm" onSubmit={this.handleSubmit} >
          <div className="commentForm commentForm__transition m-large visible">
          <div className="commentForm__wrapper commentForm__transition">
          <div className="commentForm__avatar">
            <img src={this.props.currentArtist.image_url} className="comment_av sc-artwork sc-artwork-placeholder-1" />
          </div>
          <div className="commentForm__inputWrapper sc-border-box">
            <input type="text" className="commentForm__input sc-border-box" value={this.state.body} placeholder="Write a comment" onChange={this.handleInput('body')}/>
            <button className="comment__post" type="submit"><i className="fa fa-comment" aria-hidden="true"></i></button>
          </div>
            </div>
            </div>
          </form>  
        );
    }
}