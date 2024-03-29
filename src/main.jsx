import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/home/index.jsx";
import Login from "./page/login/index.jsx";
import Exercise from "./page/exercise/index.jsx";
import Posts from "./page/posts/index.jsx";
import UseMemoComponents from "./page/UseMemo/index.jsx";
import UseContextComponent from "./page/UseContext/index.jsx";
import UseReducerComponent from "./page/UseReducer/index.jsx";
import UseCallbackComponents from "./page/UseCallback/index.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/exe",
        element: <Exercise />,
      },
      {
        path: "/post",
        element: <Posts />,
      },
      {
        path: "/memo",
        element: <UseMemoComponents />,
      },
      {
        path: "/context",
        element: <UseContextComponent />,
      },
      {
        path: "/reducer",
        element: <UseReducerComponent />,
      },
      {
        path: "/callback",
        element: <UseCallbackComponents />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
