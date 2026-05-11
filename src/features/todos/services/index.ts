import api from "../../../services";
import type { Todo } from "../types/Todo";

export const todoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], number | void>({
      query: (limit = 10) => `todos?_limit=${limit}`,
      providesTags: ["Todos"],
    }),

    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
  // для Vite (HMR): предотвращает ошибки при горячей перезагрузке
  overrideExisting: false,
});

export const { useGetTodosQuery, useAddTodoMutation } = todoApi;
