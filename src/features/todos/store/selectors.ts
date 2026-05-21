import type { RootState } from "../../../types/Store";
import todosAdapter from "./adapter";

export const {
  selectIds: selectTodoIds,
  selectById: selectTodoById,
  selectAll: selectAllTodos,
  //selectEntities: selectTodoEntities,
  //selectTotal: selectTodoTotal,
} = todosAdapter.getSelectors((state: RootState) => state.todos);

export const selectTodosStatus = (state: RootState) => state.todos.status;
export const selectTodosTotal = (state: RootState) => state.todos.total;
