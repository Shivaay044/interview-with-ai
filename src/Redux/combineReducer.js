import { combineReducers } from "@reduxjs/toolkit";
import singupReducer from "./auth/singup";
import loginReducer from "./auth/login"

export const rootReducers = combineReducers({
  singupReducer,
  loginReducer
});
