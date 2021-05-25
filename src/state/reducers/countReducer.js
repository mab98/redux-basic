import { ADD, SUBTRACT } from '../actions';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + action.payload;
    case SUBTRACT:
      return state - action.payload;
    default:
      return state;
  }
};

export default countReducer;
