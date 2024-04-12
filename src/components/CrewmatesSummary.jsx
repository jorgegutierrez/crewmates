import React, { useState, useEffect } from 'react';
import supabase from './supabaseConfig'; // Import the Supabase client

const CrewmatesSummary = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    // Fetch crewmates' data from Supabase
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
      <h2>Crewmates Summary</h2>
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

export default CrewmatesSummary;
