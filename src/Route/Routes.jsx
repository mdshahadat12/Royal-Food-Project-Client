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
import MyAdded from "../Pages/MyAdded";
import PrivetRoute from "./PrivetRoute";

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
                element: <PrivetRoute><Profile></Profile></PrivetRoute>,
            },
            {
                path: "/allfood",
                element:<AllFood></AllFood>
            },
            {
                path: "/addfood",
                element:<PrivetRoute><AddFood></AddFood></PrivetRoute>
            },
            {
                path: "/myaddedfood",
                element:<PrivetRoute><MyAdded></MyAdded></PrivetRoute>
            },
            {
                path: "/blogs",
                element:<Blogs></Blogs>
            },
            {
                path: "/cart",
                element:<PrivetRoute><Cart></Cart></PrivetRoute>
            },
            {
                path: "/fooddetails/:id",
                element:<PrivetRoute><FoodDetails></FoodDetails></PrivetRoute>
            },
            {
                path: "/purchase/:id",
                element:<PrivetRoute><Purchase></Purchase></PrivetRoute>
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