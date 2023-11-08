import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import HomeLayout from "./HomeLayout";
import AllFood from "../Pages/AllFood";
import AddFood from "../Pages/AddFood";
import Erorr from "../Pages/Erorr";
import Profile from "../Pages/Profile";
import Blogs from "../Pages/Blogs";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import FoodDetails from "../Components/AllFood/FoodDetails";
import Purchase from "../Pages/Purchase";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<HomeLayout></HomeLayout>,
        errorElement:<Erorr></Erorr>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/profile",
                element: <Profile></Profile>,
            },
            {
                path: "/allfood",
                element:<AllFood></AllFood>
            },
            {
                path: "/addfood",
                element:<AddFood></AddFood>
            },
            {
                path: "/blogs",
                element:<Blogs></Blogs>
            },
            {
                path: "/cart",
                element:<Cart></Cart>
            },
            {
                path: "/fooddetails/:id",
                element:<FoodDetails></FoodDetails>
            },
            {
                path: "/purchase/:id",
                element:<Purchase></Purchase>
            },
        ]
    },
    {
        path:'login',
        element:<Login></Login>
    },
    {
        path:'registration',
        element:<Registration></Registration>
    }
])