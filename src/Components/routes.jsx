import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./Main";
import Error404 from "./Pages/Error404";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import Blog from "./Pages/Blog";
import PrivetRoute from "./PrivetRoute/PrivetRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/recipes/:Id",
            element: <PrivetRoute><Recipes></Recipes></PrivetRoute>,
            loader: ({params})=> fetch(`https://b7a10-chef-recipe-hunter-server-side-dm-abdullah-dmabdullah.vercel.app/recipe/${params.Id}`)
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/*",
            element: <Error404></Error404>
        }
      ]
    },
  ]);

  export default router;