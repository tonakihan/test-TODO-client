import { useNavigate, useParams } from "react-router";
//
import DefaultLayout from "@/components/layout/DefaultLayout";
import Card from "@/components/ui/Card";
//
import { useAppDispath, useAppSelector } from "@/hooks/store";
import { selectTodoById } from "@/features/todos/store/selectors";
//
import styles from "./TodoItemPage.module.css";
import stylesModal from "@/styles/modal.module.css";
import clsx from "clsx";
import { useState } from "react";
import { Button, TextareaAutosize } from "@mui/material";
import { updateTodo } from "@/features/todos/services/thunks";

function TodoItemPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispath();
  //
  const { id } = useParams();
  if (!id) throw new Error("TodoItem: ID is undefined!");
  //
  // FIXME: Send request if the store is empty
  const todo = useAppSelector((state) => selectTodoById(state, +id));
  const [title, setTitle] = useState(todo.title);

  function handleSave(e: React.SubmitEvent) {
    e.preventDefault();
    console.log(todo);
    dispatch(
      updateTodo({
        id: +id!,
        title: title,
      }),
    );
    navigate(-1);
  }

  return (
    <div
      className={stylesModal.wrapper}
      onClick={(e) => e.target === e.currentTarget && navigate(-1)}
    >
      <Card className={clsx(stylesModal.window, styles.page)}>
        <DefaultLayout>
          <DefaultLayout.Header className={styles.header}>
            <h1>Edit</h1>
            <p className={styles.info}>id: {id}</p>
          </DefaultLayout.Header>
          <DefaultLayout.Body>
            <form onSubmit={handleSave}>
              <TextareaAutosize
                minRows={2}
                placeholder="Here you can write text..."
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
                className={styles.textarea}
              />
              <Button
                type="submit"
                variant="contained"
                className={styles.saveButton}
              >
                Save
              </Button>
            </form>
          </DefaultLayout.Body>
        </DefaultLayout>
      </Card>
    </div>
  );
}

export default TodoItemPage;
