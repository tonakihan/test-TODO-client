export interface BaseState<T> {
  entities: T[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string;
}
