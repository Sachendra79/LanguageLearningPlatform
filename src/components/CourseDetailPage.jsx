
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CourseDetailPage = () => {
  const { course_uuid } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);

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

  if (!courseDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="course-detail-page">
      <h2>Course Detail Page</h2>
      <p>Course ID: {course_uuid}</p>

      <h3>{courseDetails.title}</h3>
      <p>Author: {courseDetails.author.name}</p>
      <p>Price: ${courseDetails.price}</p>
      <img src={courseDetails.image_url} alt={courseDetails.title} />
      {/* Add other course details rendering */}
    </div>
  );
};

export default CourseDetailPage;
