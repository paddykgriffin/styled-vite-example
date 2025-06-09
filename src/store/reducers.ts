import { combineReducers } from "@reduxjs/toolkit";
import { themeSlice } from "./features/themeSlice";

export const rootReducer = combineReducers({
    theme: themeSlice.reducer
});