import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import Course from "../../Pages/Shared/Course";




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
      
    ]
  }
])