import styles from "./Header.module.css";
import NavBar from "../../NavBar";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

/* TODO: Desktop css - sidebar - только иконки
 * + add text & change round when open */
//TODO: Перенести round сюда и изменить
function Header() {
  // For mobile
  const [sidebarState, setSidebarState] = useState<"active" | null>(null);

  return (
    <header className={[styles.header, styles.layout].join(" ")}>
      <button
        aria-label="Open sidebar"
        className={styles.mobile}
        onClick={() => setSidebarState("active")}
      >
        <MdMenu />
      </button>
      <div className={styles.mobile}>(Logo)</div>
      <div className={styles.mobile}>Login</div>

      {/* Here is position: fixed */}
      {/* TODO In destop mode - hover -> out second layer */}
      <>
        <div
          aria-label="Close sidebar"
          className={[styles.overlap_content, styles.mobile].join(" ")}
          onClick={() => setSidebarState(null)}
          data-active={sidebarState}
        ></div>
        <div
          className={[styles.sidebar, styles.layout, "bg-amber-300"].join(" ")}
          data-active={sidebarState}
        >
          <h1 className={styles.logo}>
            <img src="/favicon-light.svg"></img>
            <span>(Logo)</span>
          </h1>
          <NavBar className={styles.nav} />
          <div className={styles.login}>
            <FaRegUserCircle />
            <span>Login</span>
          </div>
        </div>
      </>
    </header>
  );
}

export default Header;
