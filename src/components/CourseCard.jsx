import React from 'react';
import './CourseCard.css';

const gfgLinks = {
  "React for Beginners": "https://www.geeksforgeeks.org/reactjs/",
  "Python Programming": "https://www.geeksforgeeks.org/python/",
  "UI/UX Design": "https://www.geeksforgeeks.org/web-design/",
};

export default function CourseCard({ course }) {
  const openCourse = () => {
    const link = gfgLinks[course.title];
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("Link not found for this course.");
    }
  };

  return (
    <div className="card">
      <img src={course.image} alt={course.title} />
      <div className="card-body">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <button onClick={openCourse}>View Course</button>
      </div>
    </div>
  );
}
