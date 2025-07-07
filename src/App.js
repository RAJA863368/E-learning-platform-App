import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CourseCard from './components/CourseCard';
import Login from './components/Login';
import './App.css';

const courseList = [
  {
    title: "React for Beginners",
    description: "Learn the basics of React.js.",
    category: "Web Development",
    image: "https://via.placeholder.com/300x150?text=React+Course"
  },
  {
    title: "Python Programming",
    description: "Master Python from scratch.",
    category: "Programming",
    image: "https://via.placeholder.com/300x150?text=Python+Course"
  },
  {
    title: "UI/UX Design",
    description: "Learn modern design principles.",
    category: "Design",
    image: "https://via.placeholder.com/300x150?text=UI%2FUX+Course"
  }
];

const categories = ["All", "Web Development", "Programming", "Design"];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCourses = courseList.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="app">
      <Sidebar categories={categories} onSelect={setSelectedCategory} />

      <div className="main-content">
        <div className="header">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>

        <div className="courses-grid">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
