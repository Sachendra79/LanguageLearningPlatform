import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [activeItem, setActiveItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  useEffect(() => {
    const fetchCart = async () =>
    {
     try {
       // fetching the data
       const response = await axios.get('https://courses-eduverse.onrender.com/courses/cart/');
       setCartItems(response.data.data);
   
     } catch (error) {
       console.error('Error fetching cart items:', error);
     }
   
   
    }
    fetchCart();
   
   }, []);



  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title '>
        
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list mt-10'>
        <li className={`sidebar-list-item ${activeItem === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
          <Link to="/home">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeItem === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
          <Link to="/courses">
            <BsFillArchiveFill className='icon' /> Courses
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeItem === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
          <Link to="/assignment">
            <BsFillGrid3X3GapFill className='icon' /> Assignment
          </Link>
        </li>
        {/* <li className={`sidebar-list-item ${activeItem === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}>
          <Link to="/message">
            <BsPeopleFill className='icon' /> Messages
          </Link>
        </li> */}
  
        
         <li className={`sidebar-list-item ${activeItem === 4 ? 'active' : ''}`} onClick={() => handleItemClick(4)}>
         <Link to="/cart">
            <BsCart3 className='icon' /> Cart
          </Link>
          <h2 className='text-[#000] '>{cartItems.length}</h2>
          </li>
    
        
          

        
      
       
    
        
        <li className={`sidebar-list-item ${activeItem === 5 ? 'active' : ''}`} onClick={() => handleItemClick(5)}>
          <Link to="/support">
            <BsMenuButtonWideFill className='icon' /> Support
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeItem === 6 ? 'active' : ''}`} onClick={() => handleItemClick(6)}>
          <Link to="/">
            <BsFillGearFill className='icon' /> Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
