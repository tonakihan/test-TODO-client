import type { EntityState } from "@reduxjs/toolkit";
import type { Todo } from "./Todo";

export interface TodosState extends EntityState<Todo, number> {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string;
}
