import React, { useState } from "react";
import supabase from '../utils/supabaseConfig'; // Importa el cliente de Supabase
import "../styles/createcrewmateform.css"; // Importa el archivo CSS de estilos

const CreateCrewmateForm = () => {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Enviar los datos del nuevo tripulante a Supabase
    try {
      const { data, error } = await supabase.from('crewmates').insert([{ name, speed, color }]);
      if (error) {
        throw error;
      }
      console.log('New crewmate added successfully:', data);
      // Limpiar los campos del formulario después de agregar el tripulante
      setName('');
      setSpeed('');
      setColor('');
    } catch (error) {
      console.error('Error adding new crewmate:', error.message);
    }
  };

  return (
    <div className="create-crewmate-form">
      <h2>Create a New Crewmate</h2>
      <img
        className="crewmate-image"
        src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png"
        alt="Crewmate"
      />
      <form className="mini-container" onSubmit={handleSubmit}>
        <div className="card">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="card">
          <label htmlFor="speed">Speed (mph):</label>
          <input
            type="text"
            id="speed"
            value={speed}
            onChange={handleSpeedChange}
          />
        </div>
        <div className="card">
          <label>Color:</label>
          <ul>
            <li>
              <input
                type="radio"
                id="red"
                name="color"
                value="red"
                checked={color === "red"}
                onChange={handleColorChange}
              />
              <label htmlFor="red">Red</label>
            </li>
            <li>
              <input
                type="radio"
                id="green"
                name="color"
                value="green"
                checked={color === "green"}
                onChange={handleColorChange}
              />
              <label htmlFor="green">Green</label>
            </li>
            <li>
              <input
                type="radio"
                id="blue"
                name="color"
                value="blue"
                checked={color === "blue"}
                onChange={handleColorChange}
              />
              <label htmlFor="blue">Blue</label>
            </li>
            <li>
              <input
                type="radio"
                id="yellow"
                name="color"
                value="yellow"
                checked={color === "yellow"}
                onChange={handleColorChange}
              />
              <label htmlFor="yellow">Yellow</label>
            </li>
            <li>
              <input
                type="radio"
                id="purple"
                name="color"
                value="purple"
                checked={color === "purple"}
                onChange={handleColorChange}
              />
              <label htmlFor="purple">Purple</label>
            </li>
            <li>
              <input
                type="radio"
                id="orange"
                name="color"
                value="orange"
                checked={color === "orange"}
                onChange={handleColorChange}
              />
              <label htmlFor="orange">Orange</label>
            </li>
            {/* Agrega más colores según sea necesario */}
          </ul>
        </div>
        <button type="submit">Create Crewmate</button>
      </form>
    </div>
  );
};

export default CreateCrewmateForm;
