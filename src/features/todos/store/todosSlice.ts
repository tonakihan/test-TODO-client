import { createSlice } from "@reduxjs/toolkit";
import type { TodosState } from "../types/Store";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: TodosState = {
  entities: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    /*todoToggle(state, action: PayloadAction<number>) {
      const todoId = action.payload;
      const item = state.entities[todoId];
      item.completed = !item.completed;
      },*/
  },
});

export const {
  /*todoToggle*/
} = todosSlice.actions;
export default todosSlice.reducer;
