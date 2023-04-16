import React from 'react';
import './index.css'

const Modal = ({ eventInfo, onClose , children }) => {
  return (
    <div className='modal' onClick={onClose}>
      <div className='modal-content' style={{ position: 'absolute' }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;