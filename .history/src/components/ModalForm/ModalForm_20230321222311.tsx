import React from 'react';
import FocusLock from 'react-focus-lock';
import { X } from 'react-feather';
import './styles.css';

function ModalForm({ handleDismiss }: { handleDismiss: () => void }) {
  return (
    <FocusLock>
      <div className="wrapper">
        <div className="backdrop" />
        <form className="modal-form">
          <div>
            <label>Name</label>
            <input />
          </div>
          <div>
            <label>Name</label>
            <input />
          </div>
          <div>
            <label>Name</label>
            <input />
          </div>
        </form>
      </div>
    </FocusLock>
  );
}

export default ModalForm;
