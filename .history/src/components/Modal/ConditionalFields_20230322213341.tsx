import React from 'react';

type Order = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices: number | string;
  diameter: number | string;
  spiciness_scale: number | string;
  slices_of_bread: number | string;
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
  const validateSpicinessScale = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (
      e.target.value === ' ' ||
      (Number(e.target.value) >= 1 && Number(e.target.value) <= 10)
    ) {
      setOrder({
        ...order,
        spiciness_scale: e.target.value,
      });
    }
    if (order.spiciness_scale.length > 2) {
      setOrder({
        ...order,
        spiciness_scale: order.spiciness_scale.substring(0, 2),
      });
    }
  };
  return (
    <>
      {order.type === 'pizza' && (
        <>
          <fieldset>
            <legend>Select the number of slices:</legend>
            {NUMBER_OF_SLICES_OPTIONS.map((slices, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  id={slices.toString()}
                  name="slices"
                  value={slices}
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      no_of_slices: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor={slices.toString()}>{slices}</label>
              </div>
            ))}
          </fieldset>
          <fieldset>
            <legend>Select the diameter:</legend>

            {DIAMETER_OPTIONS.map((diameter, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  id={diameter.toString()}
                  name="diameter"
                  value={diameter}
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      diameter: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor={diameter.toString()}>
                  {diameter}cm
                </label>
              </div>
            ))}
          </fieldset>
        </>
      )}
      {order.type === 'soup' && (
        <div>
          <label className="form-label" htmlFor="spiciness-scale">
            Spiciness Scale (1-10):
          </label>
          <input
            className="form-input"
            type="number"
            min={1}
            max={10}
            maxLength={2}
            id="spiciness-scale"
            value={order.spiciness_scale}
            onChange={validateSpicinessScale}
          />
        </div>
      )}
      {order.type === 'sandwich' && (
        <fieldset>
          <legend>Select slices of bread:</legend>

          {SLICES_OF_BREAD_OPTIONS.map((slice, idx) => (
            <div key={idx}>
              <input
                type="radio"
                id={slice.toString()}
                name="diameter"
                value={slice}
                onChange={(e) =>
                  setOrder({
                    ...order,
                    slices_of_bread: e.target.value,
                  })
                }
                required
              />
              <label htmlFor={slice.toString()}>{slice}</label>
            </div>
          ))}
        </fieldset>
      )}
    </>
  );
}

export default ConditionalFields;
