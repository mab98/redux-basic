export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const add = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD,
      payload: data,
    });
  };
};

export const subtract = (data) => {
  return (dispatch) => {
    dispatch({
      type: SUBTRACT,
      payload: data,
    });
  };
};
