import TodoPage from "../features/todo/TodoPage";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.root_layout}>
      <Header />
      <main className="p-4">
        <TodoPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
