import { CloseOutlined } from '@ant-design/icons';
import React, { useCallback } from 'react';
import { CloseModalButton, ModalWrapper } from './style';

const Modal = ({ show, onCloseModal, children }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }

  return (
    <ModalWrapper onClick={onCloseModal}>
      <div onClick={stopPropagation}>{children}</div>
    </ModalWrapper>
  );
};

export default Modal;