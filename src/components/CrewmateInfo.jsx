import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../utils/supabaseConfig';

const CrewmateInfo = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmateInfo = async () => {
      try {
        const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single();
        if (error) {
          throw error;
        }
        setCrewmate(data);
      } catch (error) {
        console.error('Error fetching crewmate info:', error.message);
      }
    };

    fetchCrewmateInfo();
  }, [id]);

  if (!crewmate) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Crewmate Information</h2>
      <p>Name: {crewmate.name}</p>
      <p>Attributes: {crewmate.attributes}</p>
      {/* Render additional crewmate information as needed */}
    </div>
  );
};

export default CrewmateInfo;
