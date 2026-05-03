import { type ComponentProps } from "react";
import styles from "./Footer.module.css";
import A from "../../ui/A";
import { BsCode, BsCodeSlash } from "react-icons/bs";

function Footer({ className, ...props }: ComponentProps<"footer">) {
  // TODO: bg-color
  return (
    <footer {...props} className={[styles.footer, className].join(" ")}>
      <p>&copy; 2026</p>⌖
      <p className={styles.center_vertically}>
        <BsCode /> Developed by{" "}
        <A href="https://github.com/tonakihan" target="_blank">
          Tonakihan
        </A>
        ╰(▔∀▔)╯
        <BsCodeSlash />
      </p>
    </footer>
  );
}

export default Footer;
