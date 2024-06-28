//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
//import counterSlice from "./counter";
import counterReducer from './counter'
//import authSlice from "./auth";
import authReducer from './auth';

const store = configureStore({
  //reducer: counterSlice.reducer,
  reducer: { counter: counterReducer, auth: authReducer },
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
