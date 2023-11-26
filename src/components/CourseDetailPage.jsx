import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Course from "../pages/Course"


const CourseDetailPage = () => {
  const { category_uuid } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch detailed information about a specific category from your backend API
    axios.get(`https://courses-eduverse.onrender.com/courses/category/detail/${category_uuid}`)
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching category details:', error));
  }, [category_uuid]);

  return (
    <div className="category-detail-page">
      <h2>Category Detail</h2>
      <p>Category UUID: {category_uuid}</p>
      <div className="courses-list">
        {courses.map((course) => (
          <Course key={course.uuid} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseDetailPage;
