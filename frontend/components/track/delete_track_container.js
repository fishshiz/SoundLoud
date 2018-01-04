import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeleteButton from './delete_button';

import { deleteTrack } from '../../actions/track_actions';

const mapDispatchToProps = (dispatch, { track }) => ({
    destroyTrack: () => dispatch(deleteTrack(track))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(DeleteButton));
