
import React from 'react';
import { connect } from 'react-redux';
import Stream from './stream';

import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Stream);