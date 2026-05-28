import { combineReducers } from "@reduxjs/toolkit";
import api from "@/services";
import todos from "@/features/todos/store/todosSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  todos,
});

export default rootReducer;
