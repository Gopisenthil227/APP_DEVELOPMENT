// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './CourseDetails.css'; // Import CSS for styling (optional)

// const CourseDetails = () => {
//     const { id } = useParams(); // Get the course ID from the URL

//     // Example data - replace with actual data fetching or state
//     const courses = [
//         {
//             id: '1',
//             title: 'Course 1',
//             image: 'https://via.placeholder.com/300x150',
//             description: 'This is a brief description of Course 1.',
//             modules: ['Module 1', 'Module 2', 'Module 3'],
//             assignments: ['Assignment 1', 'Assignment 2'],
//             progress: '50%'
//         },
//         {
//             id: '2',
//             title: 'Course 2',
//             image: 'https://via.placeholder.com/300x150',
//             description: 'This is a brief description of Course 2.',
//             modules: ['Module 1', 'Module 2'],
//             assignments: ['Assignment 1'],
//             progress: '20%'
//         },
//         // Add more courses here
//     ];

//     // Find the course with the matching ID
//     const course = courses.find(course => course.id === id);

//     if (!course) {
//         return <div>Course not found</div>;
//     }

//     return (
//         <div className="course-details">
//             <img src={course.image} alt={course.title} className="course-details-image" />
//             <h1 className="course-details-title">{course.title}</h1>
//             <p className="course-details-description">{course.description}</p>
//             <h2>Modules</h2>
//             <ul>
//                 {course.modules.map((module, index) => (
//                     <li key={index}>{module}</li>
//                 ))}
//             </ul>
//             <h2>Assignments</h2>
//             <ul>
//                 {course.assignments.map((assignment, index) => (
//                     <li key={index}>{assignment}</li>
//                 ))}
//             </ul>
//             <h2>Progress</h2>
//             <p>{course.progress}</p>
//         </div>
//     );
// };

// export default CourseDetails;
