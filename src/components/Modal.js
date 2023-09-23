import React from 'react';
import closeButton from '../Image/closeButton.svg';

function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;
  return (
    <div
      className={`fixed modal inset-0 bg-black bg-opacity-25 backdrop-blur-sm
    flex justify-center items-center overflow-auto`}
      id="wrapper"
    >
      <div
        className={`w-[400px] sm:w-[500px] flex flex-col sm:pb-10 relative`}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      >
        <button className="place-self-end mb-2 mt-14" onClick={() => onClose()}>
          <img
            src={ closeButton}
            width="68px"
            height="36px"
            alt="close"
            className="max-w-[100%]"
          />
        </button>
        <div className="bg-white p-2 rounded-xl">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
