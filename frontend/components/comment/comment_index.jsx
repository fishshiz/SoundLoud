import React from 'react';
import CommentIndexItem from './comment_index_item';

export default class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.trackId);
    }

    componentWillUnmount() {
        this.props.clearComments();
    }

    render() {
        return (
            <div className="commentsList g-box-full lazyLoadingList">
            <div className="sc-clearfix sc-type-light sc-border-light-bottom">
            <h3 className="commentsList__title sc-type-light">
            <i className="fa fa-comment-o commentsList__icon" aria-hidden="true"></i>
            <span className="commentsList__actualTitle">{this.props.comments.length} Comments</span>
            </h3>
            <ul className="lazyLoadingList__list sc-list-nostyle sc-clearfix">
                {
                    this.props.comments.reverse().map(comment => (
                        <li className="commentsList__item" 
                        key={comment.id}>
                        <CommentIndexItem
                        comment={comment}
                        author={this.props.authors.filter(author => author.id === comment.author_id)[0]}
                         />
                        </li>
                    ))
                    }
                    </ul>
                    </div>
                    </div>
        );
    }
}