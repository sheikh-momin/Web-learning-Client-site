import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import LogIn from "../../LogIn/LogIn";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home/Home";
import Course from "../../Pages/Shared/Course";
import SignIn from "../../SignIn/SignIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";




export const routes = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/categories',
        element: <Courses></Courses>
      },
      {
        path:'/courses/:id',
        element: <PrivateRoute><Course></Course></PrivateRoute>,
        loader: ({ params }) => fetch(`https://web-learning-server.vercel.app/courses/${params.id}`)
      },
      {
        path: '*',
        element: <Faq></Faq>
      },
      {
        path: '/blog',
        element: <PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      
    ]
  }
])