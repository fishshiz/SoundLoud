import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import LoginModal from "./login_modal";

const mapDispatchToProps = dispatch => ({
  openModal: modalType => dispatch(openModal(modalType))
});

export default connect(null, mapDispatchToProps)(LoginModal);
