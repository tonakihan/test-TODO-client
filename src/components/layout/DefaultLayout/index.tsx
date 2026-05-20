import styles from "./DefaultLayout.module.css";
import { attachSubComponents } from "../../../utils/attachSubComponents";
import type { ComponentProps } from "react";
import clsx from "clsx";
import { findByType } from "../../../utils/findByType";

interface DefaultLayoutProps extends ComponentProps<"div"> {}

function Root({ className, children, ...props }: DefaultLayoutProps) {
  const header = findByType(children, Header);
  const body = findByType(children, Body);
  const footer = findByType(children, Footer);

  return (
    <div className={clsx(styles.root, className)} {...props}>
      {header}
      {body}
      {footer}
    </div>
  );
}

function Header({ children, className, ...params }: ComponentProps<"div">) {
  return (
    <div className={clsx(styles.header, className)} {...params}>
      {children}
    </div>
  );
}

function Body({ children, className, ...params }: ComponentProps<"div">) {
  return (
    <div className={clsx(styles.body, className)} {...params}>
      {children}
    </div>
  );
}

function Footer({ children, className, ...params }: ComponentProps<"div">) {
  return (
    <div className={clsx(styles.footer, className)} {...params}>
      {children}
    </div>
  );
}

const DefaultLayout = attachSubComponents("DefaultLayout", Root, {
  Header,
  Body,
  Footer,
});

export default DefaultLayout;
