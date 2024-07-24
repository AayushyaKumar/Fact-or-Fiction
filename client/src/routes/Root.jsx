// import React from 'react'
import Navbar from "./Navbar.jsx"
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Forms from './Forms'
function root() {


  return (
    <div >
    <Navbar />
    <div className=" p-16 mt-20  border-2 border-green-600  bg-slate-800 "><Forms /></div>
   
    <Outlet />
    <Footer />
    </div>
  )
}

export default root