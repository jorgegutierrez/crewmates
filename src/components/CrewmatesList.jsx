import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../utils/supabaseConfig';
import '../styles/crewmateslist.css'; // Importa el archivo CSS de estilos desde la carpeta styles


const CrewmatesList = () => {
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
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create a Crewmate!</Link>
          </li>
          <li>
            <Link to="/gallery">Crewmate Gallery</Link>
          </li>
        </ul>
      </nav>
      <h2>List of Crewmates</h2>
      <ul>
        {crewmates.map((crewmate) => (
          <li key={crewmate.id}>
            <Link to={`/crewmate/${crewmate.id}`}>{crewmate.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrewmatesList;
