import { configureStore } from "@reduxjs/toolkit";
import api from "@/services";
import todos from "@/features/todos/store/todosSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    todos,
  },
  middleware: (defaultMw) => defaultMw().concat(api.middleware),
});

export default store;
