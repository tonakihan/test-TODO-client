import { MdDeleteOutline, MdContentCopy } from "react-icons/md";
import {
  ThemeProvider,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
} from "@mui/material";
import clsx from "clsx";
//
import { useAppDispath, useAppSelector } from "@/hooks/store";
import { toggleTodo, deleteTodo } from "@/features/todos/services/thunks";
import { selectTodoById } from "@/features/todos/store/selectors";
//
import styles from "./styles/TodoCard.module.css";
import theme from "./styles/theme";
import { useGetUserByIdQuery } from "@/features/users/hooks/store";

interface TodoCardProps {
  todoId: number;
  className?: string;
  onClick?: React.DOMAttributes<HTMLElement>["onClick"];
}

function TodoCard({ todoId: id, className, onClick }: TodoCardProps) {
  const dispatch = useAppDispath();
  const todo = useAppSelector((state) => selectTodoById(state, id));
  const {
    data: user,
    isError: isUserError,
    isLoading: isUserLoading,
  } = useGetUserByIdQuery(todo.userId);

  /** NOTICE: Work only in HTTPS (exclude localhost) */
  function handleCopy(e: React.MouseEvent) {
    e.stopPropagation();
    navigator.clipboard.writeText(todo.title);
  }

  function handleToggle() {
    dispatch(toggleTodo(id));
  }

  function handleDelete(e: React.MouseEvent) {
    e.stopPropagation();
    dispatch(deleteTodo(id));
  }

  return (
    <ThemeProvider theme={theme}>
      <article
        className={clsx(styles.card, styles.grid, className, {
          [styles.card_completed]: todo.completed,
        })}
        onClick={onClick}
      >
        <FormGroup
          onClick={(e) => e.stopPropagation()}
          className={styles.header}
        >
          <FormControlLabel
            color="success"
            control={
              <Checkbox
                color="success"
                checked={todo.completed}
                onChange={handleToggle}
              />
            }
            label={todo.completed ? "Done" : "Pending"}
            aria-label="status"
            sx={{
              "& .MuiFormControlLabel-label": {
                backgroundColor: todo.completed
                  ? theme.palette.success.main
                  : theme.palette.warning.main,
              },
            }}
          />
        </FormGroup>

        <h3
          className={clsx(styles.body, {
            [styles.body_completed]: todo.completed,
          })}
        >
          {todo.title}
        </h3>

        <div className={clsx(styles.side, styles.btnStack)}>
          <IconButton onClick={handleCopy} size="small" aria-label="copy">
            <MdContentCopy size={"1em"} />
          </IconButton>

          <IconButton
            onClick={handleDelete}
            size="small"
            sx={{ color: "#c9122a" }}
            disableRipple={false}
            aria-label="delete"
          >
            <MdDeleteOutline size={"1.2em"} />
          </IconButton>
        </div>

        <div className={styles.footer}>
          by&nbsp;
          {isUserError && "Anonimus"}
          {isUserLoading && "..."}
          {user?.username}
        </div>
      </article>
    </ThemeProvider>
  );
}

export default TodoCard;
