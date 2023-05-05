import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../SheardPage/Login/Login";
import Register from "../SheardPage/Register/Register";
import Orders from "../Pages/Orders/Orders";
import PrivateRoutes from "./PrivateRoutes";
import ViewRecipes from "../Pages/ViewRecipe/ViewRecipes";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import OurTeam from "../Pages/Home/OurTeam/OurTeam";
import OurChef from "../Pages/OurChef/OurChef";

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
            },
            {
                path: '/viewrecipe',
                element: <ViewRecipes></ViewRecipes>
            },
            {
                path: '/ourchef/:id',
                element: <OurChef></OurChef>,
                loader: ({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/recipeDetails',
                element: <ViewDetails></ViewDetails>
            }
        ]
    }
  ]);

  export default router;