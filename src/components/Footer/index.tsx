import { type ComponentProps } from "react";
import styles from "./Footer.module.css";
import A from "@/components/ui/A";
import { BsCode, BsCodeSlash } from "react-icons/bs";

function Footer({ className, ...props }: ComponentProps<"footer">) {
  // TODO: bg-color
  return (
    <footer {...props} className={[styles.footer, className].join(" ")}>
      <p>&copy;&nbsp;2026</p>⌖
      <div className={styles.center_vertically}>
        <BsCode />
        <p>
          Developed by&nbsp;
          <A href="https://github.com/tonakihan" target="_blank">
            Tonakihan
          </A>
          ╰(▔∀▔)╯
        </p>
        <BsCodeSlash />
      </div>
    </footer>
  );
}

export default Footer;
