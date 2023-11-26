import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useState,useEffect } from 'react'
import Home from './bekar'
import axios from 'axios';


import { Link } from 'react-router-dom';
const Course = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
 
 
  // useEffect(() => {
  //   console.log("sachin")
  //   axios.get('https://courses-eduverse.onrender.com/courses/')
  //     .then(response => setCourses(response.data))
  //     .catch(error => console.error('Error fetching courses:', error));

    
  // }, []);

  // const handleSearch = () => {
  //   // Fetch courses based on the search term from your backend API
  //   axios.get(`https://courses-eduverse.onrender.com/courses/search/${searchTerm}`)
  //     .then(response => setCourses(response.data))
  //     .catch(error => console.error('Error fetching courses:', error));
  // };

  // const handleCategoryFilter = (sector_uuid) => {
  //   // Fetch courses based on the selected category from your backend API
  //   axios.get(`https://courses-eduverse.onrender.com/courses/${sector_uuid}`)
  //     .then(response => setCourses(response.data))
  //     .catch(error => console.error('Error fetching courses:', error));
  //   setSelectedCategory(sector_uuid);
  // };

  // const clearFilters = () => {
  //   // Fetch all courses when clearing filters
  //   axios.get('https://courses-eduverse.onrender.com/courses/')
  //     .then(response => setCourses(response.data))
  //     .catch(error => console.error('Error fetching courses:', error));
  //   setSelectedCategory(null);
  //   setSearchTerm('');
  // }; 

  useEffect(()=>{
    fetchCourses();
  },[]);
  async function fetchCourses() {
    let url = "https://courses-eduverse.onrender.com/courses/";
    try {
      console.log("Fetching courses...");
      const result = await fetch(url);
      const data = await result.json();
      console.log("Courses data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      return null;
    }
  }
  
  // Usage
  fetchCourses().then(coursesData => {
    if (coursesData) {
      // Do something with the coursesData, e.g., set it in state
      setCourses(coursesData);
    } else {
      // Handle the case where fetching failed
    }
  });
  
 
  return (
    <div className='main-container grid-container'>
      <div className='sidebar'>  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/></div>
      <div className='right-side' >
             <div className='header'> <Header OpenSidebar={OpenSidebar}/></div>
             {/* <div className='content'>
             <div className="courses-page flex flex-col gap-28">
      <h2>Courses</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by title "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <div className="category-filters">
          <p>Filter by Category:</p>
          {categories.map(category => (
            <button
              key={category.sector_uuid}
              onClick={() => handleCategoryFilter(category.sector_uuid)}
            >
              {category.sector_name}
            </button>
          ))}
          <button onClick={clearFilters}>Clear Filters</button>
        </div>
      </div>
      <div className="courses-list">
        {courses.map(course => (
          <Course key={course.featured_course[0].course_uuid} {...course.featured_course[0]} />
        ))}
      </div>
      <div className="navigation-bar">
        <Link to="/courses">All Courses</Link>
        {categories.map(category => (
          <Link key={category.sector_uuid} to={`/courses/category/${category.sector_uuid}`}>
            {category.sector_name}
          </Link>
        ))}
      </div>
    </div>

             </div> */}
      <div>{courses}</div>
      </div>
    </div>
  )
}

export default Course
