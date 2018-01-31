import { connect } from 'react-redux';
import { postComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';
import { withRouter } from 'react-router';
import { commentsArray } from '../../reducers/selector';
import {incrementCommentCount} from '../../util/track_api_util';

const mapStateToProps = (state, ownProps) => {

  const trackId = parseInt(ownProps.match.params.trackId);
  return {
    trackId,
    currentArtist: state.session.currentArtist,
  };
};


const mapDispatchToProps = dispatch => ({
    postComment: (comment, trackId) => dispatch(postComment(comment, trackId)),
    incrementCommentCount: trackId => dispatch(incrementCommentCount(trackId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm));
