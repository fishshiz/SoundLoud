import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login, signup } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ session, errors }, { formType }) => {
  return {
    loggedIn: Boolean(session.currentArtist),
    errors: errors.session,
    formType: formType
  };
};

const mapDispatchToProps = (dispatch, { formType }) => {
  let processForm = artist => dispatch(login(artist));
  if (formType === "signup") {
    processForm = artist => dispatch(signup(artist));
  }
  return {
    processForm: processForm,
    closeModal: () => dispatch(closeModal()),
    login: artist => dispatch(login(artist))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
