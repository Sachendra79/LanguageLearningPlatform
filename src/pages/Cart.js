import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

import { useState, useEffect,} from 'react'
import axios from 'axios';


const Cart = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [cartItems, setCartItems] = useState([]);


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

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
    <div className='main-container grid-container'>
      <div className='sidebar'>  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/></div>
      <div className='right-side' >
             <div className='header'> <Header OpenSidebar={OpenSidebar}/></div>
             <div className='content'>
          
             <div>
      <h2>Your Cart</h2>
      <h2>{cartItems.length}</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <p>Title: {item.title}</p>
              <p>Author: {item.author}</p>
              <p>Price: ${item.price}</p>
           
            </li>
          ))}
        </ul>
      )}
    </div>


             </div>

      </div>
    </div>
  )
}

export default Cart
