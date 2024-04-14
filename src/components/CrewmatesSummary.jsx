import React, { useState, useEffect } from 'react';
import supabase from './supabaseConfig'; // Importa el cliente de Supabase

const CrewmatesSummary = () => {
  const [crewmates, setCrewmates] = useState([]);
  const [error, setError] = useState('');

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
        setError('Error fetching crewmates. Please try again.');
      }
    };

    // Llamar a la función para obtener la lista de compañeros de tripulación al cargar el componente
    fetchCrewmates();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (crewmates.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Crewmates Summary</h2>
      <ul>
        {crewmates.map((crewmate) => (
          <li key={crewmate.id}>
            <strong>Name:</strong> {crewmate.name} | <strong>Attributes:</strong> {crewmate.attributes}
            {/* Agrega enlaces o detalles adicionales aquí si es necesario */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrewmatesSummary;
