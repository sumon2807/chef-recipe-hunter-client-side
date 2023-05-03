import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../SheardPage/Login/Login";
import Register from "../SheardPage/Register/Register";
import Orders from "../Pages/Orders/Orders";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/order',
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            }
        ]
    }
  ]);

  export default router;