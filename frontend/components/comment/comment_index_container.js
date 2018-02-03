import { connect } from "react-redux";
import { fetchComments, clearComments } from "../../actions/comment_actions";
import CommentIndex from "./comment_index";
import { withRouter } from "react-router";
import { commentsArray, authorsArray } from "../../reducers/selector";

const mapStateToProps = (state, ownProps) => {
  const trackId = parseInt(ownProps.match.params.trackId);
  return {
    trackId,
    authors: authorsArray(state),
    currentArtist: state.session.currentArtist,
    comments: commentsArray(state)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(fetchComments(id)),
  clearComments: () => dispatch(clearComments())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentIndex)
);
