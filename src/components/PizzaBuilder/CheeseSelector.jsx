import React from "react";
import { ActionTypes } from "../../state/actions";

export default function CheeseSelector({ state, dispatch }) {
  return (
    <div>
      <h3>Cheese</h3>

      {["mozzarella", "cheddar", "vegan"].map(cheese => {
        const isSelected = state.cheese === cheese;

        return (
          <button
            key={cheese}
            onClick={() =>
              dispatch({
                type: ActionTypes.SET_CHEESE,
                payload: cheese,
              })
            }
            style={{
              margin: 4,
              background: isSelected ? "orange" : "#eee",
            }}
          >
            {cheese}
          </button>
        );
      })}
    </div>
  );
}