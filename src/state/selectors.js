export const isPepperoniBlocked = (state) =>
  state.cheese === "vegan";

export const isToppingsLimitReached = (state) =>
  state.size === "small" && state.toppings.length >= 3;

export const canAddTopping = (state, topping) => {
  if (state.toppings.includes(topping)) return false;

  if (topping === "pepperoni" && isPepperoniBlocked(state)) {
    return false;
  }

  if (isToppingsLimitReached(state)) {
    return false;
  }

  return true;
};