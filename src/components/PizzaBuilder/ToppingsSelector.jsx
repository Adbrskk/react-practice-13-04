import React from "react";
import { ActionTypes } from "../../state/actions";
import { canAddTopping } from "../../state/selectors";

export default function ToppingsSelector({ state, dispatch }) {
  const toppingsList = [
    "pepperoni",
    "mushrooms",
    "olives",
    "onions",
    "bacon",
    "pineapple",
  ];

  return (
    <div>
      <h3>Toppings</h3>

      {toppingsList.map((topping) => {
        const isSelected = state.toppings.includes(topping);
        const isDisabled = !canAddTopping(state, topping);

        return (
          <button
            key={topping}
            disabled={isDisabled}
            onClick={() =>
              dispatch({
                type: ActionTypes.ADD_TOPPING,
                payload: topping,
              })
            }
            style={{
              margin: 4,
              padding: "6px 10px",
              cursor: isDisabled ? "not-allowed" : "pointer",
              opacity: isDisabled ? 0.4 : 1,
              background: isSelected ? "#4caf50" : "#eee",
              color: isSelected ? "white" : "black",
            }}
          >
            {topping}
          </button>
        );
      })}

      <hr />

      <h4>Selected:</h4>

      {state.toppings.map((t) => (
        <div key={t}>
          {t}
          <button
            style={{ marginLeft: 10 }}
            onClick={() =>
              dispatch({
                type: ActionTypes.REMOVE_TOPPING,
                payload: t,
              })
            }
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}