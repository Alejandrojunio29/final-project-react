import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//pages
import Home from "./pages/Home.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/postDetail", element: <PostDetail /> },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
