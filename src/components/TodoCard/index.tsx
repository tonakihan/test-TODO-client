import { MdDeleteOutline, MdContentCopy } from "react-icons/md";
import {
  ThemeProvider,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
} from "@mui/material";
import type { Todo } from "../../features/todos/types/Todo";
import clsx from "clsx";
import { brandedTokens } from "../../styles/theme";
import styles from "./styles/TodoCard.module.css";
import theme from "./styles/theme";

interface TodoCardProps {
  todo: Todo;
}

function TodoCard({ todo }: TodoCardProps) {
  /** NOTICE: Work only in HTTPS (exclude localhost) */
  function handleCopy() {
    navigator.clipboard.writeText(todo.title);
  }

  //TODO
  function handleToggle() {}

  //TODO
  function handleDelete() {}

  return (
    <ThemeProvider theme={theme}>
      <article
        className={clsx(styles.card, styles.grid, {
          [styles.card_completed]: todo.completed,
        })}
      >
        <FormGroup className={styles.header}>
          <FormControlLabel
            color="success"
            control={<Checkbox color="success" checked={todo.completed} />}
            label={todo.completed ? "Done" : "Pending"}
            aria-label="status"
            sx={{
              "& .MuiFormControlLabel-label": {
                backgroundColor: todo.completed
                  ? brandedTokens.palette!.success!.main
                  : brandedTokens.palette!.warning!.main,
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

        <div className={styles.footer}>User ID: {todo.userId}</div>
      </article>
    </ThemeProvider>
  );
}

export default TodoCard;
