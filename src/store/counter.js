import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      return { ...state, counter: state.counter + 1 };
      //state.counter++;
    },
    decrement(state) {
      return { ...state, counter: state.counter - 1 };
      //state.counter--;
    },
    increase(state, action) {
      return { ...state, counter: state.counter + action.payload };
      // state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      return { ...state, showCounter: !state.showCounter };
      //state.showCounter = !state.showCounter;
    },
  },
});

//export default counterSlice
export default counterSlice.reducer;
export const counterActions = counterSlice.actions;