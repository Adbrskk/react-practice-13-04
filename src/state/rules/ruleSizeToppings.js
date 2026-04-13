import { MAX_TOPPINGS_SMALL } from "../../utils/constants";

export function applySizeRules(state, nextSize) {
  let toppings = state.toppings;

  // Rule 2: small → максимум 3 топпинга
  if (nextSize === "small" && toppings.length > MAX_TOPPINGS_SMALL) {
    toppings = toppings.slice(0, MAX_TOPPINGS_SMALL);
  }

  return {
    ...state,
    size: nextSize,
    toppings,
  };
}