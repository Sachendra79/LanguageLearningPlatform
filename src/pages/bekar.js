import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import "../App.css"

function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container sticky'>
    <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/*<Home />*/}
    </div>
  )
}

export default Home
