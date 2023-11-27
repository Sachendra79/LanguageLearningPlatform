
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';

// import { createBrowserHistory } from 'history';


// const Category = () => {
//   const { sector_uuid } = useParams();
//   const [sectors, setSectors] = useState([]);

//   const history = createBrowserHistory();

  
//   useEffect(() => {
//     const fetchSectorsByCategory = async () => {
//       try {
//         const response = await axios.get(`https://courses-eduverse.onrender.com/courses/${sector_uuid}`);
//         setSectors(response.data.data || []); 
//         console.log("sachin")
//       } catch (error) {
//         console.error('Error fetching courses by category:', error);
//       }
//     };

//     fetchSectorsByCategory();
//   }, [sector_uuid]);

//   const handleCategoryClick = (selectedSectorUuid) => {
//     history.push(`/courses/${selectedSectorUuid}`);
//   };


//   return (
//     <div className="category-page">
//       <h2>Category Page</h2>
     
// {sectors.map((sector) => (
//   <div key={sector.sector_uuid} className="sector">
//     <h3>{sector.sector_name}</h3>

//     <div className="featured-courses">
//       {Array.isArray(sector.featured_course) && sector.featured_course.map((course) => (
//         <div key={course.course_uuid} className="course">
//           <h4>{course.title}</h4>
//           <p>Author: {course.author.name}</p>
//           <p>Price: ${course.price}</p>

//           {/* <Link key={course.course_uuid} to={`/courses/detail/${course.course_uuid}`}>
//             View Details
//           </Link> */}
//         </div>  
//       ))}  
//     </div>


    
//   </div>
// ))}

//     </div>
//   );
// };

// export default Category;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const Category = () => {
  const { sector_uuid } = useParams();
  const [sectors, setSectors] = useState([]);
  const history = createBrowserHistory();

  useEffect(() => {
    const fetchSectorsByCategory = async () => {
      try {
        const response = await axios.get(`
        https://courses-eduverse.onrender.com/courses/${sector_uuid}`);
        setSectors(response.data.sector_uuid || []);
        console.log("sachin");
        console.log(response)
        
      } catch (error) {
        console.error('Error fetching courses by category:', error);
      }
    };

    fetchSectorsByCategory();
  }, [sector_uuid]);
  

  const handleCategoryClick = (selectedSectorUuid) => {
    history.push(`/courses/${selectedSectorUuid}`);
  };

  return (
    <div className="category-page" >
      <h2>Category Page</h2>

             
      {sectors.map((sector) => (
        <div key={sector.sector_uuid} className="sector">
        <h3>{sector.sector_name}</h3>
      
        <div className="featured-courses" key={sector.sector_uuid}>
          {Array.isArray(sector.featured_course) && sector.featured_course.map((course) => (
            <div key={course.course_uuid} className="course">
              <h4>{course.title}</h4>
              <p>Author: {course.author.name}</p>
              <p>Price: ${course.price}</p>
            </div>
          ))}
        </div>
      </div>
      
      ))}
    </div>
  );
          

};

export default Category;

