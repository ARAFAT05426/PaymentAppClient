import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Statistics from "../Pages/Statistics/Statistics";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Users from "../Pages/Users/Users";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Statistics />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);
