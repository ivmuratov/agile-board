import { createSlice } from '@reduxjs/toolkit';

interface TestState {
  number: number;
}

const initialState: TestState = {
  number: 0,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increment(state) {
      state.number++;
    },
    decrement(state) {
      state.number--;
    },
  },
});

export const { increment, decrement } = testSlice.actions;
export default testSlice.reducer;
