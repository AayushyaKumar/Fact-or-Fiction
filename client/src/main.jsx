import  * as React from 'react'
import  * as ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import ErrorPage from "./routes/error-page.jsx"
import Navbar from "./routes/Navbar.jsx"
import Forms from "./routes/Forms.jsx"
import Signup from "./routes/Signup.jsx"
import Login from "./routes/Login.jsx"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/> ,
    errorElement: <ErrorPage/>,
  
 
  children: [
    {
      path: "/",
      element: <Forms/>,
    },
    // {
    //   path: "login",
    //   element:<Login/>
    // }
  ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
