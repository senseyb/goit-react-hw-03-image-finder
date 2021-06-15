import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  render() {
    const { toggleModal, onModalImage } = this.props;
    return createPortal(
      <div
        className="Overlay"
        onClick={({ target }) => {
          if (target.nodeName === 'IMG') {
            return;
          }
          toggleModal();
        }}
      >
        <div className="Modal">
          <img src={onModalImage} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
Modal.propTypes = {
  onModalImage: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
