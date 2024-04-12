import React, { useState } from 'react';

const CreateCrewmateForm = () => {
  const [name, setName] = useState('');
  const [attributes, setAttributes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the data of the new crewmate to Supabase or perform any other necessary action
    console.log('Name:', name);
    console.log('Attributes:', attributes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Crewmate Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Crewmate Attributes:
        <select value={attributes} onChange={(e) => setAttributes(e.target.value)}>
          <option value="">Select an attribute</option>
          <option value="Attribute1">Attribute1</option>
          <option value="Attribute2">Attribute2</option>
          <option value="Attribute3">Attribute3</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <button type="submit">Add Crewmate</button>
    </form>
  );
};

export default CreateCrewmateForm;
