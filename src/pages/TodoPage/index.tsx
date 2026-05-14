import TodoCard from "../../components/ui/TodoCard";
import styles from "./TodoPage.module.css";
import { useGetTodosQuery } from "../../features/todos/services";
import ErrorMsg from "../../components/ui/ErrorMsg";
import Spinner from "../../components/ui/Spinner";
import { Outlet } from "react-router";

const TodoPage = () => {
  const { data: todos = [], isLoading, isError } = useGetTodosQuery(11);

  if (isError) {
    return <ErrorMsg />;
  }

  if (isLoading) {
    return <Spinner color="info" />;
  }

  return (
    <>
      <h1 className={styles.title}>Todo</h1>

      <div className={styles.grid}>
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>

      {/* TodoItem - url :id */}
      <Outlet />

      {todos.length === 0 && !isLoading && (
        <p style={{ textAlign: "center" }}>Список задач пуст</p>
      )}
    </>
  );
};

export default TodoPage;
