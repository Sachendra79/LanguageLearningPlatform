import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Course from "../pages/Course"

const Category = ({ match }) => {
  const sector_uuid = match.params.sector_uuid;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses for a specific category from your backend API
    axios.get(`https://courses-eduverse.onrender.com/courses/${sector_uuid}`)
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, [sector_uuid]);

  return (
    <div className="category-page">
      <h2>Category: {sector_uuid}</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <Course key={course.uuid} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Category;
