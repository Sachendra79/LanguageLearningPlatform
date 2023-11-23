import React, { useState } from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';


function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <span className='brand-part edu'>Edu</span>
          <span className='brand-part verse'>Verse</span>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className={`sidebar-list-item ${activeItem === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
          <a href="">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className={`sidebar-list-item ${activeItem === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
          <a href="">
            <BsFillArchiveFill className='icon' /> Courses
          </a>
        </li>
        <li className={`sidebar-list-item ${activeItem === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
          <a href="">
            <BsFillGrid3X3GapFill className='icon' /> Assignment
          </a>
        </li>
        <li className={`sidebar-list-item ${activeItem === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}>
          <a href="">
            <BsPeopleFill className='icon' /> Messages
          </a>
        </li>
        <li className={`sidebar-list-item ${activeItem === 4 ? 'active' : ''}`} onClick={() => handleItemClick(4)}>
          <a href="">
            <BsCart3 className='icon' /> Cart
          </a>
        </li>
        <li className={`sidebar-list-item ${activeItem === 5 ? 'active' : ''}`} onClick={() => handleItemClick(5)}>
          <a href="">
            <BsMenuButtonWideFill className='icon' /> Support
          </a>
        </li>
        <li className={`sidebar-list-item ${activeItem === 6 ? 'active' : ''}`} onClick={() => handleItemClick(6)}>
          <a href="">
            <BsFillGearFill className='icon' /> Logout
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
