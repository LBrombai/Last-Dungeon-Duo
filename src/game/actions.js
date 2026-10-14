export const actionTypes = {
  started: "game/started",
  reset: "game/reset",
  clockAdvanced: "clock/advanced",
};
export const startGame = (seed, createdAt) => ({
  type: actionTypes.started,
  payload: { seed, createdAt },
});
export const resetGame = () => ({ type: actionTypes.reset });
export const advanceClock = (amount) => ({
  type: actionTypes.clockAdvanced,
  payload: { amount },
});
