//import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      //state.isAuthenticated = true;
      return { ...state, isAuthenticated: true };
    },
    logout(state) {
      //state.isAuthenticated = false;
      return { ...state, isAuthenticated: false };
    },
  },
});

const store = configureStore({
  //reducer: counterSlice.reducer,
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
