import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = state => {
    return {
        content: state.content,
        modalType: state.modalType
    };
};

export default connect(
    mapStateToProps,
    null
)(Modal);