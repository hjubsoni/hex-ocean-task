import React from 'react';

type Order = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: null | number;
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
        </>
      )}
      {order.type === 'soup' && (
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
      )}
      {order.type === 'sandwich' && (
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
      )}
    </>
  );
}

export default ConditionalFields;
