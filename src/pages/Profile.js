import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import "../App.css"
import profilePic from "../assets/profile.png"
import { useState } from 'react'

const Profile = () => {
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
             <div className="container">
        <div className="card-1">
            <div className="gradient">
            <div className="image-container">
            <img className="card-image m-auto " src={profilePic} alt="profile pic"></img>
            </div></div>
            <h2 className="card-title text-[#000] font-semibold"> Student</h2>
            <p >Hello, I am a Developer and I love programming. </p>
            
            <div className="card-footer">
            <button className="profile-button">View My Profile</button>
             </div>
            
        </div>
        </div>
             </div>

      </div>
    </div>
  )
}

export default Profile
