import React from 'react';
import FocusLock from 'react-focus-lock';
import { X } from 'react-feather';
import './styles.css';
import VissuallyHidden from '../VisuallyHidden';

type Order = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
};

const DISH_TYPES = [
  {
    label: 'Pizza',
    value: 'pizza',
  },
  {
    label: 'Soup',
    value: 'soup',
  },
  {
    label: 'Sandwich',
    value: 'sandwich',
  },
];

function ModalForm({ handleDismiss }: { handleDismiss: () => void }) {
  const [order, setOrder] = React.useState<Order>({
    name: '',
    preparation_time: '',
    type: '',
    no_of_slices: '',
    diameter: '',
    spiciness_scale: '',
    slices_of_bread: '',
  });
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
        <form className="modal-form" role="form-modal">
          <button className="close-button" onClick={handleDismiss}>
            <X color="white" />
            <VissuallyHidden>Close Modal Form</VissuallyHidden>
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
            <label className="form-label" htmlFor="dish-type">
              Dish Type
            </label>
            <select className="form-input" id="dish-type">
              <option value="">Select a dish type</option>
              {DISH_TYPES.map((dishType) => {
                return (
                  <option key={dishType.value} value={dishType.value}>
                    {dishType.label}
                  </option>
                );
              })}
            </select>
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
