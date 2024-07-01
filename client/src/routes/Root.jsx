import React from 'react'
import { Outlet } from 'react-router-dom'
function root() {
  return (
    <>
    <Navbar/>
    <Outlook/>
    <Forms/>
    </>
  )
}

export default root