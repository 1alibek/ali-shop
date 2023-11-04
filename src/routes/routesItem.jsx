import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import BasketPage from "../pages/BasketPage";
import { Heading } from "@chakra-ui/react";
import Product from "../pages/product/Product";
import Login from "../components/Login";
import Register from "../components/Register";
import { Navigate } from "react-router-dom";
import SearchCard from "../components/SearchCard";
// import { LikeContext } from "../context/LikeContext";
import LikePages from "../pages/LikePages";
import Sahifa from "../routes/Sahifa";

export const routesItem = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/product/",
        element: <Navigate to={"/"} />,
      },

      {
        path: "/search",
        element: <SearchCard />,
      },
      {
        path: "/basket",
        element: <BasketPage />,
      },

      {
        path: "/like",
        element: <LikePages />,
      },
      {
        path: "*",
        element: <Sahifa />,
      },
      // {
      //   path: "/searchProduct",
      //   element: <SearchCard />,
      // },
    ],
  },
];

export const beforeLogin = [
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Heading>saxifa topilmadi</Heading>,
  },
];
