import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

import { useState } from 'react'

const Cart = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='main-container grid-container'>
      <div className='sidebar'>  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/></div>
      <div className='right-side' >
             <div className='header'> <Header OpenSidebar={OpenSidebar}/></div>
             <div className='content'>
             <div>A</div>
             <div>A</div>
             <div>A</div>
             <div>A</div>
             </div>

      </div>
    </div>
  )
}

export default Cart
