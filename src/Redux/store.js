import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import  {thunk}  from "redux-thunk";
import { rootReducers } from "./combineReducer";



export const store = configureStore({
    reducer: rootReducers,
    middleware : ()=>[logger,thunk]
})