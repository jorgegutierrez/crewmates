import React, { useState } from 'react';
import supabase from './supabaseConfig';

const UpdateCrewmateForm = ({ crewmate }) => {
  const [name, setName] = useState(crewmate.name);
  const [attributes, setAttributes] = useState(crewmate.attributes);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('crewmates')
        .update({ name, attributes })
        .eq('id', crewmate.id);
      if (error) {
        throw error;
      }
      console.log('Crewmate updated successfully:', data);
      // You can handle any UI updates or notifications here
    } catch (error) {
      console.error('Error updating crewmate:', error.message);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Attributes:
        <input type="text" value={attributes} onChange={(e) => setAttributes(e.target.value)} />
      </label>
      <button type="submit">Update Crewmate</button>
    </form>
  );
};

export default UpdateCrewmateForm;
