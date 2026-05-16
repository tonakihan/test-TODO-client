import { useEffect } from "react";
import { Outlet } from "react-router";
import TodoCard from "../../components/TodoCard";
import { useAppDispath, useAppSelector } from "../../hooks/store";
import { fetchTodos } from "../../features/todos/services/thunks";
import ErrorMsg from "../../components/ui/ErrorMsg";
import Spinner from "../../components/ui/Spinner";
import styles from "./TodoPage.module.css";
import {
  selectTodoIds,
  selectTodosStatus,
} from "../../features/todos/store/selectors";

const TodoPage = () => {
  const dispatch = useAppDispath();
  const todoIds = useAppSelector(selectTodoIds);
  const todosStatus = useAppSelector(selectTodosStatus);

  useEffect(() => {
    if (todosStatus === "idle") dispatch(fetchTodos(1));
  }, [todosStatus, dispatch]);

  if (todosStatus === "failed") {
    return <ErrorMsg />;
  }

  if (todosStatus === "loading") {
    return <Spinner color="info" />;
  }

  return (
    <>
      <h1 className={styles.title}>Todo</h1>

      <div className={styles.grid}>
        {todoIds.map((id) => (
          <TodoCard key={id} todoId={id} />
        ))}
      </div>

      {/* TODO ButtonAdd */}

      {/* TodoItem - url :id */}
      <Outlet />

      {todoIds.length === 0 && (
        <p style={{ textAlign: "center" }}>Список задач пуст</p>
      )}
    </>
  );
};

export default TodoPage;
