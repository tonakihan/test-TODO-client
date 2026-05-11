import { configureStore } from "@reduxjs/toolkit";
import api from "../services";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (defaultMw) => defaultMw().concat(api.middleware),
});

export default store;
