import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import styles from "./app.module.css";
import { Outlet } from "react-router";

function App() {
  return (
    <div className={[styles.root_layout, styles.app].join(" ")}>
      <Header />
      <main className={`p-4 ${styles.main}`}>
        <Outlet />
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}

export default App;
