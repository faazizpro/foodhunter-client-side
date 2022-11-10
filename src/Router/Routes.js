import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllMenu from "../Pages/AllMenu/AllMenu";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingleCard from "../Pages/SingleCard/SingleCard";

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
                path: '/allmenu',
                element: <AllMenu></AllMenu>
            },
            {
                path: '/allmenu/:id',
                element: <SingleCard></SingleCard>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            }
        ]
    }
]);

export default  router;