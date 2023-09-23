import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/404";
import ProductsPage from "./pages/products";
import CountPage from "./pages/count";
import ProfilePage from "./pages/profile";
import DetailProductPage from "./pages/detailProduct";
import Navbar from "./components/Layouts/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex justify-center items-center bg-slate-800 min-h-screen">
        <h1 className="font-bold text-5xl text-white">Hello World</h1>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
  {
    path: "/count",
    element: <CountPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
