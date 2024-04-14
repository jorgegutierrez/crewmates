import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CrewmatesList from "./components/CrewmatesList";
import CreateCrewmateForm from "./components/CreateCrewmateForm";
import CrewmateInfo from "./components/CrewmateInfo";
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import UpdateCrewmatePage from './components/UpdateCrewmatePage';

const App = () => {
  return (
    <Router>
      <Sidebar /> {/* Agrega el menú lateral */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Ruta para la página de inicio */}
        <Route path="/create" element={<CreateCrewmateForm />} />{" "} {/* Ruta para el formulario de creación */}
        <Route path="/crewmate/:id" element={<CrewmateInfo />} /> {/* Ruta para la información del crewmate */}
        <Route path="/gallery" element={<GalleryPage />} /> {/* Ruta para la página de la galería */}
        <Route path="/update/:id" element={<UpdateCrewmatePage />} /> {/* Ruta para la actualización del crewmate */}
      </Routes>
    </Router>
  );
};

export default App;
