import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/slices/CounterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());

  console.log(increment());
  console.log(decrement(-1));
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrement}>INC</button>
      <button onClick={onDecrement}>DEC</button>
    </div>
  );
};

export default Counter;
