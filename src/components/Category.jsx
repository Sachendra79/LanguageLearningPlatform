
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Sidebar from './Sidebar';
import Header from './Header';
import ReactLoading from 'react-loading';
import courseimage from "../assets/course-image.jpg"

const Category = () => {
  const { sector_uuid } = useParams();
  const [sectors, setSectors] = useState([]);
  const history = createBrowserHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSectorsByCategory = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`
        https://courses-eduverse.onrender.com/courses/${sector_uuid}`);
        setSectors(response.data.data || []);
        console.log("sachin");
        console.log(response)
        
      } catch (error) {
        console.error('Error fetching courses by category:', error);
      }
      setLoading(false)
    };

    fetchSectorsByCategory();
  }, [sector_uuid]);
  

  const handleCategoryClick = (selectedSectorUuid) => {
    history.push(`/courses/${selectedSectorUuid}`);
  };
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const navigate =useNavigate();

 const clickHandler =() =>
 {
             navigate("/courses")
 }

  return (

<div className='main-container grid-container'>
      <div className='sidebar'>  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/></div>
      <div className='right-side' >
             <div className='header'> <Header OpenSidebar={OpenSidebar}/></div>
             <div className='content'>
           
    <div className="category-page" >
                <button onClick={clickHandler} className='mb-5 mt-2 border-2 border-solid border-black px-3 w-36 font-semibold text-[#000] rounded-xl bg-white'>Back
                </button>
      <div className='featured-courses gap-5'>

      {loading ? (
              <ReactLoading type='spin' color="blue" height={60} width={60} className='loader' />
            ) : ( 
  
      sectors.map(course => (

        <div key={course.course_uuid} className='courses'>
            <img  src={course.image_url} className='rounded-xl w-60 h-44' ></img>
          <h4 className='text-[#000] font-semibold' >Title: {course.title}</h4>
          <p className='course-author text-[#000]' >Author: {course.author.name}</p>

          <p className='course-price text-[#b33838]'>Price: {course.price}</p>
          <Link className='course-detail border-2 border-solid border-slate-800 p-1 bg-red-700 rounded-2xl'
                          to={`/courses/detail/${course.course_uuid}`}
                        >
                          View Details
                        </Link>
         </div>
      )) ) }

       </div>

    </div>
             </div>

      </div>
    </div>





  );
          

};

export default Category;

