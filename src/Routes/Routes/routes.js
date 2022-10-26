import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import LogIn from "../../LogIn/LogIn";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home/Home";
import Course from "../../Pages/Shared/Course";
import SignIn from "../../SignIn/SignIn";




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
        element:<Courses></Courses>
      },
      {
        path:'/courses/:id',
        element:<Course></Course>,
        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
      },
      {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
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