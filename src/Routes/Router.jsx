import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AllBooks from "../Pages/Home/AllBooks/AllBooks";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Coverage from "../Pages/Home/Coverage/Coverage";
import AboutUs from "../Pages/Home/AboutUs/AboutUs";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [
        {
              index: true, 
               Component: Home,
        },
        {
          path: 'all-books',
          element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>
        },
         {
        path: 'coverage',
        Component: Coverage,
        loader: () => fetch('/serviceCenters.json').then(res => res.json()),
      },
      {
        path: 'about-us',
        Component: AboutUs,

      }
    ]
  },
       {
        path: '/',
        Component: AuthLayout ,
        children: [
            {
                path: '/login',
                Component: Login,

            },
            {
                path: '/register',
                Component: Register,
            },
           
        
        ]

    },
]);