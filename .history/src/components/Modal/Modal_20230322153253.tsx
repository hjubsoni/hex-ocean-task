import React from 'react';
import FocusLock from 'react-focus-lock';
import { X } from 'react-feather';
import './styles.css';
import VissuallyHidden from '../VisuallyHidden';
import ModalForm from './ModalForm';

function ModalForm({ handleDismiss }: { handleDismiss: () => void }) {
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

export default ModalForm;
