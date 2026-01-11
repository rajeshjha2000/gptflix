import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
     user: userReducer,
  },
});

export default appStore;