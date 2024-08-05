
import { useRoutes, BrowserRouter } from 'react-router-dom'

import { useState } from 'react'
import Home from '../Home'
import Menu from '../Menu'
import Delivery from '../Delivery'
import Games from '../Games'
import Management from '../Management'
import Cart from '../Cart'
import NotFound from '../NotFound'

import NavBar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

import './App.css'

function App() {

  const AppRoutes = () => {
    let router = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu /> },
      { path: '/delivery', element: <Delivery /> },
      { path: '/games', element: <Games /> },
      { path: '/management', element: <Management /> },
      { path: '/cart', element: <Cart /> },
      { path: '*', element: <NotFound /> },

    ])
    return router
  }

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <BrowserRouter>
          <NavBar />
          <AppRoutes />

          <Footer />
        </BrowserRouter>

      </div>

    </>
  )
}

export default App
