import React from 'react'
import CustomNavbar from '../copmponents/user/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../copmponents/user/footer/Footer'

export default function AuthLayout() {
  return (
    <>
    <CustomNavbar />
    <Outlet />
    <Footer />
    </>
  )
}
