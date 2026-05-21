import { type ComponentProps } from "react";
import styles from "./Card.module.css";
import clsx from "clsx";

function Card({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      {children}
    </div>
  );
}

export default Card;
