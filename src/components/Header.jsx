import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Header({OpenSidebar}) {

  const navigate = useNavigate();

  const profileHandler = () => {

    navigate('/profile'); 
  };
  const messageHandler = () => {

    navigate('/message'); 
  };
  return (
    <header className='header'>

        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            {/* <BsSearch  className='icon'/> */}
            <div className='sidebar-brand'>
          <span className='brand-part edu'>Edu</span>
          <span className='brand-part verse'>Verse</span>
        </div>
        </div>
        <div className='header-right flex '>
            <BsFillBellFill className='icon '/>
            <BsFillEnvelopeFill className='icon' onClick={messageHandler}/>
            <BsPersonCircle className='icon' onClick={profileHandler}/ >
        </div>
    </header>
  )
}

export default Header