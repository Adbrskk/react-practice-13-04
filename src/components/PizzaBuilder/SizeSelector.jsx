import React from "react";
import { ActionTypes } from "../../state/actions";

export default function SizeSelector({ state, dispatch }) {
  const sizes = ["small", "medium", "large"];

  return (
    <div>
      <h3>Size</h3>

      {sizes.map((size) => {
        const isSelected = state.size === size;

        return (
          <button
            key={size}
            onClick={() =>
              dispatch({
                type: ActionTypes.SET_SIZE,
                payload: size,
              })
            }
            style={{
              margin: 4,
              padding: "6px 10px",
              background: isSelected ? "#9c27b0" : "#eee",
              color: isSelected ? "white" : "black",
            }}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}