
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import courseimage from '../assets/course-image.jpg';
import { useNavigate } from 'react-router-dom';

const Course = () => {
  const [sectors, setSectors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { sector_uuid } = useParams();
  const [loading, setLoading] = useState(false);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [courses, setCourses] = useState([]);
 

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    const fetchSectors = async () => {
      setLoading(true);
      try {
        const response = sector_uuid
          ? await axios.get(`https://courses-eduverse.onrender.com/courses/${sector_uuid}`)
          : await axios.get('https://courses-eduverse.onrender.com/courses/');

        setSectors(response.data);
      } catch (error) {
        console.error('Error fetching sectors:', error);
      }
      setLoading(false);
    };

    fetchSectors();
  }, [sector_uuid]);

  const handleSearch = async () => {
    setLoading(true);
    try {
     
      const response = await axios.get(`https://courses-eduverse.onrender.com/courses/search/${searchTerm}`);
      
     
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
    setLoading(false);
  };

  const handleCategoryFilter = async (selectedSectorUuid) => {
    try {
      const response = await axios.get(`https://courses-eduverse.onrender.com/courses/${selectedSectorUuid}`);
      setSectors(response.data);
    } catch (error) {
      console.error('Error fetching courses by category:', error);
    }
  };
  const navigate =useNavigate();

  const clickHandler =() =>
  {
              navigate("/courses")
  }
 const allHandler =() =>
 {
  setSectors([]);
 
 }


  return (
    <div className='main-container grid-container'>
      <div className='sidebar'>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>
      <div className='right-side'>
        <div className='header'>
          <Header OpenSidebar={OpenSidebar} />
        </div>
        <div className='content'>
          <div className="course-page flex flex-col gap-5">
            <div className='flex flex-wrap'>
         <h1 className='course-heading ml-[2vw] text-[#e42f2f] text-4xl font-bold'>Courses</h1>
       
<div className='m-auto text-3xl'>
    <input
      type="text"
      // placeholder="Search by title"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className='rounded-xl boder-solid border-black border-2 text-[#8e2d2d] '
    />
    <button onClick={handleSearch} className='search-button bg-[#594ed3] text-[#000] ml-3 rounded-xl text-3xl pt-2'>
      <p className='search-text'>Search</p>
    </button>
    </div>
   
    <div className='featured-courses mt-10'>
   
{loading ? (
        <ReactLoading type='spin' color="blue" height={60} width={60} className='loader' />
      ) : ( 

courses.map(course => (
           
  <div key={course.id} className='courses'>
        
      <img src={courseimage} className='rounded-xl' ></img>
    <h4 className='text-[#000] font-semibold' > {course.title}</h4>
    <p className='course-author text-[#000]' > {course.author.name}</p>

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

            <Link to="/courses" className='text-xl text-[#000] font-semibold'>Category Present</Link>

            <div className="category-filters flex flex-wrap gap-5 text-[#000] font-semibold ">
  <Link to="/courses" onClick={
   
     allHandler
    } className='bg-[#fff] border-black border-solid border-2 px-2 rounded-xl'> All</Link>
  {sectors.map((sector) => (
    <Link
      key={sector.sector_uuid}
      to={`/courses/${sector.sector_uuid}`} 
      onClick={() => handleCategoryFilter(sector.sector_uuid)}
      className='border-black border-solid border-2 px-3 bg-[#fff] rounded-xl'
    >
      {sector.sector_name}
    </Link>
  ))}
</div>
      {loading ? (
              <ReactLoading type='spin' color="blue" height={60} width={60} className='loader' />
            ) : (
              sectors.map((sector) => (
                <div key={sector.sector_uuid} className="sector">
                  <div><h3 className='text-[#7c3893] text-2xl font-bold mb-5 '>{sector.sector_name}</h3></div>
                  <div className="featured-courses ">
                    {sector.featured_course.map((course) => (
                      <div key={course.course_uuid} className="courses">
                        <img className='rounded-xl w-60 h-44' src={course.image_url} alt={course.title}></img>
                        <h4 className='text-[#000] font-semibold w-60'>{course.title}</h4>
                        <p className='course-author text-[#000]'>Author: {course.author.name}</p>
                        <p className='course-price text-[#b33838]'>Price: ${course.price}</p>

                        <Link
                          className='course-detail border-2 border-solid border-slate-800 p-1 bg-red-700 rounded-2xl'
                          to={`/courses/detail/${course.course_uuid}`}
                        >
                          View Details
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
