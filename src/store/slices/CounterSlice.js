import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  title: 'hello world',
};

const counterSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },
  },
});

const counterReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
export default counterReducer;
