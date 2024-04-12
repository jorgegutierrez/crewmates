import React, { useState, useEffect } from 'react';
import supabase from '../utils/supabaseConfig';

const CrewmatesList = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    // Función para obtener la lista de compañeros de tripulación desde Supabase
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

    // Llamar a la función para obtener la lista de compañeros de tripulación al cargar el componente
    fetchCrewmates();
  }, []);

  return (
    <div>
      <h2>List of Crewmates</h2>
      <ul>
        {crewmates.map((crewmate) => (
          <li key={crewmate.id}>
            <strong>Name:</strong> {crewmate.name} | <strong>Attributes:</strong> {crewmate.attributes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrewmatesList;
