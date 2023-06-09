import React from 'react';
import FocusLock from 'react-focus-lock';
import './styles.css';
import ModalForm from './ModalForm';

function Modal({ handleDismiss }: { handleDismiss: () => void }) {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        handleDismiss();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDismiss]);
  return (
    <FocusLock returnFocus={true}>
      <div className="wrapper">
        <div className="backdrop" onClick={handleDismiss} />
        <ModalForm handleDismiss={handleDismiss} />
      </div>
    </FocusLock>
  );
}

export default Modal;
