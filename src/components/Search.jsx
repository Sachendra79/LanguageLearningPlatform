import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Course from "../pages/Course"


const Search = ({ match }) => {
  const searchTerm = match.params.term;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    
    axios.get(`https://courses-eduverse.onrender.com/courses/search/${searchTerm}`)
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, [searchTerm]);

  return (
    <div className="search-page">
      <h2>Search Results for: {searchTerm}</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <Course key={course.uuid} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Search;
