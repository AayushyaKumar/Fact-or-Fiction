import Navbar from "./Navbar.jsx"
import { Outlet } from 'react-router-dom'
import Theme from "./../contexts/Theme.jsx"
import Footer from './Footer'

export default function root() {
  return (
 <Theme> 
    <div className="dark:bg-slate-800">
    <Navbar/>
    {/* <div className=" p-16 mt-20  border-2 border-green-600  bg-slate-800 "><Forms /></div> */}
   
    <Outlet />
    <Footer  />
    </div>
   </Theme>
  )
}
