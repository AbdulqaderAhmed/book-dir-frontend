import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer.js";
import bookReducer from "./book/bookReducer.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
  },
});
