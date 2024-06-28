//import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
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

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
