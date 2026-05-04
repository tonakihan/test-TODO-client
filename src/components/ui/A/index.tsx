import type { ComponentProps } from "react";
import styles from "./A.module.css";

interface AProps extends ComponentProps<"a"> {}

function A({ children, className, ...props }: AProps) {
  return (
    <a className={[styles.a, className].join(" ")} {...props}>
      {children}
    </a>
  );
}

export default A;
