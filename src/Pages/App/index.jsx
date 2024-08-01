import { useState } from 'react'
import Menu from '../Menu'
import Delivery from '../Delivery'
import Games from '../Games'
import Management from '../Management'
import Cart from '../Cart'
import NotFound from '../NotFound'

import './App.css'

function App() {


  return (
    <>
      <Menu />
      <Delivery />
      <Games />

      <Management />
      <Cart />
      <NotFound />

    </>
  )
}

export default App
