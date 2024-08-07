// import React from 'react'
import Navbar from "./Navbar.jsx"
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
// import Forms from './Forms'
export default function root() {



//  className={`${localStorage.theme==="dark"&& "dark:bg-slate-950"}`}
  return (
    <div className={`${localStorage.theme==='dark'?"dark:bg-slate-800":""}`}>
    <Navbar/>
    {/* <div className=" p-16 mt-20  border-2 border-green-600  bg-slate-800 "><Forms /></div> */}
   
    <Outlet />
    <Footer  />
    </div>
  )
}
