import type { ComponentProps, PropsWithChildren } from "react";
import styles from "./A.module.css";

interface AProps extends PropsWithChildren<ComponentProps<"a">> {}

function A({ children, className, ...props }: AProps) {
  return (
    <a className={[styles.a, className].join(" ")} {...props}>
      {children}
    </a>
  );
}

export default A;
