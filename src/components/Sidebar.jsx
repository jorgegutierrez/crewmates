import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globalStyles.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create a Crewmate!</Link></li>
        <li><Link to="/gallery">Crewmate Gallery</Link></li>
        <p className='author'>© Jorge Gutierrez</p>
      </ul>
    </div>
  );
};

export default Sidebar;
