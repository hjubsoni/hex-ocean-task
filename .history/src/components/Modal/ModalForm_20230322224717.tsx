import React from 'react';
import { X } from 'react-feather';
import './form.css';
import VissuallyHidden from '../VisuallyHidden';
import ConditionalFields from './ConditionalFields';

type Order = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices: string;
  diameter: string;
  spiciness_scale: string;
  slices_of_bread: string;
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
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (order.type === 'pizza') {
      const response = await fetch(
        'https://frosty-wood-6558.getsandbox.com:443/dishes',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: order.name,
            preparation_time: order.preparation_time,
            type: order.type,
            no_of_slices: Number(order.no_of_slices),
            diameter: Number(order.diameter),
          }),
        }
      );
      const json = await response.json();
      console.log(json);
    } else if (order.type === 'soup') {
      const response = await fetch(
        'https://frosty-wood-6558.getsandbox.com:443/dishes',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: order.name,
            preparation_time: order.preparation_time,
            type: order.type,
            spiciness_scale: Number(order.spiciness_scale),
          }),
        }
      );
      const json = await response.json();
      console.log(json);
    } else {
      const response = await fetch(
        'https://frosty-wood-6558.getsandbox.com:443/dishes',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: order.name,
            preparation_time: order.preparation_time,
            type: order.type,
            slices_of_bread: Number(order.slices_of_bread),
          }),
        }
      );
      const json = await response.json();
      console.log(json);
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
  );
}

export default ModalForm;
