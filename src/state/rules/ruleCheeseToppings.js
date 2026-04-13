import { MAX_TOPPINGS_SMALL } from "../../utils/constants";

export function applyCheeseRules(state, nextCheese) {
  let toppings = state.toppings;

  // Rule 1: vegan → убрать pepperoni
  if (nextCheese === "vegan") {
    toppings = toppings.filter(t => t !== "pepperoni");
  }

  return {
    ...state,
    cheese: nextCheese,
    toppings,
  };
}