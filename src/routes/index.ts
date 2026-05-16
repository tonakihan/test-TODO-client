import { createBrowserRouter, redirect } from "react-router";
import App from "../app/App";
import TodoPage from "../pages/TodoPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import TodoItemPage from "../pages/TodoItemPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: App,
      children: [
        {
          index: true,
          loader: () => redirect("/todo"),
        },
        {
          path: "/todo",
          Component: TodoPage,
          children: [
            {
              path: ":id",
              Component: TodoItemPage,
            },
          ],
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
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default router;
