export const GAMETICK = 'GAME_TICK';
export const SHOW_RESULT = 'SHOW_RESULT';

export function createGametick() {
  return {
    type: GAMETICK,
  };
}

export function showResult() {
  return {
    type: SHOW_RESULT,
  };
}
