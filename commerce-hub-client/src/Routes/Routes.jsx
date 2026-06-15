import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import CategoryPage from "../Pages/Category/CategoryPage";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blog/blogs";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import ErrorPage from "../Components/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/categories/:categoryName',
                element: <CategoryPage />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            // {
            //     path: "/blogs/:id",
            //     element: <BlogDetails />
            // },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/singup",
                element: <Singup />
            },

        ]
    },
    {
     path: "/",
     element: <DashboardLayouts />,
     children: [
        {
            path: 'dashboard',
            element: <h1>AdminDashboard</h1>
        }
     ]
    }
])