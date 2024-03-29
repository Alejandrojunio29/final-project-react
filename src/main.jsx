import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//pages
import Home from "./pages/Home.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import Login from "./pages/Login.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import NewUser from "./pages/NewUser.jsx";
import CreatePost from "./pages/CreatePost.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/posts/:id", element: <PostDetail /> },
  { path: "/login", element: <Login /> },
  { path: "/createAccount", element: <CreateAccount /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/createpost", element: <CreatePost /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
