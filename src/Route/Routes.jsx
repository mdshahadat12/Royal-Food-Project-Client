import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import HomeLayout from "./HomeLayout";
import AllFood from "../Pages/AllFood";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<HomeLayout></HomeLayout>,
        errorElement:<h1>error</h1>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/allfood",
                element:<AllFood></AllFood>
            }
        ]
    }
])