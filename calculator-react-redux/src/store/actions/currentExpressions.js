export const ADD_OPERATION = 'ADD_OPERATION';
export const ADD_NUMBER = 'ADD_NUMBER';
export const RESTORE_EXPRESSION = 'RESTORE_EXPRESSION';

export const addNumToExpression = payload => ({
  type: ADD_NUMBER,
  payload
});

export const addOperationToExpression = payload => ({
  type: ADD_OPERATION,
  payload
});

export const restoreExpression = payload => ({
  type: RESTORE_EXPRESSION,
  payload
});
