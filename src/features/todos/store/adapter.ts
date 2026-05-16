import { createEntityAdapter } from "@reduxjs/toolkit";
import type { Todo } from "../types/Todo";

const todosAdapter = createEntityAdapter<Todo>();

export default todosAdapter;
