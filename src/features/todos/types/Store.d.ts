import type { EntityState } from "@reduxjs/toolkit";
import type { Todo } from "./Todo";
import type { BaseState } from "../../../types/BaseState";

export interface TodosState
  extends EntityState<Todo, number>, BaseState<Todo> {}
