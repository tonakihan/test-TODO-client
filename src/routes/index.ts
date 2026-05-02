import { createBrowserRouter } from "react-router";
import App from "../app/App";
import TodoPage from "../pages/TodoPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: TodoPage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

export default router;
