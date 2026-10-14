import { actionTypes } from "./actions.js";
import { createInitialState } from "./state.js";
export function reduce(state, action) {
  switch (action.type) {
    case actionTypes.started:
      return createInitialState(action.payload);
    case actionTypes.reset:
      return null;
    case actionTypes.clockAdvanced:
      if (
        !state ||
        !Number.isFinite(action.payload?.amount) ||
        action.payload.amount < 0
      )
        return state;
      return { ...state, clock: state.clock + action.payload.amount };
    default:
      return state;
  }
}
