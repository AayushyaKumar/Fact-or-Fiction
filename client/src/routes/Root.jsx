// import React from 'react'
import Navbar from "./Navbar.jsx"
import { Outlet } from 'react-router-dom'
function root() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <Forms/> */}
    </>
  )
}

export default root