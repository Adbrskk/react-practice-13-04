import React from "react";
import { ActionTypes } from "../../state/actions";

export default function CheeseSelector({ state, dispatch }) {
  const cheeses = ["mozzarella", "cheddar", "vegan"];

  return (
    <div>
      <h3>Cheese</h3>

      {cheeses.map((cheese) => {
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
              padding: "6px 10px",
              background: isSelected ? "#ff9800" : "#eee",
              color: isSelected ? "white" : "black",
            }}
          >
            {cheese}
          </button>
        );
      })}
    </div>
  );
}