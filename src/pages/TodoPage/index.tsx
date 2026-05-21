import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
//
import DefaultLayout from "../../components/layout/DefaultLayout";
//
import TodoCard from "../../components/TodoCard";
import ErrorMsg from "../../components/ui/ErrorMsg";
import Spinner from "../../components/ui/Spinner";
import Pagination from "../../components/ui/Pagination";
import Card from "../../components/ui/Card";
//
import { useAppDispath, useAppSelector } from "../../hooks/store";
import usePagination from "../../hooks/usePagination";
import { fetchTodos } from "../../features/todos/services/thunks";
import {
  selectTodoIds,
  selectTodosStatus,
  selectTodosTotal,
} from "../../features/todos/store/selectors";
//
import styles from "./TodoPage.module.css";
import { FaPlus } from "react-icons/fa";
import clsx from "clsx";

const TodoPage = () => {
  const navigate = useNavigate();
  //
  const dispatch = useAppDispath();
  //
  const todoIds = useAppSelector(selectTodoIds);
  const todosStatus = useAppSelector(selectTodosStatus);
  const todosTotal = useAppSelector(selectTodosTotal);
  //
  const countItemsPerPage = 11;
  const pagination = usePagination(todoIds, countItemsPerPage);
  const { currentPage, currentPageItems, totalPages } = pagination;

  function handlerAddTodo() {
    //TODO Создать temp item и проверить, заполнен ли он.
  }

  useEffect(() => {
    if (todosStatus === "idle") dispatch(fetchTodos({ count: 50 }));
  }, [todosStatus, dispatch]);

  // Loading more data
  if (totalPages - currentPage < 2) {
    if ((todoIds.at(-1) ?? Infinity) >= todosTotal)
      console.log("The data is ended on the server");
    else if (todosStatus === "succeeded") {
      dispatch(
        fetchTodos({
          count: countItemsPerPage * 2,
          startIndex: todoIds.at(-1),
        }),
      );
    }
  }

  if (todosStatus === "failed") {
    return <ErrorMsg />;
  }

  if (todosStatus === "loading" && todoIds.length <= 0) {
    return <Spinner color="info" />;
  }

  return (
    <>
      <DefaultLayout>
        <DefaultLayout.Header className={styles.header}>
          <h1>Todo</h1>
        </DefaultLayout.Header>
        {currentPageItems.length === 0 && (
          <DefaultLayout.Body>
            <p style={{ textAlign: "center" }}>Список задач пуст</p>
          </DefaultLayout.Body>
        )}

        <DefaultLayout.Body className={styles.grid}>
          {currentPageItems.map((id) => (
            <TodoCard
              key={id}
              todoId={id}
              onClick={() => navigate(`${id}`)}
              className={styles.card}
            />
          ))}

          <Card
            onClick={handlerAddTodo}
            className={clsx(styles.card, styles.cardAdd)}
          >
            <FaPlus size={"2.5em"} />
          </Card>
        </DefaultLayout.Body>
        <DefaultLayout.Footer>
          <Pagination pagination={pagination} />
        </DefaultLayout.Footer>
      </DefaultLayout>

      {/* TodoItem - url :id */}
      <Outlet />
    </>
  );
};

export default TodoPage;
