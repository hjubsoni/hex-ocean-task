import React from 'react';
import FocusLock from 'react-focus-lock';
import { X } from 'react-feather';

function ModalForm() {
  return (
    <FocusLock>
      <div>
        <div />
        <form>
          <label>Name</label>
          <input />
          <label>Name</label>
          <input />
          <label>Name</label>
          <input />
        </form>
      </div>
    </FocusLock>
  );
}

export default ModalForm;
