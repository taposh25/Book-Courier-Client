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
import PostBook from "../Pages/Home/PostBook/PostBook";
import MyBooks from "../Pages/Home/MyBooks/MyBooks.jsx";
import DashboardLayout from "../Layouts/DashboardLayout.jsx";
import BookDetails from "../Pages/Dashboard/BookDetails/BookDetails.jsx";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders.jsx";
import Payment from "../Pages/Dashboard/Payment/Payment.jsx";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess.jsx";
import Rider from "../Pages/Rider/Rider.jsx";
import ApproveRiders from "../Pages/Dashboard/ApproveRiders/ApproveRiders.jsx";
import UsersManagement from "../Pages/Dashboard/UsersManagement/UsersManagement.jsx";




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
        path: 'about-us',
        Component: AboutUs,

       },
         {
        path: 'coverage',
        Component: Coverage,
        loader: () => fetch('/serviceCenters.json').then(res => res.json()),
      },
      {
        path: 'post-book',
        Component: PostBook,
      },
      {
        path: 'my-books',
        element:<PrivateRoute><MyBooks></MyBooks></PrivateRoute>,
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
    {
      path: "dashboard",
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
         path: "books/:id",
         Component: BookDetails ,
        },
        {
          path: 'my-orders',
          Component: MyOrders,
        },
        {
          path: "payment/:orderId",
          Component: Payment,
        },
        {
          path: "payment-success",
          Component: PaymentSuccess,
        },
        {
          path: 'rider',
          Component: Rider,
        },
        {
          path: 'approve-riders',
          Component: ApproveRiders,
        },
        {
          path: "users-management",
          Component: UsersManagement,
        }
       
        
      ]
    }
  
]);



