import { ADD_OPERATION, ADD_NUMBER, RESTORE_EXPRESSION } from '../actions/currentExpressions';

const DEFAULT_STATE = '';

const currentExpressionReducer = (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_OPERATION:
      return state + action.payload;
    default:
      return state;
  }
};

export default currentExpressionReducer;

