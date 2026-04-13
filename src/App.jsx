import React, { useReducer } from "react";
import { reducer } from "./state/reducer";
import { initialState } from "./state/initialState";

import PizzaBuilder from "./components/PizzaBuilder/PizzaBuilder";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: 20 }}>
      <h1>🍕 Pizza Configurator</h1>

      <PizzaBuilder state={state} dispatch={dispatch} />
    </div>
  );
}