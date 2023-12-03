import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import sideimg from "../assets/login.jpg"
import courseimg from "../assets/course-image.jpg"
import toast from 'react-hot-toast';

const CourseDetailPage = () => {
  const { course_uuid } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const navigate =useNavigate();

  
 
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`https://courses-eduverse.onrender.com/courses/detail/${course_uuid}`);
        setCourseDetails(response.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [course_uuid]);

  const clickHandler =() =>
  {
              navigate("/courses")
  }

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  if (!courseDetails) {
    return <p></p>;
  }

const addToCartHandler =async () =>
{
  

  try { 
    const cartItem = {
      author: courseDetails.author.name, 
      title: courseDetails.title,
      price: courseDetails.price,
    };
  
  
  const response = await axios.post('https://courses-eduverse.onrender.com/courses/cart/', cartItem);
  
  if (response.status === 200) {
    toast.success("Added to cart succesfully");
  } else {
    toast.error("Failed to add ");
    console.error('Error is', response.data);
  }
} 
  
  catch (error) {
    toast.error("Failed to add ");
    console.error('Error adding course to cart:', error);
  }
}


  return (
   
     <div className='main-container grid-container'>
     <div className='sidebar'>  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/></div>
     <div className='right-side' >
            <div className='header'> <Header OpenSidebar={OpenSidebar}/></div>
            <div className='content'>
            <div className="course-detail-page flex flex-col">
    
      <div>
        <div className='course-heading '>  <h2  className='heading text-2xl text-[#bb3939]'>Course Detail</h2></div>
        <div>
        <button onClick={clickHandler} className='mb-5 mt-2 border-2 border-solid border-black px-3 w-36 font-semibold text-[#000] rounded-xl bg-white'>Back
                </button>
        </div>
      </div>
    <div className='flex justify-evenly'>
    <div className='detail-left w-1/2  flex flex-col j'> 
    <div className=''><img  className="h-3/4 w-96 rounded-md border-2 border-solid border-[#1e9acb]" src={sideimg}></img></div>
    <div className=''><p className='text-black font-semibold text-xl '>{courseDetails.description}</p></div></div>
    
     
    <div className='detail-right bg-white  flex flex-col justify-evenly border-2 border-solid border-black w-96 h-5/6 rounded-xl'>

      <div className=' mx-auto rounded-md border-2 border-solid  border-black  w-44 '><img src={courseDetails.image_url} alt={courseDetails.title} /></div>
      <div className=' text-[#1c582f] font-semibold mx-2'> <h3>{courseDetails.title}</h3></div>
      <div className=' text-black font-semibold mx-2 '>   <p>Author: {courseDetails.author.name}</p></div>

      <div className=' text-black font-semibold mx-2'><p>Price: ${courseDetails.price}</p></div>

      <div className='mx-auto '><button onClick={addToCartHandler} className='bg-gray-800 w-60 rounded-lg h-10'>Add to Cart</button></div>
    
    </div>
    
    </div>
   
      
    
    </div>
            </div>

     </div>
   </div>
  );
};

export default CourseDetailPage;
