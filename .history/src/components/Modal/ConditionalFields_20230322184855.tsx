import React from 'react';

type Order = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: undefined | number;
  diameter?: null | number;
  spiciness_scale?: null | number;
  slices_of_bread?: null | number;
};

function ConditionalFields({
  order,
  setOrder,
}: {
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
}) {
  return (
    <>
      {order.type === 'pizza' && (
        <>
          <div>
            <label className="form-label" htmlFor="number-of-slices">
              Number Of Slices
            </label>
            <input
              className="form-input"
              id="number-of-slices"
              value={order.no_of_slices}
              onChange={(e) =>
                setOrder({
                  ...order,
                  no_of_slices: e.target.valueAsNumber,
                })
              }
            />
          </div>
          <div>
            <label className="form-label" htmlFor="diameter">
              Diameter
            </label>
            <input
              className="form-input"
              id="diameter"
              value={order.name}
              onChange={(e) =>
                setOrder({ ...order, name: e.target.value })
              }
              required
            />
          </div>
        </>
      )}
      {order.type === 'soup' && (
        <div>
          <label className="form-label" htmlFor="dish-name">
            Spiciness Scale
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
      )}
      {order.type === 'sandwich' && (
        <div>
          <label className="form-label" htmlFor="dish-name">
            Slices Of Bread
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
      )}
    </>
  );
}

export default ConditionalFields;
