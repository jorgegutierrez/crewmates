import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../utils/supabaseConfig";

import "../styles/updatecrewmatepage.css";

const UpdateCrewmatePage = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState({});
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCrewmate = async () => {
      try {
        const { data, error } = await supabase
          .from("crewmates")
          .select("*")
          .eq("id", id)
          .single();
        if (error) {
          throw error;
        }
        setCrewmate(data);
        setName(data.name);
        setSpeed(data.speed);
        setColor(data.color);
      } catch (error) {
        console.error("Error fetching crewmate:", error.message);
      }
    };

    fetchCrewmate();
  }, [id]);

  const handleDelete = async () => {
    try {
      const { error } = await supabase.from("crewmates").delete().eq("id", id);
      if (error) {
        throw error;
      }
      // Redirigir a la página de la galería o a otra página después de eliminar
      console.log("Crewmate deleted successfully!");
      navigate.push("/gallery");
    } catch (error) {
      console.error("Error deleting crewmate:", error.message);
    }
  };

  const handleUpdate = async () => {
    try {
      const { error } = await supabase
        .from("crewmates")
        .update({ name, speed, color })
        .eq("id", id);
      if (error) {
        throw error;
      }
      // Redirigir a la página de la galería o a otra página después de actualizar
      console.log("Crewmate updated successfully!");
      navigate.push("/gallery");
    } catch (error) {
      console.error("Error updating crewmate:", error.message);
    }
  };

  return (
    <div className="container">
      <h2>Update Your Crewmate :)</h2>
      <img
        className="crewmate-image"
        src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png"
        alt="Crewmate"
      />
      <p>Current Crewmate Info:</p>
      <p>Name: {crewmate.name}</p>
      <p>Speed: {crewmate.speed}</p>
      <p>Color: {crewmate.color}</p>
      <p>Name:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Speed (mph):</p>
      <input
        type="text"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      />
      <p>Color:</p>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Purple">Purple</option>
        <option value="Yellow">Yellow</option>
        <option value="Orange">Orange</option>
        <option value="Pink">Pink</option>
        <option value="Rainbow">Rainbow</option>
      </select>
      <br />
      <button onClick={handleDelete}>Delete Crewmate</button>
      <button onClick={handleUpdate}>Update Crewmate</button>
    </div>
  );
};

export default UpdateCrewmatePage;
