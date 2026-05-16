/*
  Not using becuse API JSONPlaceholder is not chengeble.

  RTK cache updating after modify request (invalidates the data).
  JSONPlaceholder not change the server state by modify requests and
  because return the same data (the data isn't mutable).
  I'm switching to use slices (only in this case).
*/
/*
import api from "../../../services";
import type { RootState } from "../../../types/Store";
import type { Todo } from "../types/Todo";

export const todoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], number | void>({
      query: (limit = 10) => `todos?_limit=${limit}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todos", id }) as const),
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
    }),

    getTodo: builder.query<Todo, number>({
      query: (id) => `todos/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Todos", id }],
    }),

    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),

    deleteTodo: builder.mutation<Todo, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
    invalidatesTags: (_result, _error, id) => [{ type: "Todos", id }],
    }),

    toggleTodo: builder.mutation<Todo, number>({
      invalidatesTags: (_result, _error, id) => [{ type: "Todos", id }],
      queryFn: async (id, { getState }, _extraOptions, baseQuery) => {
        // Достаем из cache
        const state = getState() as RootState;
        const todo = todoApi.endpoints.getTodo.select(id)(state).data;

        if (!todo) {
          return { error: { status: 404, data: "Todo not found in cache" } };
        }

        const result = await baseQuery({
          url: `todos/${id}`,
          method: "PATCH",
          body: { completed: !todo.completed },
        });

        return result.data
          ? { data: result.data as Todo }
          : { error: result.error as any };
      },
    }),
  }),
  // для Vite (HMR): предотвращает ошибки при горячей перезагрузке
  overrideExisting: false,
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useToggleTodoMutation,
} = todoApi;
*/
