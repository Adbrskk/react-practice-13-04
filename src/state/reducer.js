import { initialState } from "./initialState";
import { ActionTypes } from "./actions";

import {
  applyBaseRules,
  applyCheeseRules,
  applySizeRules,
} from "./rules";

export function reducer(state, action) {
  switch (action.type) {

    case ActionTypes.SET_BASE: {
      const nextBase = action.payload;
      if (!["thin", "thick", "cheesy"].includes(nextBase)) return state;

      return applyBaseRules(state, nextBase);
    }

    case ActionTypes.SET_SAUCE: {
      const nextSauce = action.payload;

      if (!["tomato", "creamy", "bbq"].includes(nextSauce)) return state;

      // Rule 3: cheesy + tomato → запрет
      if (state.base === "cheesy" && nextSauce === "tomato") {
        return state;
      }

      return {
        ...state,
        sauce: nextSauce,
      };
    }

    case ActionTypes.SET_CHEESE: {
      const nextCheese = action.payload;

      if (!["mozzarella", "cheddar", "vegan"].includes(nextCheese)) {
        return state;
      }

      return applyCheeseRules(state, nextCheese);
    }

    case ActionTypes.ADD_TOPPING: {
      const t = action.payload;

      const allowed = [
        "pepperoni",
        "mushrooms",
        "olives",
        "onions",
        "bacon",
        "pineapple",
      ];

      if (!allowed.includes(t)) return state;

      if (state.toppings.includes(t)) return state;

      // Rule 1
      if (t === "pepperoni" && state.cheese === "vegan") {
        return state;
      }

      // Rule 2
      if (state.size === "small" && state.toppings.length >= 3) {
        return state;
      }

      return {
        ...state,
        toppings: [...state.toppings, t],
      };
    }

    case ActionTypes.REMOVE_TOPPING: {
      const t = action.payload;

      if (!state.toppings.includes(t)) return state;

      return {
        ...state,
        toppings: state.toppings.filter(x => x !== t),
      };
    }

    case ActionTypes.SET_SIZE: {
      const nextSize = action.payload;

      if (!["small", "medium", "large"].includes(nextSize)) return state;

      return applySizeRules(state, nextSize);
    }

    case ActionTypes.RESET_CONFIG:
      return initialState;

    default:
      return state;
  }
}