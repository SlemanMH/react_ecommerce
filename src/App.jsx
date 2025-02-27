import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import UserLayout from './layouts/UserLayout'
import Register from './pages/user/register/Register'
import Login from './pages/user/login/Login'
import Home from './pages/user/home/Home'
import Cart from './pages/user/cart/Cart'
import Checkout from './pages/user/checkout/Checkout'
import About from './pages/user/about/About'
import Contact from './pages/user/contact/Contact'
import NotFound from './pages/user/notFound/NotFound'

import ForgetPassword from './pages/user/forgetPassword/ForgetPassword'
import ChangePassword from './pages/user/changePassword/ChangePassword'
import Profile from './pages/user/profile/Profile'
import Info from './pages/user/profile/Info'
import Photo from './pages/user/profile/Photo'
import Orders from './pages/user/profile/Orders'
import AuthProtectedRoute from './copmponents/user/AuthProtectedRoute'
import UserContextProvider from './copmponents/user/context/UserContext'
import CartContextProvider from './copmponents/user/context/CartContext'
import { ToastContainer } from 'react-toastify'
import ProtectRoute from './copmponents/user/ProtectRoute'
import CategoryProducts from './pages/user/products/CategoryProducts'
import Products from './pages/user/products/Products'
import ProductDetails from './pages/user/products/ProductDetails'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/auth',

        element: 
        <AuthProtectedRoute>
          <AuthLayout />
        </AuthProtectedRoute>
        ,
        children: [
          {
            path: 'register',
            element: <Register />
          },
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'forgetPassword',
            element: <ForgetPassword />
          },
          {
          path:'changePassword',
          element:<ChangePassword/>
          }
        ]
      },
      {
        path: '/',
        element: 
        <UserContextProvider>
            <CartContextProvider>
              <ProtectRoute>
                <UserLayout />
              </ProtectRoute>
            </CartContextProvider>
          </UserContextProvider>
        ,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: 'categories/:categoryId',
            element: <CategoryProducts />
          },
          {
            path: 'products',
            element: <Products />
          },
          {
            path: 'products/:productId',
            element: <ProductDetails />
          },
          {
            path: 'cart',
            element: <Cart />
          },
          {
            path: 'checkout',
            element: <Checkout />
          },
          {
            path: 'about',
            element: <About />
          },
          {
            path: 'contact',
            element: <Contact />
          },
          {
            path:'profile',
            element: <Profile />,
            children: [
              {
                path: 'info',
                element: <Info />
              },
              {
                path: 'photo',
                element: <Photo />
              },
              {
                path: 'orders',
                element: <Orders />
              }
            ]
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  )
  return (
    <>
    <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}
