import React from 'react'
import CustomNavbar from '../copmponents/user/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../copmponents/user/footer/Footer'
import AuthNavbar from '../copmponents/user/authNavbar/AuthNavbar'

export default function AuthLayout() {
  return (
    <>
    <AuthNavbar />
    <Outlet />
    <Footer />
    </>
  )
}
