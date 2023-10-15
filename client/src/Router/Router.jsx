import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import SignIn from "../Pages/Signin/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Users from "../Pages/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://server-ifb9ch42p-fajle-rabbys-projects.vercel.app/coffee"
          ),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://server-ifb9ch42p-fajle-rabbys-projects.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch(
            "https://server-ifb9ch42p-fajle-rabbys-projects.vercel.app/user"
          ),
      },
    ],
  },
]);
export default router;
