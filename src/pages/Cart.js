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
      <h2 className='text-5xl font-semibold text-[#000] mx-96 '>Your Cart</h2>
      <h2 className='text-[#000] mt-5 font-semibold text-2xl'> Total item in your cart : <span className='text-[#e94848]'> {cartItems.length}</span></h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className='cart-list flex flex-row  gap-10 w-80 mt-9'>
          {cartItems.map((item, index) => (
            <li key={index} className='cart-item flex flex-col flex-wrap justify-evenly gap-5 rounded-xl '>
              <p className='w-80 m-2 text-[#000]'>Title: {item.title}</p>
              {/* <p>Author: {item.author}</p> */}
              <p className='m-2 text-[#b03b3b] font-semibold'>Price: ${item.price}</p>
           
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
