import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para redireccionar
import supabase from '../utils/supabaseConfig';

import image from '../images/crewmateDefault.png';
import '../styles/gallerypage.css';

const GalleryPage = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      try {
        const { data, error } = await supabase.from('crewmates').select('*');
        if (error) {
          throw error;
        }
        setCrewmates(data);
      } catch (error) {
        console.error('Error fetching crewmates:', error.message);
      }
    };

    fetchCrewmates();
  }, []);

  return (
    <div className="page">
      <h2>Your Crewmate Gallery!</h2>
      <div className="gallery">
        {crewmates.map((crewmate) => (
          <div key={crewmate.id} className="crewmate">
            <img className="image" src={image} alt={crewmate.name} />
            <p>
              <strong>Name:</strong> {crewmate.name}
            </p>
            <p>
              <strong>Speed:</strong> {crewmate.speed} mph
            </p>
            <p>
              <strong>Color:</strong> {crewmate.color}
            </p>
            {/* Agrega un enlace que redirige a la página de actualización con el ID del crewmate */}
            <Link to={`/update/${crewmate.id}`} className="edit-button">
              Edit Crewmate
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
