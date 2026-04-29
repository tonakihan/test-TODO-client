import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <p>TODO (logo)</p>
      {/* TODO Replace sidebar on button to open sidebar */}
      <div id="sidebar" className={[styles.sidebar, styles.active].join(" ")}>
        <nav className={styles.nav}>
          <ul>
            <li>SIDE BAR</li>
            <li>SIDE BAR</li>
          </ul>
        </nav>
      </div>
      <div id="empty">END</div>
    </header>
  );
}

export default Header;
