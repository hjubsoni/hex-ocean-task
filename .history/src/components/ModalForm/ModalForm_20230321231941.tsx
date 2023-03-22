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
          <button className="close-button">
            <X color="white" />
          </button>
          <div>
            <label className="form-label">Dish Name</label>
            <input className="form-input" />
          </div>
          <div>
            <label className="form-label">Preparation Time</label>
            <input className="form-input" />
          </div>
          <div>
            <label className="form-label">Dish Type</label>
            <input className="form-input" />
          </div>
          <button type="submit" className="submit-button">
            Submit your order
          </button>
        </form>
      </div>
    </FocusLock>
  );
}

export default ModalForm;
