
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    let formType = ownProps.location.pathname.slice(1);
    let altButton = (formType === 'login') ? 'signup' : 'login';
    return {
      loggedIn: Boolean(state.session.currentArtist),
      errors: state.errors,
      formType
    };
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    let formType = ownProps.location.pathname.slice(1);
    let processForm = (formType === 'login') ? login : signup;
    return {
      processForm: artist => dispatch(processForm(artist)),
      login: artist => dispatch(login(artist)),
      clearErrors: () => dispatch(clearErrors()),
      closeModal: () => dispatch(closeModal())
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SessionForm);