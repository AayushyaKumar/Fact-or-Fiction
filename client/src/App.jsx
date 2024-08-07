
// import  * as ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { useEffect,useState } from "react"
import ErrorPage from "./routes/error-page.jsx"
import Home from "./routes/Home.jsx"
// import Auth from "./routes/Auth.jsx"
import Root from "./routes/Root.jsx"
import Signup from "./routes/Signup.jsx"
 import Login from "./routes/Login.jsx"
import Forms from "./routes/Forms.jsx"
import './index.css'
import {
    BrowserRouter as Router,
 Routes,
  Route,
//   createBrowserRouter,
//   // RouterProvider,
//   createRoutesFromElements,

   Navigate,


} from "react-router-dom"


export default function App(){
 
   const token = localStorage.getItem('token')
  

   
   useEffect(() => {
 
     if (localStorage.theme === "dark"){
      
       document.documentElement.classList.add("dark")
     }else{
       
       document.documentElement.classList.remove("dark")
     }
   }, []);
  
return(
  
    <Router  >
        <Routes>
<Route path="/" element={<Root/>}  errorElement={<ErrorPage/>}> 

{/* <Route path="/"  */}
  <Route path="/signup" element={<Signup />} />

  
  <Route path="/login" element={token?(<Navigate to="/forms"/>): (
    // <Navigate to="/login"/>
    <Login/>
    )} />
<Route path="/forms" element={<Forms/>}/>

  
       
 

<Route path="/" element={<Home/>}/>
  </Route>

  </Routes>
  </Router>
  
)}