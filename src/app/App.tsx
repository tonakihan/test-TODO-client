import { ThemeProvider } from "@mui/material/styles";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./app.module.css";
import { Outlet } from "react-router";
import { appTheme } from "@/styles/theme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className={[styles.root_layout, styles.app].join(" ")}>
        <Header />
        <main className={`p-4 ${styles.main}`}>
          <Outlet />
        </main>
        <Footer className={styles.footer} />
      </div>
    </ThemeProvider>
  );
}

export default App;
