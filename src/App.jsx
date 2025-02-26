import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import UserLayout from './layouts/UserLayout'
import Register from './pages/user/register/Register'
import Login from './pages/user/login/Login'
import Home from './pages/user/home/Home'
import Cart from './pages/user/cart/Cart'
import Checkout from './pages/user/checkout/Checkout'


export default function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/auth',
        element: <AuthLayout />,
        children:[
          {
            path:'register',
            element: <Register  />
          },
          {
            path:'login',
            element:<Login />
          }

        ]
      },
      {
        path:'/',
        element: <UserLayout />,
        children:[
          {
            path:'/',
            element:<Home />
          },
          {
            path:'cart',
            element:<Cart />
          },
          {
            path:'checkout',
            element:<Checkout />
          }
        ]
      }
    ]
  )
  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}
