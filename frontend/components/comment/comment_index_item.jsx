import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment, author }) => {
    return (
      <div className="commentItem">
      <div className="commentItem__read">
      <Link to={`/artists/${author.id}`} className="commentItem__avatar">
      <div className="image m-user image__lightOutline readOnly customImage sc-artwork sc-artwork-placeholder-2 image__rounded m-loaded">
      <img src={author.image_url} className="comment_av sc-artwork sc-artwork-placeholder-2 image__rounded image__full g-opacity-transition"/>
      </div>
      </Link> 
      <Link to={`/artists/${author.id}`}>{author.name}</Link>
      <p>{comment.body}</p>
      </div>
      </div>
    );
  };

export default CommentIndexItem;