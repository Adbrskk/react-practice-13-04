import React from "react";
import { ActionTypes } from "../../state/actions";

export default function SauceSelector({ state, dispatch }) {
  const sauces = ["tomato", "creamy", "bbq"];

  return (
    <div>
      <h3>Sauce</h3>

      {sauces.map((sauce) => {
        const isSelected = state.sauce === sauce;

        return (
          <button
            key={sauce}
            onClick={() =>
              dispatch({
                type: ActionTypes.SET_SAUCE,
                payload: sauce,
              })
            }
            style={{
              margin: 4,
              padding: "6px 10px",
              background: isSelected ? "#2196f3" : "#eee",
              color: isSelected ? "white" : "black",
            }}
          >
            {sauce}
          </button>
        );
      })}
    </div>
  );
}