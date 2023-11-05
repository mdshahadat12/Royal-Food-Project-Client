import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import HomeLayout from "./HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<HomeLayout></HomeLayout>,
        errorElement:<h1>error</h1>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            }
        ]
    }
])