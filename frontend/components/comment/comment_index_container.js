import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';
import { withRouter } from 'react-router';
import { commentsArray } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {

  const trackId = parseInt(ownProps.match.params.trackId);
  return {
    trackId,
    authors: state.entities.authors,
    currentArtist: state.session.currentArtist,
    comments: commentsArray(state)
  };
};


const mapDispatchToProps = dispatch => ({
    fetchComments: id => dispatch(fetchComments(id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex));
