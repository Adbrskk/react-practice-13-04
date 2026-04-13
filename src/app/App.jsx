import React, { useReducer } from "react";
import { reducer } from "../state/reducer";
import { initialState } from "../state/initialState";
import { ActionTypes } from "../state/actions";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: 20 }}>
      <h1>🍕 Pizza Configurator</h1>

      <pre>{JSON.stringify(state, null, 2)}</pre>

      <button
        onClick={() =>
          dispatch({ type: ActionTypes.SET_BASE, payload: "cheesy" })
        }
      >
        Set base: cheesy
      </button>

      <button
        onClick={() =>
          dispatch({ type: ActionTypes.ADD_TOPPING, payload: "olives" })
        }
      >
        Add olives
      </button>

      <button onClick={() => dispatch({ type: ActionTypes.RESET_CONFIG })}>
        Reset
      </button>
    </div>
  );
}