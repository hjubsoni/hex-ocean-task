import React from 'react';
import { X } from 'react-feather';
import './form.css';
import VissuallyHidden from '../VisuallyHidden';
import ConditionalFields from './ConditionalFields';

type Order = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices: number | undefined;
  diameter: number | undefined;
  spiciness_scale: number | undefined;
  slices_of_bread: number | undefined;
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
    no_of_slices: undefined,
    diameter: undefined,
    spiciness_scale: undefined,
    slices_of_bread: undefined,
  });
  const [message, setMessage] = React.useState('');
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    let url =
      'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/';
    if (order.type === 'pizza') {
      url = `${url}?no_of_slices=${order.no_of_slices}&diameter=${order.diameter}`;
    } else if (order.type === 'soup') {
      url = `${url}?spiciness_scale=${order.spiciness_scale}`;
    } else if (order.type === 'sandwich') {
      url = `${url}?slices_of_bread=${order.slices_of_bread}`;
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setMessage('Order submitted successfully!');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
    }
  };

  console.log(order);
  const handleTimeChange = (inputValue: string) => {
    const filtered = inputValue.replace(/\D/g, '');
    let newPreparationTime = [];
    for (let i = 0; i < filtered.length; i++) {
      if (i === 2) {
        newPreparationTime.push(':');
      }
      if (i === 4) {
        newPreparationTime.push(':');
      }
      newPreparationTime.push(filtered[i]);
    }
    // we could also use type="time" in the input element

    setOrder({
      ...order,
      preparation_time: newPreparationTime.join('').substring(0, 8),
    });
  };
  return (
    <>
      <form
        className="modal-form"
        role="form-modal"
        onSubmit={handleSubmit}
      >
        <button className="close-button" onClick={handleDismiss}>
          <X color="white" />
          <VissuallyHidden>Close Modal Form</VissuallyHidden>
        </button>
        <div>
          <label className="form-label" htmlFor="dish-name">
            Dish Name
          </label>
          <input
            className="form-input"
            id="dish-name"
            value={order.name}
            onChange={(e) =>
              setOrder({ ...order, name: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label" htmlFor="preparation-time">
            Preparation Time
          </label>
          <input
            className="form-input"
            id="preparation-time"
            value={order.preparation_time}
            placeholder="00:00:00"
            type="text"
            minLength={8}
            onChange={(e) => handleTimeChange(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="form-label" htmlFor="dish-type">
            Dish Type
          </label>
          <select
            className="form-input"
            id="dish-type"
            required
            onChange={(e) =>
              setOrder({ ...order, type: e.target.value })
            }
          >
            <option value="">Select a dish type</option>
            <optgroup label="Dishes">
              {DISH_TYPES.map((dishType, idx) => {
                return (
                  <option key={idx} value={dishType.value}>
                    {dishType.label}
                  </option>
                );
              })}
            </optgroup>
          </select>
        </div>
        <ConditionalFields order={order} setOrder={setOrder} />
        <button type="submit" className="submit-button">
          Submit your order
        </button>
      </form>
      {message}
    </>
  );
}

export default ModalForm;
