import React from 'react';

type Order = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: undefined | number;
  diameter?: undefined | number;
  spiciness_scale?: undefined | number;
  slices_of_bread?: undefined | number;
};

const DIAMETER_OPTIONS = [32, 40, 45];

const NUMBER_OF_SLICES_OPTIONS = [1, 2, 4, 6, 8];

const SLICES_OF_BREAD_OPTIONS = [1, 2, 3, 4, 5];

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
          {NUMBER_OF_SLICES_OPTIONS.map((slices) => (
            <div>
              <input
                type="radio"
                id={slices.toString()}
                name="slices"
                value={slices}
                onChange={(e) =>
                  setOrder({
                    ...order,
                    no_of_slices: e.target.valueAsNumber,
                  })
                }
                required
              />
              <label htmlFor={slices.toString()}>{slices}</label>
            </div>
          ))}

          {DIAMETER_OPTIONS.map((diameter) => (
            <div>
              <input
                type="radio"
                id={diameter.toString()}
                name="diameter"
                value={diameter}
                onChange={(e) =>
                  setOrder({
                    ...order,
                    diameter: e.target.valueAsNumber,
                  })
                }
                required
              />
              <label htmlFor={diameter.toString()}>
                {diameter}cm
              </label>
            </div>
          ))}
        </>
      )}
      {order.type === 'soup' && (
        <div>
          <label className="form-label" htmlFor="spiciness-scale">
            Spiciness Scale
          </label>
          <input
            className="form-input"
            id="spiciness-scale"
            value={order.spiciness_scale}
            onChange={(e) =>
              setOrder({
                ...order,
                spiciness_scale: e.target.valueAsNumber,
              })
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
            value={order.slices_of_bread}
            onChange={(e) =>
              setOrder({
                ...order,
                slices_of_bread: e.target.valueAsNumber,
              })
            }
          />
        </div>
      )}
    </>
  );
}

export default ConditionalFields;
