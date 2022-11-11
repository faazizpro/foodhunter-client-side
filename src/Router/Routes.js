import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddFood from "../Pages/AddFood/AddFood";
import AllMenu from "../Pages/AllMenu/AllMenu";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import LogOut from "../Pages/LogOut/LogOut";
import MyReview from "../Pages/MyReview/MyReview";
import SingleCard from "../Pages/SingleCard/SingleCard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>,
            },
            {
                path: '/allmenu',
                element: <AllMenu></AllMenu>
            },
            {
                path: '/addfood',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/allmenu/:id',
                element: <SingleCard></SingleCard>,
                loader: ({params}) => fetch(`https://y-ashy-seven.vercel.app/foods/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]);

export default  router;