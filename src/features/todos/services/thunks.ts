import { API_URL } from "../../../config/api";
import { createAppAsyncThunk } from "../../../utils/store";
import axios from "axios";
import type { Todo } from "../types/Todo";

const BASE_QUERY = `${API_URL}/todos`;

interface FetchTodos {
  /** @property count Items per request */
  count: number;
  /** @property startIndex The starting index for requested items. Results will start from index + 1*/
  startIndex?: number;
}

const fetchTodos = createAppAsyncThunk(
  "todos/fetchPosts",
  async ({ count, startIndex = 0 }: FetchTodos) => {
    const res = await axios.get<Todo[]>(
      `${BASE_QUERY}?_limit=${count}&_start=${startIndex}`,
    );

    return {
      data: res.data,
      total: +res.headers["x-total-count"],
    };
  },
);

const addTodo = createAppAsyncThunk("todos/addTodo", async (todo: Todo) => {
  const res = await axios.post<Todo>(BASE_QUERY, todo);
  return res.data;
});

const deleteTodo = createAppAsyncThunk(
  "todos/deleteTodo",
  async (id: number) => {
    await axios.delete(`${BASE_QUERY}/${id}`);
    return id;
  },
);

const toggleTodo = createAppAsyncThunk(
  "todos/toggleTodo",
  async (id: number, { getState }) => {
    try {
      const stateTodo = getState().todos.entities[id];
      const todo = structuredClone(stateTodo);
      todo.completed = !todo.completed;
      const res = await axios.patch<Todo>(`${BASE_QUERY}/${id}`, {
        // Можно секономить немного байт и оправить только необходимую часть
        completed: todo.completed,
      });
      return res.data;
    } catch (e) {
      console.error("thunk todos/toggleTodo: ");
      console.error(e);
      throw e;
    }
  },
);

export { fetchTodos, addTodo, deleteTodo, toggleTodo };
