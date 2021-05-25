export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const add = (data) => ({
  type: ADD,
  payload: data,
});

export const subtract = (data) => ({
  type: SUBTRACT,
  payload: data,
});
