import React from "react";
import { ActionTypes } from "../../state/actions";

export default function BaseSelector({ state, dispatch }) {
  const bases = ["thin", "thick", "cheesy"];

  return (
    <div>
      <h3>Base</h3>

      {bases.map((base) => {
        const isSelected = state.base === base;

        return (
          <button
            key={base}
            onClick={() =>
              dispatch({
                type: ActionTypes.SET_BASE,
                payload: base,
              })
            }
            style={{
              margin: 4,
              padding: "6px 10px",
              background: isSelected ? "#4caf50" : "#eee",
              color: isSelected ? "white" : "black",
            }}
          >
            {base}
          </button>
        );
      })}
    </div>
  );
}