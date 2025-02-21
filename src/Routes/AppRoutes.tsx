import HomeLayout from "../Layout/HomeLayout";
import AuthLayout from "../Layout/AuthLayout";
import Home from "../Pages";
import SignUp from "../Pages/Auth/SignUp";
import Blogs from "../Pages/Home/Blogs";
import Page from "../Pages/Home/Page";
import SinglePost from "../Pages/Home/SinglePost";
import Login from "../Pages/Auth/Login";

export const HomeRoutes = {
 path:"/",
  element: <HomeLayout />,
  children: [

    {
      path: "/",
      element: <Home />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/singlePost",
      element: <SinglePost />,
    },
    {
      path: "/page",
      element: <Page />,
    },
  ],
};

export const AuthRoutes = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    { path: "login", element: <Login /> },
    { path: "register", element: <SignUp /> },
  ],
};
