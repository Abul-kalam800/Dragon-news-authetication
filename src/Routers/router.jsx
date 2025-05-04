import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts.jsx/HomeLayouts";
import Home from "../pages/Home";
import Categoris from "../pages/Categoris";
import CategoriesNews from "../pages/CategoriesNews";
import Authentication from "../componets/Authentication";
import Login from "../componets/Login";
import Register from "../componets/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivetRouts from "../Privetrout/PrivetRouts";
import Loding from "../componets/Loding";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '/',
                element: Home
            },
            {
                path: '/catagories/:id',
                element: <CategoriesNews></CategoriesNews>,
                loader: () => fetch('/news.json').then(res => res.json()),
              hydrateFallbackElement:<Loding></Loding>
            }
        ]
    },
    {
        path: '/auth',
        element: <Authentication></Authentication>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },


    {
        path: '/newsdetails/:id',
        element: <PrivetRouts>
            <NewsDetails></NewsDetails>
        </PrivetRouts>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement:<Loding></Loding>

    },

])



