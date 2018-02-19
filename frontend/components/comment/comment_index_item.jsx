import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const CommentIndexItem = ({ comment, author }) => {
  return (
    <div className="commentItem">
      <div className="commentItem__read">
        <Link to={`/artists/${author.id}`} className="commentItem__avatar">
          <div className="image m-user image__lightOutline readOnly customImage sc-artwork sc-artwork-placeholder-2 image__rounded m-loaded">
            <img
              src={author.image_url}
              className="comment_av sc-artwork sc-artwork-placeholder-2 image__rounded image__full g-opacity-transition"
            />
          </div>
        </Link>
        <div className="commentItem__content">
          <Link
            className="commentItem__username sc-text-light"
            to={`/artists/${author.id}`}
          >
            {author.name}
          </Link>
          <div className="commentItem__body sc-hyphenate">
            <p>{comment.body}</p>
            <Moment fromNow className="commentItem__TC">
              {comment.created_at}
            </Moment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentIndexItem;
