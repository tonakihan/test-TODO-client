import { createSlice } from "@reduxjs/toolkit";
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  toggleTodo,
} from "../services/thunks";
import todosAdapter from "./adapter";
import type { TodosState } from "../types/Store";

const initialState: TodosState = todosAdapter.getInitialState({
  status: "idle",
  error: null,
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";

        const todos = action.payload;
        todosAdapter.addMany(state, todos);
      })
      //
      .addCase(addTodo.fulfilled, todosAdapter.addOne)
      //
      .addCase(deleteTodo.fulfilled, todosAdapter.removeOne)
      //
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const todo = action.payload;
        todosAdapter.updateOne(state, {
          id: todo.id,
          changes: { completed: todo.completed },
        });
      });
  },
});

//export const { } = todosSlice.actions;
export default todosSlice.reducer;
