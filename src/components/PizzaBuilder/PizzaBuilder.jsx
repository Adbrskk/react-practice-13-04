import React from "react";
import { ActionTypes } from "../../state/actions";
import BaseSelector from "./BaseSelector";
import SauceSelector from "./SauceSelector";
import CheeseSelector from "./CheeseSelector";
import SizeSelector from "./SizeSelector";
import ToppingsSelector from "./ToppingsSelector";

export default function PizzaBuilder({ state, dispatch }) {

  const toppingsList = [
    "pepperoni",
    "mushrooms",
    "olives",
    "onions",
    "bacon",
    "pineapple",
  ];

  return (
    <div style={{ marginTop: 20 }}>

      {/* DEBUG STATE */}
      <pre>{JSON.stringify(state, null, 2)}</pre>

      <hr />

      {/* BASE */}
      <h3>Base</h3>
      {["thin", "thick", "cheesy"].map(base => {
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

      {/* SAUCE */}
      <h3>Sauce</h3>
      {["tomato", "creamy", "bbq"].map(sauce => {
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

      {/* CHEESE */}
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
              padding: "6px 10px",
              background: isSelected ? "#ff9800" : "#eee",
              color: isSelected ? "white" : "black",
            }}
          >
            {cheese}
          </button>
        );
      })}

      {/* SIZE */}
      <h3>Size</h3>
      {["small", "medium", "large"].map(size => {
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

      {/* TOPPINGS */}
      <h3>Toppings</h3>

      {toppingsList.map(topping => {
        const isSelected = state.toppings.includes(topping);

        const isPepperoniBlocked =
          topping === "pepperoni" && state.cheese === "vegan";

        const isLimitReached =
          state.size === "small" &&
          state.toppings.length >= 3 &&
          !isSelected;

        const isDisabled = isPepperoniBlocked || isLimitReached;

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
              border: "1px solid #ccc",
            }}
          >
            {topping}
          </button>
        );
      })}

      <hr />

      {/* SELECTED TOPPINGS */}
      <h3>Selected toppings:</h3>

      {state.toppings.map(t => (
        <div key={t} style={{ marginBottom: 5 }}>
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

      <hr />

      {/* RESET */}
      <button
        onClick={() =>
          dispatch({ type: ActionTypes.RESET_CONFIG })
        }
      >
        Reset
      </button>
    </div>
  );
}