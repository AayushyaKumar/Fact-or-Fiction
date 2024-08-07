import {Navigate,Outlet} from "react-router-dom"

export default function Auth(){
    if(!localStorage.getItem('token')){
        return <Navigate to="/login"/>
      }
      return <Outlet/>
}