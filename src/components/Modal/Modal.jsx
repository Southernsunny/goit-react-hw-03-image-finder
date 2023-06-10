import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
// import shortid from 'shortid';
// import { AiOutlineUserAdd } from 'react-icons/ai';
import { Overlay, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-open');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

   handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
       <Overlay onClick={this.handleOverlayClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </Overlay>,
      modalRoot
    );
  }
}
