import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../SheardPage/Login/Login";
import Register from "../SheardPage/Register/Register";
import Orders from "../Pages/Orders/Orders";
import PrivateRoutes from "./PrivateRoutes";
import ViewRecipes from "../Pages/ViewRecipe/ViewRecipes";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import OurChef from "../Pages/OurChef/OurChef";
import Blog from "../Pages/Blog/Blog";

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
                path:'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/order',
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            },
            {
                path: 'viewrecipe/:id',
                element: <ViewRecipes></ViewRecipes>,
                loader: ({params})=>fetch(`https://b7a10-chef-recipe-hunter-server-side-sumon2807.vercel.app/categories/${params.id}`)
            },
            {
                path: '/ourchef/:id',
                element: <OurChef></OurChef>,
                loader: ({params})=>fetch(`https://b7a10-chef-recipe-hunter-server-side-sumon2807.vercel.app/categories/${params.id}`)
            },
            {
                path: '/recipeDetails',
                element: <ViewDetails></ViewDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
  ]);

  export default router;