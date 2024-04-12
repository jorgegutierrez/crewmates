import React from 'react';
import supabase from './supabaseConfig';

const DeleteCrewmateButton = ({ crewmate, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${crewmate.name}?`)) {
      try {
        const { error } = await supabase
          .from('crewmates')
          .delete()
          .eq('id', crewmate.id);
        if (error) {
          throw error;
        }
        console.log('Crewmate deleted successfully:', crewmate.name);
        onDelete(crewmate.id);
      } catch (error) {
        console.error('Error deleting crewmate:', error.message);
      }
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteCrewmateButton;
