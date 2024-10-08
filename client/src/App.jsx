
// import  * as ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Theme from "./contexts/Theme.jsx"
import ErrorPage from "./routes/error-page.jsx"
import Home from "./routes/Home.jsx"
 import  ForgotPassword from "./routes/ForgotPassword"
import Root from "./routes/Root.jsx"
import Signup from "./routes/Signup.jsx"
 import Login from "./routes/Login.jsx"
import Forms from "./routes/Forms.jsx"

import ResetPassword from "./routes/ResetPassword.jsx"
import './index.css'
import {
    BrowserRouter as Router,
 Routes,
  Route,

   Navigate,


} from "react-router-dom"




export default function App(){

const token = localStorage.getItem('token')



   

  
return(
<Theme>
  
    <Router  >
        <Routes>
<Route path="/" element={<Root/>}  errorElement={<ErrorPage/>}> 

{/* <Route path="/"  */}
  <Route path="/signup" element={<Signup />} />

  
  <Route path="/login" element={token?(<Navigate to="/forms"/>): (
    // <Navigate to="/login"/>
    <Login/>
    )}> </Route>
<Route path="/forms" element={<Forms/>}/>

  
       <Route path="/forgotpassword" element={<ForgotPassword/>}/>
 

<Route path="/" element={<Home/>}/>

<Route path={`/resetPassword/:resetToken`} element={<ResetPassword/>}/>


  </Route>

  </Routes>
  </Router>
  </Theme>
)}