import { combineReducers } from "@reduxjs/toolkit";
import singupReducer from "./auth/singup";
import loginReducer from "./auth/login"
import interviewReducer from "./interview/interview"

export const rootReducers = combineReducers({
  singupReducer,
  loginReducer,
  interviewReducer
});
