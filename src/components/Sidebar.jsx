import React from 'react';
import './Sidebar.css';

export default function Sidebar({ categories, onSelect }) {
  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((cat, index) => (
          <li key={index} onClick={() => onSelect(cat)}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}
