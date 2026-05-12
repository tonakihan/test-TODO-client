import { FaExclamationCircle } from "react-icons/fa";
import styles from "./ErrorMsg.module.css";

interface ErrorMsgProps {
  children?: string; //message
  className?: string;
}

/**
 * @param children Accept message for display to user
 *
 * @example
 * <ErrorMsg>Message</ErrorMsg>
 */
function ErrorMsg({
  children = "Произошла непредвиденная ошибка",
  className,
}: ErrorMsgProps) {
  return (
    <div className={[styles.container, className].join(" ")}>
      <FaExclamationCircle className={styles.icon} />
      <div className={styles.message}>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default ErrorMsg;
