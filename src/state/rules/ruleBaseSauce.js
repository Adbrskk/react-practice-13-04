export function applyBaseRules(state, nextBase) {
  let nextState = { ...state, base: nextBase };

  // Rule 3: cheesy + tomato несовместимы
  if (nextBase === "cheesy" && state.sauce === "tomato") {
    nextState.sauce = "creamy";
  }

  return nextState;
}