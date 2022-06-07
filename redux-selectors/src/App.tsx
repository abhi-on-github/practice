import React from 'react';
import { Box, Button, Text } from '@mantine/core'
import {useSelector, useDispatch, Provider, shallowEqual } from 'react-redux';

import { store, addToFirst, addToSecond, doNothing, RootState } from './store';
import './App.css';

const DoNothingButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(doNothing())
    }>
      Do Nothing
    </Button>
  )

}
const AddToFirstButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(addToFirst())
    }>
      Add to First
    </Button>
  )
}

const FirstValue = () => {
  const { firstNumber } = useSelector((state: RootState) => state);
  return (
    <Text>First Value: {firstNumber}</Text>

  )  
}

const AddToSecondButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(addToSecond())
    }>
      Add to Second
    </Button>
  )
}

const SecondValue = () => {
  const secondNumber = useSelector((state: RootState) => state.secondNumber);
  return (
    <Text>Second Value: {secondNumber}</Text>

  )  
}

const NumbersValue = () => {
  const numbers = useSelector((state: RootState) => state.numbers, shallowEqual);
  return (
    <Text>Numbers: {numbers.join(', ')}</Text>

  )  
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Box mt={10}>
          <DoNothingButton />
        </Box>
        <Box mt={10}>
          <AddToFirstButton />
          <FirstValue />
        </Box>
        <Box mt={10}>
          <AddToSecondButton />
          <SecondValue />
        </Box>
        <NumbersValue />

      </div>
    </Provider>
  );
}

export default App;
